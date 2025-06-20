import { JWK, createRemoteJWKSet, FlattenedJWSInput, GetKeyFunction } from 'jose';
import { JWTError } from '../errors/auth-errors.js';
import { JWTErrorType } from '../types/jwt-types.js';

/**
 * Configuration for JWKS (JSON Web Key Set) management
 */
export interface JWKSConfig {
  /** JWKS endpoint URL */
  jwksUri: string;
  /** Cache TTL in milliseconds (default: 5 minutes) */
  cacheTtl?: number;
  /** Request timeout in milliseconds (default: 5 seconds) */
  timeout?: number;
  /** Maximum number of retries for failed requests (default: 3) */
  maxRetries?: number;
  /** Cool down period between retries in milliseconds (default: 1 second) */
  retryDelay?: number;
}

/**
 * JWKS cache entry
 */
interface JWKSCacheEntry {
  keySet: GetKeyFunction<JWSHeaderParameters, FlattenedJWSInput>;
  expiresAt: number;
}

/**
 * JWS Header Parameters interface
 */
interface JWSHeaderParameters {
  alg?: string;
  kid?: string;
  typ?: string;
  [key: string]: unknown;
}

/**
 * JWKS Manager for handling JSON Web Key Sets
 * 
 * Provides functionality to:
 * - Fetch and cache JWKS from remote endpoints
 * - Retrieve specific keys for JWT verification
 * - Handle key rotation and caching
 * - Manage retries and error handling
 */
export class JWKSManager {
  private cache = new Map<string, JWKSCacheEntry>();
  private readonly config: Required<JWKSConfig>;

  constructor(config: JWKSConfig) {
    this.config = {
      cacheTtl: 5 * 60 * 1000, // 5 minutes
      timeout: 5000, // 5 seconds
      maxRetries: 3,
      retryDelay: 1000, // 1 second
      ...config
    };
  }

