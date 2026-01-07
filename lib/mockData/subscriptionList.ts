import { Subscription } from '@/lib/type';

export const subscriptionList: Subscription[] = [
  {
    id: 1,
    name: 'Netflix',
    price: 1200,
    cycle: 'monthly',
    nextPaymentDate: '2026/2/01',
    category: 'entertainment',
    icon: 'Clapperboard',
    memo: 'Netflixはよく見る',
    subscriptionDate: '2025/12/01',
  },
  {
    id: 2,
    name: 'nosh',
    price: 1000,
    cycle: 'monthly',
    nextPaymentDate: '2026/3/15',
    category: 'life',
    icon: 'Utensils',
    memo: 'noshはよく食べる',
    subscriptionDate: '2025/12/01',
  },
  {
    id: 3,
    name: 'ChatGPT',
    price: 2500,
    cycle: 'monthly',
    nextPaymentDate: '2026/1/23',
    category: 'business',
    icon: 'BriefcaseBusiness',
    memo: 'そんなに使わない',
    subscriptionDate: '2025/12/01',
  },
];
