import { ChevronRight } from "lucide-react";

import { PaymentList } from "./PaymentList";
import { SummaryCard } from "./SummaryCard";

export const DashboardComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center m-8 gap-8">
      <SummaryCard />
      <div className="flex justify-between w-full">
        <p>登録中のサブリクション</p>
        <ChevronRight />
      </div>
      <PaymentList />
    </div>
  );
};
