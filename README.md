# Family Flow (Phase 2 Prototype)

**Organize the chaos. Protect what matters.**

Family Flow is a production-style Next.js prototype for overwhelmed parents coordinating school, sports, lessons, appointments, and downtime.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Recharts
- lucide-react
- Framer Motion
- Local mock data + localStorage persistence (no backend/auth/database)

## Phase 2 Features

- Multi-step onboarding flow persisted to localStorage
- Editable child profiles
- Add/edit/delete activity management in Calendar
- Conflict status tracking (unresolved/reviewed/resolved)
- Free-time filters + protected downtime controls
- Suggestions favorite + try-this-week interactions
- Pricing page (Free / Family Plus / Premium)
- Upgraded settings/account summary
- Stronger dashboard insights and next-step guidance

## Installation

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Notes

- Static-friendly architecture suitable for Vercel.
- No real authentication, payments, database, or external APIs.
