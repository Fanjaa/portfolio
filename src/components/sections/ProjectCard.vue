<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Project } from '@/data/types'
import { t } from '@/i18n'
import { usePointerGlow } from '@/composables/usePointerGlow'
import TagChip from '@/components/ui/TagChip.vue'
import AppIcon from '@/components/icons/AppIcon.vue'

const props = defineProps<{ project: Project; variant?: 'featured' | 'compact' }>()
const { el, onMove } = usePointerGlow()
const open = ref(false)

const statusMeta: Record<Project['status'], { label: string; live: boolean }> = {
  Live: { label: 'Live', live: true },
  Private: { label: 'Private', live: false },
  Archived: { label: 'Archived', live: false },
}

const liveLink = computed(() => props.project.links.find((l) => l.href.startsWith('http')))
</script>

<template>
  <!-- ───────────── Compact: lighter "selected builds" row ───────────── -->
  <article
    v-if="variant === 'compact'"
    class="card group/card flex gap-4 overflow-hidden p-3.5 transition-[transform,border-color] duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-line-strong"
    :style="{ '--accent': project.accent }"
  >
    <div class="relative aspect-4/3 w-28 shrink-0 overflow-hidden rounded-lg border border-line sm:w-32">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="`${project.name} preview`"
        width="1360"
        height="1020"
        loading="lazy"
        decoding="async"
        class="h-full w-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover/card:scale-[1.04]"
      />
      <div
        v-else
        class="grid h-full w-full place-items-center"
        style="background: linear-gradient(135deg, color-mix(in oklab, var(--accent) 26%, var(--c-surface-2)), var(--c-surface))"
      >
        <span class="font-mono text-base font-bold uppercase opacity-40" style="color: var(--accent)">
          {{ (project.name.split(' ')[0] ?? project.name).slice(0, 4) }}
        </span>
      </div>
    </div>

    <div class="flex min-w-0 flex-1 flex-col">
      <div class="flex items-center gap-2 font-mono text-[0.68rem] text-ink-faint">
        <span>{{ project.year }}</span>
        <span class="h-1 w-1 rounded-full bg-ink-faint/40" />
        <span class="truncate">{{ t(project.category) }}</span>
        <span
          class="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-0.5"
          :class="statusMeta[project.status].live ? 'border-accent-line/50 text-accent' : 'border-line text-ink-faint'"
        >
          <span
            class="h-1.5 w-1.5 rounded-full"
            :class="statusMeta[project.status].live ? 'bg-accent' : 'bg-ink-faint/50'"
          />
          {{ statusMeta[project.status].label }}
        </span>
      </div>

      <h3 class="mt-1.5 truncate text-[1.05rem] font-semibold tracking-tight">{{ project.name }}</h3>
      <p class="mt-0.5 line-clamp-2 text-sm text-ink-muted text-pretty">{{ t(project.tagline) }}</p>

      <div class="mt-auto flex items-end justify-between gap-3 pt-3">
        <div class="flex min-w-0 flex-wrap gap-1.5">
          <TagChip v-for="t in project.stack.slice(0, 3)" :key="t" :label="t" />
        </div>
        <a
          v-if="liveLink"
          :href="liveLink.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group/link inline-flex shrink-0 items-center gap-1 font-mono text-xs text-ink-muted transition-colors hover:text-accent"
        >
          {{ t({ en: 'Live', id: 'Live' }) }}
          <AppIcon name="arrow-up-right" :size="13" class="transition-transform duration-300 ease-out-expo group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </div>
  </article>

  <!-- ───────────── Featured: full case-study card ───────────── -->
  <article
    v-else
    ref="el"
    class="card group/card relative flex flex-col overflow-hidden transition-[transform,border-color] duration-500 ease-out-expo hover:-translate-y-1 hover:border-line-strong"
    :style="{ '--accent': project.accent }"
    @pointermove="onMove"
  >
    <div
      class="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
      style="background: radial-gradient(340px circle at var(--mx, 50%) var(--my, 0%), color-mix(in oklab, var(--accent) 12%, transparent), transparent 70%)"
      aria-hidden="true"
    />

    <div class="relative aspect-16/10 overflow-hidden border-b border-line">
      <template v-if="project.image">
        <div class="flex items-center gap-1.5 border-b border-line/60 bg-surface-2/80 px-3 py-2">
          <span class="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
          <span class="h-2.5 w-2.5 rounded-full bg-ink-faint/30" />
          <span class="h-2.5 w-2.5 rounded-full bg-ink-faint/20" />
          <span class="ml-2 truncate font-mono text-[0.65rem] text-ink-faint">{{ liveLink?.href.replace(/^https?:\/\//, '') || project.name }}</span>
        </div>
        <img
          :src="project.image"
          :alt="`${project.name} preview`"
          width="1360"
          height="675"
          loading="lazy"
          decoding="async"
          class="h-full w-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover/card:scale-[1.03]"
        />
      </template>
      <div
        v-else
        class="relative flex h-full w-full items-end overflow-hidden p-5"
        style="background: linear-gradient(135deg, color-mix(in oklab, var(--accent) 32%, var(--c-surface-2)), var(--c-surface))"
      >
        <div class="grid-lines absolute inset-0 opacity-40" />
        <img
          v-if="project.logo"
          :src="project.logo"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute top-1/2 right-5 h-[46%] w-auto translate-y-[-60%] object-contain opacity-90 drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
        />
        <span
          v-else
          class="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 select-none font-mono text-[clamp(3rem,9vw,5.5rem)] leading-none font-bold opacity-[0.07]"
          style="color: var(--accent)"
        >
          {{ project.name.split(' ')[0] }}
        </span>
        <div class="relative flex items-center gap-2">
          <span class="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface/60" style="color: var(--accent)">
            <AppIcon :name="project.status === 'Private' ? 'lock' : 'server'" :size="18" />
          </span>
          <span class="font-mono text-xs text-ink-muted">{{ t(project.category) }}</span>
        </div>
      </div>
    </div>

    <div class="relative flex flex-1 flex-col p-6">
      <div class="flex items-center gap-3 font-mono text-[0.7rem] text-ink-faint">
        <span>{{ t(project.category) }}</span>
        <span class="h-1 w-1 rounded-full bg-ink-faint/40" />
        <span>{{ project.year }}</span>
        <span
          class="ml-auto inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5"
          :class="statusMeta[project.status].live ? 'border-accent-line/50 text-accent' : 'border-line text-ink-faint'"
        >
          <span
            class="h-1.5 w-1.5 rounded-full"
            :class="statusMeta[project.status].live ? 'bg-accent animate-pulse-dot' : 'bg-ink-faint/50'"
          />
          {{ statusMeta[project.status].label }}
        </span>
      </div>

      <h3 class="mt-3 text-h3 font-semibold tracking-tight">{{ project.name }}</h3>
      <p class="mt-1.5 text-ink-muted text-pretty">{{ t(project.tagline) }}</p>
      <p class="mt-2 font-mono text-xs text-ink-faint">{{ t(project.role) }}</p>

      <div class="grid transition-[grid-template-rows] duration-500 ease-out-expo" :class="open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
        <div class="overflow-hidden">
          <div class="space-y-4 pt-5 text-sm leading-relaxed">
            <div>
              <p class="font-mono text-[0.7rem] tracking-wide text-accent uppercase">{{ t({ en: 'Problem', id: 'Masalah' }) }}</p>
              <p class="mt-1 text-ink-muted">{{ t(project.problem) }}</p>
            </div>
            <div>
              <p class="font-mono text-[0.7rem] tracking-wide text-accent uppercase">{{ t({ en: 'Approach', id: 'Pendekatan' }) }}</p>
              <p class="mt-1 text-ink-muted">{{ t(project.solution) }}</p>
            </div>
            <ul class="space-y-1.5">
              <li v-for="h in project.highlights" :key="h.en" class="flex gap-2 text-ink-muted">
                <AppIcon name="check" :size="15" class="mt-0.5 shrink-0 text-accent" />
                <span>{{ t(h) }}</span>
              </li>
            </ul>
            <dl v-if="project.metrics" class="flex flex-wrap gap-x-6 gap-y-2 border-t border-line/70 pt-4">
              <div v-for="m in project.metrics" :key="m.label.en">
                <dt class="font-mono text-lg font-semibold text-ink">{{ m.value }}</dt>
                <dd class="text-xs text-ink-faint">{{ t(m.label) }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div class="mt-5 flex flex-wrap gap-1.5">
        <TagChip v-for="(t, i) in project.stack" :key="t" :label="t" :primary="i === 0" />
      </div>

      <div class="mt-5 flex items-center justify-between gap-3 border-t border-line/70 pt-4">
        <button
          type="button"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
          :aria-expanded="open"
          @click="open = !open"
        >
          {{ open ? t({ en: 'Hide details', id: 'Tutup detail' }) : t({ en: 'Case study', id: 'Case study' }) }}
          <AppIcon name="arrow-down" :size="15" class="transition-transform duration-300" :class="{ 'rotate-180': open }" />
        </button>
        <a
          v-for="link in project.links"
          :key="link.href"
          :href="link.href"
          :target="link.href.startsWith('http') ? '_blank' : undefined"
          :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
          class="group/link inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted transition-colors hover:text-accent"
        >
          {{ t(link.label) }}
          <AppIcon :name="link.icon" :size="14" class="transition-transform duration-300 ease-out-expo group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </div>
  </article>
</template>
