<script setup lang="ts">
import { socials } from '@/data/profile'
import AppIcon from '@/components/icons/AppIcon.vue'

withDefaults(defineProps<{ size?: number }>(), { size: 18 })
</script>

<template>
  <ul class="flex items-center gap-2">
    <li v-for="s in socials" :key="s.label">
      <a
        :href="s.href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`${s.label} — ${s.handle}`"
        :title="s.label"
        class="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/40 text-ink-muted transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-accent-line hover:text-accent"
      >
        <AppIcon :name="s.icon" :size="size" />
      </a>
    </li>
  </ul>
</template>
