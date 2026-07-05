import type { LString } from '@/i18n'

export type IconName =
  | 'github'
  | 'linkedin'
  | 'x'
  | 'instagram'
  | 'mail'
  | 'arrow-up-right'
  | 'arrow-right'
  | 'arrow-down'
  | 'download'
  | 'copy'
  | 'check'
  | 'server'
  | 'phone-device'
  | 'plug'
  | 'gauge'
  | 'shield'
  | 'wallet'
  | 'sun'
  | 'moon'
  | 'sparkle'
  | 'cap'
  | 'award'
  | 'pin'
  | 'lock'
  | 'external'
  | 'menu'

export interface SocialLink {
  label: string
  handle: string
  href: string
  icon: IconName
}

export interface NavItem {
  id: string
  label: LString
}

export interface Expertise {
  icon: IconName
  title: LString
  blurb: LString
  points: LString[]
}

export type ProjectStatus = 'Live' | 'Private' | 'Archived'

export interface Project {
  id: string
  name: string
  category: LString
  year: string
  status: ProjectStatus
  role: LString
  tagline: LString
  problem: LString
  solution: LString
  highlights: LString[]
  stack: string[]
  metrics?: { label: LString; value: string }[]
  image?: string
  logo?: string
  accent: string
  links: { label: LString; href: string; icon: IconName }[]
  featured?: boolean
}

export interface ExperienceItem {
  company: string
  role: LString
  location: LString
  period: string
  current?: boolean
  logo?: string
  logoTheme?: 'dark' | 'light' | 'bare'
  summary: LString
  points: LString[]
  stack: string[]
}

export interface StackGroup {
  name: LString
  hint: LString
  items: { name: string; primary?: boolean }[]
}

export interface Principle {
  index: string
  title: LString
  body: LString
}

export interface Stat {
  value: string
  label: LString
}

export interface Credential {
  title: LString
  org: string
  period: string
  note: LString
  icon: IconName
}
