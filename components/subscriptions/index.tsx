import { Header } from "@/components/ui/header";
import { DetailComponent } from "@/components/subscriptions/Detail";
import { Subscription } from "@/lib/type";

export const Subscriptions = ({
  subscription,
}: {
  subscription: Subscription;
}) => {
  return (
    <div className="flex flex-col items-center h-full w-full">
      <Header title="サブスクリプション詳細" />
      <DetailComponent subscription={subscription} />
    </div>
  );
};
