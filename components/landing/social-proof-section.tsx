import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function SocialProofSection(): React.JSX.Element {
  return (
    <section id='social-proof' className='scroll-mt-24'>
      <Card>
        <CardHeader>
          <Badge className='w-fit' variant='outline'>
            Social Proof
          </Badge>
          <CardTitle className='text-3xl sm:text-4xl'>Proof and trust placeholder</CardTitle>
          <CardDescription>
            This section is reserved for logos, testimonial cards, benchmark metrics, and customer
            proof.
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
  );
}
