import { SubscriptionListComponent } from '@/components/subscriptionList';
import { subscriptionList } from '@/lib/mockData/subscriptionList';

const SubscriptionList = () => {
  return (
    <SubscriptionListComponent
      subscriptionList={subscriptionList}
    />
  );
};

export default SubscriptionList;
