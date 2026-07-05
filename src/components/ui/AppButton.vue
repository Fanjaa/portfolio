<script setup lang="ts">
import { computed } from 'vue'
import AppIcon from '@/components/icons/AppIcon.vue'
import type { IconName } from '@/data/types'

const props = withDefaults(
  defineProps<{
    href?: string
    variant?: 'primary' | 'ghost' | 'line'
    icon?: IconName
    external?: boolean
    download?: boolean
    size?: 'sm' | 'md'
  }>(),
  { variant: 'primary', size: 'md' },
)

const tag = computed(() => (props.href ? 'a' : 'button'))

const base =
  'group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out-expo select-none focus-visible:outline-2'
const sizes = { sm: 'h-9 px-4 text-sm', md: 'h-11 px-5 text-[0.95rem]' }
const variants = {
  primary:
    'bg-accent text-accent-ink hover:brightness-105 shadow-[0_10px_30px_-12px_var(--c-accent-glow)] hover:shadow-[0_16px_40px_-14px_var(--c-accent-glow)] active:scale-[0.98]',
  ghost: 'text-ink hover:bg-surface-2 border border-transparent hover:border-line',
  line: 'text-ink border border-line-strong hover:border-accent-line hover:text-accent bg-surface/40 active:scale-[0.98]',
}
</script>

<template>
  <component
    :is="tag"
    :href="href"
    :download="download ? '' : undefined"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :class="['ease-out-expo', base, sizes[size], variants[variant]]"
  >
    <slot />
    <AppIcon
      v-if="icon"
      :name="icon"
      :size="size === 'sm' ? 15 : 17"
      class="transition-transform duration-300 ease-out-expo group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
    />
  </component>
</template>
