import { Card, CardContent } from '@/components/ui/card';
import { GlassCtaButton } from '@/components/ui/glass-cta-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';

async function submitAuditLead(formData: FormData): Promise<void> {
  'use server';

  const leadPayload = Object.fromEntries(formData);

  // Reserved for the future Supabase insert and validation flow.
  void leadPayload;
}

export function GetAuditSection(): React.JSX.Element {
  return (
    <section
      id='get-audit'
      className='scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.18),transparent_20%),radial-gradient(circle_at_84%_18%,rgba(34,197,94,0.14),transparent_20%),linear-gradient(180deg,rgba(239,248,255,0.98),rgba(255,255,255,1))] py-8 sm:py-10'
    >
      <div className='space-y-8 px-4 sm:px-6'>
        <div className='space-y-4 text-center'>
          <div className='mx-auto max-w-2xl space-y-3'>
            <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>
              Share your page and goal. We&apos;ll take it from there.
            </h2>
            <p className='text-base leading-7 text-muted-foreground'>
              A short intake for your audit request.
            </p>
          </div>
        </div>
        <Card className='w-full border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.66),rgba(255,255,255,0.92))] shadow-lg backdrop-blur-sm'>
          <CardContent className='p-6 sm:p-8'>
            <form action={submitAuditLead} className='mx-auto grid w-full max-w-2xl gap-5'>
              <div className='grid gap-5 md:grid-cols-2'>
                <div className='grid gap-2'>
                  <Label htmlFor='founder-name'>Name</Label>
                  <Input id='founder-name' name='name' placeholder='Jane Founder' required />
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='work-email'>Work email</Label>
                  <Input
                    id='work-email'
                    name='email'
                    type='email'
                    placeholder='jane@company.com'
                    required
                  />
                </div>
              </div>

              <div className='grid gap-5 md:grid-cols-[1.4fr_0.8fr]'>
                <div className='grid gap-2'>
                  <Label htmlFor='website-url'>Website or landing page</Label>
                  <Input
                    id='website-url'
                    name='website'
                    type='url'
                    placeholder='https://your-site.com'
                    required
                  />
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='selected-plan'>Interested plan</Label>
                  <Select id='selected-plan' name='plan' defaultValue='growth'>
                    <option value='starter'>Starter</option>
                    <option value='growth'>Growth</option>
                    <option value='scale'>Scale</option>
                  </Select>
                </div>
              </div>

              <div className='grid gap-5 md:grid-cols-2'>
                <div className='grid gap-2'>
                  <Label htmlFor='monthly-traffic'>Monthly traffic</Label>
                  <Select id='monthly-traffic' name='monthlyTraffic' defaultValue='under-10k'>
                    <option value='under-10k'>Under 10k visits</option>
                    <option value='10k-50k'>10k to 50k visits</option>
                    <option value='50k-250k'>50k to 250k visits</option>
                    <option value='250k-plus'>250k+ visits</option>
                  </Select>
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='goal'>Primary goal</Label>
                  <Input id='goal' name='goal' placeholder='Increase demo conversions' required />
                </div>
              </div>

              <div className='flex justify-center sm:justify-end'>
                <GlassCtaButton type='submit' size='lg' className='w-full sm:w-auto'>
                  Get your audit
                </GlassCtaButton>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
