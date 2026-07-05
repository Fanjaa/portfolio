import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'reparty',
    name: 'Reparty',
    category: { en: 'Backend · Infrastructure', id: 'Backend · Infrastructure' },
    year: '2026',
    status: 'Private',
    role: {
      en: 'Backend Engineer — backend, infra, security & CMS',
      id: 'Backend Engineer — backend, infra, keamanan & CMS',
    },
    tagline: {
      en: 'A social party app where real money moves — the entire backend, from the API to the infrastructure it runs on.',
      id: 'Aplikasi social party tempat uang beneran berputar — seluruh backend-nya, dari API sampai infrastructure tempat semuanya jalan.',
    },
    problem: {
      en: 'Reparty lets people host and join social parties, so money has to move safely (tickets, escrow, payouts), everything has to be realtime, and the whole thing has to be secure — and all of it had to be designed, built and operated by one backend engineer.',
      id: 'Reparty bikin orang bisa nge-host dan join social party, jadi uang harus mengalir dengan aman (tiket, escrow, payout), semuanya harus realtime, dan sistemnya harus secure — dan semua itu harus dirancang, dibangun, dan dioperasikan sendiri oleh satu backend engineer.',
    },
    solution: {
      en: 'I built the full production backend (Laravel 13 / PostgreSQL): payments & escrow via Xendit, WhatsApp OTP auth, anti-oversell multi-tier ticketing, realtime chat over WebSocket, and layered security. Then I shipped and ran it — Dockerized multi-env on a self-managed VPS with CI/CD — plus a Vue admin CMS. The only part I didn’t build is the Flutter mobile app.',
      id: 'Saya bangun seluruh backend production-nya (Laravel 13 / PostgreSQL): payment & escrow lewat Xendit, auth WhatsApp OTP, ticketing multi-tier anti-oversell, chat realtime lewat WebSocket, dan security berlapis. Lalu saya deploy dan operasikan sendiri — Dockerized multi-env di VPS yang saya kelola sendiri dengan CI/CD — plus CMS admin pakai Vue. Satu-satunya bagian yang bukan saya yang bangun adalah aplikasi mobile Flutter.',
    },
    highlights: [
      {
        en: 'Party escrow via Xendit — funds held until a party ends, released to hosts with dynamic fees, guarded by money-conservation invariants & auto-reconciliation',
        id: 'Escrow party lewat Xendit — dana ditahan sampai party selesai, di-release ke host dengan fee dinamis, dijaga money-conservation invariant & auto-reconciliation',
      },
      {
        en: 'HMAC-SHA256 request signing, RBAC, and append-only PostgreSQL-trigger audit logs — tamper-evident even with database access',
        id: 'HMAC-SHA256 request signing, RBAC, dan audit log append-only berbasis trigger PostgreSQL — tamper-evident bahkan kalau punya akses ke database',
      },
      {
        en: 'Race-condition guards (row locking + partial unique indexes) on every money & ticket flow — anti oversell and double-charge',
        id: 'Guard race condition (row locking + partial unique index) di setiap flow uang & tiket — anti oversell dan double-charge',
      },
      {
        en: 'Self-managed infra: 7-container Docker stack per env, Nginx/SSL, GitHub Actions CI/CD, Cloudflare R2 + Backblaze B2 backups, Sentry',
        id: 'Infra dikelola sendiri: Docker stack 7-container per env, Nginx/SSL, GitHub Actions CI/CD, backup Cloudflare R2 + Backblaze B2, Sentry',
      },
      {
        en: 'Realtime chat (Laravel Reverb), WhatsApp OTP, idempotent 2-stage withdrawal approvals and DB-driven feature flags',
        id: 'Chat realtime (Laravel Reverb), WhatsApp OTP, approval withdrawal 2-tahap yang idempotent, dan feature flag berbasis database',
      },
    ],
    stack: ['Laravel 13', 'PHP 8.3', 'PostgreSQL', 'Redis', 'Xendit', 'Laravel Reverb', 'Docker', 'Nginx', 'GitHub Actions', 'Vue'],
    metrics: [
      { value: '484', label: { en: 'Automated tests', id: 'Automated test' } },
      { value: '1,371', label: { en: 'Assertions', id: 'Assertion' } },
      { value: 'End-to-end', label: { en: 'Backend · Infra · CMS', id: 'Backend · Infra · CMS' } },
    ],
    logo: '/hwg-logo.png',
    accent: '#d7a94e',
    featured: true,
    links: [
      {
        label: { en: 'Under NDA — walkthrough on request', id: 'Under NDA — walkthrough kalau diminta' },
        href: 'mailto:Irfannurroja28@gmail.com?subject=Reparty%20walkthrough',
        icon: 'lock',
      },
    ],
  },
  {
    id: 'hris',
    name: 'HRIS Platform',
    category: { en: 'Enterprise Product', id: 'Product Enterprise' },
    year: '2025',
    status: 'Private',
    role: {
      en: 'Mobile & Backend Engineer — NestJS + Flutter',
      id: 'Mobile & Backend Engineer — NestJS + Flutter',
    },
    tagline: {
      en: 'Attendance, leave and payroll for real employees — end to end.',
      id: 'Absensi, cuti, dan payroll buat karyawan beneran — end to end.',
    },
    problem: {
      en: 'HR teams ran attendance, leave, overtime, payroll and reporting across disconnected legacy systems and several databases. It was manual, error-prone, and there was no real-time visibility for employees or approvers.',
      id: 'Tim HR menjalankan absensi, cuti, lembur, payroll, dan reporting di beberapa sistem legacy yang terpisah-pisah dan beberapa database. Prosesnya manual, rawan error, dan nggak ada visibility realtime buat karyawan maupun approver.',
    },
    solution: {
      en: 'An end-to-end HRIS: NestJS services behind a Flutter app. Employees check in with face recognition, request leave and overtime, and see approvals in real time; payroll and reports are generated from the same source of truth and synced back to the existing HRIS.',
      id: 'HRIS end-to-end: service NestJS di belakang aplikasi Flutter. Karyawan check-in dengan face recognition, mengajukan cuti dan lembur, serta melihat approval secara realtime; payroll dan report di-generate dari source of truth yang sama dan di-sync balik ke HRIS yang sudah ada.',
    },
    highlights: [
      {
        en: 'Face-recognition check-in with the Luxand SDK for secure, accurate attendance',
        id: 'Check-in face recognition pakai Luxand SDK buat absensi yang aman dan akurat',
      },
      {
        en: 'Real-time push (Firebase FCM) for approvals, payroll and system alerts',
        id: 'Push notification realtime (Firebase FCM) untuk approval, payroll, dan alert sistem',
      },
      {
        en: 'Cross-database synchronization with the legacy payroll system',
        id: 'Sync lintas database dengan sistem payroll legacy',
      },
      {
        en: 'Payroll migrated to NestJS with query optimization and business-logic refactoring',
        id: 'Payroll di-migrate ke NestJS dengan query optimization dan refactor business logic',
      },
    ],
    stack: ['NestJS', 'TypeScript', 'Flutter', 'Dart', 'GetX', 'MySQL', 'Docker', 'CodeIgniter 3'],
    metrics: [
      { value: '7', label: { en: 'HRIS modules shipped', id: 'Modul HRIS yang dirilis' } },
      { value: 'Face ID', label: { en: 'Verified check-in', id: 'Check-in terverifikasi' } },
      { value: 'Real-time', label: { en: 'Approvals & payroll', id: 'Approval & payroll' } },
    ],
    accent: '#2fbfb0',
    featured: true,
    links: [
      {
        label: { en: 'Company project — walkthrough on request', id: 'Proyek company — walkthrough kalau diminta' },
        href: 'mailto:Irfannurroja28@gmail.com?subject=HRIS%20walkthrough',
        icon: 'lock',
      },
    ],
  },
  {
    id: 'movie-db',
    name: 'Movie Database',
    category: { en: 'Web App', id: 'Aplikasi Web' },
    year: '2024',
    status: 'Live',
    role: { en: 'Frontend Engineer', id: 'Frontend Engineer' },
    tagline: {
      en: 'Search the movie universe with instant, dynamic results.',
      id: 'Jelajahi semesta film dengan hasil yang instan dan dinamis.',
    },
    problem: {
      en: 'A fast way to browse and search films with live results, without a heavy UI framework getting in the way.',
      id: 'Cara cepat buat browsing dan cari film dengan hasil realtime, tanpa framework UI berat yang bikin lambat.',
    },
    solution: {
      en: 'A React app on top of the TMDb REST API with real-time search, filtering and dynamic updates. Styled in native CSS for a clean, fully responsive layout that stays quick.',
      id: 'Aplikasi React di atas TMDb REST API dengan search realtime, filter, dan update dinamis. Di-styling pakai CSS native untuk layout yang bersih, fully responsive, dan tetap ngebut.',
    },
    highlights: [
      {
        en: 'Real-time search and filtering against the TMDb API',
        id: 'Search dan filter realtime ke TMDb API',
      },
      {
        en: 'Dynamic, responsive UI built with native CSS',
        id: 'UI dinamis dan responsive dibangun dengan CSS native',
      },
      {
        en: 'Popular-film discovery with detail views',
        id: 'Discovery film populer dengan halaman detail',
      },
    ],
    stack: ['React', 'REST API', 'TMDb', 'CSS'],
    image: '/projects/movie-database.png',
    accent: '#7c85ff',
    links: [{ label: { en: 'Live site', id: 'Live site' }, href: 'https://database-film.netlify.app/', icon: 'arrow-up-right' }],
  },
  {
    id: 'flower-shop',
    name: 'Flower Shop UI',
    category: { en: 'Frontend', id: 'Frontend' },
    year: '2025',
    status: 'Live',
    role: { en: 'Frontend Engineer', id: 'Frontend Engineer' },
    tagline: {
      en: 'Pixel-perfect slicing with motion that earns its place.',
      id: 'Slicing pixel-perfect dengan animasi yang beneran fungsional, bukan sekadar hiasan.',
    },
    problem: {
      en: 'Translate a detailed design into a faithful, responsive, animated storefront.',
      id: 'Menerjemahkan desain yang detail jadi storefront yang persis, responsive, dan beranimasi.',
    },
    solution: {
      en: 'A pixel-perfect slicing build in React + Vite and TailwindCSS, with AOS scroll animations used sparingly to guide the eye rather than decorate.',
      id: 'Build slicing pixel-perfect pakai React + Vite dan TailwindCSS, dengan animasi scroll AOS yang dipakai secukupnya buat mengarahkan mata, bukan sekadar dekorasi.',
    },
    highlights: [
      { en: 'Pixel-accurate to the source design', id: 'Akurat pixel-per-pixel dengan desain aslinya' },
      { en: 'Scroll-reveal motion with AOS', id: 'Animasi scroll-reveal pakai AOS' },
      { en: 'Fully responsive layout', id: 'Layout yang fully responsive' },
    ],
    stack: ['React', 'Vite', 'TailwindCSS', 'AOS'],
    accent: '#f0a5c0',
    links: [{ label: { en: 'Live site', id: 'Live site' }, href: 'https://flowershop-fe.netlify.app/', icon: 'arrow-up-right' }],
  },
  {
    id: 'badminton',
    name: 'Badminton Club',
    category: { en: 'Landing Page', id: 'Landing Page' },
    year: '2024',
    status: 'Live',
    role: { en: 'Frontend Engineer', id: 'Frontend Engineer' },
    tagline: {
      en: 'A club landing page built around news and events.',
      id: 'Landing page klub yang dibangun seputar berita dan acara.',
    },
    problem: {
      en: 'Give a local club a clean home for updates and event highlights.',
      id: 'Ngasih klub lokal wadah yang rapi buat update dan highlight acara.',
    },
    solution: {
      en: 'A responsive React landing page structured around news updates and event highlights, with a straightforward content layout that reads well on any screen.',
      id: 'Landing page React yang responsive, disusun seputar update berita dan highlight acara, dengan layout konten yang simpel dan enak dibaca di layar apa pun.',
    },
    highlights: [
      { en: 'News & event highlight sections', id: 'Section highlight berita & acara' },
      { en: 'Responsive, content-first layout', id: 'Layout responsive yang mengutamakan konten' },
      { en: 'Built in React', id: 'Dibangun pakai React' },
    ],
    stack: ['React', 'JavaScript'],
    accent: '#6fd08c',
    links: [{ label: { en: 'Live site', id: 'Live site' }, href: 'https://pbwbr02.netlify.app/', icon: 'arrow-up-right' }],
  },
  {
    id: 'gemini-clone',
    name: 'Gemini Clone',
    category: { en: 'Web App', id: 'Aplikasi Web' },
    year: '2024',
    status: 'Live',
    role: { en: 'Frontend Engineer', id: 'Frontend Engineer' },
    tagline: {
      en: 'A responsive AI chat interface wired to the Gemini API.',
      id: 'Interface chat AI yang responsive dan terhubung ke Gemini API.',
    },
    problem: {
      en: 'Recreate a modern AI-chat experience with real responses and clean navigation.',
      id: 'Bikin ulang pengalaman AI-chat modern dengan response beneran dan navigasi yang bersih.',
    },
    solution: {
      en: 'A responsive React app using the Gemini API for chat, with a modern interface and intuitive navigation modelled on the real product.',
      id: 'Aplikasi React yang responsive pakai Gemini API untuk chat, dengan interface modern dan navigasi intuitif yang meniru produk aslinya.',
    },
    highlights: [
      { en: 'Live Gemini API chat', id: 'Chat live dengan Gemini API' },
      { en: 'Responsive, modern chat UI', id: 'UI chat modern dan responsive' },
      { en: 'Intuitive navigation', id: 'Navigasi yang intuitif' },
    ],
    stack: ['React', 'Gemini API', 'CSS'],
    image: '/projects/gemini-clone.png',
    accent: '#7c85ff',
    links: [{ label: { en: 'Live site', id: 'Live site' }, href: 'https://gemini-clone-fanja.netlify.app/', icon: 'arrow-up-right' }],
  },
  {
    id: 'bento-grid',
    name: 'Bento Grid',
    category: { en: 'Frontend', id: 'Frontend' },
    year: '2024',
    status: 'Live',
    role: { en: 'Frontend Engineer', id: 'Frontend Engineer' },
    tagline: {
      en: 'A pure-CSS responsive bento layout — a Frontend Mentor challenge.',
      id: 'Layout bento responsive dengan pure CSS — challenge Frontend Mentor.',
    },
    problem: {
      en: 'Solve a responsive bento-grid challenge with CSS alone, no framework.',
      id: 'Menyelesaikan challenge bento-grid responsive hanya dengan CSS, tanpa framework.',
    },
    solution: {
      en: 'A responsive bento layout built with pure, modern CSS as a Frontend Mentor challenge solution — a study in getting grid and spacing right by hand.',
      id: 'Layout bento responsive yang dibangun dengan pure CSS modern sebagai solusi challenge Frontend Mentor — latihan menata grid dan spacing dengan tepat secara manual.',
    },
    highlights: [
      { en: 'Pure CSS, no framework', id: 'Pure CSS, tanpa framework' },
      { en: 'Responsive bento grid', id: 'Bento grid yang responsive' },
      { en: 'Frontend Mentor challenge', id: 'Challenge Frontend Mentor' },
    ],
    stack: ['HTML', 'CSS'],
    image: '/projects/bento-grid.png',
    accent: '#f2b872',
    links: [{ label: { en: 'Live site', id: 'Live site' }, href: 'https://bento-grid-fanja.netlify.app/', icon: 'arrow-up-right' }],
  },
]
