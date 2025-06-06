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

function generateDisplayName(filename) {
  // Remove file extension
  const name = filename.replace(/\.mdx?$/, '');
  
  // Handle special cases for better display names
  if (name.startsWith('Core.z.')) {
    // For Zod types, show just the Zod part
    return name.replace('Core.z.', 'z.');
  }
  
  // For other namespaced items, show just the class/interface name
  const parts = name.split('.');
  if (parts.length > 1) {
    return parts[parts.length - 1];
  }
  
  return name;
}

function generateMetaForDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return {};
  }

  const files = fs.readdirSync(dirPath)
    .filter(file => file.endsWith('.mdx') && file !== 'index.mdx')
    .sort();

  const meta = {};
  
  for (const file of files) {
    const key = file.replace('.mdx', '');
    const displayName = generateDisplayName(file);
    meta[key] = displayName;
  }

  return meta;
}

function createMetaFiles() {
  // Clean up existing generated meta files first
  const subdirs = ['classes', 'interfaces', 'enums', 'modules'];
  const metaFilesToClean = subdirs.map(subdir => path.join(API_REFERENCE_DIR, subdir, '_meta.js'));
  
  metaFilesToClean.forEach(metaPath => {
    if (fs.existsSync(metaPath)) {
      fs.unlinkSync(metaPath);
      console.log(`🗑️ Removed old: ${path.relative(process.cwd(), metaPath)}`);
    }
  });

  // Generate dynamic meta files for subdirectories
  const generatedSubdirs = [];
  for (const subdir of subdirs) {
    const subdirPath = path.join(API_REFERENCE_DIR, subdir);
    const meta = generateMetaForDirectory(subdirPath);
    
    if (Object.keys(meta).length > 0) {
      const metaContent = `export default ${JSON.stringify(meta, null, 2)};`;
      const metaPath = path.join(subdirPath, '_meta.js');
      
      const dir = path.dirname(metaPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(metaPath, metaContent);
      console.log(`✓ Generated: ${path.relative(process.cwd(), metaPath)}`);
      
      generatedSubdirs.push(subdir);
    }
  }

  // Update the main _meta.js file to include generated subdirectories
  const mainMetaPath = path.join(API_REFERENCE_DIR, '_meta.js');
  const mainMeta = {
    "index": "Overview",
    "core": "Core Package",
    "client": "Client Package", 
    "server": "Server Package"
  };

  // Add generated subdirectories
  if (generatedSubdirs.includes('modules')) mainMeta.modules = "Modules";
  if (generatedSubdirs.includes('classes')) mainMeta.classes = "Classes";
  if (generatedSubdirs.includes('interfaces')) mainMeta.interfaces = "Interfaces";
  if (generatedSubdirs.includes('enums')) mainMeta.enums = "Enums";

  const mainMetaContent = `export default ${JSON.stringify(mainMeta, null, 2)};`;
  fs.writeFileSync(mainMetaPath, mainMetaContent);
  console.log(`✓ Updated: ${path.relative(process.cwd(), mainMetaPath)}`);
}

function main() {
  console.log('🔄 Syncing TypeDoc documentation with Nextra...\n');
  
  // Debug: Check if source directories exist
  console.log('📁 Checking source directories:');
  console.log(`  DOCS_API_DIR: ${DOCS_API_DIR} (exists: ${fs.existsSync(DOCS_API_DIR)})`);
  console.log(`  API_REFERENCE_DIR: ${API_REFERENCE_DIR} (exists: ${fs.existsSync(API_REFERENCE_DIR)})`);
  
  if (fs.existsSync(DOCS_API_DIR)) {
    const apiDirContents = fs.readdirSync(DOCS_API_DIR);
    console.log(`  Contents of docs-api: ${apiDirContents.join(', ')}`);
  }

  // Sync main directories
  syncDirectory(path.join(DOCS_API_DIR, 'classes'), path.join(API_REFERENCE_DIR, 'classes'));
  syncDirectory(path.join(DOCS_API_DIR, 'interfaces'), path.join(API_REFERENCE_DIR, 'interfaces'));
  syncDirectory(path.join(DOCS_API_DIR, 'enums'), path.join(API_REFERENCE_DIR, 'enums'));
  syncDirectory(path.join(DOCS_API_DIR, 'modules'), path.join(API_REFERENCE_DIR, 'modules'));

  // Create navigation meta files
  console.log('\n📝 Generating meta files...');
  createMetaFiles();
  
  // Debug: List generated files
  console.log('\n📋 Generated files summary:');
  const subdirs = ['classes', 'interfaces', 'enums', 'modules'];
  for (const subdir of subdirs) {
    const subdirPath = path.join(API_REFERENCE_DIR, subdir);
    if (fs.existsSync(subdirPath)) {
      const files = fs.readdirSync(subdirPath).filter(f => f.endsWith('.mdx'));
      console.log(`  ${subdir}: ${files.length} files`);
    }
  }

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
