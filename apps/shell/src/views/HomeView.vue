<template>
  <div class="home-container">
    <div class="hero-section">
      <h1>Micro Frontend Architecture</h1>
      <p>확장 가능하고 모듈화된 프론트엔드 솔루션</p>

      <div class="feature-highlights">
        <SharedCard
          v-for="feature in features"
          :key="feature.title"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
          variant="elevated"
          class="custom-feature-card"
          :clickable="true"
          @click="navigateToFeature(feature.route)"
        />
      </div>

      <div class="components-section">
        <SharedButton 
          variant="primary" 
          size="large"
          class="view-components-button"
          @click="navigateToComponents"
        >
          공통 UI 컴포넌트 보기
        </SharedButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { SharedCard, SharedButton } from '@packages/shared-ui'

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

const navigateToComponents = () => {
  router.push('/components')
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
  padding: 2rem;
}

.hero-section {
  text-align: center;
  max-width: 1200px;
  padding: 2rem;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-section p {
  font-size: 1.2rem;
  color: var(--text-color-secondary);
  margin-bottom: 3rem;
}

.feature-highlights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.custom-feature-card {
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 2px solid transparent;
  height: 100%;
}

.custom-feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.components-section {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.view-components-button {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--primary-color);
}

.view-components-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

@media (max-width: 900px) {
  .feature-highlights {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .feature-highlights {
    grid-template-columns: 1fr;
  }
}
</style>
