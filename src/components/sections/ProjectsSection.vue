<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '@/data/projects'
import { t } from '@/i18n'
import SectionShell from '@/components/ui/SectionShell.vue'
import RevealItem from '@/components/ui/RevealItem.vue'
import ProjectCard from './ProjectCard.vue'

const featured = computed(() => projects.filter((p) => p.featured))
const rest = computed(() => projects.filter((p) => !p.featured))
</script>

<template>
  <SectionShell
    id="work"
    :eyebrow="t({ en: 'Selected Work', id: 'Karya Pilihan' })"
    index="03"
    :title="t({ en: 'Things I’ve built and shipped', id: 'Yang sudah saya bangun dan rilis' })"
    :lead="
      t({
        en: 'Two production systems I built end-to-end — Reparty and an HRIS platform — plus a few smaller builds. Open any card for the story behind it.',
        id: 'Dua sistem production yang saya bangun end-to-end — Reparty dan platform HRIS — plus beberapa build kecil lainnya. Buka kartunya buat lihat cerita di baliknya.',
      })
    "
  >
    <!-- featured: 2-up -->
    <div class="grid gap-6 lg:grid-cols-2">
      <RevealItem v-for="(p, i) in featured" :key="p.id" :delay="i * 100">
        <ProjectCard :project="p" variant="featured" />
      </RevealItem>
    </div>

    <!-- selected builds: a lighter, honestly-framed appendix -->
    <RevealItem>
      <div class="mt-16 mb-6 flex items-center gap-4">
        <h3 class="font-mono text-eyebrow tracking-[0.16em] text-ink-faint uppercase">
          {{ t({ en: 'Also shipped — smaller builds & experiments', id: 'Juga dirilis — build & eksperimen yang lebih kecil' }) }}
        </h3>
        <span class="h-px flex-1 bg-line" />
      </div>
    </RevealItem>
    <div class="grid gap-4 sm:grid-cols-2">
      <RevealItem v-for="(p, i) in rest" :key="p.id" :delay="i * 70">
        <ProjectCard :project="p" variant="compact" />
      </RevealItem>
    </div>
  </SectionShell>
</template>
