import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sora Documentation",
  description: "App and Modules Documentation",
  srcDir: './src/',
  lastUpdated: true,

  sitemap: {
    hostname: 'https://sora.jm26.net/docs/'
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'assets/sora-logo.png',
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
          // { text: 'Legacy Documentation', link: '/modules/legacy-documentation' }

        ]
      },
      // {
      //   text: 'App',
      //   items: [
      //     { text: 'Getting Started', link: '/app/getting-started' },
      //     { text: 'Configuration', link: '/app/configuration' },
      //     { text: 'Modules', link: '/app/modules' },
      //     { text: 'API', link: '/app/api' }
      //   ]
      // },
      {
        text: 'About',
        items: [
          { text: 'About Sora', link: '/about/sora' },
          { text: 'Our Team', link: '/about/team' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cranci1/Sora' },
      { icon: 'discord', link: 'https://go.jm26.net/sora-discord' }
    ]
  }
})
