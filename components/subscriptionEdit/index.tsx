import { Header } from "@/components/ui/header";
import { SubscriptionField } from "@/components/createSubscription/CreateField";
import { Subscription } from "@/lib/type";

export const SubscriptionEditComponent = ({
  subscription,
}: {
  subscription?: Subscription;
}) => {
  return (
    <div>
      <Header title="サブスクリプション編集" />
      <SubscriptionField subscription={subscription} />
    </div>
  );
};
