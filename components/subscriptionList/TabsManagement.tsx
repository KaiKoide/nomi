import { SubscriptionList } from '@/components/subscriptionList/SubscriptionList';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  getFilteredSubscriptions,
  getTotalPrice,
} from '@/lib/subscription';
import { Subscription } from '@/lib/type';
import { useState } from 'react';

export const TabsManagement = ({
  subscriptionList,
}: {
  subscriptionList: Subscription[];
}) => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className='flex-1 flex flex-col justify-between w-full'>
      <div>
        <Tabs
          defaultValue='all'
          className='w-full flex flex-col items-center'
          onValueChange={setActiveTab}
        >
          <TabsList className='p-x-3 w-full border-b border-theme-gray'>
            <TabsTrigger value='all'>全て</TabsTrigger>
            <TabsTrigger value='entertainment'>
              エンタメ
            </TabsTrigger>
            <TabsTrigger value='business'>仕事</TabsTrigger>
            <TabsTrigger value='life'>生活</TabsTrigger>
          </TabsList>
          <TabsContent value='all'>
            <SubscriptionList
              subscriptions={getFilteredSubscriptions(
                subscriptionList,
                'all'
              )}
            />
          </TabsContent>
          <TabsContent value='entertainment'>
            <SubscriptionList
              subscriptions={getFilteredSubscriptions(
                subscriptionList,
                'entertainment'
              )}
            />
          </TabsContent>
          <TabsContent value='business'>
            <SubscriptionList
              subscriptions={getFilteredSubscriptions(
                subscriptionList,
                'business'
              )}
            />
          </TabsContent>
          <TabsContent value='life'>
            <SubscriptionList
              subscriptions={getFilteredSubscriptions(
                subscriptionList,
                'life'
              )}
            />
          </TabsContent>
        </Tabs>
      </div>
      <div className='border-t-2 border-theme-gray flex justify-between py-5 px-2'>
        <p className='text-xl '>合計金額：</p>
        <p className='text-2xl font-bold text-theme-light-pink'>
          ￥
          {getTotalPrice(
            getFilteredSubscriptions(
              subscriptionList,
              activeTab
            )
          ).toLocaleString()}
        </p>
      </div>
    </div>
  );
};
