import { ref } from 'vue'

type Theme = 'dark' | 'light'

const theme = ref<Theme>('dark')
let initialized = false

function apply(next: Theme) {
  const el = document.documentElement
  el.classList.toggle('dark', next === 'dark')
  el.classList.toggle('light', next === 'light')
  theme.value = next
}

export function useTheme() {
  if (!initialized) {
    initialized = true
    // Trust the pre-paint inline script's decision as the source of truth.
    theme.value = document.documentElement.classList.contains('light') ? 'light' : 'dark'
  }

  function toggle() {
    const next: Theme = theme.value === 'dark' ? 'light' : 'dark'
    apply(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* private mode — ignore */
    }
  }

  return { theme, toggle }
}
