import { MetricPanel } from '@/components/features/metrics/MetricPanel';
import { TransactionsTable } from '@/components/features/transactions/TransactionsTable';

const Dashboard = async () => {
  return (
    <>
      <MetricPanel />
      <TransactionsTable />
    </>
  );
};

export default Dashboard;
