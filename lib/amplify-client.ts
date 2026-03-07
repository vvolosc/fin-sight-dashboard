import { generateClient } from 'aws-amplify/data';

import type { Schema } from '@/amplify/data/resource';

/**
 * Client-side Singleton for Amplify Data
 * Used for standard queries, mutations, and subscriptions.
 */
export const client = generateClient<Schema>({
  authMode: 'apiKey',
});
