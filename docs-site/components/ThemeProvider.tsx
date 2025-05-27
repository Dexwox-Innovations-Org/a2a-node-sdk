import React, { createContext, useContext, ReactNode } from 'react'

// Define the theme interface
export interface ThemeConfig {
  // Brand configuration
  brand: {
    name: string
    logo?: ReactNode
    tagline?: string
  }
  
  // Color configuration
  colors: {
    primary: {
      hue: number
      saturation: number
    }
    accent?: string
    background?: {
      light: string
      dark: string
    }
    text?: {
      light: string
      dark: string
    }
  }
  
  // Typography configuration
  typography: {
    fontFamily?: string
    headingFontFamily?: string
    fontSize?: {
      base: string
      sm: string
      lg: string
      xl: string
    }
  }
  
  // Layout configuration
  layout: {
    maxWidth?: string
    sidebar?: {
      width: string
      collapsible: boolean
      defaultCollapsed: boolean
    }
    header?: {
      height: string
      sticky: boolean
    }
    footer?: {
      enabled: boolean
      content?: ReactNode
    }
  }
  
  // Navigation configuration
  navigation: {
    links: {
      project?: {
        link: string
        text?: string
      }
      chat?: {
        link: string
        text?: string
      }
      docsRepository?: string
    }
    search?: {
      placeholder: string
      enabled: boolean
    }
    editLink?: {
      text: string
      enabled: boolean
    }
    feedback?: {
      content: string
      labels: string
      enabled: boolean
    }
  }
  
  // SEO configuration
  seo: {
    titleTemplate: string
    defaultTitle: string
    description: string
    openGraph?: {
      title: string
      description: string
      image?: string
      siteName?: string
    }
    favicon?: string
  }
  
  // Feature flags
  features: {
    darkMode: boolean
    tableOfContents: boolean
    backToTop: boolean
    banner?: {
      key: string
      content: ReactNode
      enabled: boolean
    }
  }
  
  // Custom components
  components?: {
    Logo?: React.ComponentType
    Footer?: React.ComponentType
    Header?: React.ComponentType
    NotFound?: React.ComponentType
  }
}

// Default theme configuration
export const defaultTheme: ThemeConfig = {
  brand: {
    name: 'A2A Node SDK',
    tagline: 'TypeScript SDK for Google\'s Agent-to-Agent (A2A) communication protocol'
  },
  
  colors: {
    primary: {
      hue: 212,
      saturation: 100
    }
  },
  
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  
  layout: {
    maxWidth: '1200px',
    sidebar: {
      width: '280px',
      collapsible: true,
      defaultCollapsed: false
    },
    header: {
      height: '64px',
      sticky: true
    },
    footer: {
      enabled: true
    }
  },
  
  navigation: {
    links: {
      project: {
        link: 'https://github.com/Dexwox-Innovations-Org/a2a-node-sdk',
        text: 'GitHub'
      },
      chat: {
        link: 'https://discord.gg/dexwox',
        text: 'Discord'
      },
      docsRepository: 'https://github.com/Dexwox-Innovations-Org/a2a-node-sdk/tree/main/docs-site'
    },
    search: {
      placeholder: 'Search documentation...',
      enabled: true
    },
    editLink: {
      text: 'Edit this page on GitHub →',
      enabled: true
    },
    feedback: {
      content: 'Question? Give us feedback →',
      labels: 'feedback',
      enabled: true
    }
  },
  
  seo: {
    titleTemplate: '%s – A2A Node SDK',
    defaultTitle: 'A2A Node SDK',
    description: 'TypeScript SDK for Google\'s Agent-to-Agent (A2A) communication protocol',
    openGraph: {
      title: 'A2A Node SDK',
      description: 'TypeScript SDK for Google\'s Agent-to-Agent (A2A) communication protocol',
      siteName: 'A2A Node SDK Documentation'
    },
    favicon: '/favicon.ico'
  },
  
  features: {
    darkMode: true,
    tableOfContents: true,
    backToTop: true,
    banner: {
      key: 'a2a-release',
      content: (
        <a href="https://github.com/Dexwox-Innovations-Org/a2a-node-sdk" target="_blank" rel="noopener noreferrer">
          🎉 A2A Node SDK v0.1.0 is released. Read more →
        </a>
      ),
      enabled: true
    }
  }
}

