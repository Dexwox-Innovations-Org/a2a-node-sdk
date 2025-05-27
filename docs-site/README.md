# A2A Node SDK Documentation Site

This is the documentation site for the A2A Node SDK, built with [Nextra](https://nextra.site/) and Next.js.

## Features

- 📚 **Comprehensive Documentation** - Complete guides and API reference
- 🔄 **Auto-sync with TypeDoc** - Automatically syncs with generated API documentation
- 🎨 **Modern Design** - Clean, responsive design with dark mode support
- 🔍 **Full-text Search** - Search across all documentation
- 📱 **Mobile Friendly** - Optimized for all devices
- ⚡ **Fast Performance** - Built with Next.js for optimal performance

## Development

### Prerequisites

- Node.js 18+
- pnpm 8+

### Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Sync TypeDoc documentation:
   ```bash
   pnpm run sync-docs
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm sync-docs` - Sync TypeDoc documentation
- `pnpm build-with-docs` - Sync docs and build for production

## Project Structure

```
docs-site/
├── pages/                 # Nextra pages
│   ├── index.mdx         # Homepage
│   ├── docs/             # Documentation pages
│   └── api-reference/    # Auto-generated API docs
├── scripts/              # Build and sync scripts
│   └── sync-typedoc.js   # TypeDoc sync script
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── theme.config.tsx      # Nextra theme configuration
└── package.json
```

## Documentation Structure

### Manual Documentation (`/docs`)
- **Getting Started** - Installation and quick start guide
- **Client Guide** - How to use the client packages
- **Server Guide** - How to build A2A servers
- **Protocol Specification** - A2A protocol details
- **Examples** - Real-world usage examples
- **Deployment** - Production deployment guides

### Auto-generated API Reference (`/api-reference`)
- **Classes** - All SDK classes with methods and properties
- **Interfaces** - TypeScript interfaces and types
- **Enums** - Enumeration types
- **Modules** - Package-level documentation

## Syncing TypeDoc Documentation

The documentation site automatically syncs with TypeDoc-generated API documentation:

1. **Automatic Sync**: Run `pnpm run sync-docs` to copy and transform TypeDoc markdown files
2. **Link Transformation**: Converts TypeDoc links to work with Nextra routing
3. **Frontmatter Addition**: Adds Nextra-compatible frontmatter to all pages
4. **Navigation Generation**: Creates `_meta.json` files for proper navigation

### Sync Process

The sync script (`scripts/sync-typedoc.js`) performs the following:

1. Copies markdown files from `../docs-api/` to `pages/api-reference/`
2. Transforms `.md` files to `.mdx` format
3. Converts TypeDoc links to Nextra-compatible paths
4. Adds frontmatter with page titles
5. Creates navigation metadata files

## Customization

### Theme Configuration

Edit `theme.config.tsx` to customize:
- Logo and branding
- Navigation links
- Footer content
- SEO metadata
- Social links

### Styling

The site uses Nextra's default theme with custom configuration. To customize styles:

1. Create a `styles/` directory
2. Add custom CSS files
3. Import them in `pages/_app.tsx` (if created)

### Adding New Pages

1. Create `.mdx` files in the `pages/` directory
2. Add frontmatter with title and description
3. Update `_meta.json` files for navigation
4. Use Nextra components for enhanced functionality

## Deployment

### Static Export

For static hosting (GitHub Pages, Netlify, etc.):

```bash
pnpm run build-with-docs
pnpm run export
```

### Vercel Deployment

1. Connect your repository to Vercel
2. Set build command: `pnpm run build-with-docs`
3. Set output directory: `out` (for static export) or leave default

### Custom Deployment

For custom deployment:

```bash
pnpm run build-with-docs
pnpm start
```

## Contributing

1. Make changes to documentation in `pages/docs/`
2. For API changes, update the source code and regenerate TypeDoc
3. Run `pnpm run sync-docs` to sync API documentation
4. Test locally with `pnpm dev`
5. Submit a pull request

## Troubleshooting

### Common Issues

1. **TypeDoc sync fails**: Ensure the `../docs-api/` directory exists and contains TypeDoc output
2. **Build errors**: Check that all `.mdx` files have valid frontmatter
3. **Navigation issues**: Verify `_meta.json` files are properly formatted
4. **Link errors**: Ensure all internal links use correct Nextra paths

### Getting Help

- Check the [Nextra documentation](https://nextra.site/)
- Review the [Next.js documentation](https://nextjs.org/docs)
- Open an issue in the main repository

## License

This documentation site is part of the A2A Node SDK project and is licensed under the Apache 2.0 License.
