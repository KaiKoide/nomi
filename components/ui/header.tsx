'use client';

import { MoveLeft, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const router = useRouter();

  const handleBack = () => {
    return router.back();
  };

  return (
    <div className="p-5 flex items-center justify-between w-full">
      <MoveLeft onClick={handleBack} className="cursor-pointer" />
      <h1 className="font-bold">{title}</h1>
      <Plus />
    </div>
  );
};
