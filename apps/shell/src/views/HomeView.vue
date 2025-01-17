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
          variant="secondary" 
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
  cursor: pointer;
}

.custom-feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  background-color: var(--primary-color);
  color: white;
}

.custom-feature-card button {
  margin-top: 1rem;
}

.components-section {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
</style>
