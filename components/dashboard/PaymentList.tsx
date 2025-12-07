"use client";

import { ChevronRight, Clapperboard } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  Item,
  ItemContent,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export const PaymentList = () => {
  const router = useRouter();

  const handleAddSubscription = () => {
    return router.push("/subscriptionList");
  };

  return (
    <div>
      <div className="flex justify-between w-full px-5">
        <p>登録中のサブリクション</p>
        <ChevronRight
          onClick={handleAddSubscription}
          className="cursor-pointer"
        />
      </div>
      <Item className="bg-white/10 backdrop-blur-sm grid grid-cols-4 grid-rows-2">
        <ItemMedia variant="icon" className="row-span-2">
          <Clapperboard />
        </ItemMedia>
        <ItemContent className="col-span-2 row-span-2">
          <ItemHeader className="text-lg font-bold">Netfilx</ItemHeader>
          <ItemTitle>次回支払日：2025/12/01</ItemTitle>
        </ItemContent>
        <ItemFooter className="row-span-2 text-xl font-bold">
          ￥1,200
        </ItemFooter>
      </Item>
      <Item className="bg-white/10 backdrop-blur-sm grid grid-cols-4 grid-rows-2">
        <ItemMedia variant="icon" className="row-span-2">
          <Clapperboard />
        </ItemMedia>
        <ItemContent className="col-span-2 row-span-2">
          <ItemHeader className="text-lg font-bold">nosh</ItemHeader>
          <ItemTitle>次回支払日：2025/12/15</ItemTitle>
        </ItemContent>
        <ItemFooter className="row-span-2 text-xl font-bold">
          ￥6.206
        </ItemFooter>
      </Item>
      <Item className="bg-white/10 backdrop-blur-sm grid grid-cols-4 grid-rows-2">
        <ItemMedia variant="icon" className="row-span-2">
          <Clapperboard />
        </ItemMedia>
        <ItemContent className="col-span-2 row-span-2">
          <ItemHeader className="text-lg font-bold">ChatGPT</ItemHeader>
          <ItemTitle>次回支払日：2025/12/23</ItemTitle>
        </ItemContent>
        <ItemFooter className="row-span-2 text-xl font-bold">
          ￥2,500
        </ItemFooter>
      </Item>
    </div>
  );
};
