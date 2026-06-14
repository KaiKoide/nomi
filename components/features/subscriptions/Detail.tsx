import { Clapperboard } from 'lucide-react';

import { ItemMedia } from '@/components/ui/item';
import { Subscription } from '@/lib/type';

export const DetailComponent = ({
  subscription,
}: {
  subscription: Subscription;
}) => {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex items-center m-3 gap-3'>
        <ItemMedia
          variant='icon'
          className='row-span-2 size-20'
        >
          <Clapperboard className='size-10' />
        </ItemMedia>
        <p className='text-3xl font-bold'>
          {subscription.name}
        </p>
      </div>
      <div className='m-3 pb-4 flex justify-between border-b border-theme-gray'>
        <p className='text-theme-light-pink'>支払い金額</p>
        <p>￥{subscription.price.toLocaleString()}</p>
      </div>
      <div className='m-3 pb-4 flex justify-between border-b border-theme-gray'>
        <p className='text-theme-light-pink'>
          支払いサイクル
        </p>
        <p>{subscription.cycle}</p>
      </div>
      <div className='m-3 pb-4 flex justify-between border-b border-theme-gray'>
        <p className='text-theme-light-pink'>次回支払日</p>
        <p>{subscription.nextPaymentDate}</p>
      </div>
      <div className='m-3 pb-4 flex justify-between border-b border-theme-gray'>
        <p className='text-theme-light-pink'>カテゴリ</p>
        <p>{subscription.category}</p>
      </div>
      <div className='m-3 pb-4 flex justify-between border-b border-theme-gray'>
        <p className='text-theme-light-pink'>登録日</p>
        <p>{subscription.subscriptionDate}</p>
      </div>
      <div className='m-3 pb-4 flex flex-col gap-2 justify-between'>
        <p className='text-theme-light-pink'>メモ</p>
        <p>{subscription.memo}</p>
      </div>
    </div>
  );
};
