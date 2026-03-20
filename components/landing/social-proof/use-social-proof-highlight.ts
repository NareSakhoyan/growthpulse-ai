'use client';

import * as React from 'react';

import { socialProofSequenceIds } from './social-proof-data';

const HIGHLIGHT_INTERVAL_MS = 4500;
const INITIAL_HIGHLIGHT_DELAY_MS = 600;

function shuffleItems<T>(items: readonly T[]): T[] {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

export function useSocialProofHighlight(): string | null {
  const [activeCardId, setActiveCardId] = React.useState<string | null>(null);

  React.useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let isCancelled = false;
    let currentSequence = shuffleItems(socialProofSequenceIds);
    let currentIndex = -1;

    const advanceHighlight = (): void => {
      if (isCancelled) {
        return;
      }

      currentIndex += 1;

      if (currentIndex >= currentSequence.length) {
        currentSequence = shuffleItems(socialProofSequenceIds);
        currentIndex = 0;
      }

      setActiveCardId(currentSequence[currentIndex]);
      timeoutId = setTimeout(advanceHighlight, HIGHLIGHT_INTERVAL_MS);
    };

    timeoutId = setTimeout(advanceHighlight, INITIAL_HIGHLIGHT_DELAY_MS);

    return () => {
      isCancelled = true;

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return activeCardId;
}
