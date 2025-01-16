<template>
  <div class="home-container">
    <div class="hero-section">
      <h1>Micro Frontend Architecture</h1>
      <p>확장 가능하고 모듈화된 프론트엔드 솔루션</p>

      <div class="feature-highlights">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="feature-card"
          @click="navigateToFeature(feature.route)"
        >
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const features = [
  {
    title: '인증 시스템',
    description: '안전하고 확장 가능한 사용자 인증',
    icon: '🔐',
    route: '/auth',
  },
  {
    title: '대시보드',
    description: '실시간 데이터 시각화',
    icon: '📊',
    route: '/dashboard',
  },
  {
    title: '설정 관리',
    description: '유연한 사용자 환경 설정',
    icon: '⚙️',
    route: '/settings',
  },
]

const navigateToFeature = (route: string) => {
  router.push(route)
}
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  background-color: var(--background-color);
  color: var(--text-color);
}

.hero-section {
  text-align: center;
  max-width: 800px;
  padding: 2rem;
}

.feature-highlights {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background-color: var(--primary-color);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  width: 250px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}
</style>
