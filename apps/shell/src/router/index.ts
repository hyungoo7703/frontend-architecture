import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: 'auth',
          name: 'auth',
          // 초기에는 빈 페이지로 설정
          component: () => import('../views/EmptyView.vue'),
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('../views/EmptyView.vue')
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('../views/EmptyView.vue')
        }
      ]
    }
  ]
})

export default router
