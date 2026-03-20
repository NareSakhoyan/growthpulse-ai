'use client';

import * as React from 'react';

import { analyticsEvents, captureEvent } from '@/lib/posthog';

export type HeroVariant = 'a' | 'b';

type HeroCopy = {
  headline: string;
  description: string;
};

const HERO_VARIANT_STORAGE_KEY = 'growthpulse.hero.variant';

const heroCopy: Record<HeroVariant, HeroCopy> = {
  a: {
    headline: 'Turn your marketing stack into a clear revenue dashboard.',
    description:
      'GrowthPulse AI audits your funnel, messaging, and conversion points, then turns the findings into a prioritized action plan your team can ship quickly.',
  },
  b: {
    headline: 'See exactly where your funnel is leaking revenue.',
    description:
      'GrowthPulse AI reviews your messaging, funnel, and conversion flow so your team can focus on the highest-impact fixes first.',
  },
};

export function useHeroVariant(): { variant: HeroVariant; copy: HeroCopy } {
  const [variant, setVariant] = React.useState<HeroVariant>('a');

  React.useEffect(() => {
    let assignedVariant = sessionStorage.getItem(HERO_VARIANT_STORAGE_KEY) as HeroVariant | null;

    if (assignedVariant !== 'a' && assignedVariant !== 'b') {
      assignedVariant = Math.random() < 0.5 ? 'a' : 'b';
      sessionStorage.setItem(HERO_VARIANT_STORAGE_KEY, assignedVariant);
    }

    setVariant(assignedVariant);
    captureEvent(analyticsEvents.heroVariantSeen, {
      variant: assignedVariant,
      section: 'overview',
    });
  }, []);

  return {
    variant,
    copy: heroCopy[variant],
  };
}
