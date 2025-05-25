import type { Artifact } from '../types/a2a-protocol';
import { A2AError } from '../errors';

export enum ArtifactErrorCode {
  SerializationFailed = -32050,
  DeserializationFailed = -32051,
  MissingContent = -32052,
  InvalidType = -32053
}

/**
 * Serializes an artifact to JSON string
 * @param artifact Artifact to serialize
 * @returns JSON string
 */
export function serializeArtifact(artifact: Artifact): string {
  try {
    return JSON.stringify(artifact);
  } catch (err) {
    throw new A2AError(
      'Failed to serialize artifact',
      ArtifactErrorCode.SerializationFailed,
      { cause: err }
    );
  }
}

/**
 * Deserializes an artifact from JSON string
 * @param data JSON encoded artifact data
 * @returns Artifact object
 */
export function deserializeArtifact(data: string): Artifact {
  try {
    return JSON.parse(data) as Artifact;
  } catch (err) {
    throw new A2AError(
      'Failed to deserialize artifact',
      ArtifactErrorCode.DeserializationFailed,
      { cause: err }
    );
  }
}

/**
 * Validates artifact structure
 * @param artifact Artifact to validate
 * @returns True if valid
 * @throws A2AError if validation fails
 */
export function validateArtifact(artifact: Artifact): boolean {
  if (!artifact.content) {
    throw new A2AError(
      'Missing content for artifact',
      ArtifactErrorCode.MissingContent
    );
  }

  if (!['text', 'file', 'data'].includes(artifact.type)) {
    throw new A2AError(
      'Invalid artifact type',
      ArtifactErrorCode.InvalidType
    );
  }

  return true;
}
