'use client';

import { useEffect, useRef, useState } from 'react';

import { DownloadIcon, Loader2Icon } from 'lucide-react';

import { Button } from '@/components/ui/button';

type DownloadState = 'idle' | 'loading' | 'done';

export function ReportDownloadButton(): React.JSX.Element {
  const [downloadState, setDownloadState] = useState<DownloadState>('idle');
  const resetTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current !== null) {
        window.clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  function handleDownload(): void {
    if (downloadState === 'loading') {
      return;
    }

    if (resetTimeoutRef.current !== null) {
      window.clearTimeout(resetTimeoutRef.current);
    }

    setDownloadState('loading');

    window.setTimeout(() => {
      setDownloadState('done');
      resetTimeoutRef.current = window.setTimeout(() => {
        setDownloadState('idle');
      }, 2400);
    }, 1400);
  }

  return (
    <div className='flex flex-col items-start gap-2 sm:items-end'>
      <Button
        type='button'
        onClick={handleDownload}
        disabled={downloadState === 'loading'}
        size='lg'
        className='h-10 rounded-xl bg-[linear-gradient(135deg,#4338ca,#3b82f6)] px-4 text-white shadow-[0_20px_40px_-26px_rgba(59,130,246,0.75)] hover:brightness-110'
      >
        {downloadState === 'loading' ? (
          <>
            <Loader2Icon className='animate-spin' />
            Preparing report...
          </>
        ) : (
          <>
            <DownloadIcon />
            {downloadState === 'done' ? 'Download started' : 'Download sample report'}
          </>
        )}
      </Button>
      <p className='text-xs leading-5 text-slate-700'>
        {downloadState === 'done'
          ? 'Board packet queued. This demo does not generate a real PDF.'
          : 'Preview only. No file generation or backend workflow attached.'}
      </p>
    </div>
  );
}
