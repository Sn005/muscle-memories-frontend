import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package.json'
import * as dotenv from 'dotenv'
import ja from 'vuetify/es5/locale/ja'

dotenv.config()

export default {
  mode: 'spa',
  srcDir: 'src/',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  devModules: ['@nuxtjs/vuetify'],
  vuetify: {
    theme: {
      dark: false
    },
    lang: {
      locales: { ja },
      current: 'ja'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    /*
     ** Set middleware
     */
    middleware: 'is-auth'
  },
  /*
   ** Set env
   */
  env: {
    API_URL: process.env.API_URL,
    IS_OFFLINE: process.env.IS_OFFLINE
  }
}
