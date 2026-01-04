import { Subscription } from "./type";

/**
 * カテゴリでサブスクリプションリストをフィルタリングする
 * @param subscriptions サブスクリプションの配列
 * @param category フィルタリングするカテゴリ（"all"の場合は全て返す）
 * @returns フィルタリングされたサブスクリプションの配列
 */
export const getFilteredSubscriptions = (
  subscriptions: Subscription[],
  category: string
): Subscription[] => {
  if (category === "all") {
    return subscriptions;
  }
  return subscriptions.filter(
    (subscription) => subscription.category === category
  );
};

/**
 * サブスクリプションリストの合計金額を計算する
 * @param subscriptions サブスクリプションの配列
 * @returns 合計金額
 */
export const getTotalPrice = (subscriptions: Subscription[]): number => {
  return subscriptions.reduce(
    (acc, subscription) => acc + subscription.price,
    0
  );
};
