import {
  Item,
  ItemContent,
  ItemHeader,
} from '@/components/ui/item';
import { ChevronRight } from 'lucide-react';

type Category = {
  id: number;
  name: string;
};

type DrawerItemProps = {
  category: Category;
} & React.ComponentProps<typeof Item>;

export const DrawerItem = ({
  category,
  ...props
}: DrawerItemProps) => (
  <Item
    {...props}
    className='bg-white/10 backdrop-blur-sm flex justify-between items-center border border-theme-pink'
  >
    <ItemContent className='col-span-2 row-span-2'>
      <ItemHeader className='row-span-2 text-xl font-bold'>
        {category.name}
      </ItemHeader>
    </ItemContent>
    <ChevronRight className='text-theme-pink' />
  </Item>
);
