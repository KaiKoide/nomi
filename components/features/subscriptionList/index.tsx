'use client';

import { useRouter } from 'next/navigation';

import { Header } from '@/components/ui/header';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import { useCallback } from 'react';
import { TabsManagement } from './TabsManagement';

export const SubscriptionListComponent = () => {
  const { data: subscriptionList } = useSubscriptions();
  const router = useRouter();

  const handleCategoryManagement = useCallback(() => {
    return router.push('/categoryList');
  }, [router]);

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
