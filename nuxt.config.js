export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'website',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // 'https://eth-goerli.g.alchemy.com/v2/UONWDOWpkQCu_nJ-GIlbDUJFHaIpSVwL'
  // http://localhost:8545

  // WALLET_CHECK_ADDRESS: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
  // USERS_ADDRESS: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
  // PROJECT_ADDRESS: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  env: {
    VIEW_NODE_URL: process.env.VIEW_NODE_URL || 'http://localhost:8545',
    PROJECT_ADDRESS: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    USERS_ADDRESS: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
    WALLET_CHECK_ADDRESS: '0x9f17e05958Fa0EFbA8F6fD5CB22c51c00eb3B315',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/web3.js',
    '~/plugins/web3/issue.js',
    '~/plugins/web3/project.js',
    '~/plugins/web3/users.js',
    '~/plugins/web3/walletCheck.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/postcss8'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/http'],

  serverMiddleware: {
    '/api': '~/api',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
