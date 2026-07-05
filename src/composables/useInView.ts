import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

interface Options {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

/**
 * Observe an element and report when it enters the viewport.
 * Degrades to "always visible" when IntersectionObserver is unavailable
 * or the user prefers reduced motion.
 */
export function useInView(options: Options = {}): { target: Ref<HTMLElement | null>; inView: Ref<boolean> } {
  const { threshold = 0.15, rootMargin = '0px 0px -8% 0px', once = true } = options
  const target = ref<HTMLElement | null>(null)
  const inView = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce || typeof IntersectionObserver === 'undefined' || !target.value) {
      inView.value = true
      return
    }
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            inView.value = true
            if (once) observer?.disconnect()
          } else if (!once) {
            inView.value = false
          }
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(target.value)
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { target, inView }
}
