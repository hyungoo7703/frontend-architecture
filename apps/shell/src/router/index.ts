import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory('/frontend-architecture/'),
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
        // 인증 마이크로프론트엔드로 이동
        {
          path: 'auth',
          name: 'auth',
          component: () => import('../views/EmptyView.vue')
          // 실제 auth 앱의 메인 컴포넌트로 이동
          // component: () => import('@apps/auth/App.vue')
        },
        // 대시보드 마이크로프론트엔드로 이동
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('../views/EmptyView.vue')
          // 실제 dashboard 앱의 메인 컴포넌트로 이동
          // component: () => import('@apps/dashboard/App.vue')
        },
        // 설정 마이크로프론트엔드로 이동
        {
          path: 'settings',
          name: 'settings',
          component: () => import('../views/EmptyView.vue')
          // 실제 settings 앱의 메인 컴포넌트로 이동
          // component: () => import('@apps/settings/App.vue')
        },
        // 공통 UI 페이지 추가
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
