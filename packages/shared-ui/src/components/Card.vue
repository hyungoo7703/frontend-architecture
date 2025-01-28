<template>
  <div :class="['shared-card', `card-${variant}`]" @click="handleClick">
    <div class="card-header">
      <slot name="icon">
        <div v-if="icon" class="card-icon">{{ icon }}</div>
      </slot>
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p v-if="description" class="card-description">{{ description }}</p>
      <slot></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
type CardVariant = "default" | "outlined" | "elevated"

interface Props {
  title: string
  description?: string
  icon?: string
  variant?: CardVariant
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  description: "",
  variant: "default",
  clickable: false,
  icon: "",
})

const emit = defineEmits<{
  (e: "click"): void
}>();

const handleClick = () => {
  if (props.clickable) {
    emit("click")
  }
};
</script>

<style scoped>
.shared-card {
  border-radius: 8px;
  padding: 16px;
  transition: all 0.3s ease;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.card-icon {
  font-size: 2rem;
  margin-right: 12px;
}

.card-default {
  background-color: var(--background-color);
  border: 1px solid #e0e0e0;
}

.card-outlined {
  background-color: transparent;
  border: 2px solid var(--primary-color);
}

.card-elevated {
  background-color: var(--background-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.card-description {
  margin: 8px 0 0;
  color: var(--text-color-secondary);
}

.card-footer {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border-color, #e0e0e0);
}
</style>