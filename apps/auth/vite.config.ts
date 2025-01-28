import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
  base: isDev ? '/' : '/frontend-architecture/auth/',
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'AuthApp',
      fileName: 'auth'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@apps': path.resolve(__dirname, '../../apps'),
      '@packages': path.resolve(__dirname, '../../packages')
    }
  },
  server: {
    port: 5001,
    cors: true
  }
})
