import type { SocialLink, NavItem } from './types'

export const profile = {
  name: 'Muhammad Irfannurroja',
  shortName: 'Fanja',
  initials: 'MI',
  roles: ['Backend Engineer', 'Infrastructure', 'Security'],
  location: { en: 'Tangerang, Indonesia', id: 'Tangerang Selatan, Indonesia' },
  timezone: 'GMT+7',
  currentCompany: 'Holywings Group',
  email: 'Irfannurroja28@gmail.com',
  phone: '+62 895 2389 6667',
  cv: '/cv/Muhammad-Irfannurroja-CV.pdf',
  availabilityLabel: {
    en: 'Open to select roles & freelance',
    id: 'Terbuka untuk role terpilih & freelance',
  },
  currentRole: { en: 'Backend Engineer', id: 'Backend Engineer' },
  headline: {
    en: 'I build the systems companies actually run on.',
    id: 'Saya membangun sistem yang benar-benar dijalankan perusahaan.',
  },
  intro: {
    en: 'A backend engineer from Tangerang who builds and runs production systems end-to-end — Laravel APIs, payment escrow, layered security, and the Docker infrastructure they live on. Right now I’m the backend engineer behind Reparty, a social party app where real money moves and correctness isn’t optional.',
    id: 'Backend engineer dari Tangerang yang membangun sekaligus menjalankan sistem produksi secara end-to-end — API Laravel, escrow pembayaran, keamanan berlapis, hingga infrastruktur Docker tempat semuanya berjalan. Saat ini saya backend engineer di balik Reparty, aplikasi social party tempat uang sungguhan berpindah dan ketelitian bukan sekadar pilihan.',
  },
} as const

export const socials: SocialLink[] = [
  { label: 'GitHub', handle: 'Fanjaa', href: 'https://github.com/Fanjaa', icon: 'github' },
  { label: 'LinkedIn', handle: 'in/fanjaaa', href: 'https://www.linkedin.com/in/fanjaaa/', icon: 'linkedin' },
  { label: 'X', handle: '@fanjaaa_', href: 'https://x.com/fanjaaa_', icon: 'x' },
  { label: 'Instagram', handle: '@fanjaaa_', href: 'https://instagram.com/fanjaaa_', icon: 'instagram' },
]

export const nav: NavItem[] = [
  { id: 'about', label: { en: 'About', id: 'Tentang' } },
  { id: 'expertise', label: { en: 'Expertise', id: 'Keahlian' } },
  { id: 'work', label: { en: 'Work', id: 'Karya' } },
  { id: 'experience', label: { en: 'Experience', id: 'Pengalaman' } },
  { id: 'stack', label: { en: 'Stack', id: 'Stack' } },
  { id: 'contact', label: { en: 'Contact', id: 'Kontak' } },
]
