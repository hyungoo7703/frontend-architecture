<template>
  <button
    :class="['shared-button', variantClass, sizeClass]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot>Button</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type ButtonVariant = "primary" | "secondary" | "danger"
type ButtonSize = "small" | "medium" | "large"

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "medium",
  disabled: false,
})

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void
}>()

const variantClass = computed(() => `btn-${props.variant}`)
const sizeClass = computed(() => `btn-${props.size}`)

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit("click", event)
  }
}
</script>

<style scoped>
.shared-button {
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #4caf50;
  color: white;
}
.btn-secondary {
  background-color: #f1f1f1;
  color: black;
}
.btn-danger {
  background-color: #f44336;
  color: white;
}

.btn-small {
  padding: 4px 8px;
  font-size: 12px;
}
.btn-medium {
  padding: 8px 16px;
  font-size: 14px;
}
.btn-large {
  padding: 12px 24px;
  font-size: 16px;
}

.shared-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
