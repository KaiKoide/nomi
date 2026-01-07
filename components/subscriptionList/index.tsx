'use client';

import { useRouter } from 'next/navigation';

import { Header } from '@/components/ui/header';
import { TabsManagement } from './TabsManagement';
import { Subscription } from '@/lib/type';

export const SubscriptionListComponent = ({
  subscriptionList,
}: {
  subscriptionList: Subscription[];
}) => {
  const router = useRouter();

  const handleCategoryManagement = () => {
    return router.push('/categoryList');
  };
  return (
    <div className='flex flex-col items-center h-full w-full'>
      <Header
        title='サブスクリプション一覧'
        isEdit={true}
        onEdit={handleCategoryManagement}
      />
      <TabsManagement subscriptionList={subscriptionList} />
    </div>
  );
};
