'use client';

import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/datePicker';
import {
  Field,
  FieldError,
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
import {
  SubscriptionIconName,
  subscriptionIcons,
} from '@/lib/icons';
import { Subscription } from '@/lib/type';

type SubscriptionFormValues = {
  name: string;
  price: string;
  cycle: string;
  nextPaymentDate: string;
  category: string;
  icon: SubscriptionIconName | '';
  memo: string;
};

type SubscriptionFieldProps = {
  subscription?: Subscription;
};

const REQUIRED_INPUT = '入力してください';
const REQUIRED_SELECT = '選択してください';

export const SubscriptionField = ({
  subscription,
}: SubscriptionFieldProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionFormValues>({
    defaultValues: {
      name: subscription?.name ?? '',
      price:
        subscription?.price !== undefined
          ? String(subscription.price)
          : '',
      cycle: subscription?.cycle ?? '',
      nextPaymentDate: subscription?.nextPaymentDate ?? '',
      category: subscription?.category ?? '',
      icon:
        subscription &&
        subscription.icon in subscriptionIcons
          ? (subscription?.icon as SubscriptionIconName)
          : '',
      memo: subscription?.memo ?? '',
    },
  });

  const onSubmit: SubmitHandler<SubscriptionFormValues> = (
    data
  ) => console.log(data);

  return (
    <form
      className='contents'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <FieldSet className='w-full p-3'>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='name'>
              サービス名
            </FieldLabel>
            <Input
              autoComplete='off'
              placeholder='Netflix'
              {...register('name', {
                required: REQUIRED_INPUT,
              })}
            />
            <FieldError errors={[errors.name]} />
          </Field>
          <Field>
            <FieldLabel htmlFor='price'>金額</FieldLabel>
            <Input
              {...register('price', {
                required: REQUIRED_INPUT,
                validate: (value) => {
                  const n = Number(value);
                  if (Number.isNaN(n)) {
                    return '数字を入力してください。';
                  }
                  if (n < 0) {
                    return '0以上を入力してください。';
                  }
                  return true;
                },
              })}
              autoComplete='off'
              placeholder='1,000'
            />
            <FieldError errors={[errors.name]} />
          </Field>
          <Field>
            <FieldLabel>支払サイクル</FieldLabel>
            <Controller
              name='cycle'
              control={control}
              rules={{ required: REQUIRED_INPUT }}
              render={({ field }) => (
                <Select
                  {...register('cycle')}
                  value={
                    field.value === ''
                      ? undefined
                      : field.value
                  }
                  onValueChange={field.onChange}
                >
                  <SelectTrigger id='payment-cycle'>
                    <SelectValue placeholder='月額' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='monthly'>
                      月額
                    </SelectItem>
                    <SelectItem value='yearly'>
                      年額
                    </SelectItem>
                    <SelectItem value='biweekly'>
                      隔週額
                    </SelectItem>
                    <SelectItem value='weekly'>
                      週額
                    </SelectItem>
                    <SelectItem value='other'>
                      その他
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor='next-payment-date'>
              次の支払日
            </FieldLabel>
            <Controller
              name='nextPaymentDate'
              control={control}
              rules={{ required: REQUIRED_SELECT }}
              render={({ field }) => (
                <DatePicker
                  value={field.value || undefined}
                  onChange={field.onChange}
                />
              )}
            />
            <FieldError errors={[errors.nextPaymentDate]} />
          </Field>
          <Field>
            <FieldLabel>カテゴリ</FieldLabel>
            <Controller
              name='category'
              control={control}
              rules={{ required: REQUIRED_SELECT }}
              render={({ field }) => (
                <Select
                  value={
                    field.value === ''
                      ? undefined
                      : field.value
                  }
                  onValueChange={field.onChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder='エンタメ' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='entertainment'>
                      エンタメ
                    </SelectItem>
                    <SelectItem value='business'>
                      仕事
                    </SelectItem>
                    <SelectItem value='life'>
                      生活
                    </SelectItem>
                    <SelectItem value='other'>
                      その他
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError errors={[errors.category]} />
          </Field>
          <Field>
            <FieldLabel htmlFor='icon-picker'>
              アイコン
            </FieldLabel>
            <Controller
              name='icon'
              control={control}
              rules={{ required: REQUIRED_SELECT }}
              render={({ field }) => (
                <SubscriptionIconPicker
                  selectedIcon={
                    field.value === ''
                      ? undefined
                      : field.value
                  }
                  onIconSelect={field.onChange}
                />
              )}
            />
            <FieldError errors={[errors.icon]} />
          </Field>
          <Field>
            <FieldLabel htmlFor='memo'>メモ</FieldLabel>
            <Textarea
              {...register('memo')}
              placeholder='メモを入力してください'
              rows={4}
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
    </form>
  );
};
