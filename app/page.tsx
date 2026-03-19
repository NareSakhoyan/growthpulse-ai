import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default function Home() {
  return (
    <SidebarProvider className='flex min-h-svh flex-col'>
      <SiteHeader />
      <div className='flex flex-1'>
        <AppSidebar />
        <SidebarInset>
          <div className='flex flex-1 flex-col gap-4 p-4 sm:p-6'>
            <div className='mx-auto flex w-full max-w-6xl flex-col gap-6'>
              <section id='overview' className='scroll-mt-24'>
                <Card className='overflow-hidden border-border/60 bg-[linear-gradient(135deg,rgba(15,23,42,0.04),rgba(99,102,241,0.12)_38%,rgba(255,255,255,0.98))] shadow-sm'>
                  <CardContent className='grid gap-6 p-6 sm:p-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] xl:items-center'>
                    <div className='space-y-6'>
                      <div className='space-y-4'>
                        <Badge className='w-fit border-transparent bg-foreground text-background'>
                          Overview
                        </Badge>
                        <div className='space-y-3'>
                          <h1 className='max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl xl:text-6xl'>
                            Turn your marketing stack into a clear revenue dashboard.
                          </h1>
                          <p className='max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg'>
                            GrowthPulse AI audits your funnel, messaging, and conversion points,
                            then turns the findings into a prioritized action plan your team can
                            ship quickly.
                          </p>
                        </div>
                      </div>

                      <div className='flex flex-col gap-3 sm:flex-row'>
                        <Button asChild size='lg'>
                          <a href='#get-audit'>Get your audit</a>
                        </Button>
                        <Button asChild size='lg' variant='outline'>
                          <a href='#features'>See how it works</a>
                        </Button>
                      </div>

                      <div className='grid gap-3 sm:grid-cols-3'>
                        <Card className='border-border/60 bg-background/80 shadow-none'>
                          <CardHeader className='gap-1 pb-2'>
                            <p className='text-xs uppercase tracking-[0.18em] text-muted-foreground'>
                              Audit Time
                            </p>
                            <p className='text-2xl font-semibold tracking-tight'>12 min</p>
                          </CardHeader>
                        </Card>
                        <Card className='border-border/60 bg-background/80 shadow-none'>
                          <CardHeader className='gap-1 pb-2'>
                            <p className='text-xs uppercase tracking-[0.18em] text-muted-foreground'>
                              Priority Gaps
                            </p>
                            <p className='text-2xl font-semibold tracking-tight'>7 issues</p>
                          </CardHeader>
                        </Card>
                        <Card className='border-border/60 bg-background/80 shadow-none'>
                          <CardHeader className='gap-1 pb-2'>
                            <p className='text-xs uppercase tracking-[0.18em] text-muted-foreground'>
                              Lift Potential
                            </p>
                            <p className='text-2xl font-semibold tracking-tight'>+18%</p>
                          </CardHeader>
                        </Card>
                      </div>
                    </div>

                    <Card className='border-border/60 bg-slate-950 text-slate-50 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.55)]'>
                      <CardHeader className='space-y-4 border-b border-white/10 pb-4'>
                        <div className='flex items-center justify-between gap-4'>
                          <div>
                            <CardTitle className='text-xl text-white'>
                              Audit Command Center
                            </CardTitle>
                            <CardDescription className='text-slate-300'>
                              Live overview of your funnel health and next actions.
                            </CardDescription>
                          </div>
                          <Badge className='border-transparent bg-emerald-500/15 text-emerald-300'>
                            Live
                          </Badge>
                        </div>

                        <div className='grid gap-3 sm:grid-cols-3'>
                          <Card className='border-white/10 bg-white/5 text-white shadow-none'>
                            <CardHeader className='gap-1 pb-2'>
                              <p className='text-xs uppercase tracking-[0.18em] text-slate-400'>
                                Traffic
                              </p>
                              <p className='text-2xl font-semibold'>42.8k</p>
                            </CardHeader>
                          </Card>
                          <Card className='border-white/10 bg-white/5 text-white shadow-none'>
                            <CardHeader className='gap-1 pb-2'>
                              <p className='text-xs uppercase tracking-[0.18em] text-slate-400'>
                                CVR
                              </p>
                              <p className='text-2xl font-semibold'>3.9%</p>
                            </CardHeader>
                          </Card>
                          <Card className='border-white/10 bg-white/5 text-white shadow-none'>
                            <CardHeader className='gap-1 pb-2'>
                              <p className='text-xs uppercase tracking-[0.18em] text-slate-400'>
                                CAC
                              </p>
                              <p className='text-2xl font-semibold'>$118</p>
                            </CardHeader>
                          </Card>
                        </div>
                      </CardHeader>

                      <CardContent className='grid gap-4 p-4 lg:grid-cols-[1.2fr_0.8fr]'>
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
                  </CardContent>
                </Card>
              </section>

              <section id='features' className='scroll-mt-24'>
                <Card>
                  <CardHeader>
                    <Badge className='w-fit' variant='outline'>
                      Features
                    </Badge>
                    <CardTitle className='text-3xl sm:text-4xl'>Feature grid placeholder</CardTitle>
                    <CardDescription>
                      Use this area for the feature narrative, capability cards, and supporting
                      product detail.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
                    {Array.from({ length: 6 }).map((_, index) => (
                      <Card key={index} className='border-border/60 bg-background/80 shadow-none'>
                        <CardHeader>
                          <CardTitle className='text-lg'>Feature card</CardTitle>
                          <CardDescription>
                            Placeholder copy for a product capability, benefit, or workflow step.
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </section>

              <section id='pricing' className='scroll-mt-24'>
                <Card>
                  <CardHeader>
                    <Badge className='w-fit' variant='outline'>
                      Pricing
                    </Badge>
                    <CardTitle className='text-3xl sm:text-4xl'>
                      Pricing section placeholder
                    </CardTitle>
                    <CardDescription>
                      Reserve this block for the plan cards, comparison details, and pricing CTA.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='grid gap-4 lg:grid-cols-3'>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <Card
                        key={index}
                        className={
                          index === 1
                            ? 'border-indigo-300/70 bg-[linear-gradient(180deg,rgba(99,102,241,0.08),rgba(255,255,255,0.96))]'
                            : 'border-border/60 bg-background/80'
                        }
                      >
                        <CardHeader>
                          <CardTitle className='text-lg'>Plan placeholder</CardTitle>
                          <CardDescription>
                            Plan details, pricing, support level, and included limits.
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </section>

              <section id='social-proof' className='scroll-mt-24'>
                <Card>
                  <CardHeader>
                    <Badge className='w-fit' variant='outline'>
                      Social Proof
                    </Badge>
                    <CardTitle className='text-3xl sm:text-4xl'>
                      Proof and trust placeholder
                    </CardTitle>
                    <CardDescription>
                      This section is reserved for logos, testimonial cards, benchmark metrics, and
                      customer proof.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <Card key={index} className='border-border/60 bg-background/80 shadow-none'>
                        <CardHeader>
                          <CardTitle className='text-lg'>Proof block</CardTitle>
                          <CardDescription>
                            Placeholder for a testimonial, logo group, or headline stat.
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </section>

              <section id='get-audit' className='scroll-mt-24'>
                <Card className='border-border/60 bg-[linear-gradient(180deg,rgba(79,70,229,0.08),rgba(255,255,255,0.96))]'>
                  <CardHeader>
                    <Badge className='w-fit border-transparent bg-indigo-600 text-white'>
                      Get Audit
                    </Badge>
                    <CardTitle className='text-3xl sm:text-4xl'>
                      Final CTA and lead form placeholder
                    </CardTitle>
                    <CardDescription>
                      This section is ready for the final conversion block, form fields, validation
                      states, and submission feedback.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='grid gap-4 sm:grid-cols-2'>
                    <Card className='border-border/60 bg-background/85 shadow-none'>
                      <CardHeader>
                        <CardTitle className='text-lg'>Lead form</CardTitle>
                        <CardDescription>
                          Name, email, qualifying field, and UTM capture will live here.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className='border-border/60 bg-background/85 shadow-none'>
                      <CardHeader>
                        <CardTitle className='text-lg'>Submission state</CardTitle>
                        <CardDescription>
                          Confirmation, reassurance text, and secondary support details belong here.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
