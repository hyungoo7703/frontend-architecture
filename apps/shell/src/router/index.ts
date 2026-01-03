import { createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'

const isDev = process.env.NODE_ENV === 'development'

// 마이크로프론트엔드 컨테이너 컴포넌트 생성 함수
const createMfeContainer = (appName: string, port: number) => {
  const devSrc = `http://localhost:${port}`
  // GitHub Pages 배포 경로에 맞게 수정
  const prodSrc = `/frontend-architecture/${appName}/`

  return {
    render() {
      return h('iframe', {
        src: isDev ? devSrc : prodSrc,
        style: 'width: 100%; height: calc(100vh - 60px); border: none;',
        frameborder: '0'
      })
    }
  }
}

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
          component: createMfeContainer('auth', 5001)
        },
        // 대시보드 마이크로프론트엔드
        {
          path: 'dashboard',
          name: 'dashboard',
          component: createMfeContainer('dashboard', 5002)
        },
        // 설정 마이크로프론트엔드
        {
          path: 'settings',
          name: 'settings',
          component: createMfeContainer('settings', 5003)
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