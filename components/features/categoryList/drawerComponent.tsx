'use client';

import { useMemo, useState } from 'react';

import { AddButton } from '@/components/ui/addButton';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';

type DrawerComponentProps = {
  mode: 'add' | 'edit';
  editTrigger?: React.ReactNode;
  categoryId?: number;
  categoryName?: string;
  onSave?: (name: string, id?: number) => void;
  onDelete?: (id: number) => void;
};

export const DrawerComponent = ({
  mode,
  editTrigger,
  categoryName,
}: DrawerComponentProps) => {
  const [name, setName] = useState(categoryName);
  const title = useMemo(() => {
    if (mode === 'edit') {
      return 'カテゴリを編集';
    } else {
      return 'カテゴリを追加';
    }
  }, [mode]);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        {editTrigger || <AddButton />}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className='text-xl font-bold'>
            {title}
          </DrawerTitle>
        </DrawerHeader>
        <FieldSet className='w-full p-3'>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor='name'>
                カテゴリ名
              </FieldLabel>
              <Input
                id='name'
                autoComplete='off'
                placeholder='例：健康・美容'
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <DrawerFooter>
          <Button>Save</Button>
          <DrawerClose asChild>
            {mode === 'edit' ? (
              <div className='flex gap-2 w-full'>
                <Button
                  variant='destructive'
                  className='flex-1'
                >
                  Delete
                </Button>
                <Button
                  variant='outline'
                  className='flex-1'
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <Button variant='outline'>Cancel</Button>
            )}
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
