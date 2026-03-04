import { TableHead, TableRow, TableHeader as UITableHeader } from '@/components/ui/table';

const TableHeader: React.FC = () => {
  return (
    <UITableHeader>
      <TableRow>
        <TableHead className="w-[150px]">Asset_Node</TableHead>
        <TableHead>Amount_Net</TableHead>
        <TableHead className="hidden md:table-cell">Route_Log</TableHead>
        <TableHead className="text-right">Flow_Type</TableHead>
        <TableHead className="w-[50px]"></TableHead>
      </TableRow>
    </UITableHeader>
  );
};

export { TableHeader };
