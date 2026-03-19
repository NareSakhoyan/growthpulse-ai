import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function PricingSection(): React.JSX.Element {
  return (
    <section id='pricing' className='scroll-mt-24'>
      <Card>
        <CardHeader>
          <Badge className='w-fit' variant='outline'>
            Pricing
          </Badge>
          <CardTitle className='text-3xl sm:text-4xl'>Pricing section placeholder</CardTitle>
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
  );
}
