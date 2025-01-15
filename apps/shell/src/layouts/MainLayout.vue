<template>
  <div class="layout-container">
    <header class="header">
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/auth">Auth</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/settings">Settings</router-link>
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
import { provide } from 'vue'
import { useGlobalStore } from '@packages/utils'

const store = useGlobalStore()
provide('globalStore', store)
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
