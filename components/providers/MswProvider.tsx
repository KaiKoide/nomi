'use client';

import { useEffect, useState } from 'react';

export const MswProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [ready, setReady] = useState(
    process.env.NEXT_PUBLIC_API_MOCKING !== 'enabled'
  );

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING !== 'enabled')
      return;

    const init = async () => {
      const { worker } =
        await import('@/lib/mocks/browser');
      await worker.start({ onUnhandledRequest: 'bypass' });
      setReady(true);
    };

    init();
  }, []);

  if (!ready) return null;
  return <>{children}</>;
};
