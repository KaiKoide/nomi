import { SubscriptionListComponent } from "@/components/subscriptionList";
import { subscriptionList } from "@/lib/mockData/subscriptionList";

export default function SubscriptionList() {
  return <SubscriptionListComponent subscriptionList={subscriptionList} />;
}
