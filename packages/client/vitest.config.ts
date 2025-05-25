import { defineConfig } from 'vitest/config';
import type { Plugin } from 'vite';

export default defineConfig({
  plugins: [{
    name: 'tsconfig-paths',
    async config() {
      const tsconfigPaths = await import('vite-tsconfig-paths');
      return tsconfigPaths.default();
    }
  } as Plugin],
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.ts'],
      exclude: [
        'src/**/*.test.ts',
        'src/**/*.d.ts',
        'src/index.ts'
      ]
    },
    setupFiles: ['./tests/setup.ts'],
    benchmark: {
      include: ['**/*.bench.ts'],
      outputFile: './bench-results.json'
    },
    testTimeout: 30000,
    hookTimeout: 30000
  }
});
