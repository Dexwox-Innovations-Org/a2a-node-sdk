import nextra from 'nextra'

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
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        events: false,
        util: false,
        stream: false,
        buffer: false,
        process: false,
      }
    }
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
