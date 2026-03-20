import { GetAuditFormLoader } from '@/components/landing/get-audit-form-loader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function GetAuditSection(): React.JSX.Element {
  return (
    <section
      id='get-audit'
      className='scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.18),transparent_20%),radial-gradient(circle_at_84%_18%,rgba(34,197,94,0.14),transparent_20%),linear-gradient(180deg,rgba(239,248,255,0.98),rgba(255,255,255,1))] py-12 sm:py-14 lg:py-16'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='space-y-8'>
          <div className='space-y-4 text-center'>
            <div className='mx-auto max-w-2xl space-y-3 px-1 sm:px-0'>
              <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>Get your audit</h2>
              <p className='text-base leading-7 text-muted-foreground'>
                Send the basics. We&apos;ll tell you if there&apos;s real upside to chase.
              </p>
            </div>
          </div>
          <Card className='mx-auto w-full max-w-3xl border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.94))] shadow-[0_24px_60px_-32px_rgba(15,23,42,0.2)] backdrop-blur-sm'>
            <CardHeader className='space-y-3 p-6 pb-0 sm:p-8 sm:pb-0'>
              <CardTitle className='text-xl sm:text-2xl'>Request your audit</CardTitle>
              <CardDescription className='max-w-2xl text-sm leading-6 sm:text-base'>
                No bloated sales process. Just a quick read on whether your funnel has meaningful
                room to improve.
              </CardDescription>
            </CardHeader>
            <CardContent className='p-6 pt-6 sm:p-8'>
              <GetAuditFormLoader />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
