import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { TableCell, TableRow, TableBody as UITableBody } from '@/components/ui/table';
import { Symbols, TransactionDirection } from '@/types';
import { client } from '@/utils/amplify-server';

const assets = [
  { name: Symbols.BTC, color: '#F7931A' },
  { name: Symbols.ETH, color: '#627EEA' },
  { name: Symbols.DOT, color: '#14F195' },
  { name: Symbols.ADA, color: '#E6007A' },
  { name: Symbols.SOL, color: '#0033AD' },
];

const TableBody: React.FC = async () => {
  const { data: transactions = [] } = await client.models.Transaction.list({
    // TODO: remove filter and limit once old records are removed from db
    limit: 300,
    filter: {
      and: [{ sender: { attributeExists: true } }, { receiver: { attributeExists: true } }],
    },
  });

  const getColor = (symbol: string) => assets.find(({ name }) => name === symbol)?.color;

  return (
    <UITableBody>
      {transactions.map((tx) => (
        <TableRow key={tx.id} className="group animate-in fade-in slide-in-from-top-1 duration-500">
          <TableCell>
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                style={{ backgroundColor: getColor(tx.symbol) }}
              />
              <span className="font-bold tracking-tight">{tx.symbol}</span>
            </div>
          </TableCell>
          <TableCell className="font-black tabular-nums text-sm group-hover:text-blue-400 transition-colors">
            {tx.amount}
          </TableCell>
          <TableCell className="hidden md:table-cell text-[11px] opacity-40 font-mono tracking-tighter">
            {tx.sender} <span className="text-blue-500 mx-1">→</span> {tx.receiver}
          </TableCell>
          <TableCell className="text-right">
            <Badge
              variant={tx.direction === TransactionDirection.INFLOW ? 'success' : 'destructive'}
            >
              {tx.direction === TransactionDirection.INFLOW ? (
                <ArrowDownLeft size={10} className="mr-1" />
              ) : (
                <ArrowUpRight size={10} className="mr-1" />
              )}
              {tx.direction}
            </Badge>
          </TableCell>
        </TableRow>
      ))}
    </UITableBody>
  );
};

export { TableBody };
