import { Suspense } from 'react';

import { TableBody } from '@/components/features/transactions/TableBody';
import { TableHeader } from '@/components/features/transactions/TableHeader';
import { TableSkeleton } from '@/components/features/transactions/TableSkeleton';
import { Card } from '@/components/ui/card';
import { Table } from '@/components/ui/table';

const TransactionsTable = () => {
  return (
    <section className="col-span-12 space-y-space-sm mt-space-xs">
      <Card className="overflow-hidden border-white/[0.08]">
        <Table>
          <TableHeader />
          <Suspense fallback={<TableSkeleton />}>
            <TableBody />
          </Suspense>
        </Table>
      </Card>
    </section>
  );
};

export { TransactionsTable };
