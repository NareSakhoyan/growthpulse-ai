import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function OverviewDashboardPreview(): React.JSX.Element {
  return (
    <Card className='border-transparent bg-slate-950 text-slate-50 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.55)]'>
      <CardHeader className='space-y-4 border-b border-white/10 p-5 pb-5 sm:p-6 sm:pb-5'>
        <div className='flex items-center justify-between gap-4'>
          <div>
            <CardTitle className='text-xl text-white'>Audit Command Center</CardTitle>
            <CardDescription className='text-slate-300'>
              Live overview of your funnel health and next actions.
            </CardDescription>
          </div>
          <Badge className='border-transparent bg-emerald-500/15 text-emerald-300'>Live</Badge>
        </div>

        <div className='grid gap-3 sm:grid-cols-3'>
          <Card className='border-white/10 bg-white/5 text-white shadow-none'>
            <CardHeader className='gap-1 pb-2'>
              <p className='text-xs uppercase tracking-[0.18em] text-slate-400'>Traffic</p>
              <p className='text-2xl font-semibold'>42.8k</p>
            </CardHeader>
          </Card>
          <Card className='border-white/10 bg-white/5 text-white shadow-none'>
            <CardHeader className='gap-1 pb-2'>
              <p className='text-xs uppercase tracking-[0.18em] text-slate-400'>CVR</p>
              <p className='text-2xl font-semibold'>3.9%</p>
            </CardHeader>
          </Card>
          <Card className='border-white/10 bg-white/5 text-white shadow-none'>
            <CardHeader className='gap-1 pb-2'>
              <p className='text-xs uppercase tracking-[0.18em] text-slate-400'>CAC</p>
              <p className='text-2xl font-semibold'>$118</p>
            </CardHeader>
          </Card>
        </div>
      </CardHeader>

      <CardContent className='grid gap-4 p-5 sm:p-6 lg:grid-cols-[1.2fr_0.8fr]'>
        <Card className='border-white/10 bg-white/5 text-white shadow-none'>
          <CardHeader className='space-y-3'>
            <div className='flex items-center justify-between'>
              <CardTitle className='text-base'>Funnel Snapshot</CardTitle>
              <span className='text-xs text-emerald-300'>Improving</span>
            </div>
            <div className='space-y-3'>
              {[
                { label: 'Landing page clarity', value: '82%', width: '82%' },
                { label: 'Offer resonance', value: '61%', width: '61%' },
                { label: 'CTA visibility', value: '74%', width: '74%' },
              ].map((item) => (
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
            <CardTitle className='text-base'>Next Actions</CardTitle>
            <div className='space-y-3 text-sm text-slate-300'>
              <div className='rounded-lg border border-white/10 bg-white/5 p-3'>
                Rewrite headline around outcome, not feature list.
              </div>
              <div className='rounded-lg border border-white/10 bg-white/5 p-3'>
                Move trust proof above the pricing comparison.
              </div>
              <div className='rounded-lg border border-white/10 bg-white/5 p-3'>
                Add a clearer CTA path for audit-ready leads.
              </div>
            </div>
          </CardHeader>
        </Card>
      </CardContent>
    </Card>
  );
}
