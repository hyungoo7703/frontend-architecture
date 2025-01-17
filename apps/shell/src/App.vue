<template>
  <div id="app" :class="{ 'dark-theme': isDarkTheme }">
    <LoadingOverlay v-if="isLoading" />
    <ErrorBoundary>
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </ErrorBoundary>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useGlobalStore } from '@packages/utils'
import { Theme } from '@packages/types'
import LoadingOverlay from './components/LoadingOverlay.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'

const store = useGlobalStore()

const isLoading = computed(() => store.isLoading)
const isDarkTheme = computed(() => store.theme === Theme.DARK)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    store.setTheme(savedTheme as Theme)
  }
})
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 테마 변수 정의 */
:root {
  --primary-color: #4CAF50;
  --background-color: #ffffff;
  --text-color: #333333;
}

.dark-theme {
  --primary-color: #45a049;
  --background-color: #1a1a1a;
  --text-color: #ffffff;
}

/* 전역 스타일 */
body {
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  color: var(--text-color);
}
</style>