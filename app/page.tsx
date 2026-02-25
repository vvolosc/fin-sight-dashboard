import { cookies } from 'next/headers';

import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';

import type { Schema } from '@/amplify/data/resource';
import config from '@/amplify_outputs.json';
import { Button } from '@/components/ui/button';

const client = generateServerClientUsingCookies<Schema>({ config, cookies });

const Dashboard = async () => {
  const { data: transactions = [] } =
    (await client.models.Transaction.list({ authMode: 'apiKey' })) ?? {};

  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-3xl font-bold underline">Hello</h1>
      <Button variant="default">Click me (Shadcn)</Button>
      <div className="bg-slate-100 p-4 rounded-lg">{JSON.stringify(transactions.length)}</div>
    </div>
  );
};

export default Dashboard;
