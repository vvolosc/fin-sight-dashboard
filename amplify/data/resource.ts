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
    })
    .authorization((allow) => [
      allow.publicApiKey().to(['read', 'create']),
      allow.authenticated('identityPool').to(['create', 'read']), // for authenticated users
      allow.guest().to(['read', 'create']), // for iam
    ]),
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
