# GrowthPulse AI

GrowthPulse AI is a single-page marketing site for a fictional SaaS product that
audits a company’s funnel, messaging, and growth stack, then turns the findings
into a prioritized action plan.

The current build is primarily a polished frontend experience with:

- a landing page built in Next.js App Router
- animated dashboard/report previews
- a lead capture form backed by Supabase
- product analytics via PostHog

## What This Project Includes

- Overview hero with simulated growth insights
- Live dashboard cards for seven growth dimensions
- AI-positioned action plan and report preview sections
- Pricing, social proof, and integration showcase sections
- “Get Audit” form that inserts leads into Supabase
- Deferred client loading for heavier interactive sections

## Architecture Overview

### Runtime structure

- `app/layout.tsx`
  Wraps the app in the root layout, fonts, metadata, skip link, and
  `PostHogProvider`.
- `app/page.tsx`
  Renders the full landing page as a single route composed of section
  components.
- `components/landing/*`
  Contains all landing-page sections and most feature-specific UI.
- `components/ui/*`
  Shared design primitives based on shadcn-style patterns.
- `lib/posthog.ts`
  Analytics event definitions, lazy initialization, and queued capture logic.
- `lib/supabase/*`
  Browser/server Supabase helpers plus session middleware utilities.
- `supabase/schema.sql` and `supabase/migrations/*`
  Database schema and migration history for lead capture.

### High-level flow

1. The user lands on `/`.
2. The page renders mostly as static App Router content.
3. Client-only enhancements progressively activate:
   - PostHog loads after interaction or fallback idle timing
   - deferred components load when near viewport
   - simulated dashboard/live UI updates run in local state only
4. If the user submits the audit form, the browser inserts a row into
   `public.leads` in Supabase using the public anon key.

### Page composition

- `OverviewSection`
  Hero copy, CTA buttons, dashboard preview.
- `ReportPreview`
  Executive-summary style report UI.
- `FeaturesSection`
  Feature cards and integration overview.
- `PricingSection`
  Interactive pricing card selection.
- `SocialProofSection`
  Animated stats, logos, and testimonial cards.
- `GetAuditSection`
  Lead capture form and Supabase submission flow.

## AI Tools Used

### In the product

The product is presented as AI-assisted, but the current runtime does **not**
call an LLM API.

What is currently AI-themed or simulated:

- “AI-Generated Action Plan” content
- growth score and report preview copy
- live dashboard simulations and alert states

What is **not** implemented yet:

- OpenAI / Anthropic / other LLM inference
- server-side prompt execution
- streaming responses
- retrieval, embeddings, vector search, or agent workflows

### During development

This codebase can be maintained with AI-assisted coding workflows. In this repo,
agentic coding assistance was used for implementation/refinement work, but there
is no runtime dependency on those tools.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn-style component architecture
- lucide-react icons
- Motion for animation
- Supabase SSR client helpers
- PostHog analytics
- React Hook Form + Zod validation
- ESLint + Prettier + Husky + lint-staged

## Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Add environment variables

Create `.env.local` and add:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_project_key
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

For EU PostHog projects:

```bash
NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com
```

### 3. Run the app

```bash
npm run dev
```

### 4. Open the site

```bash
http://localhost:3000
```

## Supabase Setup

The project expects a `leads` table with public insert access via RLS policy.

Current schema fields:

- `id`
- `name`
- `email`
- `company_size`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`
- `created_at`

If using the Supabase CLI, the repo already includes helper scripts:

```bash
npm run supabase:push
npm run supabase:pull
npm run supabase:reset
npm run supabase:status
```

## Analytics Setup

PostHog is loaded through `components/posthog-provider.tsx` and
`lib/posthog.ts`.

Behavior worth noting:

- analytics are disabled outside production
- initialization is deferred until user interaction or fallback timeout
- pageviews are captured manually for App Router navigations
- scroll depth events are tracked after analytics activation
- events are queued until PostHog is fully initialized

Tracked event types currently include:

- CTA clicks
- form started
- form submitted
- scroll depth
- hero variant seen
- Supabase test result events

## Lead Capture Flow

The “Get Audit” form:

- validates with Zod
- uses React Hook Form for state management
- reads UTM params from the current URL
- inserts directly into Supabase from the browser
- reports submission analytics to PostHog

Important implementation detail:

- `lib/supabase/client.ts` throws if the public Supabase env vars are missing
- the form catches that and shows a user-facing error state

## Performance Decisions

The app is intentionally lightweight and avoids overbuilding.

Current performance-oriented choices:

- single-route landing page instead of a multi-route marketing site
- deferred activation hook for heavier client sections
- lazy analytics boot instead of eager analytics on first paint
- no charting library for the dashboard preview
- local-state simulations instead of backend polling or websockets

## Trade-Offs and Rationale

### 1. Simulated AI instead of real AI inference

Trade-off:
The UX communicates AI value without LLM infrastructure complexity.

Why:
This keeps the product demo fast, cheap, and reliable for a landing-page use
case.

Cost:
The current app cannot actually generate personalized audits yet.

### 2. Browser-side lead inserts instead of server actions/API routes

Trade-off:
Simpler implementation and faster iteration.

Why:
For a basic lead capture form, Supabase anon insert with RLS is sufficient.

Cost:
This is more exposed to abuse/spam than a hardened server-side submission path
with rate limiting, bot detection, and enrichment.

### 3. Production-only PostHog

Trade-off:
Cleaner local development and less noisy analytics behavior.

Why:
Developers do not need analytics firing on every local interaction.

Cost:
Analytics behavior is less visible during development unless explicitly tested
in a production-like environment.

### 4. Single-page architecture

Trade-off:
Simple navigation and strong storytelling flow.

Why:
This project behaves more like a polished funnel than a content-heavy site.

Cost:
It is less modular for SEO-heavy content expansion than a more route-oriented
marketing architecture.

### 5. Prepared Supabase auth middleware, but no auth app flow

Trade-off:
The repo includes reusable Supabase SSR/session utilities ahead of actual auth
product requirements.

Why:
This makes later expansion easier.

Cost:
Some backend scaffolding exists before the corresponding route structure is
fully implemented.

## Not Yet Implemented

- real LLM-backed audit generation
- authenticated user dashboard
- report persistence per account
- spam/rate-limit protection on lead capture
- backend job pipeline for audit generation
- email delivery / CRM sync

## Recommended Next Steps

If this moves beyond a frontend demo, the highest-leverage next steps are:

1. Move lead submission behind a server action or API route.
2. Add rate limiting and bot protection.
3. Persist audit/report data in Supabase beyond raw lead capture.
4. Integrate a real LLM workflow for personalized audit output.
5. Add authenticated routes if the product evolves into a true SaaS app.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run format
npm run format:check
npm run supabase:push
npm run supabase:pull
npm run supabase:reset
npm run supabase:status
```
