'use client';

import dynamic from 'next/dynamic';

import type { GrainyAnimatedBgProps } from '@/components/ui/animated-grainy-bg';
import { useDeferredActivation } from '@/hooks/use-deferred-activation';

const AnimatedGrainyBg = dynamic(
  () => import('@/components/ui/animated-grainy-bg').then((module) => module.AnimatedGrainyBg),
  { ssr: false },
);

type LazyAuroraBackgroundProps = Pick<
  GrainyAnimatedBgProps,
  | 'animationType'
  | 'grainType'
  | 'grainIntensity'
  | 'grainSize'
  | 'grainBlendMode'
  | 'speed'
  | 'colors'
  | 'className'
  | 'darkMode'
  | 'style'
  | 'as'
> & {
  children: React.ReactNode;
};

export function LazyAuroraBackground({
  children,
  className,
  ...props
}: LazyAuroraBackgroundProps): React.JSX.Element {
  const { ref: containerRef, isActive: shouldLoad } = useDeferredActivation({
    rootMargin: '240px 0px',
    idleTimeoutMs: 700,
  });

  return (
    <div ref={containerRef} className='h-full'>
      {shouldLoad ? (
        <AnimatedGrainyBg className={className} animate={shouldLoad} {...props}>
          {children}
        </AnimatedGrainyBg>
      ) : (
        <div className={className} style={props.style}>
          {children}
        </div>
      )}
    </div>
  );
}
