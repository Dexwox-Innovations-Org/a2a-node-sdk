import { AuthScheme, AuthConfig, OAuth2Config } from './types/auth-types.js';
import { BasicAuthScheme } from './schemes/basic-auth.js';
import { BearerAuthScheme } from './schemes/bearer-auth.js';
import { ApiKeyAuthScheme } from './schemes/api-key-auth.js';
import { OAuth2ClientCredentialsFlowImpl } from './schemes/oauth2/client-credentials.js';
import { OAuth2ImplicitFlowImpl } from './schemes/oauth2/implicit.js';
import { OAuth2PasswordFlowImpl } from './schemes/oauth2/password.js';
import { OAuth2AuthorizationCodeFlowImpl } from './schemes/oauth2/authorization-code.js';
import { JWTHandlerImpl } from './jwt/jwt-handler.js';
import { JWKSManager } from './jwt/jwks-manager.js';
import { JWTValidatorImpl } from './jwt/jwt-validator.js';
import { AuthenticationError } from './errors/auth-errors.js';

/**
 * Configuration for the authentication factory
 */
export interface AuthFactoryConfig {
  /** Default authentication scheme to use */
  defaultScheme?: string;
  /** JWT configuration */
  jwt?: {
    secret?: string;
    jwksUri?: string;
    issuer?: string;
    audience?: string | string[];
    clockTolerance?: number;
  };
  /** OAuth2 configurations by provider name */
  oauth2Providers?: Record<string, OAuth2Config>;
  /** Whether to enable authentication caching */
  enableCaching?: boolean;
  /** Cache TTL in milliseconds */
  cacheTtl?: number;
}

/**
 * Authentication factory for creating and managing authentication schemes
 * 
 * Provides a centralized way to:
 * - Create authentication scheme instances
 * - Manage OAuth2 providers
 * - Handle JWT validation and JWKS management
 * - Cache authentication results
 * - Validate authentication configurations
 */
export class AuthFactory {
  private schemes = new Map<string, AuthScheme>();
  private jwtHandler?: JWTHandlerImpl;
  private jwksManager?: JWKSManager;
  private jwtValidator?: JWTValidatorImpl;
  private config: AuthFactoryConfig;

  constructor(config: AuthFactoryConfig = {}) {
    this.config = {
      enableCaching: true,
      cacheTtl: 5 * 60 * 1000, // 5 minutes
      ...config
    };

    // Initialize JWT components if configured
    if (this.config.jwt) {
      this.initializeJWTComponents();
    }

    // Register default schemes only if no specific schemes are configured
    if (!this.config.oauth2Providers || Object.keys(this.config.oauth2Providers).length === 0) {
      this.registerDefaultSchemes();
    }

    // Register OAuth2 providers
    if (this.config.oauth2Providers) {
      this.registerOAuth2Providers();
    }
  }

  /**
   * Initialize JWT components (handler, validator, JWKS manager)
   */
  private initializeJWTComponents(): void {
    if (!this.config.jwt) return;

    // Initialize JWT handler if secret is provided
    if (this.config.jwt.secret) {
      this.jwtHandler = new JWTHandlerImpl(
        this.config.jwt.secret,
        'HS256',
        {
          issuer: this.config.jwt.issuer,
          audience: this.config.jwt.audience
        }
      );
    }

    // Initialize JWKS manager if JWKS URI is provided
    if (this.config.jwt.jwksUri) {
      this.jwksManager = new JWKSManager({
        jwksUri: this.config.jwt.jwksUri
      });
    }

    // Initialize JWT validator
    this.jwtValidator = new JWTValidatorImpl({
      secret: this.config.jwt.secret,
      jwksUri: this.config.jwt.jwksUri,
      issuer: this.config.jwt.issuer,
      audience: this.config.jwt.audience,
      clockTolerance: this.config.jwt.clockTolerance,
      enabled: true
    });
  }

