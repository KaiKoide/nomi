'use client';

import { CalendarDays } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

function parsePaymentDateString(
  value: string | undefined
): Date | undefined {
  if (!value?.trim()) {
    return undefined;
  }
  const normalized = value.replace(/\//g, '-');
  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime())
    ? undefined
    : parsed;
}

export const DatePicker = ({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (value: string) => void;
}) => {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(
    () => parsePaymentDateString(value)
  );

  React.useEffect(() => {
    setDate(parsePaymentDateString(value));
  }, [value]);

  const formattedDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(
      2,
      '0'
    );
    const day = date.getDate();

    return `${year}/${month}/${day}`;
  };

  return (
    <div className='flex flex-col gap-3'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            type='button'
            variant='outline'
            id='date'
            className={cn(
              'w-full justify-between text-lg h-11',
              date ? 'text-white' : 'text-muted-foreground'
            )}
          >
            {date ? formattedDate(date) : '日付を選択'}
            <CalendarDays className='text-white' />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className='w-auto overflow-hidden p-0'
          align='start'
        >
          <Calendar
            mode='single'
            selected={date}
            captionLayout='dropdown'
            onSelect={(selected) => {
              setDate(selected);
              setOpen(false);
              if (selected) {
                onChange?.(formattedDate(selected));
              }
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
