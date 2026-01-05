'use client';

import { useRouter } from 'next/navigation';
import { Header } from '@/components/ui/header';
import { DetailComponent } from '@/components/subscriptions/Detail';
import { Subscription } from '@/lib/type';

export const Subscriptions = ({
  subscription,
}: {
  subscription: Subscription;
}) => {
  const router = useRouter();

  const handleSubscriptionEdit = () => {
    return router.push(
      `/subscriptionList/${subscription.id}/edit`
    );
  };
  return (
    <div className='flex flex-col items-center h-full w-full'>
      <Header
        title='サブスクリプション詳細'
        isEdit={true}
        onEdit={handleSubscriptionEdit}
      />
      <DetailComponent subscription={subscription} />
    </div>
  );
};
