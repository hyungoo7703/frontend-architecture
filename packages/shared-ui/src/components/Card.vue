<template>
  <div :class="['shared-card', `card-${variant}`]" @click="handleClick">
    <div v-if="icon" class="card-icon">{{ icon }}</div>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
type CardVariant = "default" | "outlined" | "elevated";

interface Props {
  title: string;
  description?: string;
  icon?: string;
  variant?: CardVariant;
  clickable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  description: "",
  variant: "default",
  clickable: false,
  icon: "",
});

const emit = defineEmits<{
  (e: "click"): void;
}>();

const handleClick = () => {
  if (props.clickable) {
    emit("click");
  }
};
</script>

<style scoped>
.shared-card {
  border-radius: 8px;
  padding: 16px;
  transition: all 0.3s ease;
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}
</style>