  /**
   * Register default authentication schemes
   */
  private registerDefaultSchemes(): void {
    // Register basic authentication with placeholder config
    this.registerScheme('basic', new BasicAuthScheme({
      type: 'basic',
      username: 'placeholder',
      password: 'placeholder',
      enabled: false // Disabled by default
    }));
    
    // Register bearer token authentication with placeholder config
    this.registerScheme('bearer', new BearerAuthScheme({
      type: 'bearer',
      token: 'placeholder-token',
      tokenType: 'Bearer',
      enabled: false // Disabled by default
    }));
    
    // Register API key authentication with placeholder config
    this.registerScheme('apikey', new ApiKeyAuthScheme({
      type: 'apiKey',
      apiKey: 'placeholder-key',
      headerName: 'X-API-Key',
      enabled: false // Disabled by default
    }));
  }

  /**
   * Register OAuth2 providers from configuration
   */
  private registerOAuth2Providers(): void {
    if (!this.config.oauth2Providers) return;

    for (const [name, config] of Object.entries(this.config.oauth2Providers)) {
      this.registerOAuth2Provider(name, config);
    }
  }

  /**
   * Register an authentication scheme
   * 
   * @param name - Scheme name
   * @param scheme - Authentication scheme instance
   */
  registerScheme(name: string, scheme: AuthScheme): void {
    this.schemes.set(name.toLowerCase(), scheme);
  }

  /**
   * Register an OAuth2 provider
   * 
   * @param name - Provider name
   * @param config - OAuth2 configuration
   */
  registerOAuth2Provider(name: string, config: OAuth2Config): void {
    // OAuth2 flow implementations don't implement AuthScheme directly
    // We need to create wrapper schemes that implement the interface
    const wrapperScheme: AuthScheme = {
      type: 'oauth2' as const,
      config: config,
      
      async generateHeaders(): Promise<Record<string, string>> {
        // For OAuth2, we typically need to get a token first
        let flow: OAuth2ClientCredentialsFlowImpl | OAuth2AuthorizationCodeFlowImpl | OAuth2ImplicitFlowImpl | OAuth2PasswordFlowImpl;
        
        switch (config.grantType) {
          case 'client_credentials':
            flow = new OAuth2ClientCredentialsFlowImpl(config);
            const tokenResponse = await flow.requestAccessToken();
            return {
              'Authorization': `${tokenResponse.token_type} ${tokenResponse.access_token}`
            };
          default:
            throw new AuthenticationError(`OAuth2 grant type '${config.grantType}' not supported for header generation`);
        }
      },
      
      async validate(credentials: any): Promise<any> {
        // OAuth2 validation would typically involve token introspection
        // This is a simplified implementation
        return {
          success: false,
          error: 'OAuth2 validation not implemented in wrapper',
          errorCode: 'NOT_IMPLEMENTED'
        };
      }
    };

    this.registerScheme(`oauth2-${name}`, wrapperScheme);
  }

  /**
   * Get an authentication scheme by name
   * 
   * @param name - Scheme name
   * @returns Authentication scheme instance
   * @throws AuthenticationError if scheme not found
   */
  getScheme(name: string): AuthScheme {
    const scheme = this.schemes.get(name.toLowerCase());
    if (!scheme) {
      throw new AuthenticationError(
        `Authentication scheme '${name}' not found. Available schemes: ${Array.from(this.schemes.keys()).join(', ')}`
      );
    }
    return scheme;
  }

  /**
   * Get the default authentication scheme
   * 
   * @returns Default authentication scheme
   * @throws AuthenticationError if no default scheme configured
   */
  getDefaultScheme(): AuthScheme {
    if (this.config.defaultScheme) {
      return this.getScheme(this.config.defaultScheme);
    }

    // Return basic auth as fallback default
    return this.getScheme('basic');
  }

  /**
   * Check if an authentication scheme exists
   * 
   * @param name - Scheme name
   * @returns Whether the scheme exists
   */
  hasScheme(name: string): boolean {
    return this.schemes.has(name.toLowerCase());
  }

  /**
   * List all registered authentication schemes
   * 
   * @returns Array of scheme names
   */
  listSchemes(): string[] {
    return Array.from(this.schemes.keys());
  }

  /**
   * Get JWT handler instance
   * 
   * @returns JWT handler or undefined if not configured
   */
  getJWTHandler(): JWTHandlerImpl | undefined {
    return this.jwtHandler;
  }

