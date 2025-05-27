#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Script to sync TypeDoc generated documentation with Nextra
 * This script copies and transforms TypeDoc markdown files to work with Nextra
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOCS_API_DIR = path.join(__dirname, '../../docs-api');
const API_REFERENCE_DIR = path.join(__dirname, '../pages/api-reference');

function transformMarkdownForNextra(content, filePath) {
  // Add frontmatter if not present
  if (!content.startsWith('---')) {
    const title = extractTitleFromPath(filePath);
    content = `---\ntitle: ${title}\n---\n\n${content}`;
  }

  // Transform TypeDoc links to work with Nextra
  content = content.replace(/\[([^\]]+)\]\(([^)]+)\.md\)/g, (match, text, link) => {
    // Convert relative links to absolute paths
    const nextraLink = link.replace(/\.\.\//g, '/api-reference/');
    return `[${text}](${nextraLink})`;
  });

  // Transform TypeDoc class/interface references
  content = content.replace(/\[([^\]]+)\]\(classes\/([^)]+)\.md\)/g, '[`$1`](/api-reference/classes/$2)');
  content = content.replace(/\[([^\]]+)\]\(interfaces\/([^)]+)\.md\)/g, '[`$1`](/api-reference/interfaces/$2)');
  content = content.replace(/\[([^\]]+)\]\(enums\/([^)]+)\.md\)/g, '[`$1`](/api-reference/enums/$2)');

  // Add import statements for Nextra components where needed
  if (content.includes('## Table of contents') || content.includes('### ')) {
    content = `import { Callout } from 'nextra/components'\n\n${content}`;
  }

  return content;
}

function extractTitleFromPath(filePath) {
  const basename = path.basename(filePath, '.md');
  // Convert kebab-case or camelCase to Title Case
  return basename
    .replace(/[-_]/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim();
}

function copyAndTransformFile(srcPath, destPath) {
  try {
    const content = fs.readFileSync(srcPath, 'utf8');
    const transformedContent = transformMarkdownForNextra(content, srcPath);
    
    // Ensure destination directory exists
    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    fs.writeFileSync(destPath, transformedContent);
    console.log(`✓ Copied: ${path.relative(process.cwd(), srcPath)} → ${path.relative(process.cwd(), destPath)}`);
  } catch (error) {
    console.error(`✗ Error copying ${srcPath}:`, error.message);
  }
}

function syncDirectory(srcDir, destDir, prefix = '') {
  if (!fs.existsSync(srcDir)) {
    console.warn(`Source directory does not exist: ${srcDir}`);
    return;
  }

  const items = fs.readdirSync(srcDir);
  
  for (const item of items) {
    const srcPath = path.join(srcDir, item);
    const stat = fs.statSync(srcPath);
    
    if (stat.isDirectory()) {
      // Recursively sync subdirectories
      const destSubDir = path.join(destDir, item);
      syncDirectory(srcPath, destSubDir, `${prefix}${item}/`);
    } else if (item.endsWith('.md') && item !== 'README.md') {
      // Copy and transform markdown files
      const destPath = path.join(destDir, item.replace('.md', '.mdx'));
      copyAndTransformFile(srcPath, destPath);
    }
  }
}

function createMetaFiles() {
  // Create _meta.js files for navigation only if they don't exist
  const metaFiles = [
    {
      path: path.join(API_REFERENCE_DIR, '_meta.js'),
      content: `export default {
  "index": "Overview",
  "core": "Core Package",
  "client": "Client Package", 
  "server": "Server Package",
  "modules": "Modules",
  "classes": "Classes",
  "interfaces": "Interfaces",
  "enums": "Enums"
};`
    },
    {
      path: path.join(API_REFERENCE_DIR, 'classes/_meta.js'),
      content: `export default {
  "Client.AgentClient": "AgentClient",
  "Client.MessageClient": "MessageClient", 
  "Client.TaskClient": "TaskClient",
  "Core.A2AError": "A2AError",
  "Core.InvalidTaskStateError": "InvalidTaskStateError",
  "Core.TaskAlreadyCompletedError": "TaskAlreadyCompletedError",
  "Core.TaskCanceledError": "TaskCanceledError",
  "Core.TaskFailedError": "TaskFailedError",
  "Core.TaskNotFoundError": "TaskNotFoundError",
  "Server.A2AServer": "A2AServer",
  "Server.DefaultAgentExecutor": "DefaultAgentExecutor",
  "Server.DefaultRequestHandler": "DefaultRequestHandler",
  "Server.TaskManager": "TaskManager"
};`
    },
    {
      path: path.join(API_REFERENCE_DIR, 'interfaces/_meta.js'),
      content: `export default {
  "Client.MessageClientOptions": "MessageClientOptions",
  "Client.StreamOptions": "StreamOptions",
  "Core.AgentCard": "AgentCard",
  "Core.DiscoverRequest": "DiscoverRequest",
  "Core.DiscoverResponse": "DiscoverResponse",
  "Core.JsonRpcResponseBase": "JsonRpcResponseBase",
  "Core.Message": "Message",
  "Core.MessageSendConfiguration": "MessageSendConfiguration",
  "Core.PushNotificationConfig": "PushNotificationConfig",
  "Core.Task": "Task",
  "Core.TaskTransition": "TaskTransition",
  "Server.AgentExecutor": "AgentExecutor",
  "Server.RequestHandler": "RequestHandler"
};`
    },
    {
      path: path.join(API_REFERENCE_DIR, 'enums/_meta.js'),
      content: `export default {
  "Core.ArtifactErrorCode": "ArtifactErrorCode",
  "Core.MessageErrorCode": "MessageErrorCode",
  "Core.TaskErrorCode": "TaskErrorCode"
};`
    },
    {
      path: path.join(API_REFERENCE_DIR, 'modules/_meta.js'),
      content: `export default {
  "Client": "Client",
  "Core": "Core",
  "Server": "Server"
};`
    }
  ];

  metaFiles.forEach(({ path: metaPath, content }) => {
    // Only create if file doesn't exist to preserve manual customizations
    if (!fs.existsSync(metaPath)) {
      const dir = path.dirname(metaPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(metaPath, content);
      console.log(`✓ Created: ${path.relative(process.cwd(), metaPath)}`);
    } else {
      console.log(`⚠ Skipped: ${path.relative(process.cwd(), metaPath)} (already exists)`);
    }
  });
}

function main() {
  console.log('🔄 Syncing TypeDoc documentation with Nextra...\n');

  // Sync main directories
  syncDirectory(path.join(DOCS_API_DIR, 'classes'), path.join(API_REFERENCE_DIR, 'classes'));
  syncDirectory(path.join(DOCS_API_DIR, 'interfaces'), path.join(API_REFERENCE_DIR, 'interfaces'));
  syncDirectory(path.join(DOCS_API_DIR, 'enums'), path.join(API_REFERENCE_DIR, 'enums'));
  syncDirectory(path.join(DOCS_API_DIR, 'modules'), path.join(API_REFERENCE_DIR, 'modules'));

  // Create navigation meta files (only if they don't exist)
  createMetaFiles();

  console.log('\n✅ TypeDoc documentation sync completed!');
  console.log('\nNext steps:');
  console.log('1. Run `pnpm dev` in the docs-site directory');
  console.log('2. Visit http://localhost:3000 to view the documentation');
  console.log('3. Update the generated files as needed for better Nextra integration');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}

export { transformMarkdownForNextra, syncDirectory };
