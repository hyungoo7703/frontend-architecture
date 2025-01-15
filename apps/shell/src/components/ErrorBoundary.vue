<template>
  <div>
    <div v-if="error" class="error-container">
      <div class="error-content">
        <h2>오류가 발생했습니다</h2>
        <p>{{ error.message }}</p>
        <button @click="handleReset" class="retry-button">
          다시 시도
        </button>
      </div>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'

const error = ref<Error | null>(null)

onErrorCaptured((err: Error) => {
  error.value = err
  return false // 에러가 상위로 전파되는 것을 방지
})

const handleReset = () => {
  error.value = null
  // 필요한 경우 상태 초기화 로직 추가
}
</script>

<style scoped>
.error-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.error-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 80%;
}

.error-content h2 {
  color: #dc3545;
  margin-bottom: 1rem;
}

.retry-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.retry-button:hover {
  background-color: var(--primary-color-dark);
}
</style>