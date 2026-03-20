'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { GlassCtaButton } from '@/components/ui/glass-cta-button';
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

export function GetAuditFormClient(): React.JSX.Element {
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

  if (submissionState === 'success') {
    return (
      <div className='py-8 text-center sm:py-10'>
        <h3 className='text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl'>
          You&apos;re all set.
        </h3>
        <p className='mt-4 text-base leading-7 text-muted-foreground'>
          We&apos;ve received your audit request and will review it shortly. If it looks like a fit,
          we&apos;ll email you with the next steps.
        </p>
      </div>
    );
  }

  return (
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

        <div className='flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between'>
          <p className='max-w-xl text-sm leading-6 text-muted-foreground'>
            We only use this information to respond to your audit request. No spam, no list sales,
            and no unnecessary follow-ups.
          </p>
          <GlassCtaButton
            type='submit'
            size='lg'
            className='w-full justify-center border-0 sm:w-auto'
            disabled={submissionState === 'loading'}
          >
            {submissionState === 'loading' ? 'Sending...' : 'Request audit'}
          </GlassCtaButton>
        </div>
      </form>
    </Form>
  );
}
