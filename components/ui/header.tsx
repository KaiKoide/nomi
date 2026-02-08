import { cn } from '@/lib/utils';
import { ListPlus } from 'lucide-react';
import { Button } from './button';

type HeaderProps = {
  title?: string;
  isEdit?: boolean;
  onEdit?: () => void;
};

export const Header = ({ isEdit, onEdit }: HeaderProps) => {
  // const router = useRouter();

  // const handleBack = () => {
  //   return router.back();
  // };

  return (
    <div className='p-5 flex items-center justify-between w-full'>
      {/* <LoginComponent /> */}
      {/* <MoveLeft
        onClick={handleBack}
        className='cursor-pointer'
      /> */}
      {/* <h1 className='font-bold'>{title}</h1> */}
      <Button
        onClick={onEdit}
        className={cn(
          'rounded-full w-10 h-10 bg-theme-light-pink',
          !isEdit && 'invisible'
        )}
      >
        <ListPlus className='size-5 text-theme-dark' />
      </Button>
    </div>
  );
};
