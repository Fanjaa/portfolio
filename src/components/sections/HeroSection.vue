<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { profile } from '@/data/profile'
import { t, locale } from '@/i18n'
import { useTilt } from '@/composables/useTilt'
import AppButton from '@/components/ui/AppButton.vue'
import SocialRow from '@/components/ui/SocialRow.vue'
import AppIcon from '@/components/icons/AppIcon.vue'

const loaded = ref(false)
onMounted(() => requestAnimationFrame(() => (loaded.value = true)))

// 3D portrait tilt (auto-off on touch / reduced-motion)
const { el, rx, ry, active, onMove, reset } = useTilt(8)
const tiltStyle = computed(() => ({
  transform: `rotateX(${rx.value}deg) rotateY(${ry.value}deg)`,
  transition: active.value ? 'none' : 'transform 0.6s var(--ease-out-expo)',
  transformStyle: 'preserve-3d' as const,
}))

const marquee = [
  'Laravel',
  'PostgreSQL',
  'Docker',
  'Xendit',
  'NestJS',
  'Redis',
  'Nginx',
  'WebSocket',
  'GitHub Actions',
  'Flutter',
]

function toWork() {
  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="relative flex min-h-svh flex-col justify-center overflow-hidden pt-28 pb-10 sm:pt-32">
    <!-- top grid fade -->
    <div class="grid-lines pointer-events-none absolute inset-x-0 top-0 h-[52vh] z-0" aria-hidden="true" />

    <div class="shell relative">
      <div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <!-- copy -->
        <div class="lg:col-span-7">
          <div
            class="hero-item inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/50 py-1.5 pr-4 pl-2 backdrop-blur-sm"
            :class="{ 'is-in': loaded }"
            :style="{ '--d': '0ms' }"
          >
            <span class="relative grid h-6 w-6 place-items-center">
              <span class="animate-pulse-dot absolute h-2.5 w-2.5 rounded-full bg-accent" />
              <span class="h-2.5 w-2.5 rounded-full bg-accent/40" />
            </span>
            <span class="text-xs font-medium text-ink-muted">{{ t(profile.availabilityLabel) }}</span>
          </div>

          <h1
            class="hero-item mt-6 text-display font-semibold tracking-tight text-balance"
            :class="{ 'is-in': loaded }"
            :style="{ '--d': '80ms' }"
          >
            <template v-if="locale === 'en'">
              <span class="text-gradient">I build the systems</span><br />
              companies
              <span class="relative whitespace-nowrap text-accent">actually run<svg class="absolute -bottom-1 left-0 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true"><path d="M2 7C40 3 160 3 198 6" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.5"/></svg></span>
              on.
            </template>
            <template v-else>
              <span class="text-gradient">Saya bangun sistem yang</span><br />
                <span class="relative whitespace-nowrap text-accent">diandalkan<svg class="absolute -bottom-1 left-0 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true"><path d="M2 7C40 3 160 3 198 6" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.5"/></svg></span>
              perusahaan.
            </template>
          </h1>

          <p
            class="hero-item mt-6 max-w-xl text-lead text-ink-muted text-pretty"
            :class="{ 'is-in': loaded }"
            :style="{ '--d': '160ms' }"
          >
            {{ t(profile.intro) }}
          </p>

          <p
            class="hero-item mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-ink-faint"
            :class="{ 'is-in': loaded }"
            :style="{ '--d': '220ms' }"
          >
            <span class="text-accent">Backend</span> Laravel · PostgreSQL
            <span class="text-ink-faint/50">—</span>
            <span class="text-accent">Infra</span> Docker · CI/CD
          </p>

          <div
            class="hero-item mt-8 flex flex-wrap items-center gap-3"
            :class="{ 'is-in': loaded }"
            :style="{ '--d': '300ms' }"
          >
            <AppButton variant="primary" icon="arrow-down" @click="toWork">
              {{ t({ en: 'See my work', id: 'Lihat karya saya' }) }}
            </AppButton>
            <AppButton :href="profile.cv" download variant="line" icon="download">
              {{ t({ en: 'Download CV', id: 'Unduh CV' }) }}
            </AppButton>
          </div>

          <div
            class="hero-item mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
            :class="{ 'is-in': loaded }"
            :style="{ '--d': '380ms' }"
          >
            <SocialRow />
            <span class="flex items-center gap-2 font-mono text-xs text-ink-faint">
              <AppIcon name="pin" :size="14" class="text-accent" />
              {{ t(profile.location) }} · {{ profile.timezone }}
            </span>
          </div>
        </div>

        <!-- portrait -->
        <div class="hero-item lg:col-span-5" :class="{ 'is-in': loaded }" :style="{ '--d': '220ms' }">
          <div
            ref="el"
            class="relative mx-auto max-w-76 sm:max-w-sm lg:ml-auto"
            style="perspective: 1000px"
            @pointermove="onMove"
            @pointerleave="reset"
          >
            <div :style="tiltStyle">
              <!-- glow ring (deep layer) -->
              <div
                class="absolute -inset-6 rounded-full opacity-70 blur-2xl"
                style="background: radial-gradient(circle at 50% 40%, var(--c-accent-glow), transparent 65%); transform: translateZ(-40px)"
                aria-hidden="true"
              />
              <!-- card (front layer) -->
              <div class="card overflow-hidden p-2" style="transform: translateZ(45px)">
                <div class="overflow-hidden rounded-xl bg-surface-2">
                  <img
                    src="/profile.png"
                    width="358"
                    height="351"
                    alt="Portrait of Muhammad Irfannurroja"
                    class="h-full w-full object-cover"
                    fetchpriority="high"
                    decoding="async"
                  />
                </div>
                <div class="flex items-center justify-between px-2 py-2">
                  <span class="font-mono text-[0.7rem] text-ink-faint">// {{ profile.shortName }}.dev</span>
                  <span class="flex items-center gap-1.5 font-mono text-[0.7rem] text-accent">
                    <span class="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-accent" /> online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- tech marquee -->
    <div class="relative mt-14 overflow-hidden border-y border-line/70 py-4 mask-[linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div class="animate-marquee flex w-max items-center gap-10" style="--marquee-duration: 32s">
        <template v-for="n in 2" :key="n">
          <span
            v-for="word in marquee"
            :key="`${n}-${word}`"
            class="flex items-center gap-10 font-mono text-sm text-ink-faint"
          >
            {{ word }}
            <span class="h-1 w-1 rounded-full bg-accent/50" />
          </span>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-item {
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 0.7s var(--ease-out-expo),
    transform 0.7s var(--ease-out-expo);
  transition-delay: var(--d, 0ms);
}
.hero-item.is-in {
  opacity: 1;
  transform: none;
}
@media (prefers-reduced-motion: reduce) {
  .hero-item {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
