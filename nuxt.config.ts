// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],


  site: {
    url: 'https://gtec.com.my', // update this when you deploy
    name: 'GTEC Sdn Bhd',
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s | GTEC Sdn Bhd',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'author', content: 'GTEC Sdn Bhd' },
        { property: 'og:site_name', content: 'GTEC Sdn Bhd' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://gtec.com.my/favicon.ico' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://gtec.com.my/favicon.ico' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ]
    },
  },
})