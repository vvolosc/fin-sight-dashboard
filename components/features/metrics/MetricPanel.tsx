import { Activity, BarChart3, Globe, TrendingUp } from 'lucide-react';

import type { MetricData } from '@/types';

import { MetricCard } from './MetricCard';

const MetricPanel: React.FC = () => {
  const metrics: MetricData[] = [
    { label: 'Market Netflow', val: '$1.42B', icon: <BarChart3 size={18} /> },
    { label: 'Market Sentiment', val: 'Bullish', icon: <Activity size={18} /> },
    { label: 'Volatility Index', val: '24.2', icon: <TrendingUp size={18} /> },
    { label: 'Dominance', val: 'BTC: 52% | ETH: 5%', icon: <Globe size={18} /> },
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
