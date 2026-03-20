import {
  BlocksIcon,
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
    label: 'Companies supported',
    value: '500+',
    description: 'Teams using audit-led recommendations to sharpen acquisition and conversion.',
    icon: Building2Icon,
    activeClass: 'border-sky-200/80 bg-sky-50/90 shadow-[0_18px_45px_-28px_rgba(14,165,233,0.38)]',
    valueClass: 'text-sky-950',
  },
  {
    id: 'roi',
    label: 'Average ROI improvement',
    value: '32%',
    description: 'Measured lift after teams shipped the highest-priority fixes from the audit.',
    icon: TrendingUpIcon,
    activeClass:
      'border-violet-200/80 bg-violet-50/90 shadow-[0_18px_45px_-28px_rgba(139,92,246,0.34)]',
    valueClass: 'text-violet-950',
  },
  {
    id: 'rating',
    label: 'Average rating',
    value: '4.8/5',
    description:
      'Consistently strong feedback on clarity, speed, and decision-ready recommendations.',
    icon: StarIcon,
    activeClass:
      'border-amber-200/80 bg-amber-50/90 shadow-[0_18px_45px_-28px_rgba(245,158,11,0.34)]',
    valueClass: 'text-amber-950',
  },
] as const;

export const logos = [
  {
    label: 'PLG SaaS',
    description: 'Self-serve funnels',
    icon: RocketIcon,
    className:
      'border-sky-200/80 bg-sky-50/90 text-sky-700 shadow-[0_12px_24px_-18px_rgba(14,165,233,0.35)]',
  },
  {
    label: 'Fintech teams',
    description: 'Trust-heavy journeys',
    icon: LandmarkIcon,
    className:
      'border-emerald-200/80 bg-emerald-50/90 text-emerald-700 shadow-[0_12px_24px_-18px_rgba(16,185,129,0.3)]',
  },
  {
    label: 'AI products',
    description: 'Activation-first onboarding',
    icon: BotIcon,
    className:
      'border-violet-200/80 bg-violet-50/90 text-violet-700 shadow-[0_12px_24px_-18px_rgba(139,92,246,0.3)]',
  },
  {
    label: 'Developer tools',
    description: 'Technical buying flows',
    icon: BlocksIcon,
    className:
      'border-amber-200/80 bg-amber-50/90 text-amber-700 shadow-[0_12px_24px_-18px_rgba(245,158,11,0.28)]',
  },
] as const;

export const testimonials = [
  {
    id: 'growth-lead',
    headline: 'A ranked list of what to fix first.',
    detail:
      'The audit stopped a lot of internal guessing and gave the team a clearer order of operations for what to ship next.',
    name: 'Growth Lead',
    company: 'Series A SaaS',
    proofLabel: 'Faster execution',
    activeClass: 'border-sky-200/80 bg-sky-50/85 shadow-[0_20px_48px_-30px_rgba(14,165,233,0.34)]',
  },
  {
    id: 'founder',
    headline: 'Recommendations we could hand straight to the team.',
    detail:
      'Instead of a vague strategy deck, we got specific messaging and funnel direction our design and paid teams could act on immediately.',
    name: 'Founder',
    company: 'Self-serve B2B product',
    proofLabel: 'Clearer handoff',
    activeClass:
      'border-violet-200/80 bg-violet-50/85 shadow-[0_20px_48px_-30px_rgba(139,92,246,0.3)]',
  },
] as const;

export const socialProofSequenceIds = [
  ...stats.map((stat) => stat.id),
  'logos',
  ...testimonials.map((testimonial) => testimonial.id),
] as const;
