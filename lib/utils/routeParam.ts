import { Subscription } from '@/lib/type';

type RouteParams = {
  subscriptionId?: string | string[];
};

export const getSubscriptionFromParams = (
  subscriptionList: Subscription[],
  params: RouteParams
) => {
  const subscriptionId = Array.isArray(
    params.subscriptionId
  )
    ? params.subscriptionId[0]
    : params.subscriptionId;

  if (!subscriptionId) {
    return undefined;
  }

  return subscriptionList.find(
    (subscription) =>
      subscription.id === Number(subscriptionId)
  );
};
