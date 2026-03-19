'use client';

import { Button } from '@/components/ui/button';
import { analyticsEvents, captureEvent } from '@/lib/posthog';
import { createClient, SupabaseClientConfigError } from '@/lib/supabase/client';
import { toast } from 'sonner';

export function SupabaseTest() {
  const handleTest = async () => {
    try {
      const supabase = createClient();
      const { error } = await supabase.from('test_table').insert([{}]);

      if (error) {
        toast.error('Error: ' + error.message);
        captureEvent(analyticsEvents.supabaseTestFailed, {
          message: error.message,
        });
      } else {
        captureEvent(analyticsEvents.supabaseTestSucceeded);
        toast.success('Supabase connected ✅');
      }
    } catch (error) {
      if (error instanceof SupabaseClientConfigError) {
        toast.error('Supabase env variables are missing.');
        captureEvent(analyticsEvents.supabaseTestBlocked, {
          reason: 'missing_public_env',
        });
        return;
      }

      throw error;
    }
  };

  return <Button onClick={handleTest}>Test Supabase</Button>;
}