  /**
   * Get a key function for JWT verification from JWKS endpoint
   * 
   * @param jwksUri - The JWKS endpoint URL
   * @returns Promise resolving to a key function for jose library
   * @throws JWTError if JWKS cannot be fetched or is invalid
   */
  async getKeyFunction(jwksUri?: string): Promise<GetKeyFunction<JWSHeaderParameters, FlattenedJWSInput>> {
    const uri = jwksUri || this.config.jwksUri;
    
    if (!uri) {
      throw new JWTError(
        JWTErrorType.INVALID_TOKEN,
        'JWKS URI is required'
      );
    }

    // Check cache first
    const cached = this.cache.get(uri);
    if (cached && cached.expiresAt > Date.now()) {
      return cached.keySet;
    }

    try {
      // Create remote JWK set with configuration
      const keySet = createRemoteJWKSet(new URL(uri), {
        timeoutDuration: this.config.timeout,
        cooldownDuration: this.config.retryDelay,
        cacheMaxAge: this.config.cacheTtl
      });

      // Cache the key set
      this.cache.set(uri, {
        keySet,
        expiresAt: Date.now() + this.config.cacheTtl
      });

      return keySet;
    } catch (error) {
      throw new JWTError(
        JWTErrorType.JWKS_ERROR,
        `Failed to fetch JWKS from ${uri}: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  /**
   * Get a specific key by key ID from JWKS
   * 
   * @param kid - Key ID to retrieve
   * @param jwksUri - Optional JWKS endpoint URL
   * @returns Promise resolving to the JWK or null if not found
   * @throws JWTError if JWKS cannot be fetched
   */
  async getKey(kid: string, jwksUri?: string): Promise<JWK | null> {
    try {
      const keyFunction = await this.getKeyFunction(jwksUri);
      
      // Create a mock JWS header to get the key
      const mockHeader: JWSHeaderParameters = { kid, alg: 'RS256' };
      const mockInput: FlattenedJWSInput = {
        protected: Buffer.from(JSON.stringify(mockHeader)).toString('base64url'),
        payload: '',
        signature: ''
      };

      const key = await keyFunction(mockHeader, mockInput);
      return key as unknown as JWK;
    } catch (error) {
      if (error instanceof JWTError) {
        throw error;
      }
      
      // Key not found is not an error, return null
      if (error instanceof Error && error.message.includes('Unable to find a key')) {
        return null;
      }

      throw new JWTError(
        JWTErrorType.KEY_NOT_FOUND,
        `Failed to get key ${kid}: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  /**
   * Refresh the JWKS cache for a specific URI
   * 
   * @param jwksUri - Optional JWKS endpoint URL
   * @returns Promise that resolves when cache is refreshed
   */
  async refreshCache(jwksUri?: string): Promise<void> {
    const uri = jwksUri || this.config.jwksUri;
    
    if (!uri) {
      throw new JWTError(
        JWTErrorType.INVALID_TOKEN,
        'JWKS URI is required'
      );
    }

    // Remove from cache to force refresh
    this.cache.delete(uri);
    
    // Fetch fresh JWKS
    await this.getKeyFunction(uri);
  }

  /**
   * Clear all cached JWKS entries
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Get cache statistics
   * 
   * @returns Object containing cache statistics
   */
  getCacheStats(): { size: number; entries: Array<{ uri: string; expiresAt: number; expired: boolean }> } {
    const now = Date.now();
    const entries = Array.from(this.cache.entries()).map(([uri, entry]) => ({
      uri,
      expiresAt: entry.expiresAt,
      expired: entry.expiresAt <= now
    }));

    return {
      size: this.cache.size,
      entries
    };
  }

  /**
   * Clean up expired cache entries
   */
  cleanupExpiredEntries(): void {
    const now = Date.now();
    for (const [uri, entry] of this.cache.entries()) {
      if (entry.expiresAt <= now) {
        this.cache.delete(uri);
      }
    }
  }

  /**
   * Validate JWKS configuration
   * 
   * @param config - JWKS configuration to validate
   * @throws JWTError if configuration is invalid
   */
  static validateConfig(config: JWKSConfig): void {
    if (!config.jwksUri) {
      throw new JWTError(
        JWTErrorType.INVALID_TOKEN,
        'JWKS URI is required'
      );
    }

    try {
      new URL(config.jwksUri);
    } catch {
      throw new JWTError(
        JWTErrorType.INVALID_TOKEN,
        'JWKS URI must be a valid URL'
      );
    }

    if (config.cacheTtl !== undefined && config.cacheTtl < 0) {
      throw new JWTError(
        JWTErrorType.INVALID_TOKEN,
        'Cache TTL must be non-negative'
      );
    }

    if (config.timeout !== undefined && config.timeout <= 0) {
      throw new JWTError(
        JWTErrorType.INVALID_TOKEN,
        'Timeout must be positive'
      );
    }

    if (config.maxRetries !== undefined && config.maxRetries < 0) {
      throw new JWTError(
        JWTErrorType.INVALID_TOKEN,
        'Max retries must be non-negative'
      );
    }

    if (config.retryDelay !== undefined && config.retryDelay < 0) {
      throw new JWTError(
        JWTErrorType.INVALID_TOKEN,
        'Retry delay must be non-negative'
      );
    }
  }
}

/**
 * Create a new JWKS manager instance
 * 
 * @param config - JWKS configuration
 * @returns New JWKSManager instance
 * @throws JWTError if configuration is invalid
 */
export function createJWKSManager(config: JWKSConfig): JWKSManager {
  JWKSManager.validateConfig(config);
  return new JWKSManager(config);
}

/**
 * Default JWKS manager instance for common use cases
 */
export const defaultJWKSManager = {
  /**
   * Create a JWKS manager for a specific provider
   */
  forProvider: (jwksUri: string, options?: Partial<Omit<JWKSConfig, 'jwksUri'>>) =>
    createJWKSManager({ jwksUri, ...options }),

  /**
   * Create a JWKS manager for Auth0
   */
  forAuth0: (domain: string, options?: Partial<Omit<JWKSConfig, 'jwksUri'>>) =>
    createJWKSManager({ 
      jwksUri: `https://${domain}/.well-known/jwks.json`,
      ...options 
    }),

  /**
   * Create a JWKS manager for Google/Firebase
   */
  forGoogle: (options?: Partial<Omit<JWKSConfig, 'jwksUri'>>) =>
    createJWKSManager({ 
      jwksUri: 'https://www.googleapis.com/oauth2/v3/certs',
      ...options 
    }),

  /**
   * Create a JWKS manager for Microsoft Azure AD
   */
  forAzureAD: (tenantId: string, options?: Partial<Omit<JWKSConfig, 'jwksUri'>>) =>
    createJWKSManager({ 
      jwksUri: `https://login.microsoftonline.com/${tenantId}/discovery/v2.0/keys`,
      ...options 
    })
};