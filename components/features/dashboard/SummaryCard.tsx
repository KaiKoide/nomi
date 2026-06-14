import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  getNearestPaymentDate,
  getTotalPrice,
} from '@/lib/subscription';
import { Subscription } from '@/lib/type';
import { useMemo } from 'react';

export const SummaryCard = ({
  subscriptionList,
}: {
  subscriptionList: Subscription[];
}) => {
  const formattedTotal = useMemo(
    () => getTotalPrice(subscriptionList).toLocaleString(),
    [subscriptionList]
  );

  const nextPaymentDate = useMemo(
    () => getNearestPaymentDate(subscriptionList),
    [subscriptionList]
  );

  return (
    <Card className='bg-linear-to-br from-theme-dark to-theme-pink m-5'>
      <CardHeader>
        <CardTitle>合計金額</CardTitle>
        <CardTitle className='text-4xl'>
          ￥{formattedTotal}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          次の支払日：　
          {nextPaymentDate}
        </CardDescription>
        <CardDescription>
          登録中：　{subscriptionList.length}件
        </CardDescription>
      </CardContent>
    </Card>
  );
};
