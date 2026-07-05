import { onMounted, ref } from 'vue'

/**
 * Cursor-driven 3D tilt for a card. Returns the element ref plus reactive
 * rotation (deg) and pointer handlers. Auto-disables on coarse pointers
 * (touch) and when the user prefers reduced motion — so it stays a
 * progressive enhancement, never a requirement.
 */
export function useTilt(max = 8) {
  const el = ref<HTMLElement | null>(null)
  const rx = ref(0)
  const ry = ref(0)
  const active = ref(false)
  let enabled = true

  onMounted(() => {
    const coarse = window.matchMedia?.('(pointer: coarse)').matches
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (coarse || reduce) enabled = false
  })

  function onMove(e: PointerEvent) {
    if (!enabled || !el.value) return
    const r = el.value.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    ry.value = px * max * 2
    rx.value = -py * max * 2
    active.value = true
  }

  function reset() {
    rx.value = 0
    ry.value = 0
    active.value = false
  }

  return { el, rx, ry, active, onMove, reset }
}
