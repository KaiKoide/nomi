import { ChevronRight, Plus } from "lucide-react";

import { PaymentList } from "@/components/dashboard/PaymentList";
import { SummaryCard } from "@/components/dashboard/SummaryCard";
import { Button } from "@/components/ui/button";

export const DashboardComponent = () => {
  return (
    <div className="flex flex-col items-center m-8 gap-8 relative h-full">
      <SummaryCard />
      <div className="flex justify-between w-full">
        <p>登録中のサブリクション</p>
        <ChevronRight />
      </div>
      <PaymentList />
      <Button
        size="icon-xl"
        className="bg-theme-pink text-white rounded-full hover:bg-theme-pink/80 absolute bottom-0 right-0"
      >
        <Plus className="size-10" />
      </Button>
    </div>
  );
};
