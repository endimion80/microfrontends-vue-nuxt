// user-management/nuxt.config.js
export default {
  server: {
    port: 3000 // Este puerto será mapeado al puerto 3001 por Docker
  },
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'http://localhost:3000', // URL del backend
  },
  // Otras configuraciones específicas para user-management
