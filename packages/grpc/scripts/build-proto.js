#!/usr/bin/env node

/**
 * Protocol Buffer Compilation Script
 * 
 * This script compiles the A2A protocol buffer definitions into JavaScript/TypeScript
 * files that can be used by the gRPC client and server implementations.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PROTO_DIR = path.join(__dirname, '..', 'proto');
const GENERATED_DIR = path.join(__dirname, '..', 'src', 'generated');
const PROTO_FILE = path.join(PROTO_DIR, 'a2a.proto');
const GOOGLE_PROTO_PATH = path.join(__dirname, '..', 'node_modules', 'google-proto-files');

// Ensure generated directory exists
if (!fs.existsSync(GENERATED_DIR)) {
  fs.mkdirSync(GENERATED_DIR, { recursive: true });
}

console.log('🔧 Compiling Protocol Buffers...');

try {
  // Generate JavaScript files with CommonJS imports
  const jsCommand = [
    'grpc_tools_node_protoc',
    `--js_out=import_style=commonjs,binary:${GENERATED_DIR}`,
    `--grpc_out=grpc_js:${GENERATED_DIR}`,
    `--proto_path=${PROTO_DIR}`,
    `--proto_path=${GOOGLE_PROTO_PATH}`,
    `--proto_path=${path.join(__dirname, '..', '..', 'node_modules', '.pnpm', 'grpc-tools@1.13.0', 'node_modules', 'grpc-tools', 'bin')}`,
    PROTO_FILE
  ].join(' ');

  console.log('📦 Generating JavaScript files...');
  execSync(jsCommand, { stdio: 'inherit' });

  // Generate TypeScript definition files
  const tsCommand = [
    'grpc_tools_node_protoc',
    `--ts_out=grpc_js:${GENERATED_DIR}`,
    `--proto_path=${PROTO_DIR}`,
    `--proto_path=${GOOGLE_PROTO_PATH}`,
    `--proto_path=${path.join(__dirname, '..', '..', 'node_modules', '.pnpm', 'grpc-tools@1.13.0', 'node_modules', 'grpc-tools', 'bin')}`,
    PROTO_FILE
  ].join(' ');

  console.log('📝 Generating TypeScript definitions...');
  execSync(tsCommand, { stdio: 'inherit' });

  // Create index file for easier imports
  const indexContent = `// Generated gRPC files
export * from './a2a_pb';
export * from './a2a_grpc_pb';

// Re-export for convenience
import * as a2a_pb2 from './a2a_pb';
import * as a2a_pb2_grpc from './a2a_grpc_pb';

export { a2a_pb2, a2a_pb2_grpc };
`;

  fs.writeFileSync(path.join(GENERATED_DIR, 'index.ts'), indexContent);

  console.log('✅ Protocol buffer compilation completed successfully!');
  console.log(`📁 Generated files in: ${GENERATED_DIR}`);

} catch (error) {
  console.error('❌ Protocol buffer compilation failed:');
  console.error(error.message);
  process.exit(1);
}