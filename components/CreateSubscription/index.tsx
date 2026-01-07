import { SubscriptionField } from '@/components/CreateSubscription/CreateField';
import { Header } from '@/components/ui/header';

export const CreateSubscriptionComponent = () => {
  return (
    <div>
      <Header title='新しいサブスクリプション' />
      <SubscriptionField />
    </div>
  );
};
