<script setup lang="ts">
import SectionShell from '@/components/ui/SectionShell.vue'
import RevealItem from '@/components/ui/RevealItem.vue'
import TagChip from '@/components/ui/TagChip.vue'
import { experience } from '@/data/experience'
import { t } from '@/i18n'
</script>

<template>
  <SectionShell
    id="experience"
    :eyebrow="{ en: 'Experience', id: 'Pengalaman' }"
    index="04"
    :title="{ en: 'Where I’ve shipped', id: 'Tempat saya bikin & rilis produk' }"
    :lead="{
      en: 'A short trail of the teams, products and problems that shaped how I build.',
      id: 'Jejak singkat tim, produk, dan problem yang membentuk cara saya ngebangun sistem.',
    }"
  >
    <ol class="relative -my-2" aria-label="Work history, newest first">
      <!-- Continuous rail -->
      <span
        class="pointer-events-none absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-line-strong via-line to-transparent sm:left-[9px]"
        aria-hidden="true"
      />

      <RevealItem
        v-for="(job, i) in experience"
        :key="`${job.company}-${job.period}`"
        as="li"
        :delay="i * 90"
        class="relative pl-6 py-6 first:pt-2 last:pb-2 sm:pl-8"
      >
        <!-- Node -->
        <span class="absolute left-0 top-[1.85rem] flex h-[15px] w-[15px] items-center justify-center sm:left-[2px]">
          <span
            v-if="job.current"
            class="animate-pulse-dot h-[15px] w-[15px] rounded-full bg-accent ring-4 ring-accent/15"
            aria-hidden="true"
          />
          <span
            v-else
            class="h-[11px] w-[11px] rounded-full border border-line-strong bg-surface-3"
            aria-hidden="true"
          />
        </span>

        <article
          class="rounded-xl transition-colors duration-500 ease-out-expo"
          :class="
            job.current
              ? 'border border-accent-line/40 bg-accent-soft/40 px-4 py-5 sm:px-6 sm:py-6'
              : 'px-0 py-1'
          "
        >
          <div class="flex items-start justify-between gap-4">
            <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
              <p class="font-mono text-eyebrow uppercase tracking-wide text-ink-faint">
                {{ job.period }}
              </p>
              <span
                v-if="job.current"
                class="inline-flex items-center gap-1.5 rounded-full border border-accent-line/60 bg-accent-soft px-2.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-wide text-accent"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" aria-hidden="true" />
                {{ t({ en: 'Now', id: 'Sekarang' }) }}
              </span>
            </div>
            <span
              v-if="job.logo"
              class="grid h-10 w-10 shrink-0 place-items-center rounded-lg"
              :class="
                job.logoTheme === 'light'
                  ? 'bg-white ring-1 ring-black/10'
                  : job.logoTheme === 'bare'
                    ? ''
                    : 'bg-[#0d0f13] ring-1 ring-line'
              "
              :title="job.company"
            >
              <img
                :src="job.logo"
                :alt="job.company"
                class="w-auto object-contain"
                :class="job.logoTheme === 'bare' ? 'h-9' : 'h-6'"
              />
            </span>
          </div>

          <h3 class="mt-2.5 text-h3 font-semibold tracking-tight text-ink">
            {{ t(job.role) }}
            <span class="text-ink-faint/60 font-normal">·</span>
            <span class="text-accent">{{ job.company }}</span>
          </h3>

          <p class="mt-1 font-mono text-[0.72rem] uppercase tracking-wide text-ink-faint">
            {{ t(job.location) }}
          </p>

          <p class="mt-3 max-w-2xl text-ink-muted text-pretty">{{ t(job.summary) }}</p>

          <ul class="mt-4 space-y-2">
            <li
              v-for="(point, pi) in job.points"
              :key="pi"
              class="relative pl-5 text-sm leading-relaxed text-ink-muted/85"
            >
              <span
                class="absolute left-0 top-[0.62rem] h-1 w-1 rounded-full bg-accent-line"
                aria-hidden="true"
              />
              {{ t(point) }}
            </li>
          </ul>

          <div class="mt-5 flex flex-wrap gap-2">
            <TagChip
              v-for="(tech, ti) in job.stack"
              :key="tech"
              :label="tech"
              :primary="ti === 0"
            />
          </div>
        </article>
      </RevealItem>
    </ol>
  </SectionShell>
</template>
