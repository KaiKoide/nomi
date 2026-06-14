import { Subscription } from '@/lib/type';
import { SubscriptionItem } from '@/components/features/subscriptionList/SubscriptionItem';

export const SubscriptionList = ({
  subscriptions,
}: {
  subscriptions: Subscription[];
}) => {
  return (
    <>
      {subscriptions.map((subscription) => (
        <SubscriptionItem
          key={subscription.id}
          subscription={subscription}
        />
      ))}
    </>
  );
};
