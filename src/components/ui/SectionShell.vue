<script setup lang="ts">
import RevealItem from './RevealItem.vue'
import { t } from '@/i18n'
import type { LString } from '@/i18n'

withDefaults(
  defineProps<{
    id: string
    eyebrow?: LString | string
    title?: LString | string
    lead?: LString | string
    index?: string
  }>(),
  {},
)
</script>

<template>
  <section :id="id" class="scroll-mt-24 py-20 sm:py-28 md:py-32">
    <div class="shell">
      <header v-if="eyebrow || title" class="mb-12 max-w-2xl sm:mb-16">
        <RevealItem>
          <span v-if="eyebrow" class="eyebrow">
            <span>{{ t(eyebrow) }}</span>
            <span v-if="index" class="ml-2 text-ink-faint/70">/ {{ index }}</span>
          </span>
        </RevealItem>
        <RevealItem :delay="80">
          <h2 v-if="title" class="mt-5 text-h2 font-semibold tracking-tight text-balance">
            {{ t(title) }}
          </h2>
        </RevealItem>
        <RevealItem v-if="lead" :delay="140">
          <p class="mt-4 text-lead text-ink-muted text-pretty">{{ t(lead) }}</p>
        </RevealItem>
        <slot name="header-extra" />
      </header>
      <slot />
    </div>
  </section>
</template>