// Create theme context
const ThemeContext = createContext<ThemeConfig>(defaultTheme)

// Theme provider component
interface ThemeProviderProps {
  children: ReactNode
  theme?: Partial<ThemeConfig>
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme = {} }) => {
  // Deep merge theme with defaults
  const mergedTheme = React.useMemo(() => {
    const merge = (target: any, source: any): any => {
      const result = { ...target }
      
      for (const key in source) {
        if (source[key] && typeof source[key] === 'object' && !React.isValidElement(source[key])) {
          result[key] = merge(target[key] || {}, source[key])
        } else {
          result[key] = source[key]
        }
      }
      
      return result
    }
    
    return merge(defaultTheme, theme)
  }, [theme])
  
  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  )
}

// Hook to use theme
export const useTheme = (): ThemeConfig => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Helper function to generate CSS custom properties from theme
export const generateThemeCSS = (theme: ThemeConfig): string => {
  return `
    :root {
      --theme-primary-hue: ${theme.colors.primary.hue};
      --theme-primary-saturation: ${theme.colors.primary.saturation}%;
      --theme-font-family: ${theme.typography.fontFamily || 'inherit'};
      --theme-max-width: ${theme.layout.maxWidth || '1200px'};
      --theme-sidebar-width: ${theme.layout.sidebar?.width || '280px'};
      --theme-header-height: ${theme.layout.header?.height || '64px'};
      ${theme.colors.accent ? `--theme-accent: ${theme.colors.accent};` : ''}
      ${theme.colors.background?.light ? `--theme-bg-light: ${theme.colors.background.light};` : ''}
      ${theme.colors.background?.dark ? `--theme-bg-dark: ${theme.colors.background.dark};` : ''}
      ${theme.colors.text?.light ? `--theme-text-light: ${theme.colors.text.light};` : ''}
      ${theme.colors.text?.dark ? `--theme-text-dark: ${theme.colors.text.dark};` : ''}
    }
    
    body {
      font-family: var(--theme-font-family);
    }
    
    .nextra-container {
      max-width: var(--theme-max-width);
    }
    
    ${theme.layout.sidebar?.width ? `
    .nextra-sidebar {
      width: var(--theme-sidebar-width);
    }
    ` : ''}
    
    ${theme.layout.header?.height ? `
    .nextra-nav {
      height: var(--theme-header-height);
    }
    ` : ''}
  `
}

// Theme utilities
export const createTheme = (overrides: Partial<ThemeConfig>): ThemeConfig => {
  const merge = (target: any, source: any): any => {
    const result = { ...target }
    
    for (const key in source) {
      if (source[key] && typeof source[key] === 'object' && !React.isValidElement(source[key])) {
        result[key] = merge(target[key] || {}, source[key])
      } else {
        result[key] = source[key]
      }
    }
    
    return result
  }
  
  return merge(defaultTheme, overrides)
}

// Preset themes
export const presetThemes = {
  default: defaultTheme,
  
  minimal: createTheme({
    layout: {
      sidebar: {
        width: '240px',
        collapsible: false,
        defaultCollapsed: false
      },
      footer: {
        enabled: false
      }
    },
    features: {
      darkMode: true,
      tableOfContents: true,
      backToTop: true,
      banner: {
        key: 'minimal',
        content: null,
        enabled: false
      }
    }
  }),
  
  corporate: createTheme({
    colors: {
      primary: {
        hue: 220,
        saturation: 90
      }
    },
    typography: {
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    layout: {
      sidebar: {
        width: '320px',
        collapsible: true,
        defaultCollapsed: false
      }
    },
    features: {
      darkMode: true,
      tableOfContents: true,
      backToTop: true
    }
  }),
  
  vibrant: createTheme({
    colors: {
      primary: {
        hue: 280,
        saturation: 100
      }
    },
    features: {
      darkMode: true,
      tableOfContents: true,
      backToTop: true,
      banner: {
        key: 'vibrant',
        content: (
          <span style={{ background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            ✨ Experience the vibrant theme! ✨
          </span>
        ),
        enabled: true
      }
    }
  })
}
