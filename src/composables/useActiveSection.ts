import { onBeforeUnmount, onMounted, ref } from 'vue'

/** Tracks which section id is currently centered in the viewport. */
export function useActiveSection(ids: string[]) {
  const active = ref<string>(ids[0] ?? '')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const visible = new Map<string, number>()
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio)
          else visible.delete(entry.target.id)
        }
        let best = ''
        let bestRatio = 0
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = id
          }
        }
        if (best) active.value = best
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  })

  onBeforeUnmount(() => observer?.disconnect())
  return { active }
}
