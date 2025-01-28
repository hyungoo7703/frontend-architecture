import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const mount = (el: Element) => {
  const app = createApp(App)
  app.use(router)
  app.mount(el)
}

// 개발 환경에서 바로 마운트
if (process.env.NODE_ENV === 'development') {
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
} else {
  // 프로덕션 환경에서는 이벤트 리스너 사용
  window.addEventListener('settings-loaded', (event) => {
    const container = document.querySelector('#settings-container')
    if (container) {
      mount(container)
    }
  })
}

export { mount }