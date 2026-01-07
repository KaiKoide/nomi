'use client';
import { useRouter } from 'next/navigation';

import { PaymentList } from '@/components/dashboard/PaymentList';
import { SummaryCard } from '@/components/dashboard/SummaryCard';
import { AddButton } from '@/components/ui/addButton';
import { subscriptionList } from '@/lib/mockData/subscriptionList';

export const DashboardComponent = () => {
  const router = useRouter();

  const handleCreateSubscription = () => {
    return router.push('/create');
  };

  return (
    <div className='flex flex-col items-center gap-8 relative h-full'>
      <SummaryCard subscriptionList={subscriptionList} />
      <PaymentList subscriptionList={subscriptionList} />
      <AddButton onClick={handleCreateSubscription} />
    </div>
  );
};
