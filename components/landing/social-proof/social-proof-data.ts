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
    activeClass: 'border-sky-200/80 bg-sky-50/90 shadow-[0_18px_45px_-28px_rgba(14,165,233,0.38)]',
    valueClass: 'text-sky-950',
  },
  {
    id: 'roi',
    label: 'Average marketing ROI improvement',
    value: '32%',
    description: 'Average improvement within 90 days after teams ship the recommended fixes.',
    icon: TrendingUpIcon,
    activeClass:
      'border-violet-200/80 bg-violet-50/90 shadow-[0_18px_45px_-28px_rgba(139,92,246,0.34)]',
    valueClass: 'text-violet-950',
  },
  {
    id: 'rating',
    label: 'Customer rating',
    value: '4.8/5',
    description: 'Average rating for clarity, speed, and usefulness of the recommendations.',
    icon: StarIcon,
    activeClass:
      'border-amber-200/80 bg-amber-50/90 shadow-[0_18px_45px_-28px_rgba(245,158,11,0.34)]',
    valueClass: 'text-amber-950',
  },
] as const;

export const logos = [
  {
    label: 'Northstar Cloud',
    description: 'B2B SaaS',
    icon: RocketIcon,
    className:
      'border-sky-200/80 bg-sky-50/90 text-sky-700 shadow-[0_12px_24px_-18px_rgba(14,165,233,0.35)]',
  },
  {
    label: 'SignalPeak',
    description: 'Fintech',
    icon: LandmarkIcon,
    className:
      'border-emerald-200/80 bg-emerald-50/90 text-emerald-700 shadow-[0_12px_24px_-18px_rgba(16,185,129,0.3)]',
  },
  {
    label: 'Orbit Ledger',
    description: 'AI platform',
    icon: BotIcon,
    className:
      'border-violet-200/80 bg-violet-50/90 text-violet-700 shadow-[0_12px_24px_-18px_rgba(139,92,246,0.3)]',
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
    activeClass: 'border-sky-200/80 bg-sky-50/85 shadow-[0_20px_48px_-30px_rgba(14,165,233,0.34)]',
  },
] as const;

export const socialProofSequenceIds = [
  ...stats.map((stat) => stat.id),
  'logos',
  ...testimonials.map((testimonial) => testimonial.id),
] as const;
