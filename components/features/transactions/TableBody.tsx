import React from 'react';

import { LiveTableBody } from '@/components/features/transactions/LiveTableBody';
import { client } from '@/lib/amplify-client';
import type { Transaction } from '@/types';

const TableBody: React.FC = async () => {
  let transactions: Transaction[] = [];

  try {
    const { data } = await client.models.Transaction.listByDate(
      { type: 'TRANSACTION' },
      { sortDirection: 'DESC', limit: 100 }
    );

    transactions = data;
  } catch (err) {
    console.error('Initial fetch failed:', err);
  }

  return <LiveTableBody transactions={transactions} />;
};

export { TableBody };
