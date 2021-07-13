import tailwindConfig from './tailwind.config'

export default {
  ssr: false,
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'overflow-hidden min-h-screen bg-black dark:bg-gray-900',
    },
    title: 'Sete Três',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, height=device-height, user-scalable=no, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'QWxzbyBLbm93biBhcyBHdWlsaGVybWUgUGFuZ25vdHRh',
      },

      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Sete Três' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'QWxzbyBLbm93biBhcyBHdWlsaGVybWUgUGFuZ25vdHRh',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://setetres.st/images/share-v13.png',
      },
      { hid: 'og:url', property: 'og:url', content: 'https://setetres.st' },

      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Sete Três',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'QWxzbyBLbm93biBhcyBHdWlsaGVybWUgUGFuZ25vdHRh',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://setetres.st/images/share-v13.png',
      },
    ],
    link: [
      { rel: 'icon', href: '/favicon.svg' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css2?family=Creepster&display=swap',
      },
    ],
  },
  loading: {
    color: '#000000',
    failedColor: '#e02020',
    throttle: 0,
  },
  css: ['@/assets/css/application.css'],
  plugins: [
    {
      src: '~/plugins/ga.js',
      mode: 'client',
    },
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {},
  tailwindcss: {
    exposeConfig: true,
  },
}
