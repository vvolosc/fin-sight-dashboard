import { TableBody } from '@/components/features/transactions/TableBody';
import { TableHeader } from '@/components/features/transactions/TableHeader';
import { Card } from '@/components/ui/card';
import { Table } from '@/components/ui/table';

const TransactionsTable = () => {
  return (
    <section className="col-span-12 space-y-4 mt-2">
      <Card className="overflow-hidden border-white/[0.08]">
        <Table>
          <TableHeader />
          <TableBody />
        </Table>
      </Card>
    </section>
  );
};

export { TransactionsTable };
