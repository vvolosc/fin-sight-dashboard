import { Activity, BarChart3, Globe, Zap } from 'lucide-react';

import type { MetricData } from '@/types';

import { MetricCard } from './MetricCard';

const MetricPanel: React.FC = () => {
  const metrics: MetricData[] = [
    { label: 'Market Netflow', val: '$1.42B', icon: <BarChart3 size={18} /> },
    { label: 'Market Sentiment', val: 'Bullish', icon: <Activity size={18} /> },
    { label: 'Alpha Signals', val: '128_Active', icon: <Zap size={18} /> },
    { label: 'Dominance', val: 'BTC_52%', icon: <Globe size={18} /> },
  ];

  return (
    <section className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-space-md">
      {metrics.map((item, i) => (
        <MetricCard key={i} {...item} />
      ))}
    </section>
  );
};

export { MetricPanel };
