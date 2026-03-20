import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const metrics = [
  { label: 'Acquisition', value: 65, width: '65%' },
  { label: 'Retention', value: 82, width: '82%' },
  { label: 'SEO', value: 74, width: '74%' },
] as const;

const actionPlan = [
  {
    title: 'Improve landing page conversion',
    meta: 'High impact, Low effort',
    accentClassName: 'bg-emerald-500/15 text-emerald-300',
  },
  {
    title: 'Fix email drop-off',
    meta: 'Medium impact',
    accentClassName: 'bg-sky-500/15 text-sky-300',
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
          <Badge className='border-transparent bg-sky-500/15 text-sky-300'>Mock Results</Badge>
        </div>

        <div className='grid gap-3 lg:grid-cols-[1.15fr_0.85fr]'>
          <Card className='border-white/10 bg-[linear-gradient(180deg,rgba(14,165,233,0.12),rgba(255,255,255,0.04))] text-white shadow-none'>
            <CardHeader className='gap-2 pb-3'>
              <p className='text-xs uppercase tracking-[0.18em] text-slate-400'>Overall Score</p>
              <div className='flex items-end gap-2'>
                <p className='text-4xl font-semibold tracking-tight'>78/100</p>
                <span className='pb-1 text-sm text-emerald-300'>Healthy baseline</span>
              </div>
              <p className='text-sm leading-6 text-slate-300'>
                Strong retention signals, decent SEO coverage, and clear acquisition upside.
              </p>
            </CardHeader>
          </Card>
          <Card className='border-white/10 bg-white/5 text-white shadow-none'>
            <CardHeader className='gap-2 pb-3'>
              <p className='text-xs uppercase tracking-[0.18em] text-slate-400'>Feedback</p>
              <p className='text-sm leading-6 text-slate-300'>
                Based on your connected tools, we analyzed your growth performance.
              </p>
            </CardHeader>
          </Card>
        </div>
      </CardHeader>

      <CardContent className='grid gap-4 p-5 sm:p-6 lg:grid-cols-[1.2fr_0.8fr]'>
        <Card className='border-white/10 bg-white/5 text-white shadow-none'>
          <CardHeader className='space-y-3'>
            <div className='flex items-center justify-between'>
              <CardTitle className='text-base'>Performance Breakdown</CardTitle>
              <span className='text-xs text-emerald-300'>Generated</span>
            </div>
            <div className='space-y-3'>
              {metrics.map((item) => (
                <div key={item.label} className='space-y-1.5'>
                  <div className='flex items-center justify-between text-sm text-slate-300'>
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className='h-2 rounded-full bg-white/10'>
                    <div
                      className='h-2 rounded-full bg-[linear-gradient(90deg,#34d399,#60a5fa)]'
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardHeader>
        </Card>

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
                    <Badge className={`border-transparent ${item.accentClassName}`}>
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
