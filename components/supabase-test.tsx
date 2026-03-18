'use client';

import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';

import { toast } from 'sonner'; // or your toast lib

export function SupabaseTest() {
  const supabase = createClient();

  const handleTest = async () => {
    const { error } = await supabase.from('test_table').insert([{}]);

    if (error) {
      toast.error('Error: ' + error.message);
    } else {
      toast.success('Supabase connected ✅');
    }
  };

  return <Button onClick={handleTest}>Test Supabase</Button>;
}
