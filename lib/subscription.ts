import { Subscription } from './type';

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
  if (category === 'all') {
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
export const getTotalPrice = (
  subscriptions: Subscription[]
): number => {
  return subscriptions.reduce(
    (acc, subscription) => acc + subscription.price,
    0
  );
};

/**
 * サブスクリプションリストから最も近い支払日を取得する
 * @param subscriptions サブスクリプションの配列
 * @returns 最も近い支払日（YYYY/MM/DD形式の文字列）、リストが空の場合はnull
 */
export const getNearestPaymentDate = (
  subscriptions: Subscription[]
): string | null => {
  if (subscriptions.length === 0) {
    return null;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // すべての支払日を日付オブジェクトに変換し、今日以降の日付のみをフィルタリング
  const validDates = subscriptions
    .map((sub) => {
      const dateStr = sub.nextPaymentDate.replace(
        /\//g,
        '-'
      );
      const date = new Date(dateStr);
      date.setHours(0, 0, 0, 0);
      return date;
    })
    .filter(
      (date) => !isNaN(date.getTime()) && date >= today
    );

  if (validDates.length === 0) {
    return null;
  }

  // 最も近い日付を見つける
  const nearestDate = new Date(
    Math.min(...validDates.map((date) => date.getTime()))
  );

  // YYYY/MM/DD形式に変換
  const year = nearestDate.getFullYear();
  const month = String(nearestDate.getMonth() + 1).padStart(
    2,
    '0'
  );
  const day = String(nearestDate.getDate()).padStart(
    2,
    '0'
  );

  return `${year}/${month}/${day}`;
};
