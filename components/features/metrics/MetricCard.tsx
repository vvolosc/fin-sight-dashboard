import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { MetricData } from '@/types';

const MetricCard: React.FC<MetricData> = ({ label, val, icon }) => (
  <Card className="group">
    <CardHeader className="flex flex-row items-center justify-between pb-space-sm">
      <CardTitle className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
        {label}
      </CardTitle>
      <div className="text-foreground/40 group-hover:text-primary transition-colors">{icon}</div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-black tabular-nums tracking-tighter text-white">{val}</div>
    </CardContent>
  </Card>
);

export { MetricCard };
