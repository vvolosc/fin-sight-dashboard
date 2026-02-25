import { cookies } from 'next/headers';

import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';

import config from '@/amplify_outputs.json';

const client = generateServerClientUsingCookies({ config, cookies });

const Dashboard = async () => {
  const { data: transactions = [] } =
    (await client.models?.Transaction?.list({ authMode: 'apiKey' })) ?? {};

  return (
    <>
      <div>{JSON.stringify(transactions)}</div>
    </>
  );
};

export default Dashboard;
