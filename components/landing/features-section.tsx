import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
    <section id='features' className='scroll-mt-24'>
      <Card>
        <CardHeader className='gap-4'>
          <Badge className='w-fit' variant='outline'>
            Features
          </Badge>
          <div className='max-w-3xl space-y-3'>
            <CardTitle className='text-3xl sm:text-4xl'>
              Everything needed to audit a SaaS landing page like an operating system.
            </CardTitle>
            <CardDescription className='text-base'>
              The Features section stays compact inside the sidebar layout while still surfacing the
              core capabilities that make the audit useful.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className='flex h-full flex-col border-border/60 bg-background/80 shadow-none'
              >
                <CardHeader className='flex h-full flex-col gap-4'>
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
          <Card className='flex h-full flex-col border-dashed border-border/70 bg-[linear-gradient(180deg,rgba(99,102,241,0.08),rgba(255,255,255,0.92))] shadow-none md:col-span-2 xl:col-span-1'>
            <CardHeader className='flex h-full flex-col justify-between gap-4'>
              <div className='space-y-2'>
                <Badge className='w-fit' variant='outline'>
                  Built for teams
                </Badge>
                <CardTitle className='text-lg'>
                  From insight to rollout, without a messy handoff.
                </CardTitle>
                <CardDescription className='text-sm leading-6'>
                  Share one audit view with founders, growth, and product so everyone is working
                  from the same diagnosis.
                </CardDescription>
              </div>
              <Button asChild className='w-fit' variant='outline'>
                <a href='#pricing'>View plans</a>
              </Button>
            </CardHeader>
          </Card>
        </CardContent>
      </Card>
    </section>
  );
}
