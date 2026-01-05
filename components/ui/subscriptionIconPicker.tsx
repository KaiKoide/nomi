import {
  subscriptionIcons,
  type SubscriptionIconName,
} from '@/lib/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type subscriptionIconPickerProps = {
  selectedIcon?: SubscriptionIconName | undefined;
  onIconSelect: (icon: SubscriptionIconName) => void;
};

export const SubscriptionIconPicker = ({
  selectedIcon,
  onIconSelect,
}: subscriptionIconPickerProps) => {
  return (
    <div className='p-2 bg-theme-light-pink/95 backdrop-blur-lg rounded-md flex flex-wrap gap-2 '>
      {Object.entries(subscriptionIcons).map(
        ([name, icon]) => {
          return (
            <Button
              key={name}
              size='icon'
              onClick={() =>
                onIconSelect(name as SubscriptionIconName)
              }
              className={cn(
                'bg-white text-theme-dark',
                selectedIcon === name &&
                  'text-theme-pink border-2 border-theme-pink'
              )}
              aria-label={icon.label}
              title={icon.label}
            >
              <icon.icon className='size-6' />
            </Button>
          );
        }
      )}
    </div>
  );
};
