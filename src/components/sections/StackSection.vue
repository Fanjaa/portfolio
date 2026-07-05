<script setup lang="ts">
import SectionShell from '@/components/ui/SectionShell.vue'
import RevealItem from '@/components/ui/RevealItem.vue'
import TagChip from '@/components/ui/TagChip.vue'
import { stackGroups } from '@/data/stack'
import { t } from '@/i18n'
</script>

<template>
  <SectionShell
    id="stack"
    :eyebrow="{ en: 'Stack', id: 'Stack' }"
    index="05"
    :title="{ en: 'Tools I reach for', id: 'Tools yang saya andalkan' }"
    :lead="{
      en: 'Grouped by where they sit in the system, not by hype.',
      id: 'Dikelompokkan berdasarkan posisinya di sistem, bukan ikut-ikutan tren.',
    }"
  >
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
      <RevealItem
        v-for="(group, i) in stackGroups"
        :key="group.name.en"
        :delay="i * 70"
        class="h-full"
      >
        <section
          class="card group h-full p-5 transition-colors duration-500 ease-out-expo hover:border-line-strong sm:p-6"
          :aria-label="`${t(group.name)} tools`"
        >
          <h3 class="text-h3 font-semibold tracking-tight text-ink">{{ t(group.name) }}</h3>

          <p class="mt-1.5 text-sm text-ink-faint">{{ t(group.hint) }}</p>

          <div class="mt-5 flex flex-wrap gap-2">
            <TagChip
              v-for="item in group.items"
              :key="item.name"
              :label="item.name"
              :primary="item.primary"
            />
          </div>
        </section>
      </RevealItem>
    </div>
  </SectionShell>
</template>
