'use client';

import { useCallback } from 'react';

import { DrawerComponent } from '@/components/features/categoryList/drawerComponent';
import { DrawerItem } from '@/components/features/categoryList/drawerItem';

export const Categories = () => {
  // TODO: DBから取得するように変更する;
  const categories = [
    { id: 1, name: 'エンタメ' },
    { id: 2, name: '仕事' },
    { id: 3, name: '生活' },
  ];

  const handleSave = useCallback(
    (name: string, id?: number) => {
      if (id) {
        // TODO 編集の実装を行う
        // 編集
        console.log('編集', name, id);
      } else {
        // TODO 追加の実装を行う
        // 追加
        console.log('追加', name);
      }
    },
    []
  );

  const handleDelete = useCallback((id: number) => {
    // TODO 削除の実装を行う
    console.log('削除', id);
  }, []);

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
          editTrigger={<DrawerItem category={category} />}
        />
      ))}

      <DrawerComponent mode='add' />
    </div>
  );
};
