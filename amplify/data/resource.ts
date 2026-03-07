import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

import { TransactionDirection } from '../../types';

const schema = a.schema({
  Transaction: a
    .model({
      symbol: a.string().required(),
      amount: a.float().required(),
      sender: a.string(),
      receiver: a.string(),
      expiration_time: a.integer().required(),
      direction: a.enum([TransactionDirection.INFLOW, TransactionDirection.OUTFLOW]),
      type: a.string().required(),
      createdAt: a.datetime().required(),
    })
    .authorization((allow) => [
      allow.guest().to(['read', 'create']),
      allow.publicApiKey().to(['read']),
    ])
    .secondaryIndexes((index) => [index('type').sortKeys(['createdAt']).queryField('listByDate')]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
