import type { MessagePart } from '../types/a2a-protocol';
import { A2AError } from '../errors';

export enum MessageErrorCode {
  InvalidParts = -32060,
  MissingContent = -32061,
  InvalidType = -32062
}

/**
 * Validates message parts
 * @param parts Message parts to validate
 * @throws A2AError if validation fails
 */
export function validateMessageParts(parts: MessagePart[]): void {
  if (!parts || parts.length === 0) {
    throw new A2AError(
      'Message must contain at least one part',
      MessageErrorCode.InvalidParts
    );
  }

  for (const part of parts) {
    if (!part.content) {
      throw new A2AError(
        'Message part missing content',
        MessageErrorCode.MissingContent
      );
    }

    if (!['text', 'file', 'data', 'heartbeat'].includes(part.type)) {
      throw new A2AError(
        `Invalid message part type: ${part.type}`,
        MessageErrorCode.InvalidType
      );
    }
  }
}

/**
 * Extracts text content from message parts
 * @param parts Message parts to process
 * @returns Combined text content
 */
export function extractTextContent(parts: MessagePart[]): string {
  return parts
    .filter(part => part.type === 'text')
    .map(part => part.content as string)
    .join('\n\n');
}
