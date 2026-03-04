import { ArrowDownLeft, ArrowUpRight, MoreHorizontal } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TableCell, TableRow, TableBody as UITableBody } from '@/components/ui/table';
import { Symbols, TransactionDirection } from '@/types';
import { client } from '@/utils/amplify-server';

const assets = [
  { name: Symbols.BTC, color: '#F7931A' },
  { name: Symbols.ETH, color: '#627EEA' },
  { name: Symbols.DOT, color: '#14F195' },
  { name: Symbols.ADA, color: '#14F196' },
  { name: Symbols.SOL, color: '#14F197' },
];

const TableBody: React.FC = async () => {
  const { data: transactions = [] } = await client.models.Transaction.list();

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
            <Badge variant={tx.direction === TransactionDirection.INFLOW ? 'default' : 'secondary'}>
              {tx.direction === TransactionDirection.INFLOW ? (
                <ArrowDownLeft size={10} className="mr-1" />
              ) : (
                <ArrowUpRight size={10} className="mr-1" />
              )}
              {tx.direction}
            </Badge>
          </TableCell>
          <TableCell>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal size={14} />
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </UITableBody>
  );
};

export { TableBody };
