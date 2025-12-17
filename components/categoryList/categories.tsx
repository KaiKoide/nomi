"use client";

import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Item, ItemContent, ItemHeader } from "@/components/ui/item";
import { AddButton } from "@/components/ui/addButton";
import { DrawerComponent } from "./drawerComponent";

export const Categories = () => {
  return (
    <div>
      <Item className="bg-white/10 backdrop-blur-sm flex justify-between items-center border border-theme-pink">
        <ItemContent className="col-span-2 row-span-2">
          <ItemHeader className="row-span-2 text-xl font-bold">
            エンタメ
          </ItemHeader>
        </ItemContent>
        <ChevronRight className="text-theme-pink" />
      </Item>
      <Item className="bg-white/10 backdrop-blur-sm flex justify-between items-center border border-theme-pink">
        <ItemContent className="col-span-2 row-span-2">
          <ItemHeader className="row-span-2 text-xl font-bold">仕事</ItemHeader>
        </ItemContent>
        <ChevronRight className="text-theme-pink" />
      </Item>
      <Item className="bg-white/10 backdrop-blur-sm flex justify-between items-center border border-theme-pink">
        <ItemContent className="col-span-2 row-span-2">
          <ItemHeader className="row-span-2 text-xl font-bold">生活</ItemHeader>
        </ItemContent>
        <ChevronRight className="text-theme-pink" />
      </Item>
      <DrawerComponent />
    </div>
  );
};
