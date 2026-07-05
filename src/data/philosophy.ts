import type { Principle } from './types'

export const principles: Principle[] = [
  {
    index: '01',
    title: {
      en: 'Ship the whole thing',
      id: 'Kerjakan tuntas end-to-end',
    },
    body: {
      en: 'I own the path from the container and the database query all the way to the security header on the response. On Reparty that meant backend, infra, security and the admin CMS — everything except the mobile app.',
      id: 'Saya pegang seluruh jalurnya, mulai dari container dan query database sampai ke security header di response. Di Reparty itu berarti backend, infra, security, dan admin CMS — semuanya kecuali aplikasi mobile.',
    },
  },
  {
    index: '02',
    title: {
      en: 'Money has no rounding errors',
      id: 'Uang nggak kenal rounding error',
    },
    body: {
      en: 'When funds sit in escrow and get released to hosts, the edge cases *are* the feature. Money-conservation invariants, reconciliation and idempotency come before anything clever.',
      id: 'Saat dana ngendap di escrow lalu di-release ke host, justru edge case itulah fiturnya. Money-conservation invariant, reconciliation, dan idempotency saya dahulukan sebelum hal-hal yang keliatan pintar.',
    },
  },
  {
    index: '03',
    title: {
      en: 'Assume someone is trying to break it',
      id: 'Anggap selalu ada yang mau nge-hack',
    },
    body: {
      en: 'HMAC signing, RBAC, race-condition guards and append-only audit logs aren’t extras — they’re the default posture for anything touching money or identity.',
      id: 'HMAC signing, RBAC, guard race condition, dan audit log append-only bukan fitur tambahan — itu posture default buat apa pun yang menyentuh uang atau identitas.',
    },
  },
  {
    index: '04',
    title: {
      en: 'Optimize what people feel',
      id: 'Optimalkan yang beneran dirasakan user',
    },
    body: {
      en: 'Query tuning, caching and async flows only matter if the person holding the phone notices. Performance is a UX decision, not a benchmark.',
      id: 'Query tuning, caching, dan async flow baru ada artinya kalau orang yang megang HP-nya ikut ngerasain. Performance itu keputusan UX, bukan sekadar angka benchmark.',
    },
  },
]
