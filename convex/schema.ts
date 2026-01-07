import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  // ユーザーテーブル
  users: defineTable({
    email: v.string(),
    name: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index('by_email', ['email']),

  // サブスクリプションテーブル
  subscriptions: defineTable({
    userId: v.id('users'),
    name: v.string(),
    description: v.optional(v.string()),
    category: v.optional(v.string()),
    price: v.number(),
    currency: v.string(),
    billingCycle: v.union(
      v.literal('monthly'),
      v.literal('yearly'),
      v.literal('weekly'),
      v.literal('daily')
    ),
    startDate: v.number(),
    nextBillingDate: v.number(),
    status: v.union(
      v.literal('active'),
      v.literal('paused'),
      v.literal('cancelled')
    ),
    paymentMethod: v.optional(v.string()),
    website: v.optional(v.string()),
    icon: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index('by_user', ['userId'])
    .index('by_user_and_status', ['userId', 'status'])
    .index('by_next_billing_date', ['nextBillingDate']),

  // カテゴリマスタテーブル
  categories: defineTable({
    name: v.string(),
    color: v.optional(v.string()),
    icon: v.optional(v.string()),
    createdAt: v.number(),
  }).index('by_name', ['name']),
});
