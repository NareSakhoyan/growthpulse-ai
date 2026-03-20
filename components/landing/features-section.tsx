import { IntegrationGrid } from '@/components/landing/integration-grid';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GlassCtaButton } from '@/components/ui/glass-cta-button';
import {
  BadgeCheckIcon,
  BlocksIcon,
  ChartColumnIncreasingIcon,
  MessageSquareQuoteIcon,
  TargetIcon,
} from 'lucide-react';

const features = [
  {
    title: 'Funnel Diagnostics',
    description:
      'Map drop-off points across acquisition, activation, and conversion so the biggest revenue leaks stand out fast.',
    icon: TargetIcon,
  },
  {
    title: 'Messaging Clarity',
    description:
      'Evaluate headlines, offer framing, and CTA language to make your value proposition easier to understand.',
    icon: MessageSquareQuoteIcon,
  },
  {
    title: 'Prioritized Recommendations',
    description:
      'Turn audit findings into an ordered execution plan based on expected impact, effort, and urgency.',
    icon: BadgeCheckIcon,
  },
  {
    title: 'Dashboard Reporting',
    description:
      'See the health of your landing experience in one concise view built for founders, marketers, and operators.',
    icon: ChartColumnIncreasingIcon,
  },
  {
    title: 'Cross-Channel Coverage',
    description:
      'Review how paid, organic, lifecycle, and on-page signals work together instead of auditing each channel in isolation.',
    icon: BlocksIcon,
  },
] as const;

export function FeaturesSection(): React.JSX.Element {
  return (
    <section
      id='features'
      className='scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_88%_18%,rgba(251,191,36,0.18),transparent_18%),radial-gradient(circle_at_12%_82%,rgba(248,113,113,0.12),transparent_18%),linear-gradient(180deg,rgba(255,252,245,0.98),rgba(248,250,252,0.94))] py-12 sm:py-14 lg:py-16'
    >
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-10 lg:px-8'>
        <div className='space-y-4'>
          <div className='max-w-3xl space-y-3 px-2 sm:px-0'>
            <h2 className='text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl'>
              Everything you need to find what&apos;s dragging conversion.
            </h2>
            <p className='text-base leading-7 text-slate-700'>
              Spot weak messaging, hidden drop-off points, and the fixes most likely to move
              pipeline.
            </p>
          </div>
        </div>
        <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className='flex h-full flex-col border-border/60 bg-background/80 shadow-none'
              >
                <CardHeader className='flex h-full flex-col gap-4 p-5 sm:p-6'>
                  <div className='flex size-11 items-center justify-center rounded-xl border border-border/60 bg-muted/60'>
                    <Icon className='size-5 text-foreground' />
                  </div>
                  <div className='space-y-2'>
                    <CardTitle className='text-lg'>{feature.title}</CardTitle>
                    <CardDescription className='text-sm leading-6'>
                      {feature.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
          <Card className='flex h-full flex-col border-dashed border-border/70 bg-[linear-gradient(180deg,rgba(99,102,241,0.08),rgba(255,255,255,0.92))] shadow-none ring-1 ring-slate-200/70 md:col-span-2 xl:col-span-1'>
            <CardHeader className='flex h-full flex-col justify-between gap-5 p-5 sm:p-6'>
              <div className='space-y-2'>
                <Badge className='w-fit' variant='outline'>
                  Built for teams
                </Badge>
                <CardTitle className='text-lg text-slate-950'>
                  No handoff theater. Just a diagnosis your team can act on.
                </CardTitle>
                <CardDescription className='text-sm leading-6 text-slate-700'>
                  Put founders, growth, and product on the same page before weak assumptions turn
                  into expensive experiments.
                </CardDescription>
              </div>
              <GlassCtaButton asChild className='w-fit' tone='soft'>
                <a href='#pricing'>View plans</a>
              </GlassCtaButton>
            </CardHeader>
          </Card>
        </div>
        <IntegrationGrid />
      </div>
    </section>
  );
}
