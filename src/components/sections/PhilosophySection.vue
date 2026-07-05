<script setup lang="ts">
import SectionShell from '@/components/ui/SectionShell.vue'
import RevealItem from '@/components/ui/RevealItem.vue'
import { principles } from '@/data/philosophy'
import { t } from '@/i18n'
</script>

<template>
  <SectionShell
    id="philosophy"
    :eyebrow="{ en: 'Approach', id: 'Pendekatan' }"
    index="06"
    :title="{ en: 'How I think about the work', id: 'Cara saya memandang pekerjaan' }"
    :lead="{
      en: `Four principles I don't compromise on — the reasons the systems I build tend to stay standing.`,
      id: 'Empat prinsip yang tidak saya kompromikan — alasan sistem yang saya bangun cenderung tetap kokoh.',
    }"
  >
    <div class="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
      <RevealItem
        v-for="(p, i) in principles"
        :key="p.index"
        :delay="i * 90"
        as="article"
        class="group relative bg-canvas"
      >
        <div
          class="flex h-full flex-col p-6 transition-colors duration-500 ease-out-expo group-hover:bg-surface/60 sm:p-8 md:p-9"
        >
          <div class="flex items-baseline gap-4">
            <span
              class="font-mono text-h2 leading-none tracking-tight text-ink-faint/60 transition-colors duration-500 ease-out-expo group-hover:text-accent"
            >
              {{ p.index }}
            </span>
            <span
              aria-hidden="true"
              class="mt-1 h-px flex-1 origin-left scale-x-0 bg-accent-line transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
            ></span>
          </div>

          <h3 class="mt-6 text-h3 font-semibold tracking-tight text-balance">
            {{ t(p.title) }}
          </h3>
          <p class="mt-3 text-ink-muted leading-relaxed text-pretty">
            {{ t(p.body) }}
          </p>
        </div>
      </RevealItem>
    </div>
  </SectionShell>
</template>
