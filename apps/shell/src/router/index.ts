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
      script.src = `/frontend-architecture/dist/${appName}/${appName}.js`
      await new Promise((resolve, reject) => {
        script.onload = () => {
          console.log(`${appName} script loaded successfully`) // 성공 로그
          resolve(null)
        }
        script.onerror = (error) => {
          console.error(`Error loading ${appName} script:`, error) // 에러 상세 로그
          reject(error)
        }
        document.head.appendChild(script)
      })
      window.dispatchEvent(new CustomEvent(`${appName}-loaded`))
    } catch (error) {
      console.error(`Failed to load ${appName} app:`, error)
    }
  }
}

// 마이크로프론트엔드 컨테이너 컴포넌트 생성 함수
const createMfeContainer = (appName: string) => ({
  template: `<div id="${appName}-container"></div>`,
  mounted() {
    if (!isDev) {
      console.log(`${appName} container mounted`)
      window.dispatchEvent(new CustomEvent(`${appName}-loaded`))
    }
  }
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