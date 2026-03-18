import { SupabaseTest } from '@/components/supabase-test';

export default function Home() {
  return (
    <>
      <SupabaseTest />
      <div className='text-white flex p-2 bg-red-500 items-center justify-between'></div>
    </>
  );
}
