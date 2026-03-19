import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function GetAuditSection(): React.JSX.Element {
  return (
    <section id='get-audit' className='scroll-mt-24'>
      <Card className='border-border/60 bg-[linear-gradient(180deg,rgba(79,70,229,0.08),rgba(255,255,255,0.96))]'>
        <CardHeader>
          <Badge className='w-fit border-transparent bg-indigo-600 text-white'>Get Audit</Badge>
          <CardTitle className='text-3xl sm:text-4xl'>
            Final CTA and lead form placeholder
          </CardTitle>
          <CardDescription>
            This section is ready for the final conversion block, form fields, validation states,
            and submission feedback.
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
  );
}
