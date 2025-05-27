import React from 'react'

// For now, we'll keep the original theme config structure
// The ThemeProvider will be integrated through _app.tsx
const config = {
  logo: <span>A2A Node SDK</span>,
  project: {
    link: 'https://github.com/Dexwox-Innovations-Org/a2a-node-sdk',
  },
  // chat: {
  //   link: 'https://discord.gg/dexwox',
  // },
  docsRepositoryBase: 'https://github.com/Dexwox-Innovations-Org/a2a-node-sdk/tree/main/docs-site',
  footer: false,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="A2A Node SDK" />
      <meta property="og:description" content="TypeScript SDK for Google's Agent-to-Agent (A2A) communication protocol" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  primaryHue: 212,
  primarySaturation: 100,
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  search: {
    placeholder: 'Search documentation...'
  },
  banner: {
    key: 'a2a-release',
    text: (
      <a href="https://github.com/Dexwox-Innovations-Org/a2a-node-sdk" target="_blank">
        🎉 A2A Node SDK v0.1.0 is released. Read more →
      </a>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – A2A Node SDK'
    }
  }
}

export default config

// Export theme utilities for easy access
export { ThemeProvider, defaultTheme } from './components/ThemeProvider'
export { presetThemes, createTheme, useTheme } from './components/ThemeProvider'
