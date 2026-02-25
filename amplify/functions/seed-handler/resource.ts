import { defineFunction } from '@aws-amplify/backend';

export const seedHandler = defineFunction({
  name: 'seed-handler',
  entry: './handlers.ts',
  timeoutSeconds: 70,
});
