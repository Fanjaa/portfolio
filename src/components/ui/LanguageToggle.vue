<script setup lang="ts">
import { locale, setLocale, type Locale } from '@/i18n'

const options: Locale[] = ['en', 'id']
</script>

<template>
  <div
    class="flex items-center rounded-full border border-line bg-surface/50 p-0.5"
    role="group"
    aria-label="Language"
  >
    <button
      v-for="l in options"
      :key="l"
      type="button"
      class="rounded-full px-2.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-wide transition-colors duration-200"
      :class="locale === l ? 'bg-accent text-accent-ink' : 'text-ink-faint hover:text-ink'"
      :aria-pressed="locale === l"
      @click="setLocale(l)"
    >
      {{ l }}
    </button>
  </div>
</template>
