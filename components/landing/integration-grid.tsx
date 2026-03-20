import { ConnectStackButton } from '@/components/landing/connect-stack-button';
import { integrations } from '@/components/landing/integration-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function IntegrationGrid(): React.JSX.Element {
  return (
    <Card className='overflow-hidden border-border/60 bg-background/80 shadow-none'>
      <CardHeader className='gap-4 p-5 sm:p-6 lg:flex-row lg:items-end lg:justify-between'>
        <div className='space-y-2'>
          <div className='space-y-2'>
            <CardTitle className='text-xl sm:text-2xl'>
              Plug GrowthPulse into the tools already running your funnel.
            </CardTitle>
            <CardDescription className='max-w-2xl text-sm leading-6 sm:text-base'>
              Pull acquisition, CRM, lifecycle, and attribution signals into one audit layer without
              a messy setup sprint.
            </CardDescription>
          </div>
        </div>
        <div className='flex flex-col items-start gap-3 sm:flex-row sm:items-center'>
          <ConnectStackButton />
          <p className='text-sm text-muted-foreground'>Connect in under 5 minutes</p>
        </div>
      </CardHeader>

      <CardContent className='px-5 pb-5 sm:px-6 sm:pb-6'>
        <div className='-mx-5 overflow-x-auto px-5 pb-1 sm:-mx-6 sm:px-6 md:mx-0 md:overflow-visible md:px-0'>
          <div className='grid min-w-max grid-flow-col auto-cols-[minmax(9.5rem,1fr)] gap-3 md:min-w-0 md:grid-flow-row md:auto-cols-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'>
            {integrations.map((integration) => {
              const Icon = integration.icon;

              return (
                <Card
                  key={integration.name}
                  className='group border-border/60 bg-white/70 shadow-none transition-all duration-200 hover:-translate-y-1 hover:border-slate-300/80 hover:bg-white hover:shadow-[0_18px_40px_-28px_rgba(15,23,42,0.28)]'
                >
                  <CardContent className='flex items-center gap-3 p-4'>
                    <div
                      className={cn(
                        'flex size-10 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-200 group-hover:scale-105',
                        integration.accentClassName,
                      )}
                    >
                      <Icon className='size-4' />
                    </div>
                    <div className='min-w-0'>
                      <p className='truncate text-sm font-medium text-foreground'>
                        {integration.name}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
