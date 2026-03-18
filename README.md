# GrowthPulse AI

GrowthPulse AI is a marketing-site build for a fictional SaaS product that audits a
company's marketing stack, surfaces weak spots, and turns them into a prioritized
action plan.

## Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS v4 for styling
- shadcn/ui-style components with `class-variance-authority`, `radix-ui`, `clsx`,
  and `tailwind-merge`
- Supabase for backend/data integration
- PostHog for product analytics and event tracking
- ESLint, Prettier, Husky, and `lint-staged` for code quality and pre-commit formatting

## Current Setup

- `app/` contains the Next.js App Router entry points
- `components/` contains UI and feature components
- `lib/supabase/` contains browser, server, and middleware Supabase clients
- `components/posthog-provider.tsx` initializes PostHog on the client and captures
  pageviews on route changes

## Environment Variables

Add these values in `.env` or `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_project_key
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

For EU PostHog projects, change `NEXT_PUBLIC_POSTHOG_HOST` to
`https://eu.i.posthog.com`.

## Analytics

PostHog is connected through the root layout so it loads once for the app and
tracks client-side pageviews across route changes. The project already has the
`posthog-js` dependency installed, so no extra package setup is required beyond
the env vars.
