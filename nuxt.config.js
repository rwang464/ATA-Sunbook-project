export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'new_test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
 

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@fortawesome/fontawesome-free/css/all.css',
    '@/assets/global.css',
    '@/assets/common.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    
    
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    prefix: '/api'


  },
  proxy: {
    '/api': {
      target: 'https://api.viator.com/partner',
      pathRewrite: {
        '^/api' : '/'
      },
      changeOrigin: true,
      headers: {
        'exp-api-key': `fc570313-1e61-4cb5-b74d-63a5c5e2fa76`,
        'Accept': 'application/json;version=2.0',
        'Access-Control-Allow-Origin':'*',
        'Accept-Language': 'en-US'
        
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
