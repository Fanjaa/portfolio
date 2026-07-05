<script setup lang="ts">
import SectionShell from '@/components/ui/SectionShell.vue'
import RevealItem from '@/components/ui/RevealItem.vue'
import AppIcon from '@/components/icons/AppIcon.vue'
import { stats, credentials } from '@/data/achievements'
import { t } from '@/i18n'
</script>

<template>
  <SectionShell
    id="achievements"
    :eyebrow="{ en: 'Track record', id: 'Rekam jejak' }"
    index="07"
    :title="{ en: 'Proof of work', id: 'Bukti kerja' }"
    :lead="{
      en: 'Numbers I can stand behind, and the credentials that back them.',
      id: 'Angka yang bisa saya pertanggungjawabkan, plus kredensial yang mendukungnya.',
    }"
  >
    <!-- Stats band -->
    <div class="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
      <RevealItem
        v-for="(s, i) in stats"
        :key="s.value"
        :delay="i * 70"
        class="bg-canvas"
      >
        <div class="flex h-full flex-col gap-2 p-6 sm:p-7">
          <span
            class="font-mono text-h2 leading-none tracking-tight text-gradient tabular-nums"
          >
            {{ s.value }}
          </span>
          <span class="mt-1 text-sm text-ink-muted text-pretty">{{ t(s.label) }}</span>
        </div>
      </RevealItem>
    </div>

    <!-- Credentials -->
    <div class="mt-6 grid gap-5 sm:mt-8 sm:grid-cols-2 sm:gap-6">
      <RevealItem
        v-for="(c, i) in credentials"
        :key="c.org"
        :delay="i * 90"
        as="article"
        class="h-full"
      >
        <div
          class="card group flex h-full flex-col p-6 transition duration-300 ease-out-expo hover:-translate-y-1 hover:border-accent-line/50 sm:p-7"
        >
          <div class="flex items-start justify-between gap-4">
            <span
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent"
            >
              <AppIcon :name="c.icon" :size="19" />
            </span>
            <span class="font-mono text-xs tracking-wide text-ink-faint">{{ c.period }}</span>
          </div>

          <h3 class="mt-5 text-lead font-semibold tracking-tight text-balance">
            {{ t(c.title) }}
          </h3>
          <p class="mt-1 text-ink-muted">{{ c.org }}</p>

          <p
            class="mt-5 border-t border-line pt-4 text-sm text-accent/90 text-pretty"
          >
            {{ t(c.note) }}
          </p>
        </div>
      </RevealItem>
    </div>
  </SectionShell>
</template>
