'use client';

import LoginButton from '@/components/ui/LoginButton';
import LogoutButton from '@/components/ui/LogoutButton';
import { User } from '@auth0/nextjs-auth0/types';

export const LoginClient = ({
  user,
}: {
  user: User | null;
}) => {
  return (
    <div>{user ? <LogoutButton /> : <LoginButton />}</div>
  );
};
