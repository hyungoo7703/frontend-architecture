<template>
  <div id="settings-container">
    <div class="development-notice">
      <div class="notice-icon">🚧</div>
      <h1>{{ appName }}</h1>
      <p>모듈화된 페이지로서 settings 관련 프로젝트입니다.</p>
      <div class="tech-stack">
        <span>Vue 3</span>
        <span>TypeScript</span>
        <span>Micro Frontend</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const appName = '설정'
</script>

<style scoped>
#settings-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--background-color);
  padding: 2rem;
}

.development-notice {
  text-align: center;
  padding: 3rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.notice-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

p {
  color: var(--text-color-secondary);
  margin-bottom: 2rem;
}

.tech-stack {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.tech-stack span {
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
}
</style>