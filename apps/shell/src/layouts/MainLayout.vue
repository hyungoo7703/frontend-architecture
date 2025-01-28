<template>
  <div class="layout-container">
    <header class="header">
      <nav class="nav">
        <div class="nav-links">
          <router-link 
            v-for="route in routes" 
            :key="route.path"
            :to="route.path"
            class="nav-link"
            active-class="nav-link-active"
          >
            {{ route.name }}
          </router-link>
        </div>
        
        <div class="theme-switch">
          <button 
            class="theme-button"
            @click="toggleTheme"
            :title="currentTheme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'"
          >
            <span class="theme-icon">{{ currentTheme === 'dark' ? '☀️' : '🌙' }}</span>
          </button>
        </div>
      </nav>
    </header>
    
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <footer class="footer">
      <p>Frontend Architecture Demo</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGlobalStore } from '@packages/utils'
import { Theme } from '@packages/types'

const store = useGlobalStore()

const routes = [
  { path: '/', name: 'Home' },
  // { path: '/auth', name: 'Auth' },
  // { path: '/dashboard', name: 'Dashboard' },
  // { path: '/settings', name: 'Settings' }
]

const currentTheme = computed(() => store.theme)

const toggleTheme = () => {
  const newTheme = currentTheme.value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
  store.setTheme(newTheme)
  localStorage.setItem('theme', newTheme)
  document.documentElement.setAttribute('data-theme', newTheme)
}
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.header {
  padding: 1rem 2rem;
  background: var(--primary-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--text-color-light);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link-active {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}

.theme-button {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.theme-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.theme-icon {
  font-size: 1.2rem;
}

.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.footer {
  padding: 1rem;
  text-align: center;
  background-color: var(--primary-color);
  color: var(--text-color-light);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>