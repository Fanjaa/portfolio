<script setup lang="ts">
import { nav, profile } from '@/data/profile'
import { t } from '@/i18n'
import SocialRow from '@/components/ui/SocialRow.vue'
import AppIcon from '@/components/icons/AppIcon.vue'

const year = 2026
</script>

<template>
  <footer class="relative border-t border-line">
    <div class="shell py-14 sm:py-16">
      <div class="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div class="max-w-sm">
          <a href="#home" class="flex items-center gap-2.5">
            <img
              src="/self-logo.png"
              alt="Muhammad Irfannurroja logo"
              width="36"
              height="36"
              class="h-9 w-9 object-contain"
            />
            <span class="text-sm font-medium">{{ profile.name }}</span>
          </a>
          <p class="mt-4 text-sm leading-relaxed text-ink-muted">
            {{ t(profile.currentRole) }} {{ t({ en: 'at', id: 'di' }) }} {{ profile.currentCompany }}.
            {{ t({ en: 'Building and running production backends end-to-end from', id: 'Membangun dan menjalankan backend produksi secara end-to-end dari' }) }}
            {{ t(profile.location) }}.
          </p>
          <a
            :href="`mailto:${profile.email}`"
            class="link-underline mt-4 inline-flex items-center gap-2 font-mono text-sm text-ink"
          >
            <AppIcon name="mail" :size="15" class="text-accent" />
            {{ profile.email }}
          </a>
        </div>

        <nav aria-label="Footer" class="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
          <a
            v-for="item in nav"
            :key="item.id"
            :href="`#${item.id}`"
            class="py-1 text-sm text-ink-muted transition-colors hover:text-accent"
          >
            {{ t(item.label) }}
          </a>
        </nav>
      </div>

      <div
        class="mt-12 flex flex-col-reverse items-start gap-6 border-t border-line/70 pt-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="text-xs text-ink-faint">
          © {{ year }} {{ profile.name }}. {{ t({ en: 'Designed & built with Vue + Tailwind.', id: 'Didesain & dibuat dengan Vue + Tailwind.' }) }}
        </p>
        <SocialRow :size="17" />
      </div>
    </div>
  </footer>
</template>
