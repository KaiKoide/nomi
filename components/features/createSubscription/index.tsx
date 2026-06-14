import { Header } from '@/components/ui/header';
import { SubscriptionField } from '@/components/features/createSubscription/CreateField';

export const CreateSubscriptionComponent = () => {
  return (
    <div>
      <Header title='新しいサブスクリプション' />
      <SubscriptionField />
    </div>
  );
};
