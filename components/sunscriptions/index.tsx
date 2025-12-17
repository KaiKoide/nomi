import { Header } from "@/components/ui/header";
import { ItemMedia } from "../ui/item";
import { Clapperboard } from "lucide-react";

export const Subscriptions = () => {
  return (
    <div className="flex flex-col items-center h-full w-full">
      <Header title="サブスクリプション詳細" />
      <div className="flex">
        <div className="flex items-center">
          <ItemMedia variant="icon" className="row-span-2">
            <Clapperboard />
          </ItemMedia>
          <p>Netflix</p>
        </div>
      </div>
    </div>
  );
};
