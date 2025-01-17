<template>
  <div class="components-container">
    <h1>공통 UI 컴포넌트</h1>

    <section class="component-section">
      <h2>1. 버튼</h2>
      <div class="component-showcase">
        <SharedButton variant="primary">Primary</SharedButton>
        <SharedButton variant="secondary">Secondary</SharedButton>
        <SharedButton variant="danger">Danger</SharedButton>
      </div>
      <div class="component-props">
        <h3>Props</h3>
        <SharedTable :columns="propsColumns" :data="buttonPropsData" />
      </div>
    </section>

    <section class="component-section">
      <h2>2. 카드</h2>
      <div class="component-showcase">
        <SharedCard title="기본 카드" description="기본 카드 컴포넌트" />
        <SharedCard title="Outlined 카드" description="테두리가 있는 카드" variant="outlined" />
      </div>
      <div class="component-props">
        <h3>Props</h3>
        <SharedTable :columns="propsColumns" :data="cardPropsData" />
      </div>
    </section>

    <section class="component-section">
      <h2>3. 아이콘</h2>
      <div class="component-showcase">
        <SharedIcon name="🏠" size="small" color="primary" />
        <SharedIcon name="⚙️" size="medium" color="secondary" />
        <SharedIcon name="🔐" size="large" color="danger" />
      </div>
      <div class="icon-description">
        <p>크기: small, medium, large</p>
        <p>색상: primary, secondary, danger</p>
      </div>
      <div class="component-props">
        <h3>Props</h3>
        <SharedTable :columns="propsColumns" :data="iconPropsData" />
      </div>
    </section>

    <section class="component-section">
      <h2>4. 테이블</h2>
      <p>기능: 정렬, 검색, 페이지네이션 지원</p>
      <div class="component-showcase table-showcase">
        <SharedTable
          :columns="tableColumns"
          :data="tableData"
          :searchable="true"
          :pageable="true"
          :items-per-page="5"
        />
      </div>
      <div class="component-props">
        <h3>Props</h3>
        <SharedTable :columns="propsColumns" :data="tablePropsData" />
      </div>
    </section>

    <button 
      v-show="showScrollButton"
      class="scroll-to-top"
      @click="scrollToTop"
    >
      ⬆️
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { SharedButton, SharedCard, SharedIcon, SharedTable } from '@packages/shared-ui'

const propsColumns = [
  { key: 'prop', label: '속성', sortable: true },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
]

const buttonPropsData = [
  {
    prop: 'variant',
    type: 'String',
    default: 'primary',
    description: '버튼 스타일 (primary, secondary, danger)',
  },
  {
    prop: 'size',
    type: 'String',
    default: 'medium',
    description: '버튼 크기 (small, medium, large)',
  },
  {
    prop: 'disabled',
    type: 'Boolean',
    default: 'false',
    description: '버튼 비활성화 여부',
  },
]

const cardPropsData = [
  {
    prop: 'title',
    type: 'String',
    default: '필수',
    description: '카드 제목',
  },
  {
    prop: 'description',
    type: 'String',
    default: '""',
    description: '카드 설명',
  },
  {
    prop: 'variant',
    type: 'String',
    default: 'default',
    description: '카드 스타일 (default, outlined, elevated)',
  },
  {
    prop: 'clickable',
    type: 'Boolean',
    default: 'false',
    description: '클릭 가능 여부',
  },
]

const iconPropsData = [
  {
    prop: 'name',
    type: 'String',
    default: '필수',
    description: '아이콘 이름',
  },
  {
    prop: 'size',
    type: 'String',
    default: 'medium',
    description: '아이콘 크기 (small, medium, large)',
  },
  {
    prop: 'color',
    type: 'String',
    default: 'primary',
    description: '아이콘 색상 (primary, secondary, danger)',
  },
]

const tablePropsData = [
  {
    prop: 'columns',
    type: 'Array',
    default: '필수',
    description: '테이블 컬럼 정의 (key, label, sortable)',
  },
  {
    prop: 'data',
    type: 'Array',
    default: '필수',
    description: '표시할 데이터 배열',
  },
  {
    prop: 'searchable',
    type: 'Boolean',
    default: 'false',
    description: '검색 기능 활성화',
  },
  {
    prop: 'pageable',
    type: 'Boolean',
    default: 'false',
    description: '페이지네이션 활성화',
  },
  {
    prop: 'itemsPerPage',
    type: 'Number',
    default: '10',
    description: '페이지당 항목 수',
  },
]

// 테이블 데모 컬럼
const tableColumns = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: '이름', sortable: true },
  { key: 'email', label: '이메일' },
  { key: 'status', label: '상태' },
]

// 테이블 데모 데이터
const tableData = [
  { id: 1, name: '홍길동', email: 'hong@example.com', status: '활성' },
  { id: 2, name: '김철수', email: 'kim@example.com', status: '대기' },
  { id: 3, name: '이영희', email: 'lee@example.com', status: '비활성' },
  { id: 4, name: '박지민', email: 'park@example.com', status: '활성' },
  { id: 5, name: '최유진', email: 'choi@example.com', status: '대기' },
  { id: 6, name: '정민수', email: 'jung@example.com', status: '활성' },
  { id: 7, name: '강다희', email: 'kang@example.com', status: '비활성' },
]

const showScrollButton = ref(false)

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.components-container {
  padding: 2rem;
  background-color: var(--background-color);
  color: var(--text-color);
}

.component-section {
  margin-bottom: 3rem;
}

.component-section h2 {
  margin-bottom: 1rem;
}

.component-showcase {
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--background-color);
}

.icon-description {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--text-color);
}

.table-showcase {
  display: block;
  width: 100%;
  margin-top: 1rem;
}

.component-props {
  margin-top: 2rem;
}

.props-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.props-table th,
.props-table td {
  border: 1px solid var(--border-color, #eee);
  padding: 0.5rem;
  text-align: left;
}

.props-table th {
  background-color: var(--primary-color);
  color: white;
}

.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 12px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.scroll-to-top:hover {
  background-color: var(--primary-color-dark, #45a049);
  transform: translateY(-2px);
}
</style>
