'use client';

import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/datePicker';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SubscriptionIconPicker } from '@/components/ui/subscriptionIconPicker';
import { Textarea } from '@/components/ui/textarea';
import { SubscriptionIconName } from '@/lib/icons';
import { Subscription } from '@/lib/type';
import { useState } from 'react';

type SubscriptionFieldProps = {
  subscription?: Subscription;
};

export const SubscriptionField = ({
  subscription,
}: SubscriptionFieldProps) => {
  const [selectedIcon, setSelectedIcon] = useState<
    SubscriptionIconName | undefined
  >(subscription?.icon as SubscriptionIconName | undefined);
  const [name, setName] = useState(subscription?.name);
  const [price, setPrice] = useState(subscription?.price);
  const [cycle, setCycle] = useState(subscription?.cycle);
  const [nextPaymentDate] = useState(
    subscription?.nextPaymentDate
  );
  const [category, setCategory] = useState(
    subscription?.category
  );
  const [memo, setMemo] = useState(subscription?.memo);

  const handleIconSelect = (
    iconName: SubscriptionIconName
  ) => {
    setSelectedIcon(iconName);
  };

  return (
    <FieldSet className='w-full p-3'>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor='name'>サービス名</FieldLabel>
          <Input
            id='name'
            autoComplete='off'
            placeholder='Netflix'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor='username'>金額</FieldLabel>
          <Input
            id='username'
            autoComplete='off'
            placeholder='1,000'
            value={price}
            onChange={(e) =>
              setPrice(Number(e.target.value))
            }
          />
        </Field>
        <Field>
          <FieldLabel>支払サイクル</FieldLabel>
          <Select value={cycle} onValueChange={setCycle}>
            <SelectTrigger>
              <SelectValue placeholder='月額' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='monthly'>月額</SelectItem>
              <SelectItem value='yearly'>年額</SelectItem>
              <SelectItem value='biweekly'>
                隔週額
              </SelectItem>
              <SelectItem value='weekly'>週額</SelectItem>
              <SelectItem value='other'>その他</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor='username'>
            次の支払日
          </FieldLabel>
          <DatePicker nextPaymentDate={nextPaymentDate} />
        </Field>
        <Field>
          <FieldLabel>カテゴリ</FieldLabel>
          <Select
            value={category}
            onValueChange={setCategory}
          >
            <SelectTrigger>
              <SelectValue placeholder='エンタメ' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='entertainment'>
                エンタメ
              </SelectItem>
              <SelectItem value='business'>仕事</SelectItem>
              <SelectItem value='life'>生活</SelectItem>
              <SelectItem value='other'>その他</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor='name'>アイコン</FieldLabel>
          <SubscriptionIconPicker
            selectedIcon={selectedIcon}
            onIconSelect={handleIconSelect}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor='memo'>メモ</FieldLabel>
          <Textarea
            id='memo'
            placeholder='メモを入力してください'
            rows={4}
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
        </Field>
        <Field>
          <Button
            type='submit'
            className='bg-theme-pink font-bold text-xl'
          >
            Save
          </Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  );
};
