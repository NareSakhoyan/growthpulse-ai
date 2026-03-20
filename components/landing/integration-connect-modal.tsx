'use client';

import { CheckCircle2Icon, LoaderCircleIcon, SparklesIcon } from 'lucide-react';
import * as React from 'react';

import { integrations } from '@/components/landing/integration-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GlassCtaButton } from '@/components/ui/glass-cta-button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

type FlowState = 'select' | 'connecting' | 'connected';

const CONNECTING_DELAY_MS = 1400;
const CONNECTED_DELAY_MS = 900;

function scrollToGrowthScore(): void {
  const target = document.getElementById('growth-score');

  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

export function IntegrationConnectModal(): React.JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [selectedIds, setSelectedIds] = React.useState<string[]>([
    'hubspot',
    'google-analytics',
    'meta-ads',
  ]);
  const [flowState, setFlowState] = React.useState<FlowState>('select');
  const timeoutIdsRef = React.useRef<number[]>([]);

  const clearTimeouts = React.useCallback(() => {
    timeoutIdsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    timeoutIdsRef.current = [];
  }, []);

  React.useEffect(() => clearTimeouts, [clearTimeouts]);

  React.useEffect(() => {
    if (open) {
      return;
    }

    clearTimeouts();
    setFlowState('select');
  }, [clearTimeouts, open]);

  const toggleIntegration = React.useCallback((id: string) => {
    setSelectedIds((currentIds) => {
      if (currentIds.includes(id)) {
        return currentIds.filter((currentId) => currentId !== id);
      }

      return [...currentIds, id];
    });
  }, []);

  const handleSubmit = React.useCallback(() => {
    if (selectedIds.length === 0 || flowState !== 'select') {
      return;
    }

    setFlowState('connecting');

    timeoutIdsRef.current.push(
      window.setTimeout(() => {
        setFlowState('connected');

        timeoutIdsRef.current.push(
          window.setTimeout(() => {
            setOpen(false);
            window.setTimeout(scrollToGrowthScore, 120);
          }, CONNECTED_DELAY_MS),
        );
      }, CONNECTING_DELAY_MS),
    );
  }, [flowState, selectedIds.length]);

  const selectedCountLabel = `${selectedIds.length} tool${selectedIds.length === 1 ? '' : 's'} selected`;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <GlassCtaButton type='button' size='lg' className='w-full border-0 sm:w-auto'>
          Connect your stack
        </GlassCtaButton>
      </SheetTrigger>
      <SheetContent
        side='right'
        className='w-full gap-0 border-l border-white/70 bg-[radial-gradient(circle_at_18%_12%,rgba(125,211,252,0.16),transparent_24%),radial-gradient(circle_at_88%_16%,rgba(165,180,252,0.16),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.96))] p-0 shadow-[0_40px_120px_-36px_rgba(15,23,42,0.46)] supports-backdrop-filter:backdrop-blur-xl sm:max-w-xl'
      >
        <SheetHeader className='gap-3 border-b border-border/60 bg-white/72 px-5 py-5 pr-14 shadow-[0_20px_40px_-34px_rgba(15,23,42,0.28)] sm:px-6'>
          <Badge className='w-fit' variant='outline'>
            One-Click Stack Integration
          </Badge>
          <SheetTitle className='text-lg font-semibold tracking-tight'>
            Connect the tools already feeding your funnel.
          </SheetTitle>
          <SheetDescription className='leading-6'>
            Pick the platforms you want included in the audit. No API calls here, just a simulated
            connection flow.
          </SheetDescription>
        </SheetHeader>

        <div className='flex-1 overflow-y-auto bg-[linear-gradient(180deg,rgba(255,255,255,0.32),rgba(255,255,255,0))] px-5 py-5 sm:px-6'>
          {flowState === 'select' ? (
            <div className='space-y-4'>
              <div className='flex items-center justify-between rounded-2xl border border-white/80 bg-white/80 px-4 py-3 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.24)] ring-1 ring-slate-200/50'>
                <p className='text-sm font-medium text-foreground'>{selectedCountLabel}</p>
                <p className='text-xs text-muted-foreground'>Connect in under 5 minutes</p>
              </div>

              <div className='grid gap-3 sm:grid-cols-2'>
                {integrations.map((integration) => {
                  const Icon = integration.icon;
                  const selected = selectedIds.includes(integration.id);

                  return (
                    <Button
                      key={integration.id}
                      type='button'
                      variant='outline'
                      aria-pressed={selected}
                      onClick={() => toggleIntegration(integration.id)}
                      className={cn(
                        'h-auto justify-start rounded-2xl border-white/85 bg-white/84 px-4 py-3 text-left shadow-[0_16px_34px_-32px_rgba(15,23,42,0.22)] ring-1 ring-slate-200/45 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300/80 hover:bg-white hover:shadow-[0_24px_54px_-34px_rgba(15,23,42,0.3)]',
                        selected &&
                          'border-sky-300/80 bg-[linear-gradient(180deg,rgba(240,249,255,0.98),rgba(224,242,254,0.82))] shadow-[0_24px_54px_-34px_rgba(14,165,233,0.42)] ring-sky-200/70',
                      )}
                    >
                      <div
                        className={cn(
                          'flex size-10 shrink-0 items-center justify-center rounded-2xl border',
                          integration.accentClassName,
                        )}
                      >
                        <Icon className='size-4' />
                      </div>
                      <div className='min-w-0 flex-1'>
                        <p className='truncate text-sm font-medium text-foreground'>
                          {integration.name}
                        </p>
                      </div>
                      <Badge
                        variant='outline'
                        className={cn(
                          'ml-2 shrink-0 bg-white/90 transition-opacity',
                          selected ? 'opacity-100' : 'opacity-0',
                        )}
                      >
                        Selected
                      </Badge>
                    </Button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className='space-y-4 rounded-3xl border border-white/80 bg-[radial-gradient(circle_at_18%_14%,rgba(125,211,252,0.16),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,249,255,0.9))] p-5 shadow-[0_28px_64px_-36px_rgba(15,23,42,0.28)] ring-1 ring-sky-100/80'>
              <div className='flex items-center gap-3'>
                <div className='flex size-11 items-center justify-center rounded-2xl border border-white/80 bg-white/90 shadow-[0_14px_28px_-22px_rgba(15,23,42,0.22)]'>
                  {flowState === 'connecting' ? (
                    <LoaderCircleIcon className='size-5 animate-spin text-sky-600' />
                  ) : (
                    <CheckCircle2Icon className='size-5 text-emerald-600' />
                  )}
                </div>
                <div className='space-y-1'>
                  <p className='text-base font-semibold text-foreground'>
                    {flowState === 'connecting' ? 'Connecting...' : 'Your stack is connected'}
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    {flowState === 'connecting'
                      ? 'Syncing the tools you selected into one audit-ready view.'
                      : `Pulled ${selectedIds.length} data source${selectedIds.length === 1 ? '' : 's'} into GrowthPulse. Generating your audit next.`}
                  </p>
                </div>
              </div>

              <div className='space-y-2'>
                <div className='h-2 overflow-hidden rounded-full bg-slate-200'>
                  <div
                    className={cn(
                      'h-full rounded-full bg-[linear-gradient(90deg,#0ea5e9,#4f46e5)] transition-all duration-500',
                      flowState === 'connecting' ? 'w-1/2' : 'w-full',
                    )}
                  />
                </div>
                <div className='flex flex-wrap gap-2'>
                  {integrations
                    .filter((integration) => selectedIds.includes(integration.id))
                    .map((integration) => (
                      <Badge key={integration.id} variant='outline' className='bg-white/70'>
                        {integration.name}
                      </Badge>
                    ))}
                </div>
              </div>
              <div className='flex items-center gap-2 rounded-2xl border border-border/50 bg-background/70 px-4 py-3 text-sm text-muted-foreground'>
                <SparklesIcon className='size-4 text-indigo-600' />
                Growth Score is up next.
              </div>
            </div>
          )}
        </div>
        <SheetFooter className='border-t border-border/60 bg-white/72 px-5 py-4 shadow-[0_-20px_40px_-34px_rgba(15,23,42,0.18)] sm:px-6'>
          <Button
            type='button'
            variant='ghost'
            onClick={() => setOpen(false)}
            disabled={flowState !== 'select'}
          >
            Cancel
          </Button>
          <GlassCtaButton
            type='button'
            className='border-0'
            disabled={selectedIds.length === 0 || flowState !== 'select'}
            onClick={handleSubmit}
          >
            Connect
          </GlassCtaButton>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
