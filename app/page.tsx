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
                <Card className='overflow-hidden border-border/60 bg-[linear-gradient(135deg,rgba(99,102,241,0.14),rgba(59,130,246,0.04)_45%,rgba(255,255,255,0.92))]'>
                  <CardHeader className='gap-4 pb-4 sm:pb-6'>
                    <Badge className='w-fit border-transparent bg-foreground text-background'>
                      Overview
                    </Badge>
                    <div className='max-w-3xl space-y-4'>
                      <CardTitle className='text-4xl sm:text-5xl'>
                        Dashboard-style SaaS landing page structure.
                      </CardTitle>
                      <CardDescription className='text-base sm:text-lg'>
                        The left navigation drives the entire single-page flow. Each item anchors to
                        a section, while the main content stays vertically scrollable inside the
                        inset layout.
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className='flex flex-col gap-3 sm:flex-row'>
                    <Button size='lg'>Primary action</Button>
                    <Button size='lg' variant='outline'>
                      Secondary action
                    </Button>
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
