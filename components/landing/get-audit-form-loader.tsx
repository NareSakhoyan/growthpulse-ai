'use client';

import dynamic from 'next/dynamic';

import { useDeferredActivation } from '@/hooks/use-deferred-activation';

const GetAuditFormClient = dynamic(
  () =>
    import('@/components/landing/get-audit-form-client').then(
      (module) => module.GetAuditFormClient,
    ),
  {
    ssr: false,
    loading: () => <AuditFormPlaceholder />,
  },
);

function AuditFormPlaceholder(): React.JSX.Element {
  return (
    <div className='grid gap-5' aria-hidden='true'>
      <div className='grid gap-5 md:grid-cols-2'>
        <div className='space-y-2'>
          <div className='h-4 w-24 rounded-full bg-slate-200/80' />
          <div className='h-11 rounded-xl bg-white/80 shadow-inner ring-1 ring-border/60' />
        </div>
        <div className='space-y-2'>
          <div className='h-4 w-24 rounded-full bg-slate-200/80' />
          <div className='h-11 rounded-xl bg-white/80 shadow-inner ring-1 ring-border/60' />
        </div>
      </div>
      <div className='space-y-2'>
        <div className='h-4 w-28 rounded-full bg-slate-200/80' />
        <div className='h-11 rounded-xl bg-white/80 shadow-inner ring-1 ring-border/60' />
      </div>
      <div className='flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between'>
        <div className='space-y-2'>
          <div className='h-4 w-72 max-w-full rounded-full bg-slate-200/70' />
          <div className='h-4 w-56 max-w-full rounded-full bg-slate-200/60' />
        </div>
        <div className='h-11 w-full rounded-xl bg-slate-950/90 sm:w-36' />
      </div>
    </div>
  );
}

export function GetAuditFormLoader(): React.JSX.Element {
  const { ref: containerRef, isActive: shouldLoad } = useDeferredActivation({
    rootMargin: '320px 0px',
    idleTimeoutMs: 500,
  });

  return (
    <div ref={containerRef}>{shouldLoad ? <GetAuditFormClient /> : <AuditFormPlaceholder />}</div>
  );
}
