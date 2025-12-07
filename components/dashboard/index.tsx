import { Plus } from "lucide-react";

import { PaymentList } from "@/components/dashboard/PaymentList";
import { SummaryCard } from "@/components/dashboard/SummaryCard";
import { Button } from "@/components/ui/button";

export const DashboardComponent = () => {
  return (
    <div className="flex flex-col items-center gap-8 relative h-full">
      <SummaryCard />
      <PaymentList />
      <Button
        size="icon-xl"
        className="bg-theme-pink text-white rounded-full hover:bg-theme-pink/80 absolute bottom-3 right-3"
      >
        <Plus className="size-10" />
      </Button>
    </div>
  );
};
