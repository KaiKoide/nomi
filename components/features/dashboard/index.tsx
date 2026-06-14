'use client';
import { useRouter } from 'next/navigation';

import { PaymentList } from '@/components/features/dashboard/PaymentList';
import { SummaryCard } from '@/components/features/dashboard/SummaryCard';
import { AddButton } from '@/components/ui/addButton';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import { useCallback } from 'react';

export const DashboardComponent = () => {
  const { data: subscriptionList } = useSubscriptions();
  const router = useRouter();

  const handleCreateSubscription = useCallback(() => {
    return router.push('/create');
  }, [router]);

  return (
    <div className='flex flex-col items-center gap-8 relative h-full'>
      <SummaryCard subscriptionList={subscriptionList} />
      <PaymentList subscriptionList={subscriptionList} />
      <AddButton onClick={handleCreateSubscription} />
    </div>
  );
};
