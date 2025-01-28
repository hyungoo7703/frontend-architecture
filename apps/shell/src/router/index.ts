import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'

const isDev = process.env.NODE_ENV === 'development'

const loadRemoteApp = async (appName: string, port: number) => {
  if (isDev) {
    window.open(`http://localhost:${port}`, '_blank')
    return false
  } else {
    try {
      const script = document.createElement('script')
      script.type = 'module'
      // GitHub Pages의 정확한 경로 사용
      script.src = `https://hyungoo7703.github.io/frontend-architecture/dist/${appName}/assets/${appName}.js`
      
      console.log(`Loading ${appName} from: ${script.src}`)
      
      await new Promise((resolve, reject) => {
        script.onload = () => {
          console.log(`${appName} script loaded successfully`)
          resolve(null)
        }
        script.onerror = (error) => {
          console.error(`Error loading ${appName} script:`, error)
          reject(error)
        }
        document.head.appendChild(script)
      })
      
      // 스크립트 로드 후 이벤트 발생
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent(`${appName}-loaded`))
      }, 100)
    } catch (error) {
      console.error(`Failed to load ${appName} app:`, error)
    }
  }
}

// 마이크로프론트엔드 컨테이너 컴포넌트 생성 함수
const createMfeContainer = (appName: string) => ({
  template: `<div id="${appName}-container"></div>`
})

const router = createRouter({
  history: createWebHistory(isDev ? '/' : '/frontend-architecture/'),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        // 인증 마이크로프론트엔드
        {
          path: 'auth',
          name: 'auth',
          component: createMfeContainer('auth'),
          beforeEnter: () => loadRemoteApp('auth', 5001)
        },
        // 대시보드 마이크로프론트엔드
        {
          path: 'dashboard',
          name: 'dashboard',
          component: createMfeContainer('dashboard'),
          beforeEnter: () => loadRemoteApp('dashboard', 5002)
        },
        // 설정 마이크로프론트엔드
        {
          path: 'settings',
          name: 'settings',
          component: createMfeContainer('settings'),
          beforeEnter: () => loadRemoteApp('settings', 5003)
        },
        // 공통 UI 컴포넌트
        {
          path: 'components',
          name: 'components',
          component: () => import('../views/ComponentsView.vue')
        }
      ]
    }
  ]
})

export default router