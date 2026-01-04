import { Header } from "@/components/ui/header";
import { TabsManagement } from "./TabsManagement";
import { Subscription } from "@/lib/type";

export const SubscriptionListComponent = ({
  subscriptionList,
}: {
  subscriptionList: Subscription[];
}) => {
  return (
    <div className="flex flex-col items-center h-full w-full">
      <Header title="サブスクリプション一覧" />
      <TabsManagement subscriptionList={subscriptionList} />
    </div>
  );
};
