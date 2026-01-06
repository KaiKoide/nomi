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

export const SummaryCard = ({
  subscriptionList,
}: {
  subscriptionList: Subscription[];
}) => {
  return (
    <Card className='bg-linear-to-br from-theme-dark to-theme-pink m-5'>
      <CardHeader>
        <CardTitle>合計金額</CardTitle>
        <CardTitle className='text-4xl'>
          ￥
          {getTotalPrice(subscriptionList).toLocaleString()}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          次の支払日：　
          {getNearestPaymentDate(subscriptionList)}
        </CardDescription>
        <CardDescription>
          登録中：　{subscriptionList.length}件
        </CardDescription>
      </CardContent>
    </Card>
  );
};
