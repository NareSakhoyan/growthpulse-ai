'use client';

import dynamic from 'next/dynamic';
import * as React from 'react';

import type { GrainyAnimatedBgProps } from '@/components/ui/animated-grainy-bg';

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
  const [shouldLoad, setShouldLoad] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const currentElement = containerRef.current;

    if (!currentElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setShouldLoad(true);
        observer.disconnect();
      },
      {
        rootMargin: '240px 0px',
      },
    );

    observer.observe(currentElement);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className='h-full'>
      {shouldLoad ? (
        <AnimatedGrainyBg className={className} {...props}>
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
