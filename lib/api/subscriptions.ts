import { Subscription } from '@/lib/type';

export const fetchSubscriptions = async (): Promise<
  Subscription[]
> => {
  const response = await fetch('/api/subscriptions');

  if (!response.ok)
    throw new Error('Failed to fetch subscriptions');

  return response.json();
};

export const fetchSubscriptionsById = async (
  id: string
): Promise<Subscription> => {
  const response = await fetch(`/api/subscriptions/${id}`);

  if (!response.ok)
    throw new Error('Failed to fetch subscriptions');

  return response.json();
};
