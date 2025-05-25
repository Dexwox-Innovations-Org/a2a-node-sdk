import { describe, it, expect } from 'vitest';
import {
  TextPart,
  FilePart,
  DataPart,
  MessagePart,
  TextPartSchema,
  FilePartSchema,
  DataPartSchema,
  MessagePartSchema,
  TaskStateSchema,
  A2AErrorSchema,
  ArtifactSchema
} from '../../src/types/a2a-protocol';

describe('Message Part Types', () => {
  describe('TextPart', () => {
    it('should validate basic text part', () => {
      const text: TextPart = {
        type: 'text',
        content: 'Hello world',
        format: 'plain'
      };
      expect(() => TextPartSchema.parse(text)).not.toThrow();
    });

    it('should default format to plain', () => {
      const text = { type: 'text', content: 'Hello' };
      const parsed = TextPartSchema.parse(text);
      expect(parsed.format).toBe('plain');
    });

    it('should reject invalid format', () => {
      const text = { type: 'text', content: 'Hi', format: 'invalid' };
      expect(() => TextPartSchema.parse(text)).toThrow();
    });
  });

  describe('FilePart', () => {
    it('should validate file part with string content', () => {
      const file: FilePart = {
        type: 'file',
        content: 'base64encoded',
        mimeType: 'image/png',
        name: 'test.png'
      };
      expect(() => FilePartSchema.parse(file)).not.toThrow();
    });

    it('should validate file part with Uint8Array', () => {
      const file: FilePart = {
        type: 'file',
        content: new Uint8Array([1,2,3]),
        mimeType: 'application/octet-stream',
        name: 'data.bin'
      };
      expect(() => FilePartSchema.parse(file)).not.toThrow();
    });

    it('should require mimeType and name', () => {
      expect(() => FilePartSchema.parse({ type: 'file', content: 'test' })).toThrow();
      expect(() => FilePartSchema.parse({ 
        type: 'file', 
        content: 'test',
        mimeType: 'text/plain' 
      })).toThrow();
      expect(() => FilePartSchema.parse({ 
        type: 'file', 
        content: 'test',
        name: 'test.txt' 
      })).toThrow();
    });
  });

  describe('DataPart', () => {
    it('should validate data part', () => {
      const data: DataPart = {
        type: 'data',
        content: { key: 'value' }
      };
      expect(() => DataPartSchema.parse(data)).not.toThrow();
    });

    it('should validate with schema reference', () => {
      const data: DataPart = {
        type: 'data',
        content: { key: 'value' },
        schema: 'https://schema.org/Thing'
      };
      expect(() => DataPartSchema.parse(data)).not.toThrow();
    });

    it('should reject invalid content', () => {
      expect(() => DataPartSchema.parse({ 
        type: 'data', 
        content: 'string' // should be object
      })).toThrow();
    });
  });

  describe('MessagePart Union', () => {
    it('should discriminate between part types', () => {
      const parts: MessagePart[] = [
        { type: 'text', content: 'test', format: 'plain' },
        { type: 'file', content: 'test', mimeType: 'text/plain', name: 'test.txt' },
        { type: 'data', content: { test: true } }
      ];
      parts.forEach(part => {
        expect(() => MessagePartSchema.parse(part)).not.toThrow();
      });
    });

    it('should reject invalid part types', () => {
      expect(() => MessagePartSchema.parse({ 
        type: 'invalid', 
        content: 'test' 
      })).toThrow();
    });
  });
});

describe('TaskState', () => {
  it('should validate all state values', () => {
    const validStates = [
      'submitted',
      'working',
      'input_required',
      'auth_required',
      'completed',
      'failed',
      'canceled',
      'rejected',
      'unknown'
    ];
    validStates.forEach(state => {
      expect(() => TaskStateSchema.parse(state)).not.toThrow();
    });
  });

  it('should reject invalid state values', () => {
    expect(() => TaskStateSchema.parse('invalid_state')).toThrow();
    expect(() => TaskStateSchema.parse('')).toThrow();
    expect(() => TaskStateSchema.parse(123)).toThrow();
  });
});

describe('A2AError', () => {
  it('should validate error structure', () => {
    const validError = {
      code: -32000,
      message: 'Test error',
      data: { detail: 'Additional info' }
    };
    expect(() => A2AErrorSchema.parse(validError)).not.toThrow();
  });

  it('should validate all standard error codes', () => {
    const codes = [
      -32000, // General error
      -32001, // Task not found
      -32002, // Task not cancelable
      -32003, // Push notification not supported
      -32004, // Unsupported operation
      -32005, // Content type not supported
      -32006, // Invalid agent response
      -32007, // Authentication required
      -32008, // Invalid credentials
      -32009, // Rate limit exceeded
      -32010, // Invalid input
      -32011, // Artifact not found
      -32012, // Artifact too large
      -32013, // Invalid artifact type
      -32014, // Stream error
      -32015  // Connection timeout
    ];
    codes.forEach(code => {
      expect(() => A2AErrorSchema.parse({ code, message: 'test' })).not.toThrow();
    });
  });

  it('should enforce error code range', () => {
    expect(() => A2AErrorSchema.parse({ code: -32099, message: 'test' })).not.toThrow();
    expect(() => A2AErrorSchema.parse({ code: -32100, message: 'test' })).toThrow();
    expect(() => A2AErrorSchema.parse({ code: -31999, message: 'test' })).toThrow();
  });

  it('should require message', () => {
    expect(() => A2AErrorSchema.parse({ code: -32000 })).toThrow();
  });
});

describe('Artifact', () => {
  it('should validate artifact structure', () => {
    const artifact = {
      id: 'artifact-123',
      type: 'text',
      content: { text: 'sample content' },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      metadata: { author: 'system' }
    };
    expect(() => ArtifactSchema.parse(artifact)).not.toThrow();
  });

  it('should validate all artifact types', () => {
    const types = ['text', 'file', 'data', 'log'];
    types.forEach(type => {
      const artifact = {
        id: `artifact-${type}`,
        type,
        content: {},
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      expect(() => ArtifactSchema.parse(artifact)).not.toThrow();
    });
  });

  it('should require id, type, content and timestamps', () => {
    expect(() => ArtifactSchema.parse({
      type: 'text',
      content: {},
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })).toThrow(); // missing id

    expect(() => ArtifactSchema.parse({
      id: 'artifact-123',
      content: {},
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })).toThrow(); // missing type

    expect(() => ArtifactSchema.parse({
      id: 'artifact-123',
      type: 'text',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })).toThrow(); // missing content

    expect(() => ArtifactSchema.parse({
      id: 'artifact-123',
      type: 'text',
      content: {}
    })).toThrow(); // missing timestamps
  });
});
