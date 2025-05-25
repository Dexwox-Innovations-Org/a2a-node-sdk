import { describe, it, expect, vi } from 'vitest';
import { A2AHttpClient } from '../../src/http-client';
import type { HttpClientOptions } from '../../src/http-client';

describe('Push Notification Authentication', () => {
  const mockBaseUrl = 'https://api.example.com';
  const mockToken = 'test-auth-token';
  const mockRefreshToken = 'refreshed-token';

  it('should include auth token in push notification requests when configured', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({
        jsonrpc: '2.0',
        result: {}
      })
    });

    const client = new A2AHttpClient({
      baseUrl: mockBaseUrl,
      pushAuth: { token: mockToken }
    });
    (client as any).sendRequest = mockFetch;

    await client.getPushNotificationConfig('task-123');
    expect(mockFetch).toHaveBeenCalledWith(expect.objectContaining({
      params: expect.objectContaining({ authToken: mockToken })
    }));

    await client.setPushNotificationConfig('task-123', { 
      enabled: true,
      events: ['task_completed'],
      endpoint: 'https://example.com/webhook'
    });
    expect(mockFetch).toHaveBeenCalledWith(expect.objectContaining({
      params: expect.objectContaining({ authToken: mockToken })
    }));
  });

  it('should refresh auth token when refresh callback is provided', async () => {
    const refreshMock = vi.fn().mockResolvedValue(mockRefreshToken);
    const client = new A2AHttpClient({
      baseUrl: mockBaseUrl,
      pushAuth: { refresh: refreshMock }
    });

    const newToken = await client.refreshPushAuthToken();
    expect(newToken).toBe(mockRefreshToken);
    expect(refreshMock).toHaveBeenCalled();
    expect((client as any).options.pushAuth?.token).toBe(mockRefreshToken);
  });

  it('should throw error when refresh is called without callback', async () => {
    const client = new A2AHttpClient({ baseUrl: mockBaseUrl });
    await expect(client.refreshPushAuthToken()).rejects.toMatchObject({
      code: -32003,
      message: 'Push notification auth refresh not configured'
    });
  });
});
