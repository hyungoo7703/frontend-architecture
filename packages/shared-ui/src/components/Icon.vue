<template>
  <span :class="['shared-icon', `icon-${size}`, `icon-${color}`]">
    {{ name }}
  </span>
</template>

<script setup lang="ts">
type IconSize = "small" | "medium" | "large";
type IconColor = "primary" | "secondary" | "danger";

interface Props {
  name: string;
  size?: IconSize;
  color?: IconColor;
}

const props = withDefaults(defineProps<Props>(), {
  size: "medium",
  color: "primary",
});
</script>

<style scoped>
.shared-icon {
  display: inline-block;
  vertical-align: middle;
}

.icon-small {
  font-size: 16px;
}
.icon-medium {
  font-size: 24px;
}
.icon-large {
  font-size: 32px;
}

.icon-primary {
  background-color: var(--primary-color);
}
.icon-secondary {
  background-color: #6c757d;
}
.icon-danger {
  background-color: #dc3545;
}
</style>
