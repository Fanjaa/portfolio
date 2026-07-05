import type { StackGroup } from './types'

export const stackGroups: StackGroup[] = [
  {
    name: { en: 'Backend', id: 'Backend' },
    hint: { en: 'Where the business rules live', id: 'Tempat business rules berada' },
    items: [
      { name: 'Laravel', primary: true },
      { name: 'NestJS', primary: true },
      { name: 'PHP' },
      { name: 'PostgreSQL', primary: true },
      { name: 'MySQL' },
      { name: 'Redis' },
      { name: 'REST APIs' },
    ],
  },
  {
    name: { en: 'Security & Payments', id: 'Keamanan & Pembayaran' },
    hint: { en: 'Where a bug costs real money', id: 'Tempat sebuah bug bikin rugi beneran' },
    items: [
      { name: 'Xendit', primary: true },
      { name: 'HMAC signing', primary: true },
      { name: 'RBAC' },
      { name: 'JWT' },
      { name: 'OTP Auth' },
      { name: 'Audit logs' },
    ],
  },
  {
    name: { en: 'Infra & DevOps', id: 'Infra & DevOps' },
    hint: { en: 'Built and run by me', id: 'Dibangun dan dijalankan sendiri' },
    items: [
      { name: 'Docker', primary: true },
      { name: 'Nginx' },
      { name: 'GitHub Actions', primary: true },
      { name: 'Cloudflare R2' },
      { name: 'Backblaze B2' },
      { name: 'Sentry' },
      { name: 'UptimeRobot' },
      { name: 'Tailscale' },
    ],
  },
  {
    name: { en: 'Realtime & Mobile', id: 'Realtime & Mobile' },
    hint: { en: 'From service to the screen', id: 'Dari service sampai ke layar' },
    items: [
      { name: 'Laravel Reverb', primary: true },
      { name: 'WebSocket' },
      { name: 'Flutter', primary: true },
      { name: 'Dart' },
      { name: 'GetX' },
      { name: 'Firebase FCM' },
    ],
  },
  {
    name: { en: 'Frontend', id: 'Frontend' },
    hint: { en: 'Interfaces that stay out of the way', id: 'Interface yang nggak menghalangi' },
    items: [
      { name: 'Vue', primary: true },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TypeScript', primary: true },
      { name: 'TailwindCSS', primary: true },
      { name: 'Bootstrap' },
    ],
  },
  {
    name: { en: 'Craft & Design', id: 'Craft & Design' },
    hint: { en: 'Tested, documented, BNSP-certified', id: 'Teruji, terdokumentasi, tersertifikasi BNSP' },
    items: [
      { name: 'PHPUnit' },
      { name: 'Swagger' },
      { name: 'Postman' },
      { name: 'Git' },
      { name: 'Figma' },
      { name: 'Photoshop' },
      { name: 'Illustrator' },
    ],
  },
]
