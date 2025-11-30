import { MoveLeft, Plus } from 'lucide-react';

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="p-5 flex items-center justify-between w-full">
      <MoveLeft />
      <h1 className="font-bold">{title}</h1>
      <Plus />
    </div>
  );
};
