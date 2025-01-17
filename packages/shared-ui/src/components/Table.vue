<template>
  <div class="table-wrapper">
    <!-- 검색 및 필터링 영역 -->
    <div v-if="searchable" class="table-controls">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="테이블 내용 검색..."
          class="table-search"
        />
      </div>
    </div>

    <table class="shared-table">
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            @click="handleSort(column.key)"
            :class="{ sortable: column.sortable }"
          >
            {{ column.label }}
            <span v-if="column.sortable" class="sort-icon">
              {{
                sortKey === column.key
                  ? sortOrder === "asc"
                    ? "↑"
                    : "↓"
                  : "↕"
              }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredData" :key="index">
          <td v-for="column in columns" :key="column.key">
            <slot :name="column.key" :item="item">
              {{ item[column.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 페이지네이션 -->
    <div v-if="pageable" class="table-pagination">
      <button :disabled="currentPage === 1" @click="currentPage--">이전</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button :disabled="currentPage === totalPages" @click="currentPage++">
        다음
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
}

interface Props {
  columns: Column[];
  data: any[];
  searchable?: boolean;
  pageable?: boolean;
  itemsPerPage?: number;
}

const props = withDefaults(defineProps<Props>(), {
  searchable: false,
  pageable: false,
  itemsPerPage: 10,
});

const searchQuery = ref("");
const sortKey = ref("");
const sortOrder = ref<"asc" | "desc">("asc");
const currentPage = ref(1);

// 검색 및 정렬 로직
const filteredData = computed(() => {
  let result = [...props.data];

  // 검색
  if (searchQuery.value) {
    result = result.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );
  }

  // 정렬
  if (sortKey.value) {
    result.sort((a, b) => {
      const aVal = a[sortKey.value];
      const bVal = b[sortKey.value];
      return sortOrder.value === "asc"
        ? aVal > bVal
          ? 1
          : -1
        : aVal < bVal
          ? 1
          : -1;
    });
  }

  // 페이지네이션
  if (props.pageable) {
    const start = (currentPage.value - 1) * props.itemsPerPage;
    return result.slice(start, start + props.itemsPerPage);
  }

  return result;
});

const totalPages = computed(() =>
  Math.ceil(props.data.length / props.itemsPerPage)
);

const handleSort = (key: string) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  } else {
    sortKey.value = key;
    sortOrder.value = "asc";
  }
};
</script>

<style scoped>
.table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.shared-table {
  width: 100%;
  border-collapse: collapse;
  background-color: var(--background-color);
  color: var(--text-color);
}

.shared-table th,
.shared-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid var(--border-color, #eee);
}

.shared-table th {
  background-color: var(--primary-color);
  color: white;
}

.shared-table th.sortable {
  cursor: pointer;
}

.shared-table th.sortable:hover {
  background-color: var(--primary-color-dark, #3d8b40);
}

.table-controls {
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: var(--background-color);
  border-radius: 8px;
  border: 1px solid var(--border-color, #eee);
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 300px;
}

.search-icon {
  position: absolute;
  left: 12px;
  color: var(--text-color);
  opacity: 0.5;
}

.table-search {
  width: 100%;
  padding: 10px 10px 10px 35px;
  border: 2px solid var(--primary-color);
  border-radius: 8px;
  font-size: 1rem;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: all 0.3s ease;
}

.table-search:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--primary-color-light, rgba(76, 175, 80, 0.2));
}

.table-search::placeholder {
  color: var(--text-color);
  opacity: 0.5;
}

.table-pagination {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  align-items: center;
}

.table-pagination button {
  padding: 4px 8px;
  border: none;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.table-pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

tr:nth-child(even) {
  background-color: var(--background-color-alt, #f9f9f9);
}

tr:hover {
  background-color: var(--hover-color, #f5f5f5);
}

/* 다크모드 대응 */
:root[data-theme="dark"] .shared-table,
.dark-theme .shared-table {
  border-color: var(--border-color, #444);
}

:root[data-theme="dark"] .shared-table td,
.dark-theme .shared-table td {
  border-color: var(--border-color, #444);
}

:root[data-theme="dark"] tr:nth-child(even),
.dark-theme tr:nth-child(even) {
  background-color: var(--background-color-alt, #2a2a2a);
}

:root[data-theme="dark"] tr:hover,
.dark-theme tr:hover {
  background-color: var(--hover-color, #333);
}

/* 페이지네이션 다크모드 대응 */
:root[data-theme="dark"] .table-pagination button,
.dark-theme .table-pagination button {
  background-color: var(--primary-color);
  color: white;
}

:root[data-theme="dark"] .table-pagination button:disabled,
.dark-theme .table-pagination button:disabled {
  background-color: var(--background-color-alt, #2a2a2a);
  color: var(--text-color);
  opacity: 0.5;
}
</style>
