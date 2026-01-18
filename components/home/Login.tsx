import LoginButton from '@/components/ui/LoginButton';
import LogoutButton from '@/components/ui/LogoutButton';
import Profile from '@/components/ui/Profile';
import { auth0 } from '@/lib/auth0';

export const LoginComponent = async () => {
  const session = await auth0.getSession();

  const user = session?.user;

  return (
    <div className='action-card'>
      {user ? (
        <div className='logged-in-section'>
          <p className='logged-in-message'>
            ✅ Successfully logged in!
          </p>
          <Profile />
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
