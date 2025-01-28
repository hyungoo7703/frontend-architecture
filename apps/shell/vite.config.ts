import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
  base: isDev ? '/' : '/frontend-architecture/', // 개발환경에서는 base를 '/'로
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@apps': path.resolve(__dirname, '../../apps'),
      '@packages': path.resolve(__dirname, '../../packages')
    }
  },
  server: {
    port: 5173
  }
})