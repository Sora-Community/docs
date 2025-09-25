import { withPwa } from '@vite-pwa/vitepress'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  title: "Sora Documentation",
  description: "App and Modules Documentation",
  srcDir: './src/',
  lastUpdated: true,
  base: '/docs/',

  sitemap: {
    hostname: 'https://sora.jm26.net/docs/'
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/sora-logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Modules', link: '/modules/getting-started' },
      { text: 'About', link: '/about/sora' },
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Modules',
        items: [
          { text: 'Quickstart', link: '/modules/quickstart' },
          { text: 'Getting Started', link: '/modules/getting-started' },
          { text: 'JSON Schema', link: '/modules/json-schema' },
          {
            text: 'Module Functions', 
            link: '/modules/module-functions',
            items: [
              { text: 'searchResults', link: '/modules/module-functions/searchResults' },
              { text: 'extractDetails', link: '/modules/module-functions/extractDetails' },
              { text: 'extractEpisodes', link: '/modules/module-functions/extractEpisodes' },
              { text: 'extractStreamUrl', link: '/modules/module-functions/extractStreamUrl' }
            ]
          },
          { text: 'Tips & Troubleshooting', link: '/modules/tips-and-troubleshooting.md' },
          { text: 'Distributing', link: '/modules/distributing' },
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'About Sora', link: '/about/sora' },
          { text: 'Our Team', link: '/about/team' },
        ]
      }
    ],

    footer: {
      message: 'Made with ❤️ by Cufiy',
      copyright: 'Copyright © 2025 Sora Team. All rights reserved.'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cranci1/Sora' },
      { icon: 'discord', link: 'https://go.jm26.net/sora-discord' }
    ],
    externalLinkIcon: true,
    editLink: {
      pattern: 'https://github.com/Sora-Community/docs/edit/main/src/:path'
    }
  },
  /* Vite PWA Options */
  pwa: {
    mode: 'development',
    base: '/docs/',
    scope: '/docs/',
    includeAssets: ['favicon.ico', 'sora-logo.png'],
    registerType: 'prompt',
    // Workbox configuration
    workbox: {
      globDirectory: '.vitepress/dist/',
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
            }
          }
        }
      ]
    },
    // Manifest configuration
    manifest: {
      name: 'Sora Documentation',
      short_name: 'Sora Docs',
      description: 'Complete documentation for Sora app and module development - your guide to building streaming modules',
      theme_color: '#ef630b',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'any',
      scope: '/docs/',
      start_url: '/docs/',
      lang: 'en',
      categories: ['productivity', 'developer', 'documentation'],
      icons: [
        {
          src: 'sora-logo.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },
    // Development options
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/docs/',
      navigateFallbackAllowlist: [/^\/docs\//],
      type: 'module'
    }
  }
}))
