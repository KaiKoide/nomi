import { Header } from "@/components/ui/header";
import { CreateField } from "@/components/CreateSubscription/CreateField";

export const CreateSubscriptionComponent = () => {
  return (
    <div>
      <Header title="新しいサブスクリプション" />
      <CreateField />
    </div>
  );
};
