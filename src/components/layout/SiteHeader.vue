<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { nav, profile } from '@/data/profile'
import { t } from '@/i18n'
import { useActiveSection } from '@/composables/useActiveSection'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
import LanguageToggle from '@/components/ui/LanguageToggle.vue'
import AppButton from '@/components/ui/AppButton.vue'
import SocialRow from '@/components/ui/SocialRow.vue'
import AppIcon from '@/components/icons/AppIcon.vue'

const scrolled = ref(false)
const progress = ref(0)
const mobileOpen = ref(false)
const { active } = useActiveSection(['home', ...nav.map((n) => n.id)])

function onScroll() {
  const y = window.scrollY
  scrolled.value = y > 8
  const h = document.documentElement.scrollHeight - window.innerHeight
  progress.value = h > 0 ? Math.min(1, y / h) : 0
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') mobileOpen.value = false
}

watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})

function go(id: string) {
  mobileOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
    :class="scrolled ? 'border-b border-line bg-canvas/70 backdrop-blur-xl' : 'border-b border-transparent'"
  >
    <!-- scroll progress -->
    <div class="absolute inset-x-0 bottom-0 h-px bg-transparent">
      <div
        class="h-full origin-left bg-accent transition-transform duration-150 ease-out"
        :style="{ transform: `scaleX(${progress})` }"
      />
    </div>

    <div class="shell flex h-16 items-center justify-between gap-4">
      <!-- brand -->
      <a
        href="#home"
        class="group flex items-center gap-2.5"
        aria-label="Muhammad Irfannurroja — home"
        @click.prevent="go('home')"
      >
        <img
          src="/self-logo.png"
          alt="Muhammad Irfannurroja logo"
          width="36"
          height="36"
          class="h-9 w-9 object-contain transition-transform duration-300 ease-out-expo group-hover:scale-105"
        />
        <span class="hidden text-sm font-medium tracking-tight sm:block">
          {{ profile.name }}
        </span>
      </a>

      <!-- desktop nav -->
      <nav class="hidden lg:block" aria-label="Primary">
        <ul class="flex items-center gap-1">
          <li v-for="item in nav" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="relative rounded-full px-3.5 py-2 text-sm transition-colors duration-300"
              :class="active === item.id ? 'text-ink' : 'text-ink-muted hover:text-ink'"
              @click.prevent="go(item.id)"
            >
              <span
                v-if="active === item.id"
                class="absolute inset-0 z-0 rounded-full bg-surface-2/70"
              />
              <span class="relative">{{ t(item.label) }}</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
        <span class="hidden sm:contents">
          <AppButton href="#contact" variant="line" size="sm" @click.prevent="go('contact')">
            {{ t({ en: 'Get in touch', id: 'Hubungi saya' }) }}
          </AppButton>
        </span>
        <!-- mobile menu button -->
        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/50 text-ink lg:hidden"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          @click="mobileOpen = !mobileOpen"
        >
          <AppIcon :name="mobileOpen ? 'check' : 'menu'" :size="20" />
        </button>
      </div>
    </div>

    <!-- mobile sheet -->
    <Transition name="sheet">
      <div
        v-if="mobileOpen"
        id="mobile-nav"
        class="fixed inset-x-0 top-16 bottom-0 z-40 border-t border-line bg-canvas/95 backdrop-blur-2xl lg:hidden"
      >
        <div class="shell flex h-full flex-col justify-between py-8">
          <nav aria-label="Mobile">
            <ul class="flex flex-col gap-1">
              <li v-for="(item, i) in nav" :key="item.id">
                <a
                  :href="`#${item.id}`"
                  class="flex items-center justify-between border-b border-line/60 py-4 text-2xl font-medium tracking-tight transition-colors"
                  :class="active === item.id ? 'text-accent' : 'text-ink'"
                  @click.prevent="go(item.id)"
                >
                  <span>{{ t(item.label) }}</span>
                  <span class="font-mono text-xs text-ink-faint">0{{ i + 1 }}</span>
                </a>
              </li>
            </ul>
          </nav>
          <div class="flex flex-col gap-6">
            <AppButton href="#contact" variant="primary" icon="mail" @click.prevent="go('contact')">
              {{ t({ en: 'Start a conversation', id: 'Mulai percakapan' }) }}
            </AppButton>
            <SocialRow />
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.sheet-enter-active,
.sheet-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.sheet-enter-from,
.sheet-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
