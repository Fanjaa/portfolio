<script setup lang="ts">
withDefaults(defineProps<{ label: string; primary?: boolean }>(), { primary: false })
</script>

<template>
  <span
    class="inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[0.72rem] tracking-tight transition-colors duration-300"
    :class="
      primary
        ? 'border-accent-line/60 bg-accent-soft text-accent'
        : 'border-line bg-surface-2/60 text-ink-muted'
    "
  >
    {{ label }}
  </span>
</template>
