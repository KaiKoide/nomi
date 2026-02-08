import LoginButton from '@/components/ui/LoginButton';
import LogoutButton from '@/components/ui/LogoutButton';
import { auth0 } from '@/lib/auth0';

export const LoginComponent = async () => {
  const session = await auth0.getSession();

  const user = session?.user;

  return (
    <div className='action-card'>
      {user ? (
        <div className='logged-in-section'>
          <LogoutButton />
        </div>
      ) : (
        <>
          <LoginButton />
        </>
      )}
    </div>
  );
};
