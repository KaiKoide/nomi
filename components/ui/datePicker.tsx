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

export const DatePicker = ({
  nextPaymentDate,
}: {
  nextPaymentDate: string | undefined;
}) => {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(
    nextPaymentDate ? new Date(nextPaymentDate) : undefined
  );

  const formattedDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(
      2,
      '0'
    );
    const day = date.getDate();

    return `${year}/${month}/${day}`;
  };

  const getNextMonth = () => {
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    return nextMonth;
  };

  return (
    <div className='flex flex-col gap-3'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            id='date'
            className={cn(
              'w-full justify-between text-lg h-11',
              date ? 'text-white' : 'text-muted-foreground'
            )}
          >
            {date
              ? formattedDate(date)
              : formattedDate(new Date(getNextMonth()))}
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
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
