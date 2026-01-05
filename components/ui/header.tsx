'use client';

import { ListPlus, MoveLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './button';

type HeaderProps = {
  title: string;
  isEdit?: boolean;
  onEdit?: () => void;
};

export const Header = ({
  title,
  isEdit,
  onEdit,
}: HeaderProps) => {
  const router = useRouter();

  const handleBack = () => {
    return router.back();
  };

  return (
    <div className='p-5 flex items-center justify-between w-full'>
      <MoveLeft
        onClick={handleBack}
        className='cursor-pointer'
      />
      <h1 className='font-bold'>{title}</h1>
      {isEdit && (
        <Button
          onClick={onEdit}
          className='rounded-full w-10 h-10 bg-theme-light-pink'
        >
          <ListPlus className='size-5 text-theme-dark' />
        </Button>
      )}
    </div>
  );
};
