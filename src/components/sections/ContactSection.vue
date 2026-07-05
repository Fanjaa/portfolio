<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import SectionShell from '@/components/ui/SectionShell.vue'
import RevealItem from '@/components/ui/RevealItem.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppIcon from '@/components/icons/AppIcon.vue'
import SocialRow from '@/components/ui/SocialRow.vue'
import { profile } from '@/data/profile'
import { t } from '@/i18n'

const copied = ref(false)
let resetTimer: ReturnType<typeof setTimeout> | undefined

async function copyEmail() {
  if (!navigator.clipboard?.writeText) return
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    clearTimeout(resetTimer)
    resetTimer = setTimeout(() => (copied.value = false), 1500)
  } catch {
    // Clipboard blocked or unavailable — fail silently.
  }
}

onBeforeUnmount(() => clearTimeout(resetTimer))
</script>

<template>
  <SectionShell
    id="contact"
    :eyebrow="{ en: 'Contact', id: 'Kontak' }"
    index="08"
    :title="{ en: 'Let’s build something that has to work.', id: 'Yuk bangun sesuatu yang memang harus jalan.' }"
    :lead="{
      en: 'Recruiters, founders and CTOs — if you need software where correctness isn’t optional, I’m the person you want owning it end to end.',
      id: 'Recruiter, founder, dan CTO — kalau Anda butuh software yang correctness-nya bukan opsional, saya orang yang tepat buat pegang itu end-to-end.',
    }"
  >
    <div class="card overflow-hidden p-7 sm:p-10 md:p-12">
      <div class="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-12">
        <!-- Left: primary actions -->
        <div>
          <RevealItem>
            <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <AppButton
                :href="`mailto:${profile.email}?subject=Hello%20Fanja`"
                variant="primary"
                icon="mail"
              >
                {{ t({ en: 'Email me', id: 'Email saya' }) }}
              </AppButton>
              <AppButton :href="profile.cv" download variant="line" icon="download">
                {{ t({ en: 'Download CV', id: 'Unduh CV' }) }}
              </AppButton>
            </div>
          </RevealItem>

          <!-- Copy email affordance -->
          <RevealItem :delay="90">
            <button
              type="button"
              class="group mt-5 flex w-full min-h-11 items-center justify-between gap-4 rounded-xl border border-line bg-surface/40 px-4 py-3 text-left transition-all duration-300 ease-out-expo hover:border-accent-line hover:bg-surface-2/60 sm:w-auto"
              :aria-label="copied
                ? t({ en: 'Email address copied', id: 'Alamat email tersalin' })
                : t({ en: `Copy email address ${profile.email}`, id: `Salin alamat email ${profile.email}` })"
              @click="copyEmail"
            >
              <span class="min-w-0 truncate font-mono text-sm text-ink-muted transition-colors group-hover:text-ink">
                {{ profile.email }}
              </span>
              <span
                class="grid h-6 w-6 shrink-0 place-items-center text-ink-faint transition-colors"
                :class="copied ? 'text-accent' : 'group-hover:text-accent'"
              >
                <AppIcon :name="copied ? 'check' : 'copy'" :size="16" />
              </span>
            </button>
          </RevealItem>

          <p class="sr-only" role="status" aria-live="polite">
            {{ copied ? t({ en: 'Email address copied to clipboard', id: 'Alamat email disalin ke clipboard' }) : '' }}
          </p>
        </div>

        <!-- Right: presence -->
        <RevealItem :delay="160" class="md:border-l md:border-line md:pl-12">
          <div class="flex flex-col gap-6">
            <div>
              <span class="eyebrow before:hidden">{{ t({ en: 'Reach out', id: 'Hubungi saya' }) }}</span>
              <div class="mt-4">
                <SocialRow />
              </div>
            </div>

            <div class="border-t border-line pt-6">
              <div class="flex items-center gap-2.5">
                <span class="relative flex h-2 w-2 shrink-0">
                  <span class="animate-pulse-dot absolute inset-0 rounded-full bg-accent"></span>
                  <span class="absolute inset-0 rounded-full bg-accent/40 blur-[3px]"></span>
                </span>
                <span class="text-sm font-medium text-ink">{{ t(profile.availabilityLabel) }}</span>
              </div>
              <p class="mt-2 font-mono text-xs tracking-wide text-ink-faint">
                {{ t(profile.location) }} · {{ profile.timezone }}
              </p>
            </div>
          </div>
        </RevealItem>
      </div>
    </div>
  </SectionShell>
</template>
