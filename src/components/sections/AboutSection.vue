<script setup lang="ts">
import SectionShell from '@/components/ui/SectionShell.vue'
import RevealItem from '@/components/ui/RevealItem.vue'
import AppIcon from '@/components/icons/AppIcon.vue'
import { profile } from '@/data/profile'
import { stats } from '@/data/achievements'
import { t } from '@/i18n'
</script>

<template>
  <SectionShell
    id="about"
    :eyebrow="{ en: 'About', id: 'Tentang' }"
    index="01"
    :title="{ en: 'Backend that reaches the user’s screen.', id: 'Backend yang sampai ke layar pengguna.' }"
  >
    <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <!-- Story -->
      <div class="lg:col-span-7">
        <RevealItem>
          <p class="text-lead text-ink text-pretty">{{ t(profile.intro) }}</p>
        </RevealItem>

        <RevealItem :delay="80">
          <p class="mt-6 text-ink-muted leading-relaxed text-pretty">
            {{ t({
              en: 'I’m based in South Tangerang and I build production HRIS platforms end-to-end — NestJS services on one side, the Flutter app an employee opens every morning on the other. It’s the kind of work where attendance, leave and payroll can’t be “roughly right”: someone’s paycheck depends on the edge cases holding.',
              id: 'Saya berbasis di Tangerang Selatan dan membangun platform HRIS production secara end-to-end — service NestJS di satu sisi, dan aplikasi Flutter yang dibuka karyawan tiap pagi di sisi lain. Ini tipe kerjaan di mana absensi, cuti, dan payroll nggak boleh cuma “kurang lebih benar”: gaji seseorang bergantung pada apakah edge case-nya benar-benar ke-handle.',
            }) }}
          </p>
        </RevealItem>

        <RevealItem :delay="160">
          <p class="mt-6 text-ink-muted leading-relaxed text-pretty">
            {{ t({
              en: 'Most of that means working with what’s already there — integrating cleanly with legacy HR systems, keeping databases in sync, and treating correctness as the feature rather than an afterthought. I care less about the newest framework and more about the thing running reliably a year from now.',
              id: 'Sebagian besar dari situ artinya kerja dengan yang sudah ada — integrasi rapi dengan sistem HR legacy, jaga database tetap sinkron, dan memperlakukan correctness sebagai fitur, bukan afterthought. Saya nggak terlalu ngejar framework terbaru; yang lebih saya pedulikan adalah sistem yang tetap jalan andal setahun ke depan.',
            }) }}
          </p>
        </RevealItem>

        <!-- Stats — evidence strip -->
        <RevealItem :delay="220" as="dl" class="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:mt-14 sm:gap-x-10">
          <div v-for="stat in stats" :key="stat.value" class="min-w-0">
            <dt class="sr-only">{{ t(stat.label) }}</dt>
            <dd>
              <span class="block font-mono text-h3 font-semibold tracking-tight text-accent tabular-nums">
                {{ stat.value }}
              </span>
              <span class="mt-2 block text-sm leading-snug text-ink-faint text-pretty">
                {{ t(stat.label) }}
              </span>
            </dd>
          </div>
        </RevealItem>
      </div>

      <!-- Now card -->
      <div class="lg:col-span-5">
        <RevealItem :delay="140">
          <div class="card p-6 sm:p-8">
            <div class="flex items-center gap-2.5">
              <span class="relative flex h-2 w-2 shrink-0">
                <span class="animate-pulse-dot absolute inset-0 rounded-full bg-accent"></span>
                <span class="absolute inset-0 rounded-full bg-accent/40 blur-[3px]"></span>
              </span>
              <span class="eyebrow before:hidden">{{ t({ en: 'Currently', id: 'Saat ini' }) }}</span>
            </div>

            <div class="mt-5 flex items-start justify-between gap-4">
              <div>
                <p class="text-h3 font-semibold tracking-tight text-balance">
                  {{ t(profile.currentRole) }}
                </p>
                <p class="mt-1 text-ink-muted">{{ profile.currentCompany }}</p>
              </div>
              <span
                class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0d0f13] ring-1 ring-line"
                title="Holywings Group"
              >
                <img src="/hwg-logo.png" alt="Holywings Group" class="h-6 w-auto object-contain" />
              </span>
            </div>

            <dl class="mt-7 space-y-4 border-t border-line pt-6 text-sm">
              <div class="flex items-baseline justify-between gap-4">
                <dt class="font-mono uppercase tracking-wider text-ink-faint">{{ t({ en: 'Based in', id: 'Berbasis di' }) }}</dt>
                <dd class="text-right text-ink">{{ t(profile.location) }}</dd>
              </div>
              <div class="flex items-baseline justify-between gap-4">
                <dt class="font-mono uppercase tracking-wider text-ink-faint">{{ t({ en: 'Timezone', id: 'Zona waktu' }) }}</dt>
                <dd class="text-right text-ink tabular-nums">{{ profile.timezone }}</dd>
              </div>
            </dl>

            <div
              class="mt-7 flex items-center gap-2.5 rounded-xl border border-accent-line/40 bg-accent-soft px-4 py-3 text-sm text-accent"
            >
              <span class="animate-pulse-dot h-2 w-2 shrink-0 rounded-full bg-accent" />
              <span class="text-pretty">{{ t(profile.availabilityLabel) }}</span>
            </div>
          </div>
        </RevealItem>
      </div>
    </div>
  </SectionShell>
</template>
