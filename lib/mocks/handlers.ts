import { Subscription } from '@/lib/type';
import { http, HttpResponse } from 'msw';

const subscriptionList: Subscription[] = [
  {
    id: 1,
    name: 'Netflix',
    price: 1200,
    cycle: 'monthly',
    nextPaymentDate: '2027/2/01',
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
    nextPaymentDate: '2027/3/15',
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
    nextPaymentDate: '2027/1/23',
    category: 'business',
    icon: 'BriefcaseBusiness',
    memo: 'そんなに使わない',
    subscriptionDate: '2025/12/01',
  },
];

export const handlers = [
  http.get('/api/subscriptions', () => {
    return HttpResponse.json(subscriptionList);
  }),

  http.get('/api/subscriptions/:id', ({ params }) => {
    const id = Number(params.id);
    const item = subscriptionList.find(
      (subscription) => subscription.id === id
    );
    if (!item) {
      return HttpResponse.json(
        { message: 'Subscription not found' },
        { status: 404 }
      );
    }
    return HttpResponse.json(item);
  }),
];
