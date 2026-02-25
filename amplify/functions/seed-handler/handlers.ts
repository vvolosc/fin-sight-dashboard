import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import type { Schema } from '../../data/resource';

const symbols = ['BTC', 'ETH', 'SOL', 'DOT', 'ADA'];

const calculateTTL = (daysFromNow: number = 1) => {
  const secondsInDay = 86400;
  return Math.floor(Date.now() / 1000) + daysFromNow * secondsInDay;
};

export const handler = async () => {
  Amplify.configure(
    {
      API: {
        GraphQL: {
          endpoint: process.env.AMPLIFY_DATA_GRAPHQL_ENDPOINT!,
          region: process.env.AWS_REGION,
          defaultAuthMode: 'iam',
        },
      },
    },
    {
      Auth: {
        credentialsProvider: {
          getCredentialsAndIdentityId: async () => {
            const credentials = await defaultProvider()();
            return {
              credentials,
              identityId: undefined,
            };
          },
          clearCredentialsAndIdentityId: async () => {},
        },
      },
    }
  );

  const client = generateClient<Schema>();

  for (let i = 0; i < 20; i++) {
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    const randomAmount = parseFloat((Math.random() * 2).toFixed(4));

    try {
      const result = await client.graphql({
        query: `
          mutation CreateTransaction($input: CreateTransactionInput!) {
            createTransaction(input: $input) {
              id
              symbol
              amount
            }
          }
        `,
        variables: {
          input: {
            symbol: randomSymbol,
            amount: randomAmount,
            timestamp: new Date().toISOString(),
            expiration_time: calculateTTL(),
          },
        },
      });

      return result;
    } catch (err) {
      console.error('Mutation failed:', err);
    }

    await new Promise((resolve) => setTimeout(resolve, 3000));
  }

  return { message: 'Batch complete' };
};
