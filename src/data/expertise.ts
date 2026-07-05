import type { Expertise } from './types'

export const expertise: Expertise[] = [
  {
    icon: 'server',
    title: { en: 'Backend & APIs', id: 'Backend & API' },
    blurb: {
      en: 'Production services that hold up under real business rules — not just CRUD.',
      id: 'Service production yang tetap kokoh saat berhadapan dengan business rules beneran — bukan sekadar CRUD.',
    },
    points: [
      {
        en: 'Laravel & NestJS, production-grade REST APIs',
        id: 'REST API production-grade dengan Laravel & NestJS',
      },
      {
        en: 'PostgreSQL / MySQL data modelling & query tuning',
        id: 'Data modelling & query tuning PostgreSQL / MySQL',
      },
      {
        en: 'Realtime over WebSocket (Laravel Reverb), OTP auth',
        id: 'Realtime lewat WebSocket (Laravel Reverb), auth OTP',
      },
    ],
  },
  {
    icon: 'wallet',
    title: { en: 'Payments & Money', id: 'Pembayaran & Keuangan' },
    blurb: {
      en: 'Where a rounding error is a bug report you can’t afford.',
      id: 'Ranah di mana rounding error sekecil apa pun langsung jadi bug report yang nggak bisa ditoleransi.',
    },
    points: [
      {
        en: 'Xendit payments, disbursement & party escrow',
        id: 'Payment Xendit, disbursement & party escrow',
      },
      {
        en: 'Money-conservation invariants + auto-reconciliation',
        id: 'Money-conservation invariant + auto-reconciliation',
      },
      {
        en: 'Idempotency keys & 2-stage withdrawal approvals',
        id: 'Idempotency key & approval withdrawal 2-tahap',
      },
    ],
  },
  {
    icon: 'shield',
    title: { en: 'Security & Infrastructure', id: 'Keamanan & Infrastruktur' },
    blurb: {
      en: 'Building it and running it — locked down and reproducible.',
      id: 'Bangun sekaligus operasikan sendiri — terkunci rapat dan reproducible.',
    },
    points: [
      {
        en: 'HMAC request signing, RBAC, tamper-evident audit logs',
        id: 'HMAC request signing, RBAC, audit log yang tamper-evident',
      },
      {
        en: 'Race-condition guards on every money & ticket flow',
        id: 'Guard race condition di setiap flow uang & tiket',
      },
      {
        en: 'Self-managed Docker VPS, Nginx/SSL, CI/CD, backups',
        id: 'VPS Docker yang saya kelola sendiri, Nginx/SSL, CI/CD, backup',
      },
    ],
  },
  {
    icon: 'phone-device',
    title: { en: 'Realtime & Mobile', id: 'Realtime & Mobile' },
    blurb: {
      en: 'From the service down to the screen a user taps.',
      id: 'Dari sisi service sampai ke layar yang di-tap user.',
    },
    points: [
      {
        en: 'WebSocket chat, push & live updates',
        id: 'Chat WebSocket, push notification & live update',
      },
      {
        en: 'Flutter + Dart apps with GetX and Firebase FCM',
        id: 'Aplikasi Flutter + Dart pakai GetX dan Firebase FCM',
      },
      {
        en: 'Async data flows tuned for responsive UX',
        id: 'Async data flow yang di-tune demi UX yang responsive',
      },
    ],
  },
]
