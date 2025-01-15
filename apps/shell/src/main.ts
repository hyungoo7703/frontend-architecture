import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { setupMicroFrontends } from './plugins/setup'

const app = createApp(App)
const pinia = createPinia()

setupMicroFrontends()

app.use(router)
   .use(pinia)
   .mount('#app')
