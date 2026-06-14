import { fetchSubscriptions } from '@/lib/api/subscriptions';
import { Subscription } from '@/lib/type';
import { useEffect, useState } from 'react';

export const useSubscriptions = () => {
  const [data, setData] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchSubscriptions()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
