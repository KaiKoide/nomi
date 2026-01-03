import { Header } from "@/components/ui/header";
import { DetailComponent } from "@/components/subscriptions/Detail";

export const Subscriptions = () => {
  return (
    <div className="flex flex-col items-center h-full w-full">
      <Header title="サブスクリプション詳細" />
      <DetailComponent />
    </div>
  );
};
