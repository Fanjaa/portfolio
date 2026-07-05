import { ref } from 'vue'

/**
 * Tracks the pointer position within an element as CSS custom properties
 * (--mx / --my in %). Used for the spotlight hover on cards. Skips work on
 * touch devices where a hover glow makes no sense.
 */
export function usePointerGlow() {
  const el = ref<HTMLElement | null>(null)

  function onMove(e: PointerEvent) {
    const node = el.value
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`)
    node.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`)
  }

  return { el, onMove }
}
