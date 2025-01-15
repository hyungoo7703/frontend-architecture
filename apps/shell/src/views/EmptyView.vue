// apps/shell/src/views/EmptyView.vue
<template>
  <div class="empty-view">
    <div class="content">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '페이지 준비 중'
  },
  message: {
    type: String,
    default: '해당 마이크로프론트엔드는 현재 개발 중입니다.'
  }
})
</script>

<style scoped>
.empty-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 2rem;
}

.content {
  text-align: center;
  color: var(--text-color);
}

h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

p {
  color: #666;
}
</style>