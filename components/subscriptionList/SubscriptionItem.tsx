import { Subscription } from "@/lib/type";
import { subscriptionIcons } from "@/lib/icons";
import {
  Item,
  ItemContent,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export const SubscriptionItem = ({
  subscription,
}: {
  subscription: Subscription;
}) => {
  const IconComponent =
    subscriptionIcons[subscription.icon as keyof typeof subscriptionIcons]
      ?.icon;

  return (
    <Item
      key={subscription.id}
      className="bg-white/10 backdrop-blur-sm grid grid-cols-4 grid-rows-2"
    >
      <ItemMedia variant="icon" className="row-span-2">
        {IconComponent && <IconComponent />}
      </ItemMedia>
      <ItemContent className="col-span-2 row-span-2">
        <ItemHeader className="text-lg font-bold">
          {subscription.name}
        </ItemHeader>
        <ItemTitle>次回支払日：{subscription.nextPaymentDate}</ItemTitle>
      </ItemContent>
      <ItemFooter className="row-span-2 text-xl font-bold">
        ￥{subscription.price.toLocaleString()}
      </ItemFooter>
    </Item>
  );
};
