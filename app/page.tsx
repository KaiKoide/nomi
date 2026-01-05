'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  const handleNavigate = () => {
    return router.push('/dashboard');
  };

  return (
    <div className='flex min-h-screen items-center justify-center font-sans'>
      <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start'>
        <div className='flex flex-col items-center justify-end h-full'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold'>Nomi</h1>
            <p className='text-lg text-gray-500'>
              サブリクションを、もっと賢く。
            </p>
          </div>
          <Button
            onClick={handleNavigate}
            className='w-full'
          >
            Sign In
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Home;
