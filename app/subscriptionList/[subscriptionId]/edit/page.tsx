'use client';

import { useParams } from 'next/navigation';

import { SubscriptionEditComponent } from '@/components/subscriptionEdit';
import { subscriptionList } from '@/lib/mockData/subscriptionList';

const SubscriptionEdit = () => {
  const params = useParams();

  const subscription = subscriptionList.find(
    (subscription) =>
      subscription.id === Number(params.subscriptionId)
  );
  return (
    <SubscriptionEditComponent
      subscription={subscription}
    />
  );
};

export default SubscriptionEdit;
