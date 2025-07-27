import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sora Documentation",
  description: "App and Modules Documentation",
  srcDir: './src/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'assets/sora-logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Modules', link: '/modules/getting-started' },
      { text: 'App', link: '/app/getting-started' },
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Modules',
        items: [
          { text: 'Getting Started', link: '/modules/getting-started' },
          { text: 'JSON Schema', link: '/modules/json-schema' },
        ]
      },
      {
        text: 'App',
        items: [
          { text: 'Getting Started', link: '/app/getting-started' },
          { text: 'Configuration', link: '/app/configuration' },
          { text: 'Modules', link: '/app/modules' },
          { text: 'API', link: '/app/api' }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'About Sora', link: '/about' },
          { text: 'Contributing', link: '/contributing' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cranci1/Sora' }
    ]
  }
})
