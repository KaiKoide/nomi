import { LoginClient } from '@/components/ui/login/loginClinet';
import { auth0 } from '@/lib/auth0';

export const LoginSection = async () => {
  const session = await auth0.getSession();

  return <LoginClient user={session?.user ?? null} />;
};
