import { Clapperboard } from "lucide-react";

import {
  Item,
  ItemContent,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export const PaymentList = () => {
  return (
    <Item className="bg-white/10 backdrop-blur-sm grid grid-cols-4 grid-row-2">
      <ItemMedia variant="icon" className="row-span-2">
        <Clapperboard />
      </ItemMedia>
      <ItemContent className="col-span-2 row-span-2">
        <ItemHeader className="text-lg font-bold">Netfilx</ItemHeader>
        <ItemTitle>次回支払日：2025/12/01</ItemTitle>
      </ItemContent>
      <ItemFooter className="row-span-2 text-xl font-bold">￥1,200</ItemFooter>
    </Item>
  );
};
