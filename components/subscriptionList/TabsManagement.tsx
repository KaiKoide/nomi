"use client";

import {
  Clapperboard,
  Utensils,
  BriefcaseBusiness,
  ListPlus,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Item,
  ItemContent,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Button } from "@/components/ui/button";
export const TabsManagement = () => {
  const router = useRouter();

  const handleCategoryManagement = () => {
    return router.push("/categoryList");
  };

  return (
    <div className="flex-1 flex flex-col justify-between w-full">
      <div>
        <Tabs defaultValue="all" className="w-full flex flex-col items-center">
          <TabsList className="p-x-3 w-full border-b border-theme-gray">
            <TabsTrigger value="all">全て</TabsTrigger>
            <TabsTrigger value="entertainment">エンタメ</TabsTrigger>
            <TabsTrigger value="business">仕事</TabsTrigger>
            <TabsTrigger value="life">生活</TabsTrigger>
            <Button
              onClick={handleCategoryManagement}
              className="rounded-full w-10 h-10 bg-theme-light-pink mb-3 mx-2"
            >
              <ListPlus className="size-5 text-theme-dark" />
            </Button>
          </TabsList>
          <TabsContent value="all">
            <Item className="bg-white/10 backdrop-blur-sm grid grid-cols-4 grid-rows-2">
              <ItemMedia variant="icon" className="row-span-2">
                <Clapperboard />
              </ItemMedia>
              <ItemContent className="col-span-2 row-span-2">
                <ItemHeader className="text-lg font-bold">Netflix</ItemHeader>
                <ItemTitle>次回支払日：2025/12/01</ItemTitle>
              </ItemContent>
              <ItemFooter className="row-span-2 text-xl font-bold">
                ￥1,200
              </ItemFooter>
            </Item>
            <Item className="bg-white/10 backdrop-blur-sm grid grid-cols-4 grid-rows-2">
              <ItemMedia variant="icon" className="row-span-2">
                <Utensils />
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
                <BriefcaseBusiness />
              </ItemMedia>
              <ItemContent className="col-span-2 row-span-2">
                <ItemHeader className="text-lg font-bold">ChatGPT</ItemHeader>
                <ItemTitle>次回支払日：2025/12/23</ItemTitle>
              </ItemContent>
              <ItemFooter className="row-span-2 text-xl font-bold">
                ￥2,500
              </ItemFooter>
            </Item>
          </TabsContent>
          <TabsContent value="entertainment">
            <Item className="bg-white/10 backdrop-blur-sm grid grid-cols-4 grid-rows-2">
              <ItemMedia variant="icon" className="row-span-2">
                <Clapperboard />
              </ItemMedia>
              <ItemContent className="col-span-2 row-span-2">
                <ItemHeader className="text-lg font-bold">Netflix</ItemHeader>
                <ItemTitle>次回支払日：2025/12/01</ItemTitle>
              </ItemContent>
              <ItemFooter className="row-span-2 text-xl font-bold">
                ￥1,200
              </ItemFooter>
            </Item>
          </TabsContent>
          <TabsContent value="business">
            <Item className="bg-white/10 backdrop-blur-sm grid grid-cols-4 grid-rows-2">
              <ItemMedia variant="icon" className="row-span-2">
                <BriefcaseBusiness />
              </ItemMedia>
              <ItemContent className="col-span-2 row-span-2">
                <ItemHeader className="text-lg font-bold">ChatGPT</ItemHeader>
                <ItemTitle>次回支払日：2025/12/23</ItemTitle>
              </ItemContent>
              <ItemFooter className="row-span-2 text-xl font-bold">
                ￥2,500
              </ItemFooter>
            </Item>
          </TabsContent>
          <TabsContent value="life">
            <Item className="m-2 gap-3 bg-white/10 backdrop-blur-sm grid grid-cols-4 grid-rows-2">
              <ItemMedia variant="icon" className="row-span-2">
                <Utensils />
              </ItemMedia>
              <ItemContent className="col-span-2 row-span-2">
                <ItemHeader className="text-lg font-bold">nosh</ItemHeader>
                <ItemTitle>次回支払日：2025/12/15</ItemTitle>
              </ItemContent>
              <ItemFooter className="row-span-2 text-xl font-bold">
                ￥6.206
              </ItemFooter>
            </Item>
          </TabsContent>
        </Tabs>
      </div>
      <div className="border-t-2 border-theme-gray flex justify-between py-5 px-2">
        <p className="text-xl ">合計金額：</p>
        <p className="text-2xl font-bold text-theme-light-pink">￥12,800</p>
      </div>
    </div>
  );
};
