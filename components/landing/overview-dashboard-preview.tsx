import { GrowthScoreCard } from '@/components/landing/growth-score-card';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const actionPlan = [
  {
    title: 'Improve landing conversion',
    meta: 'High impact, Low effort',
    accentClassName: 'bg-emerald-500/15 text-emerald-300',
  },
  {
    title: 'Fix email drop-off',
    meta: 'Medium impact',
    accentClassName: 'bg-sky-500/15 text-sky-300',
  },
  {
    title: 'Boost trial activation',
    meta: 'High impact',
    accentClassName: 'bg-violet-500/15 text-violet-300',
  },
  {
    title: 'Refresh SEO pages',
    meta: 'Medium impact, Low effort',
    accentClassName: 'bg-amber-500/15 text-amber-300',
  },
  {
    title: 'Clarify pricing CTA',
    meta: 'Low effort',
    accentClassName: 'bg-cyan-500/15 text-cyan-300',
  },
  {
    title: 'Reduce paid CAC waste',
    meta: 'High impact',
    accentClassName: 'bg-rose-500/15 text-rose-300',
  },
  {
    title: 'Lift referral prompts',
    meta: 'Medium impact',
    accentClassName: 'bg-fuchsia-500/15 text-fuchsia-300',
  },
] as const;

export function OverviewDashboardPreview(): React.JSX.Element {
  return (
    <Card
      id='growth-score'
      className='border-transparent bg-slate-950 text-slate-50 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.55)] scroll-mt-28'
    >
      <CardHeader className='space-y-4 border-b border-white/10 p-5 pb-5 sm:p-6 sm:pb-5'>
        <div className='flex items-center justify-between gap-4'>
          <div>
            <CardTitle className='text-xl text-white'>Growth Score</CardTitle>
            <CardDescription className='text-slate-300'>
              Based on your connected tools, we analyzed your growth performance.
            </CardDescription>
          </div>
        </div>

        <div>
          <Card className='border-white/80 bg-[radial-gradient(circle_at_18%_20%,rgba(125,211,252,0.18),transparent_26%),linear-gradient(180deg,rgba(248,250,252,0.98),rgba(226,232,240,0.96))] text-slate-950 shadow-[0_22px_48px_-34px_rgba(125,211,252,0.28)]'>
            <CardHeader className='gap-2 pb-3'>
              <p className='text-xs uppercase tracking-[0.18em] text-slate-500'>Overall Score</p>
              <div className='flex items-end gap-2'>
                <p className='text-4xl font-semibold tracking-tight text-slate-950'>78/100</p>
                <span className='pb-1 text-sm text-emerald-600'>Healthy baseline</span>
              </div>
              <p className='text-sm leading-6 text-slate-600'>
                Strong retention signals, decent SEO coverage, and clear acquisition upside.
              </p>
            </CardHeader>
          </Card>
        </div>
      </CardHeader>

      <CardContent className='grid gap-4 p-5 sm:p-6 lg:grid-cols-[1.2fr_0.8fr]'>
        <GrowthScoreCard />

        <Card className='border-white/10 bg-white/5 text-white shadow-none'>
          <CardHeader className='space-y-3'>
            <CardTitle className='text-base'>Action Plan</CardTitle>
            <div className='space-y-3 text-sm text-slate-300'>
              {actionPlan.map((item) => (
                <div
                  key={item.title}
                  className='space-y-2 rounded-lg border border-white/10 bg-white/5 p-3'
                >
                  <div className='flex items-start justify-between gap-3'>
                    <p className='font-medium text-white'>{item.title}</p>
                    <Badge
                      className={`shrink-0 whitespace-nowrap border-transparent ${item.accentClassName}`}
                    >
                      {item.meta}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardHeader>
        </Card>
      </CardContent>
    </Card>
  );
}
