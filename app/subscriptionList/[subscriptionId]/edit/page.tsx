'use client';

import { useParams } from 'next/navigation';

import { SubscriptionEditComponent } from '@/components/features/subscriptionEdit';
import { useSubscription } from '@/hooks/useSubscription';

const SubscriptionEdit = () => {
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

  return (
    <SubscriptionEditComponent
      subscription={subscription}
    />
  );
};

export default SubscriptionEdit;
