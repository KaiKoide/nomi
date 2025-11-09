import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const DashboardComponents = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-theme-dark">
      <Card className="bg-linear-to-br from-theme-dark to-theme-pink">
        <CardHeader>
          <CardTitle>合計金額</CardTitle>
          <CardTitle className="text-4xl">￥12,800</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>次の支払日：　2025/12/01</CardDescription>
          <CardDescription>登録中：　5件</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};