  /**
   * Get JWKS manager instance
   * 
   * @returns JWKS manager or undefined if not configured
   */
  getJWKSManager(): JWKSManager | undefined {
    return this.jwksManager;
  }

  /**
   * Get JWT validator instance
   * 
   * @returns JWT validator or undefined if not configured
   */
  getJWTValidator(): JWTValidatorImpl | undefined {
    return this.jwtValidator;
  }

  /**
   * Create an authentication configuration for a scheme
   * 
   * @param schemeName - Name of the authentication scheme
   * @param credentials - Credentials for the scheme
   * @returns Authentication configuration
   */
  createAuthConfig(schemeName: string, credentials: any): AuthConfig {
    // This is a simplified implementation
    // In a real implementation, you'd validate and transform credentials
    // based on the scheme type
    const scheme = this.getScheme(schemeName);
    return scheme.config;
  }

  /**
   * Validate authentication configuration
   * 
   * @param config - Authentication configuration to validate
   * @returns Whether the configuration is valid
   */
  validateConfig(config: AuthConfig): boolean {
    try {
      // Basic validation - check if scheme exists and config has required fields
      if (!config.type || !config.enabled !== undefined) {
        return false;
      }
      
      // Additional validation based on scheme type
      switch (config.type) {
        case 'basic':
          return !!(config as any).username && !!(config as any).password;
        case 'bearer':
          return !!(config as any).token;
        case 'apiKey':
          return !!(config as any).apiKey && !!(config as any).headerName;
        case 'oauth2':
          return !!(config as any).clientId && !!(config as any).tokenUrl;
        default:
          return false;
      }
    } catch {
      return false;
    }
  }

  /**
   * Clear all registered schemes (useful for testing)
   */
  clearSchemes(): void {
    this.schemes.clear();
  }

  /**
   * Get factory configuration
   * 
   * @returns Current factory configuration
   */
  getConfig(): AuthFactoryConfig {
    return { ...this.config };
  }

  /**
   * Update factory configuration
   * 
   * @param config - New configuration to merge
   */
  updateConfig(config: Partial<AuthFactoryConfig>): void {
    this.config = { ...this.config, ...config };

    // Re-initialize JWT components if JWT config changed
    if (config.jwt) {
      this.initializeJWTComponents();
    }

    // Re-register OAuth2 providers if they changed
    if (config.oauth2Providers) {
      // Clear existing OAuth2 schemes
      for (const key of this.schemes.keys()) {
        if (key.startsWith('oauth2-')) {
          this.schemes.delete(key);
        }
      }
      this.registerOAuth2Providers();
    }
  }
}

/**
 * Create a new authentication factory instance
 * 
 * @param config - Factory configuration
 * @returns New AuthFactory instance
 */
export function createAuthFactory(config?: AuthFactoryConfig): AuthFactory {
  return new AuthFactory(config);
}

/**
 * Default authentication factory instance
 */
export const defaultAuthFactory = createAuthFactory();

/**
 * Convenience functions for common authentication scenarios
 */
export const authFactoryHelpers = {
  /**
   * Create a factory with basic authentication only
   */
  basicOnly: (username: string, password: string) => {
    const factory = createAuthFactory({ defaultScheme: 'basic' });
    factory.clearSchemes();
    factory.registerScheme('basic', new BasicAuthScheme({
      type: 'basic',
      username,
      password,
      enabled: true
    }));
    return factory;
  },

  /**
   * Create a factory with JWT authentication
   */
  withJWT: (config: { secret?: string; jwksUri?: string; issuer?: string; audience?: string | string[] }) => {
    return createAuthFactory({
      defaultScheme: 'bearer',
      jwt: config
    });
  },

  /**
   * Create a factory with OAuth2 providers
   */
  withOAuth2: (providers: Record<string, OAuth2Config>) => {
    return createAuthFactory({
      oauth2Providers: providers,
      defaultScheme: Object.keys(providers).length > 0 ? `oauth2-${Object.keys(providers)[0]}` : 'basic'
    });
  },

  /**
   * Create a factory with all authentication schemes
   */
  withAllSchemes: (config?: AuthFactoryConfig) => {
    return createAuthFactory({
      enableCaching: true,
      ...config
    });
  }
};