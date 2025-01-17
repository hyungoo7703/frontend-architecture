<template>
  <div class="layout-container">
    <header class="header">
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/auth">Auth</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/settings">Settings</router-link>
        
        <div class="theme-switch">
          <label class="switch">
            <input 
              type="checkbox" 
              :checked="currentTheme === 'dark'"
              @change="toggleTheme"
            >
            <span class="slider round">
              <span class="icon light">☀️</span>
              <span class="icon dark">🌙</span>
            </span>
          </label>
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

const currentTheme = computed(() => store.theme)

const toggleTheme = () => {
  const newTheme = currentTheme.value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
  store.setTheme(newTheme)
  localStorage.setItem('theme', newTheme)
}
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  padding: 1rem;
  background: var(--primary-color);
}

.nav {
  display: flex;
  gap: 1rem;
}

.theme-switch {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
}

.slider.round {
  border-radius: 34px;
}

.slider.round::before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:checked + .slider::before {
  transform: translateX(26px);
}

.icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
}

.icon.light {
  right: 6px;
}

.icon.dark {
  left: 6px;
}

.main-content {
  flex: 1;
  padding: 2rem;
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
