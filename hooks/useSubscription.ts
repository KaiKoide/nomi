import { fetchSubscriptionsById } from '@/lib/api/subscriptions';
import { Subscription } from '@/lib/type';
import { useEffect, useState } from 'react';

export const useSubscription = (id: string | null) => {
  const [data, setData] = useState<Subscription | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id === null) return;

    fetchSubscriptionsById(id)
      .then(setData)
      .finally(() => setLoading(false));
  }, [id]);

  return { data, loading };
};
