import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';

import { Symbols, TransactionDirection } from '../../../types';
import type { Schema } from '../../data/resource';

const symbols = [Symbols.BTC, Symbols.ETH, Symbols.SOL, Symbols.DOT, Symbols.ADA];
const EXCHANGES = [
  'Binance_Hot_Wallet_3',
  'Coinbase_Custody',
  'Kraken_Exchange',
  'OKX_Internal',
  'Gemini_Cold_Storage',
];
const WHALES = [
  'MicroStrategy_Llc',
  'Tesla_Digital_Assets',
  'Mt_Gox_Trustee',
  'Jump_Crypto_Deposit',
  'Unknown_Whale_0x71...',
];

export const handler = async () => {
  Amplify.configure(
    {
      API: {
        GraphQL: {
          endpoint: process.env.AMPLIFY_DATA_GRAPHQL_ENDPOINT as string,
          region: process.env.AWS_REGION as string,
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
          clearCredentialsAndIdentityId: async () => ({}),
        },
      },
    }
  );

  const client = generateClient<Schema>();

  for (let i = 0; i < 20; i++) {
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const amount = parseFloat((Math.random() * 2).toFixed(4));
    const direction =
      Math.random() > 0.5 ? TransactionDirection.INFLOW : TransactionDirection.OUTFLOW;
    const sender =
      direction === 'INFLOW'
        ? WHALES[Math.floor(Math.random() * WHALES.length)]
        : EXCHANGES[Math.floor(Math.random() * EXCHANGES.length)];
    const receiver =
      direction === 'INFLOW'
        ? EXCHANGES[Math.floor(Math.random() * EXCHANGES.length)]
        : WHALES[Math.floor(Math.random() * WHALES.length)];
    const expirationTime = Math.floor(Date.now() / 1000) + 86400;

    try {
      const result = await client.graphql({
        query: `
          mutation CreateTransaction($input: CreateTransactionInput!) {
            createTransaction(input: $input) {
              id
              symbol
              amount
              expiration_time
              direction
            }
          }
        `,
        variables: {
          input: {
            symbol,
            amount,
            timestamp: new Date().toISOString(),
            expiration_time: expirationTime,
            direction,
            sender,
            receiver,
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
