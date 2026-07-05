import { ref } from 'vue'

export type Locale = 'en' | 'id'

/** A localized string: English + Indonesian. */
export interface LString {
  en: string
  id: string
}

function initial(): Locale {
  try {
    const s = localStorage.getItem('locale')
    if (s === 'id' || s === 'en') return s
  } catch {
    /* ignore */
  }
  return 'en'
}

export const locale = ref<Locale>(initial())

export function setLocale(l: Locale) {
  locale.value = l
  try {
    localStorage.setItem('locale', l)
  } catch {
    /* ignore */
  }
  if (typeof document !== 'undefined') document.documentElement.lang = l
}

export function toggleLocale() {
  setLocale(locale.value === 'en' ? 'id' : 'en')
}

/**
 * Resolve a localized value against the active locale.
 * Plain strings pass through unchanged (used for tech names, proper nouns, URLs).
 * Reads the reactive `locale`, so template usages update live on toggle.
 */
export function t(v: LString | string): string {
  return typeof v === 'string' ? v : v[locale.value]
}

export function useI18n() {
  return { locale, t, toggleLocale, setLocale }
}
