import { describe, it, expect } from 'vitest';
import {
  validateMessage,
  validateTask,
  validateAgentCard,
  validatePushNotificationConfig,
  validateDiscoverRequest,
  validateDiscoverResponse,
  isMessage,
  isTask,
  isAgentCard,
  isPushNotificationConfig,
  formatValidationError,
} from '../validators';

describe('Validation Utilities', () => {
  describe('validateMessage', () => {
    it('should validate a valid message', () => {
      const message = {
        parts: [
          { type: 'text', content: 'Hello, world!', format: 'plain' },
        ],
      };
      
      const result = validateMessage(message);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.parts).toHaveLength(1);
        expect(result.data.parts[0].type).toBe('text');
      }
    });

    it('should fail for invalid message', () => {
      const message = {
        parts: [], // Empty parts array should fail
      };
      
      const result = validateMessage(message);
      expect(result.success).toBe(false);
    });
  });

  describe('validateTask', () => {
    it('should validate a valid task', () => {
      const task = {
        id: '550e8400-e29b-41d4-a716-446655440000',
        name: 'Test Task',
        status: 'submitted',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      
      const result = validateTask(task);
      expect(result.success).toBe(true);
    });

    it('should fail for invalid task', () => {
      const task = {
        // Missing required fields
        name: 'Test Task',
      };
      
      const result = validateTask(task as any);
      expect(result.success).toBe(false);
    });
  });

  describe('validateAgentCard', () => {
    it('should validate a valid agent card', () => {
      const agentCard = {
        id: '550e8400-e29b-41d4-a716-446655440000', // Valid UUID
        name: 'Test Agent',
        capabilities: ['cap1', 'cap2'],
        endpoint: 'https://example.com/agent',
      };
      
      const result = validateAgentCard(agentCard);
      if (!result.success) {
        console.error('Validation errors:', result.error);
      }
      expect(result.success).toBe(true);
    });

    it('should fail for invalid agent card', () => {
      const agentCard = {
        // Missing required fields
        name: 'Test Agent',
      };
      
      const result = validateAgentCard(agentCard as any);
      expect(result.success).toBe(false);
    });
  });

  describe('formatValidationError', () => {
    it('should format validation errors correctly', () => {
      const error = {
        issues: [
          { path: ['name'], message: 'Required' },
          { path: ['endpoint'], message: 'Invalid URL' },
        ],
      } as any;
      
      const formatted = formatValidationError(error);
      expect(formatted).toContain('name: Required');
      expect(formatted).toContain('endpoint: Invalid URL');
    });
  });

  describe('Type Guards', () => {
    it('should correctly identify messages', () => {
      const message = {
        parts: [
          { type: 'text', content: 'Hello', format: 'plain' },
        ],
      };
      
      expect(isMessage(message)).toBe(true);
      expect(isMessage({})).toBe(false);
    });

    it('should correctly identify tasks', () => {
      const task = {
        id: '550e8400-e29b-41d4-a716-446655440000',
        name: 'Test Task',
        status: 'submitted',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      
      expect(isTask(task)).toBe(true);
      expect(isTask({})).toBe(false);
    });
  });
});
