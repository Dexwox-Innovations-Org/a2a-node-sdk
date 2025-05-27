import nextra from 'nextra'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

const isGithubPages = process.env.GITHUB_PAGES === 'true'

export default withNextra({
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: isGithubPages ? '/a2a-node-sdk' : '',
  basePath: isGithubPages ? '/a2a-node-sdk' : '',
  output: 'export',
  webpack: (config, { isServer }) => {
    // Add polyfills entry point for client-side
    if (!isServer) {
      const originalEntry = config.entry
      config.entry = async () => {
        const entries = await originalEntry()
        if (entries['main.js']) {
          // Ensure polyfills are first and only added once
          const polyfills = ['./polyfills.js']
          const mainEntries = entries['main.js'].filter(
            entry => entry !== './polyfills.js'
          )
          entries['main.js'] = [...polyfills, ...mainEntries]
        }
        return entries
      }
    }

    // Configure module resolution
    config.resolve.fallback = {
      ...config.resolve.fallback,
      events: require.resolve('events/'),
      util: require.resolve('util/'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/'),
      process: require.resolve('process/browser'),
      fs: false,
      net: false,
      tls: false,
    }

    // Add webpack plugins for global polyfills
    const webpack = require('webpack')
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
        EventEmitter: ['events', 'EventEmitter'],
      })
    )

    return config
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/getting-started',
        permanent: true,
      },
    ]
  },
})
