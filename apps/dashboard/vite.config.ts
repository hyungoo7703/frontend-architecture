import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const isDev = process.env.NODE_ENV === 'development'
const appName = 'dashboard'

export default defineConfig({
  base: isDev ? '/' : '/frontend-architecture/',
  plugins: [vue()],
  build: {
    outDir: isDev ? 'dist' : `dist/${appName}`,
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'DashboardApp',
      fileName: (format) => `${appName}.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        entryFileNames: 'dashboard.js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
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
    port: 5002,
    cors: true,
    host: true,
    strictPort: true
  }
})