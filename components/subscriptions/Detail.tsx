import { Clapperboard } from "lucide-react";

import { ItemMedia } from "@/components/ui/item";
import { Button } from "@/components/ui/button";

export const DetailComponent = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center m-3 gap-3">
        <ItemMedia variant="icon" className="row-span-2 size-20">
          <Clapperboard className="size-10" />
        </ItemMedia>
        <p className="text-3xl font-bold">Netflix</p>
      </div>
      <div className="m-3 pb-4 flex justify-between border-b border-theme-gray">
        <p className="text-theme-light-pink">支払い金額</p>
        <p>￥1,200</p>
      </div>
      <div className="m-3 pb-4 flex justify-between border-b border-theme-gray">
        <p className="text-theme-light-pink">支払いサイクル</p>
        <p>月額</p>
      </div>
      <div className="m-3 pb-4 flex justify-between border-b border-theme-gray">
        <p className="text-theme-light-pink">次回支払日</p>
        <p>2025/12/01</p>
      </div>
      <div className="m-3 pb-4 flex justify-between border-b border-theme-gray">
        <p className="text-theme-light-pink">カテゴリ</p>
        <p>エンタメ</p>
      </div>
      <div className="m-3 pb-4 flex justify-between border-b border-theme-gray">
        <p className="text-theme-light-pink">登録日</p>
        <p>2025/12/01</p>
      </div>
      <div className="m-3 pb-4 flex flex-col gap-2 justify-between">
        <p className="text-theme-light-pink">メモ</p>
        <p>Netflixはよく見る</p>
      </div>
      <Button className="m-3">Save</Button>
    </div>
  );
};
