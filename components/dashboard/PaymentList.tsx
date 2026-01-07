'use client';

import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { SubscriptionList } from '@/components/subscriptionList/SubscriptionList';
import { getFilteredSubscriptions } from '@/lib/subscription';
import { Subscription } from '@/lib/type';

export const PaymentList = ({
  subscriptionList,
}: {
  subscriptionList: Subscription[];
}) => {
  const router = useRouter();

  const handleAddSubscription = () => {
    return router.push('/subscriptionList');
  };

  return (
    <div>
      <div className='flex justify-between w-full px-5'>
        <p>登録中のサブリクション</p>
        <ChevronRight
          onClick={handleAddSubscription}
          className='cursor-pointer'
        />
      </div>
      <SubscriptionList
        subscriptions={getFilteredSubscriptions(
          subscriptionList,
          'all'
        )}
      />
    </div>
  );
};
