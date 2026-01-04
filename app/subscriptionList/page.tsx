import { SubscriptionListComponent } from "@/components/subscriptionList";
import { Subscription } from "@/lib/type";

const subscriptionList: Subscription[] = [
  {
    id: 1,
    name: "Netflix",
    price: 1200,
    nextPaymentDate: "2025/12/01",
    category: "entertainment",
    icon: "Clapperboard",
  },
  {
    id: 2,
    name: "nosh",
    price: 6206,
    nextPaymentDate: "2025/12/15",
    category: "life",
    icon: "Utensils",
  },
  {
    id: 3,
    name: "ChatGPT",
    price: 2500,
    nextPaymentDate: "2025/12/23",
    category: "business",
    icon: "BriefcaseBusiness",
  },
];

export default function SubscriptionList() {
  return <SubscriptionListComponent subscriptionList={subscriptionList} />;
}
