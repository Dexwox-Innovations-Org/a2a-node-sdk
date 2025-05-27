import React from 'react'
import { useTheme } from '../components/ThemeProvider'

// Adapter to convert our theme config to Nextra format
export const useNextraThemeConfig = () => {
  const theme = useTheme()
  
  return {
    logo: theme.brand.logo || <span>{theme.brand.name}</span>,
    
    project: theme.navigation.links.project ? {
      link: theme.navigation.links.project.link,
      text: theme.navigation.links.project.text
    } : undefined,
    
    chat: theme.navigation.links.chat ? {
      link: theme.navigation.links.chat.link,
      text: theme.navigation.links.chat.text
    } : undefined,
    
    docsRepositoryBase: theme.navigation.links.docsRepository,
    
    footer: theme.layout.footer?.enabled ? (
      theme.layout.footer.content || false
    ) : false,
    
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={theme.seo.openGraph?.title || theme.seo.defaultTitle} />
        <meta property="og:description" content={theme.seo.openGraph?.description || theme.seo.description} />
        {theme.seo.openGraph?.siteName && (
          <meta property="og:site_name" content={theme.seo.openGraph.siteName} />
        )}
        {theme.seo.openGraph?.image && (
          <meta property="og:image" content={theme.seo.openGraph.image} />
        )}
        {theme.seo.favicon && <link rel="icon" href={theme.seo.favicon} />}
        <style dangerouslySetInnerHTML={{
          __html: `
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
        }} />
      </>
    ),
    
    primaryHue: theme.colors.primary.hue,
    primarySaturation: theme.colors.primary.saturation,
    
    sidebar: {
      titleComponent({ title, type }: { title: string; type: string }) {
        if (type === 'separator') {
          return <span className="cursor-default">{title}</span>
        }
        return <>{title}</>
      },
      defaultMenuCollapseLevel: theme.layout.sidebar?.defaultCollapsed ? 0 : 1,
      toggleButton: theme.layout.sidebar?.collapsible ?? true,
    },
    
    toc: {
      backToTop: theme.features.backToTop,
    },
    
    editLink: theme.navigation.editLink?.enabled ? {
      text: theme.navigation.editLink.text
    } : false,
    
    feedback: theme.navigation.feedback?.enabled ? {
      content: theme.navigation.feedback.content,
      labels: theme.navigation.feedback.labels
    } : false,
    
    search: theme.navigation.search?.enabled ? {
      placeholder: theme.navigation.search.placeholder
    } : false,
    
    banner: theme.features.banner?.enabled ? {
      key: theme.features.banner.key,
      text: theme.features.banner.content
    } : undefined,
    
    useNextSeoProps() {
      return {
        titleTemplate: theme.seo.titleTemplate
      }
    }
  }
}

// Higher-order component to wrap Nextra theme with our provider
export const withThemeProvider = (Component: React.ComponentType<any>, customTheme?: any) => {
  return function ThemedComponent(props: any) {
    const { ThemeProvider } = require('../components/ThemeProvider')
    
    return (
      <ThemeProvider theme={customTheme}>
        <Component {...props} />
      </ThemeProvider>
    )
  }
}
