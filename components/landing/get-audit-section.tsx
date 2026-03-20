'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { analyticsEvents, captureEvent } from '@/lib/posthog';
import { createClient, SupabaseClientConfigError } from '@/lib/supabase/client';

type SubmissionState = 'idle' | 'loading' | 'success' | 'error';

type UtmKey = 'utm_source' | 'utm_medium' | 'utm_campaign' | 'utm_term' | 'utm_content';

const leadFormSchema = z.object({
  name: z.string().trim().min(1, 'Enter your name.'),
  email: z.string().trim().min(1, 'Enter your work email.').email('Enter a valid work email.'),
  companySize: z.string().min(1, 'Select your company size.'),
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

type LeadInsert = {
  name: string;
  email: string;
  company_size: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
};

function getUtmParams(): Record<UtmKey, string | null> {
  const searchParams = new URLSearchParams(window.location.search);

  return {
    utm_source: searchParams.get('utm_source'),
    utm_medium: searchParams.get('utm_medium'),
    utm_campaign: searchParams.get('utm_campaign'),
    utm_term: searchParams.get('utm_term'),
    utm_content: searchParams.get('utm_content'),
  };
}

function buildLeadInsert(values: LeadFormValues): LeadInsert {
  return {
    name: values.name.trim(),
    email: values.email.trim(),
    company_size: values.companySize,
    ...getUtmParams(),
  };
}

export function GetAuditSection(): React.JSX.Element {
  const [submissionState, setSubmissionState] = React.useState<SubmissionState>('idle');
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const hasTrackedFormStart = React.useRef(false);
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: '',
      email: '',
      companySize: '',
    },
  });

  async function handleSubmit(values: LeadFormValues): Promise<void> {
    setErrorMessage(null);
    setSubmissionState('loading');

    try {
      const lead = buildLeadInsert(values);
      const supabase = createClient();
      const { error } = await supabase.from('leads').insert(lead);

      if (error) {
        throw error;
      }

      captureEvent(analyticsEvents.formSubmitted, {
        form_id: 'audit_request',
        company_size: values.companySize,
      });
      setSubmissionState('success');
      form.reset();
    } catch (error) {
      setSubmissionState('error');
      setErrorMessage(
        error instanceof SupabaseClientConfigError
          ? error.message
          : 'We could not send your request right now. Please try again in a minute.',
      );
    }
  }

  function handleFormStart(): void {
    if (hasTrackedFormStart.current) {
      return;
    }

    hasTrackedFormStart.current = true;
    captureEvent(analyticsEvents.formStarted, {
      form_id: 'audit_request',
    });
  }

  return (
    <section
      id='get-audit'
      className='scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.18),transparent_20%),radial-gradient(circle_at_84%_18%,rgba(34,197,94,0.14),transparent_20%),linear-gradient(180deg,rgba(239,248,255,0.98),rgba(255,255,255,1))] py-8 sm:py-10'
    >
      <div className='px-4 sm:px-6'>
        {submissionState === 'success' ? (
          <div className='mx-auto max-w-2xl py-8 text-center sm:py-12'>
            <h2 className='text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl'>
              You&apos;re all set.
            </h2>
            <p className='mt-4 text-base leading-7 text-muted-foreground sm:text-lg'>
              We&apos;ve received your audit request and will review it shortly. If it looks like a
              fit, we&apos;ll email you with the next steps.
            </p>
          </div>
        ) : (
          <div className='space-y-8'>
            <div className='space-y-4 text-center'>
              <div className='mx-auto max-w-2xl space-y-3'>
                <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>
                  Get your audit
                </h2>
                <p className='text-base leading-7 text-muted-foreground'>
                  Share a few details and we&apos;ll follow up with the right next step for your
                  team.
                </p>
              </div>
            </div>
            <Card className='mx-auto w-full max-w-3xl border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.94))] shadow-[0_24px_60px_-32px_rgba(15,23,42,0.2)] backdrop-blur-sm'>
              <CardHeader className='space-y-3 p-6 pb-0 sm:p-8 sm:pb-0'>
                <CardTitle className='text-xl sm:text-2xl'>Request your audit</CardTitle>
                <CardDescription className='max-w-2xl text-sm leading-6 sm:text-base'>
                  Send the basics and we&apos;ll store the request, including any UTM source data
                  tied to this visit.
                </CardDescription>
              </CardHeader>
              <CardContent className='p-6 pt-6 sm:p-8'>
                <Form {...form}>
                  <form
                    className='grid gap-5'
                    noValidate
                    onFocusCapture={handleFormStart}
                    onSubmit={form.handleSubmit(handleSubmit)}
                  >
                    <div className='grid gap-5 md:grid-cols-2'>
                      <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input
                                autoComplete='name'
                                placeholder='Jane Founder'
                                disabled={submissionState === 'loading'}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Work email</FormLabel>
                            <FormControl>
                              <Input
                                type='email'
                                autoComplete='email'
                                inputMode='email'
                                placeholder='jane@company.com'
                                disabled={submissionState === 'loading'}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name='companySize'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company size</FormLabel>
                          <Select
                            disabled={submissionState === 'loading'}
                            onValueChange={field.onChange}
                            value={field.value || undefined}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='Select company size' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value='1-10'>1-10 employees</SelectItem>
                              <SelectItem value='11-50'>11-50 employees</SelectItem>
                              <SelectItem value='51-200'>51-200 employees</SelectItem>
                              <SelectItem value='201-plus'>201+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {errorMessage ? (
                      <p role='alert' className='text-sm leading-6 text-destructive'>
                        {errorMessage}
                      </p>
                    ) : null}

                    <div className='flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between'>
                      <p className='max-w-xl text-sm leading-6 text-muted-foreground'>
                        We only use this information to respond to your audit request. No spam, no
                        list sales, and no unnecessary follow-ups.
                      </p>
                      <Button
                        type='submit'
                        size='lg'
                        className='w-full sm:w-auto'
                        disabled={submissionState === 'loading'}
                      >
                        {submissionState === 'loading' ? 'Sending...' : 'Request audit'}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
