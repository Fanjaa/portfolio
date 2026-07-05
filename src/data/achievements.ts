import type { Credential, Stat } from './types'

export const stats: Stat[] = [
  { value: '484', label: { en: 'Automated tests written', id: 'Automated test yang ditulis' } },
  { value: '1.3k+', label: { en: 'Test assertions passing', id: 'Test assertion yang lolos' } },
  { value: '7', label: { en: 'Projects shipped', id: 'Proyek yang dirilis' } },
  { value: '50+', label: { en: 'Students mentored in web dev', id: 'Mahasiswa yang saya bimbing di web dev' } },
]

export const credentials: Credential[] = [
  {
    title: {
      en: 'Bachelor of Informatics Engineering',
      id: 'Sarjana Teknik Informatika',
    },
    org: 'Pamulang University',
    period: '2020 — 2024',
    note: { en: 'GPA 3.45 / 4.00', id: 'IPK 3,45 / 4,00' },
    icon: 'cap',
  },
  {
    title: {
      en: 'Graphic & Multimedia Designer',
      id: 'Desainer Grafis & Multimedia',
    },
    org: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    period: '2023 — 2026',
    note: {
      en: 'National professional certification',
      id: 'Sertifikasi profesi nasional',
    },
    icon: 'award',
  },
]
