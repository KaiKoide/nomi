'use client';
import { useRouter } from 'next/navigation';

import { PaymentList } from '@/components/dashboard/PaymentList';
import { SummaryCard } from '@/components/dashboard/SummaryCard';
import { AddButton } from '@/components/ui/addButton';
import { LoginClient } from '@/components/ui/login/loginClinet';
import { subscriptionList } from '@/lib/mockData/subscriptionList';
import { SessionData } from '@auth0/nextjs-auth0/types';

export const DashboardComponent = ({
  session,
}: {
  session: SessionData | null;
}) => {
  const router = useRouter();

  const handleCreateSubscription = () => {
    return router.push('/create');
  };

  return (
    <div className='flex flex-col items-center gap-8 relative h-full'>
      <LoginClient user={session?.user ?? null} />
      <SummaryCard subscriptionList={subscriptionList} />
      <PaymentList subscriptionList={subscriptionList} />
      <AddButton onClick={handleCreateSubscription} />
    </div>
  );
};
