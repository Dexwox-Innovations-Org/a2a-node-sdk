import { beforeAll, afterAll, vi } from 'vitest';

// Polyfill for EventSource in Node.js environment
class MockEventSource {
  private url: string;
  public onmessage: ((event: MessageEvent) => void) | null = null;
  public onerror: ((event: Event) => void) | null = null;
  private onclose: ((event: Event) => void) | null = null;

  constructor(url: string) {
    this.url = url;
  }

  close() {}

  addEventListener(type: string, listener: EventListener) {
    if (type === 'message') {
      this.onmessage = listener as (event: MessageEvent) => void;
    } else if (type === 'error') {
      this.onerror = listener as (event: Event) => void;
    } else if (type === 'close') {
      this.onclose = listener as (event: Event) => void;
    }
  }
}

global.EventSource = MockEventSource as any;

// Mock fetch for testing
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ result: '123' }),
    body: new ReadableStream(),
    headers: new Headers(),
    status: 200,
    statusText: 'OK',
    redirected: false,
    type: 'basic',
    url: '',
    clone: () => ({} as Response),
    bodyUsed: false,
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
    blob: () => Promise.resolve(new Blob()),
    formData: () => Promise.resolve(new FormData()),
    text: () => Promise.resolve(''),
  } as Response)
);

beforeAll(() => {
  // Setup code here
});

afterAll(() => {
  // Cleanup code here
});
