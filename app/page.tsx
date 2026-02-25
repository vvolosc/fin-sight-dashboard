import { cookies } from 'next/headers';

import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';

import type { Schema } from '@/amplify/data/resource';
import config from '@/amplify_outputs.json';

const client = generateServerClientUsingCookies<Schema>({ config, cookies });

const Dashboard = async () => {
  const { data: transactions = [] } =
    (await client.models.Transaction.list({ authMode: 'apiKey' })) ?? {};

  return (
    <>
      <div>{JSON.stringify(transactions)}</div>
    </>
  );
};

export default Dashboard;
