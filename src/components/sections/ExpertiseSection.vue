<script setup lang="ts">
import SectionShell from '@/components/ui/SectionShell.vue'
import RevealItem from '@/components/ui/RevealItem.vue'
import { expertise } from '@/data/expertise'
import { t } from '@/i18n'
</script>

<template>
  <SectionShell
    id="expertise"
    :eyebrow="{ en: 'Expertise', id: 'Keahlian' }"
    index="02"
    :title="{ en: 'What I actually do', id: 'Yang benar-benar saya kerjakan' }"
    :lead="{
      en: 'Four areas I own in production — where the details are the whole job.',
      id: 'Empat area yang saya pegang penuh di production — di sinilah detail justru jadi inti kerjaannya.',
    }"
  >
    <div class="grid gap-5 sm:grid-cols-2 sm:gap-6">
      <RevealItem
        v-for="(item, i) in expertise"
        :key="item.icon"
        :delay="i * 80"
        as="article"
        class="h-full"
      >
        <div
          class="card group flex h-full flex-col p-6 transition duration-300 ease-out-expo hover:-translate-y-1 hover:border-accent-line/50 sm:p-8"
        >
          <div class="flex items-baseline gap-4">
            <span
              class="font-mono text-sm tabular-nums text-ink-faint/70 transition-colors duration-300 group-hover:text-accent"
              aria-hidden="true"
            >
              0{{ i + 1 }}
            </span>
            <h3 class="text-h3 font-semibold tracking-tight text-balance">{{ t(item.title) }}</h3>
          </div>

          <p class="mt-4 text-ink-muted leading-relaxed text-pretty">{{ t(item.blurb) }}</p>

          <ul class="mt-6 space-y-3 border-t border-line pt-6 text-sm">
            <li v-for="point in item.points" :key="point.en" class="flex items-start gap-3">
              <span
                class="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-line"
                aria-hidden="true"
              />
              <span class="text-ink-muted text-pretty">{{ t(point) }}</span>
            </li>
          </ul>
        </div>
      </RevealItem>
    </div>
  </SectionShell>
</template>
