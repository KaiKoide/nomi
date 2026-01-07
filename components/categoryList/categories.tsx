'use client';

import { ChevronRight } from 'lucide-react';

import { DrawerComponent } from '@/components/categoryList/DrawerComponent';
import {
  Item,
  ItemContent,
  ItemHeader,
} from '@/components/ui/item';

export const Categories = () => {
  const categories = [
    { id: 1, name: 'エンタメ' },
    { id: 2, name: '仕事' },
    { id: 3, name: '生活' },
  ];

  const handleSave = (name: string, id?: number) => {
    if (id) {
      // 編集
      console.log('編集', name, id);
    } else {
      // 追加
      console.log('追加', name);
    }
  };

  const handleDelete = (id: number) => {
    console.log('削除', id);
  };

  return (
    <div>
      {categories.map((category) => (
        <DrawerComponent
          key={category.id}
          mode='edit'
          categoryId={category.id}
          categoryName={category.name}
          onSave={handleSave}
          onDelete={handleDelete}
          editTrigger={
            <Item
              key={category.id}
              className='bg-white/10 backdrop-blur-sm flex justify-between items-center border border-theme-pink'
            >
              <ItemContent className='col-span-2 row-span-2'>
                <ItemHeader className='row-span-2 text-xl font-bold'>
                  {category.name}
                </ItemHeader>
              </ItemContent>
              <ChevronRight className='text-theme-pink' />
            </Item>
          }
        />
      ))}

      <DrawerComponent mode='add' />
    </div>
  );
};
