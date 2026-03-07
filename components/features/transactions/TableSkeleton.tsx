import { Skeleton } from '@/components/ui/skeleton';
import { TableCell, TableRow, TableBody as UITableBody } from '@/components/ui/table';

const TableSkeleton = () => {
  return (
    <UITableBody>
      {Array.from({ length: 10 }).map((_, i) => (
        <TableRow key={i} className="border-b border-white/[0.03]">
          <TableCell className="py-space-sm">
            <div className="flex items-center gap-space-sm">
              <Skeleton className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <Skeleton className="h-4 w-12 bg-white/5" />
            </div>
          </TableCell>
          <TableCell className="py-space-sm">
            <Skeleton className="h-5 w-20 bg-white/5" />
          </TableCell>
          <TableCell className="py-space-sm hidden md:table-cell">
            <div className="flex items-center gap-2">
              <Skeleton className="h-3 w-24 bg-white/5" />
              <Skeleton className="h-3 w-4 bg-white/5" />
              <Skeleton className="h-3 w-24 bg-white/5" />
            </div>
          </TableCell>
          <TableCell className="py-space-sm text-right">
            <div className="flex justify-end">
              <Skeleton className="h-5 w-16 rounded-full bg-white/5" />
            </div>
          </TableCell>
          <TableCell className="py-space-sm w-[50px]"></TableCell>
        </TableRow>
      ))}
    </UITableBody>
  );
};

export { TableSkeleton };
