import { ActionPlanList } from '@/components/landing/action-plan-list';
import { GrowthScoreCard } from '@/components/landing/growth-score-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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

      <CardContent className='grid items-start gap-4 p-5 sm:p-6 lg:grid-cols-[1.2fr_0.8fr]'>
        <GrowthScoreCard />
        <ActionPlanList />
      </CardContent>
    </Card>
  );
}
