import {
  BotIcon,
  Building2Icon,
  LandmarkIcon,
  RocketIcon,
  StarIcon,
  TrendingUpIcon,
} from 'lucide-react';

export const stats = [
  {
    id: 'companies',
    label: 'Companies audited',
    value: '500+',
    description: 'Teams audited across landing pages, paid funnels, and conversion journeys.',
    icon: Building2Icon,
    activeClass:
      '-translate-y-1.5 scale-[1.015] border-sky-300/90 bg-sky-50/95 shadow-[0_28px_70px_-34px_rgba(14,165,233,0.52)] ring-1 ring-sky-200/70',
    overlayClass:
      'bg-[radial-gradient(circle_at_12%_12%,rgba(125,211,252,0.28),transparent_42%),linear-gradient(140deg,rgba(240,249,255,0.72),rgba(255,255,255,0))] opacity-100',
    valueClass: 'text-sky-950',
  },
  {
    id: 'roi',
    label: 'Average marketing ROI improvement',
    value: '32%',
    description: 'Average improvement within 90 days after teams ship the recommended fixes.',
    icon: TrendingUpIcon,
    activeClass:
      '-translate-y-1.5 scale-[1.015] border-violet-300/90 bg-violet-50/95 shadow-[0_28px_70px_-34px_rgba(139,92,246,0.5)] ring-1 ring-violet-200/70',
    overlayClass:
      'bg-[radial-gradient(circle_at_14%_16%,rgba(196,181,253,0.3),transparent_42%),linear-gradient(140deg,rgba(245,243,255,0.74),rgba(255,255,255,0))] opacity-100',
    valueClass: 'text-violet-950',
  },
  {
    id: 'rating',
    label: 'Customer rating',
    value: '4.8/5',
    description: 'Average rating for clarity, speed, and usefulness of the recommendations.',
    icon: StarIcon,
    activeClass:
      '-translate-y-1.5 scale-[1.015] border-amber-300/90 bg-amber-50/95 shadow-[0_28px_70px_-34px_rgba(245,158,11,0.48)] ring-1 ring-amber-200/70',
    overlayClass:
      'bg-[radial-gradient(circle_at_14%_18%,rgba(253,230,138,0.34),transparent_42%),linear-gradient(140deg,rgba(255,251,235,0.76),rgba(255,255,255,0))] opacity-100',
    valueClass: 'text-amber-950',
  },
] as const;

export const logos = [
  {
    id: 'logo-northstar-cloud',
    label: 'Northstar Cloud',
    description: 'B2B SaaS',
    icon: RocketIcon,
    className:
      'border-sky-200/80 bg-sky-50/90 text-sky-700 shadow-[0_12px_24px_-18px_rgba(14,165,233,0.35)]',
    activeClass:
      '-translate-y-1.5 scale-[1.03] border-sky-300/90 bg-sky-50/95 shadow-[0_24px_56px_-28px_rgba(14,165,233,0.48)] ring-1 ring-sky-200/70',
  },
  {
    id: 'logo-signal-peak',
    label: 'SignalPeak',
    description: 'Fintech',
    icon: LandmarkIcon,
    className:
      'border-emerald-200/80 bg-emerald-50/90 text-emerald-700 shadow-[0_12px_24px_-18px_rgba(16,185,129,0.3)]',
    activeClass:
      '-translate-y-1.5 scale-[1.03] border-emerald-300/90 bg-emerald-50/95 shadow-[0_24px_56px_-28px_rgba(16,185,129,0.44)] ring-1 ring-emerald-200/70',
  },
  {
    id: 'logo-orbit-ledger',
    label: 'Orbit Ledger',
    description: 'AI platform',
    icon: BotIcon,
    className:
      'border-violet-200/80 bg-violet-50/90 text-violet-700 shadow-[0_12px_24px_-18px_rgba(139,92,246,0.3)]',
    activeClass:
      '-translate-y-1.5 scale-[1.03] border-violet-300/90 bg-violet-50/95 shadow-[0_24px_56px_-28px_rgba(139,92,246,0.46)] ring-1 ring-violet-200/70',
  },
] as const;

export const testimonials = [
  {
    id: 'vp-marketing',
    headline: 'GrowthPulse found $140K in wasted ad spend we didn’t know about.',
    detail:
      'The audit showed us where budget was leaking, what to pause, and where the highest-leverage fixes were across paid acquisition.',
    name: 'VP Marketing',
    company: 'Northstar Cloud',
    proofLabel: 'Spend efficiency',
    activeClass:
      '-translate-y-1.5 scale-[1.01] border-sky-300/90 bg-sky-50/90 shadow-[0_28px_70px_-36px_rgba(14,165,233,0.48)] ring-1 ring-sky-200/70',
    overlayClass:
      'bg-[radial-gradient(circle_at_12%_10%,rgba(125,211,252,0.24),transparent_40%),linear-gradient(135deg,rgba(240,249,255,0.72),rgba(255,255,255,0))] opacity-100',
  },
] as const;

export const socialProofSequenceIds = [
  ...stats.map((stat) => stat.id),
  ...logos.map((logo) => logo.id),
  ...testimonials.map((testimonial) => testimonial.id),
] as const;
