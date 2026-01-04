"use client";

import { ListPlus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Subscription } from "@/lib/type";
import { SubscriptionList } from "@/components/subscriptionList/SubscriptionList";
import { getFilteredSubscriptions, getTotalPrice } from "@/lib/subscription";
import { useState } from "react";

export const TabsManagement = ({
  subscriptionList,
}: {
  subscriptionList: Subscription[];
}) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");

  const handleCategoryManagement = () => {
    return router.push("/categoryList");
  };

  return (
    <div className="flex-1 flex flex-col justify-between w-full">
      <div>
        <Tabs
          defaultValue="all"
          className="w-full flex flex-col items-center"
          onValueChange={setActiveTab}
        >
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
            <SubscriptionList
              subscriptions={getFilteredSubscriptions(subscriptionList, "all")}
            />
          </TabsContent>
          <TabsContent value="entertainment">
            <SubscriptionList
              subscriptions={getFilteredSubscriptions(
                subscriptionList,
                "entertainment"
              )}
            />
          </TabsContent>
          <TabsContent value="business">
            <SubscriptionList
              subscriptions={getFilteredSubscriptions(
                subscriptionList,
                "business"
              )}
            />
          </TabsContent>
          <TabsContent value="life">
            <SubscriptionList
              subscriptions={getFilteredSubscriptions(subscriptionList, "life")}
            />
          </TabsContent>
        </Tabs>
      </div>
      <div className="border-t-2 border-theme-gray flex justify-between py-5 px-2">
        <p className="text-xl ">合計金額：</p>
        <p className="text-2xl font-bold text-theme-light-pink">
          ￥
          {getTotalPrice(
            getFilteredSubscriptions(subscriptionList, activeTab)
          ).toLocaleString()}
        </p>
      </div>
    </div>
  );
};
