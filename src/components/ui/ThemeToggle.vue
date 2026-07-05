<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import AppIcon from '@/components/icons/AppIcon.vue'

const { theme, toggle } = useTheme()
</script>

<template>
  <button
    type="button"
    class="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/50 text-ink-muted transition-colors duration-300 hover:border-line-strong hover:text-ink"
    :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
    @click="toggle"
  >
    <Transition name="swap" mode="out-in">
      <AppIcon :key="theme" :name="theme === 'dark' ? 'moon' : 'sun'" :size="18" />
    </Transition>
  </button>
</template>

<style scoped>
.swap-enter-active,
.swap-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.swap-enter-from {
  opacity: 0;
  transform: rotate(-40deg) scale(0.6);
}
.swap-leave-to {
  opacity: 0;
  transform: rotate(40deg) scale(0.6);
}
</style>
