'use client';

import { useEffect, useState } from 'react';

import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';

import type { Schema } from '@/amplify/data/resource';
import { Badge } from '@/components/ui/badge';
import { TableCell, TableRow, TableBody as UITableBody } from '@/components/ui/table';
import { client } from '@/lib/amplify-client';
import { Transaction, TransactionDirection } from '@/types';
import { cn, getAssetBgClass } from '@/utils';

interface LiveTableBodyProps {
  transactions: Transaction[];
}

const LiveTableBody = ({ transactions }: LiveTableBodyProps) => {
  const [data, setData] = useState<Schema['Transaction']['type'][]>(transactions);
  const [newId, setNewId] = useState<string | null>(null);

  useEffect(() => {
    // Real-time: Subscribe ONLY to new creations
    const subscription = client.models.Transaction.onCreate({
      authMode: 'apiKey',
    }).subscribe({
      next: (newItem) => {
        if (!newItem || !newItem.id) {
          console.warn('Subscription received invalid item:', newItem);
          return;
        }

        setData((prev) => [newItem, ...prev]);
        setNewId(newItem.id);
      },
      error: (err) => console.error('Subscription error:', err),
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <UITableBody>
      {data.slice(0, 100).map((tx) => (
        <TableRow
          key={tx.id}
          className={cn(
            'group border-b border-white/[0.03] hover:bg-white/[0.02]',
            newId === tx.id ? 'animate-entry' : ''
          )}
        >
          <TableCell className="py-space-sm">
            <div className="flex items-center gap-space-sm">
              <div
                className={cn(
                  'w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.1)]',
                  getAssetBgClass(tx.symbol)
                )}
              />
              <span className="font-bold tracking-tight text-white">{tx.symbol}</span>
            </div>
          </TableCell>
          <TableCell className="py-space-sm font-black tabular-nums text-sm text-white transition-colors">
            {tx.amount?.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 4,
            })}
          </TableCell>
          <TableCell className="py-space-sm hidden md:table-cell text-[11px] opacity-40 font-mono tracking-tighter text-white">
            <span className="truncate max-w-[120px] inline-block align-bottom">{tx.sender}</span>
            <span className="text-primary mx-2">→</span>
            <span className="truncate max-w-[120px] inline-block align-bottom">{tx.receiver}</span>
          </TableCell>
          <TableCell className="py-space-sm text-right">
            <Badge
              variant={tx.direction === TransactionDirection.INFLOW ? 'success' : 'destructive'}
              className="font-black text-[9px] uppercase tracking-tighter px-2 py-0 h-5"
            >
              {tx.direction === TransactionDirection.INFLOW ? (
                <ArrowDownLeft size={10} className="mr-1" />
              ) : (
                <ArrowUpRight size={10} className="mr-1" />
              )}
              {tx.direction}
            </Badge>
          </TableCell>
          <TableCell className="py-space-sm w-[50px]"></TableCell>
        </TableRow>
      ))}
    </UITableBody>
  );
};

export { LiveTableBody };
