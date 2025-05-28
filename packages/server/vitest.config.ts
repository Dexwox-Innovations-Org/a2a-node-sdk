import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      all: true,
      include: ['src/**/*.ts'],
      exclude: [
        'src/**/*.test.ts',
        'src/**/*.d.ts',
        'src/**/index.ts'
      ]
    }
  },
  resolve: {
    alias: {
      '@dexwox-labs/a2a-server': resolve(__dirname, './src'),
      '@dexwox-labs/a2a-core': resolve(__dirname, '../core/src')
    }
  }
});
