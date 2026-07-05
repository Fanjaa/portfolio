import type { ExperienceItem } from './types'

export const experience: ExperienceItem[] = [
  {
    company: 'Holywings Group',
    role: { en: 'Backend Engineer — Reparty', id: 'Backend Engineer — Reparty' },
    location: { en: 'South Tangerang', id: 'Tangerang Selatan' },
    period: 'Apr 2026 — Present',
    current: true,
    logo: '/hwg-logo.png',
    logoTheme: 'dark',
    summary: {
      en: 'Backend engineer for Reparty — building the entire backend, infrastructure, security and admin CMS end to end.',
      id: 'Backend engineer untuk Reparty — bangun seluruh backend, infrastructure, security, dan CMS admin secara end to end.',
    },
    points: [
      {
        en: 'Designed and built a production REST API (Laravel 13 / PostgreSQL) for a social party discovery & hosting app — end to end.',
        id: 'Merancang dan membangun REST API production (Laravel 13 / PostgreSQL) untuk aplikasi social party discovery & hosting — end to end.',
      },
      {
        en: 'Payments & escrow with Xendit: funds held until a party ends, then released to hosts with dynamic fees, money-conservation invariants and auto-reconciliation.',
        id: 'Payment & escrow dengan Xendit: dana ditahan sampai party selesai, lalu di-release ke host dengan fee dinamis, money-conservation invariant, dan auto-reconciliation.',
      },
      {
        en: 'Layered security: HMAC-SHA256 request signing, RBAC, append-only tamper-evident audit logs, and race-condition guards on every money & ticket flow.',
        id: 'Security berlapis: HMAC-SHA256 request signing, RBAC, audit log append-only yang tamper-evident, dan guard race condition di setiap flow uang & tiket.',
      },
      {
        en: 'Self-managed infra: multi-env Docker stack (7 containers/env), Nginx + SSL, GitHub Actions CI/CD, Cloudflare R2 + Backblaze B2 backups, Sentry.',
        id: 'Infra yang saya kelola sendiri: Docker stack multi-env (7 container/env), Nginx + SSL, GitHub Actions CI/CD, backup Cloudflare R2 + Backblaze B2, Sentry.',
      },
      {
        en: 'Realtime chat (Laravel Reverb), WhatsApp OTP auth, anti-oversell ticketing, and a Vue admin CMS — 484 tests · 1,371 assertions.',
        id: 'Chat realtime (Laravel Reverb), auth WhatsApp OTP, ticketing anti-oversell, dan CMS admin Vue — 484 test · 1.371 assertion.',
      },
    ],
    stack: ['Laravel 13', 'PostgreSQL', 'Redis', 'Xendit', 'Docker', 'Vue'],
  },
  {
    company: 'PT. Shan Informasi Sistem',
    role: { en: 'Mobile & Web Developer', id: 'Mobile & Web Developer' },
    location: { en: 'West Jakarta', id: 'Jakarta Barat' },
    period: 'Apr 2025 — Mar 2026',
    logo: '/shn-logo.png',
    logoTheme: 'light',
    summary: {
      en: 'Built HRIS platforms end to end — NestJS backend and Flutter mobile — where attendance and payroll had to be exact.',
      id: 'Membangun platform HRIS secara end to end — backend NestJS dan mobile Flutter — di mana absensi dan payroll harus presisi.',
    },
    points: [
      {
        en: 'Developed end-to-end HRIS apps (NestJS + Flutter): attendance, leave, overtime, payroll, reports and real-time notifications.',
        id: 'Mengembangkan aplikasi HRIS end-to-end (NestJS + Flutter): absensi, cuti, lembur, payroll, report, dan notification realtime.',
      },
      {
        en: 'Migrated complex payroll to NestJS with query optimization and business-logic refactoring; multi-database leave & attendance calculations.',
        id: 'Migrate payroll yang kompleks ke NestJS dengan query optimization dan refactor business logic; perhitungan cuti & absensi lintas database.',
      },
      {
        en: 'Face-recognition attendance (Luxand SDK), Firebase FCM push, Docker, and HR/payroll reports in CodeIgniter 3.',
        id: 'Absensi dengan face recognition (Luxand SDK), push notification Firebase FCM, Docker, dan report HR/payroll di CodeIgniter 3.',
      },
    ],
    stack: ['NestJS', 'Flutter', 'Docker', 'MySQL', 'CodeIgniter 3'],
  },
  {
    company: 'Pamulang University',
    role: { en: 'Laboratory Assistant', id: 'Asisten Laboratorium' },
    location: { en: 'South Tangerang', id: 'Tangerang Selatan' },
    period: 'Jun 2022 — Jul 2024',
    logo: '/unpam-logo.png',
    logoTheme: 'bare',
    summary: {
      en: 'Taught web development hands-on and kept academic events running.',
      id: 'Mengajar web development secara hands-on dan menjaga kelancaran acara akademik.',
    },
    points: [
      {
        en: 'Guided 50+ students through front-end and back-end web development concepts and debugging.',
        id: 'Membimbing 50+ mahasiswa memahami konsep frontend dan backend web development serta debugging.',
      },
      {
        en: 'Supported lecturers in practical sessions — software installation, configuration and troubleshooting.',
        id: 'Membantu dosen di sesi praktikum — instalasi software, konfigurasi, dan troubleshooting.',
      },
      {
        en: 'Produced 10+ live-streaming sessions with OBS Studio for academic events on YouTube.',
        id: 'Memproduksi 10+ sesi live-streaming pakai OBS Studio untuk acara akademik di YouTube.',
      },
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'OBS Studio'],
  },
]
