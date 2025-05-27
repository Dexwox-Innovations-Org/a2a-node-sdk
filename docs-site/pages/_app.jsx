import { useRouter } from 'next/router'
import { ThemeProvider } from '../components/ThemeProvider'

const CustomFooter = () => (
  <footer className="nx-footer">
    <style jsx global>{`
      /* Navbar styling to match footer dark mode colors - applied to both light and dark modes */
      .nextra-nav-container {
        background-color: #111827 !important;
        border-bottom: 1px solid #374151 !important;
      }
      
      .nextra-nav-container .nextra-nav-container-blur {
        background-color: rgba(17, 24, 39, 0.8) !important;
      }
      
      .nextra-nav-container a,
      .nextra-nav-container button,
      .nextra-nav-container span {
        color: #d1d5db !important;
      }
      
      .nextra-nav-container .nx-text-primary-600 {
        color: #60a5fa !important;
      }
      
      /* Search input styling - multiple selectors to ensure it works */
      .nextra-nav-container input[type="search"],
      .nextra-nav-container input[placeholder*="Search"],
      .nextra-nav-container .nextra-search input,
      nav input[type="search"],
      nav input[placeholder*="Search"],
      header input[type="search"],
      header input[placeholder*="Search"] {
        background-color: #374151 !important;
        border-color: #4b5563 !important;
        color: #d1d5db !important;
        border: 1px solid #4b5563 !important;
      }
      
      .nextra-nav-container input[type="search"]::placeholder,
      .nextra-nav-container input[placeholder*="Search"]::placeholder,
      .nextra-nav-container .nextra-search input::placeholder,
      nav input[type="search"]::placeholder,
      nav input[placeholder*="Search"]::placeholder,
      header input[type="search"]::placeholder,
      header input[placeholder*="Search"]::placeholder {
        color: #9ca3af !important;
      }
      
      /* Keyboard shortcut (kbd) styling for both light and dark modes */
      kbd,
      .nextra-nav-container kbd,
      nav kbd,
      header kbd {
        background-color: #374151 !important;
        color: #d1d5db !important;
        border: 1px solid #4b5563 !important;
        border-radius: 4px !important;
        padding: 2px 6px !important;
        font-size: 12px !important;
        font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace !important;
        font-weight: 500 !important;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
      }
      
      /* Additional dark mode specific styles */
      @media (prefers-color-scheme: dark) {
        .nextra-nav-container {
          background-color: #111827 !important;
          border-bottom: 1px solid #374151 !important;
        }
        
        .nextra-nav-container .nextra-nav-container-blur {
          background-color: rgba(17, 24, 39, 0.8) !important;
        }
        
        .nextra-nav-container a,
        .nextra-nav-container button,
        .nextra-nav-container span {
          color: #d1d5db !important;
        }
        
        .nextra-nav-container .nx-text-primary-600 {
          color: #60a5fa !important;
        }
        
        .nextra-nav-container input[type="search"],
        .nextra-nav-container input[placeholder*="Search"],
        .nextra-nav-container .nextra-search input {
          background-color: #374151 !important;
          border-color: #4b5563 !important;
          color: #d1d5db !important;
        }
        
        .nextra-nav-container input[type="search"]::placeholder,
        .nextra-nav-container input[placeholder*="Search"]::placeholder,
        .nextra-nav-container .nextra-search input::placeholder {
          color: #9ca3af !important;
        }
        
        kbd,
        .nextra-nav-container kbd,
        nav kbd,
        header kbd {
          background-color: #374151 !important;
          color: #d1d5db !important;
          border: 1px solid #4b5563 !important;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
        }
      }
      
      :global(.dark) .nextra-nav-container {
        background-color: #111827 !important;
        border-bottom: 1px solid #374151 !important;
      }
      
      :global(.dark) .nextra-nav-container .nextra-nav-container-blur {
        background-color: rgba(17, 24, 39, 0.8) !important;
      }
      
      :global(.dark) .nextra-nav-container a,
      :global(.dark) .nextra-nav-container button,
      :global(.dark) .nextra-nav-container span {
        color: #d1d5db !important;
      }
      
      :global(.dark) .nextra-nav-container .nx-text-primary-600 {
        color: #60a5fa !important;
      }
      
      :global(.dark) .nextra-nav-container input[type="search"],
      :global(.dark) .nextra-nav-container input[placeholder*="Search"],
      :global(.dark) .nextra-nav-container .nextra-search input {
        background-color: #374151 !important;
        border-color: #4b5563 !important;
        color: #d1d5db !important;
      }
      
      :global(.dark) .nextra-nav-container input[type="search"]::placeholder,
      :global(.dark) .nextra-nav-container input[placeholder*="Search"]::placeholder,
      :global(.dark) .nextra-nav-container .nextra-search input::placeholder {
        color: #9ca3af !important;
      }
      
      :global(.dark) kbd,
      :global(.dark) .nextra-nav-container kbd,
      :global(.dark) nav kbd,
      :global(.dark) header kbd {
        background-color: #374151 !important;
        color: #d1d5db !important;
        border: 1px solid #4b5563 !important;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
      }
      
      /* Footer styling */
      .nx-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 24px 16px;
        border-top: 1px solid;
        border-color: #e5e7eb;
        margin-top: 48px;
        background-color: #f9fafb;
        width: 100%;
      }
      
      .nx-footer-copyright {
        font-size: 14px;
        color: #374151;
        text-align: center;
        font-weight: 500;
      }
      
      .nx-footer-tagline {
        font-size: 12px;
        color: #6b7280;
        text-align: center;
        font-style: italic;
      }
      
      .nx-footer-brand {
        color: #2563eb;
        font-weight: 700;
        text-decoration: none;
        transition: color 0.2s ease;
      }
      
      .nx-footer-brand:hover {
        color: #1d4ed8;
        text-decoration: underline;
      }
      
      @media (prefers-color-scheme: dark) {
        .nx-footer {
          background-color: #111827;
          border-color: #374151;
        }
        
        .nx-footer-copyright {
          color: #d1d5db;
        }
        
        .nx-footer-tagline {
          color: #9ca3af;
        }
        
        .nx-footer-brand {
          color: #60a5fa;
        }
        
        .nx-footer-brand:hover {
          color: #93c5fd;
        }
      }
      
      :global(.dark) .nx-footer {
        background-color: #111827;
        border-color: #374151;
      }
      
      :global(.dark) .nx-footer-copyright {
        color: #d1d5db;
      }
      
      :global(.dark) .nx-footer-tagline {
        color: #9ca3af;
      }
      
      :global(.dark) .nx-footer-brand {
        color: #60a5fa;
      }
      
      :global(.dark) .nx-footer-brand:hover {
        color: #93c5fd;
      }
    `}</style>
    <div className="nx-footer-copyright">
      © {new Date().getFullYear()} <a href="https://dexwox.com" target="_blank" rel="noopener noreferrer" className="nx-footer-brand">Dexwox Innovations</a>. All rights reserved.
    </div>
    <div className="nx-footer-tagline">
      A2A Node SDK Documentation - Empowering Agent-to-Agent Communication
    </div>
  </footer>
)

export default function App({ Component, pageProps }) {
  const router = useRouter()
  
  // You can customize the theme here by passing a theme object
  const customTheme = {
    // Example customizations:
    // colors: {
    //   primary: {
    //     hue: 280,
    //     saturation: 100
    //   }
    // },
    // brand: {
    //   name: 'Custom A2A Docs'
    // }
  }
  
  return (
    <ThemeProvider theme={customTheme}>
      <Component {...pageProps} />
      <CustomFooter />
    </ThemeProvider>
  )
}
