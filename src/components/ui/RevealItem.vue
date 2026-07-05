<script setup lang="ts">
import { useInView } from '@/composables/useInView'

withDefaults(defineProps<{ as?: string; delay?: number }>(), { as: 'div', delay: 0 })
const { target, inView } = useInView()
</script>

<template>
  <component
    :is="as"
    ref="target"
    class="reveal"
    :class="{ 'is-in': inView }"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <slot />
  </component>
</template>
