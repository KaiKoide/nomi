'use client';

import { useParams } from 'next/navigation';

import { Subscriptions } from '@/components/subscriptions';
import { subscriptionList } from '@/lib/mockData/subscriptionList';

const SubscriptionDetails = () => {
  const params = useParams();

  const subscription = subscriptionList.find(
    (subscription) =>
      subscription.id === Number(params.subscriptionId)
  );

  if (!subscription) {
    return <div>Subscription not found</div>;
  }

  return <Subscriptions subscription={subscription} />;
};

export default SubscriptionDetails;
