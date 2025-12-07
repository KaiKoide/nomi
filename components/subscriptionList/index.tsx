import { Header } from "@/components/ui/header";
import { TabsManagement } from "./TabsManagement";

export const SubscriptionListComponent = () => {
  return (
    <div className="flex flex-col items-center h-full w-full">
      <Header title="サブリクション一覧" />
      <TabsManagement />
    </div>
  );
};
