"use client";

import { Plus } from "lucide-react";

import { PaymentList } from "@/components/dashboard/PaymentList";
import { SummaryCard } from "@/components/dashboard/SummaryCard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const DashboardComponent = () => {
  const router = useRouter();

  const handleCreateSubscription = () => {
    return router.push("/create");
  };

  return (
    <div className="flex flex-col items-center gap-8 relative h-full">
      <SummaryCard />
      <PaymentList />
      <Button
        size="icon-xl"
        className="bg-theme-pink text-white rounded-full hover:bg-theme-pink/80 absolute bottom-3 right-3"
        onClick={handleCreateSubscription}
      >
        <Plus className="size-10" />
      </Button>
    </div>
  );
};
