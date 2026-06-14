'use client';

import { useParams } from 'next/navigation';

import { Subscriptions } from '@/components/features/subscriptions';
import { useSubscription } from '@/hooks/useSubscription';

const SubscriptionDetails = () => {
  const params = useParams();
  const id = Array.isArray(params.subscriptionId)
    ? params.subscriptionId[0]
    : params.subscriptionId;

  const { data: subscription, loading } = useSubscription(
    id as string
  );

  if (loading) return <div>Loading...</div>;

  if (!subscription) {
    return <div>Subscription not found</div>;
  }

  return <Subscriptions subscription={subscription} />;
};

export default SubscriptionDetails;
