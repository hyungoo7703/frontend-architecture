import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@packages': path.resolve(__dirname, '../../packages'),
      '@apps': path.resolve(__dirname, '../')
    }
  }
})