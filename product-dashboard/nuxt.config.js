// product-dashboard/nuxt.config.js
export default {
  server: {
    port: 3000, // Este puerto será mapeado al puerto 3002 por Docker
  },
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'http://localhost:3000', // URL del backend
  },
  components: true,
}
