'use client';

import { Search, Waves } from 'lucide-react';

import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="h-16 flex items-center justify-between px-[var(--spacing-space-lg)] border-b border-[var(--border-dim)] bg-[var(--bg-main)]/80 backdrop-blur-[var(--blur-terminal)] sticky top-0 z-50">
      <div className="flex items-center gap-[var(--spacing-space-sm)]">
        <div className="w-9 h-9 bg-[var(--primary)] rounded-[calc(var(--radius)-2px)] flex items-center justify-center text-white shadow-lg shadow-[rgba(59,130,246,0.25)]">
          <Waves size={22} />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tight leading-none text-white">
            FinSight
          </span>
          <span className="text-[9px] font-bold text-[var(--primary)] uppercase tracking-[0.25em] mt-1 opacity-80">
            Institutional_v2
          </span>
        </div>
      </div>

      <div className="flex items-center gap-[var(--spacing-space-md)]">
        <div className="hidden md:flex items-center bg-white/[0.03] border border-[var(--border-dim)] rounded-[calc(var(--radius)-2px)] px-3 h-9 gap-2 focus-within:border-[rgba(59,130,246,0.5)] transition-all">
          <Search size={14} className="opacity-30" />
          <Input type="text" placeholder="SEARCH_MARKET_TAPE..." className="w-56 border-none" />
        </div>

        <div className="h-4 w-[1px] bg-[var(--border-dim)]" />

        <div className="flex items-center gap-2.5 px-3.5 h-9 rounded-[calc(var(--radius)-2px)] bg-[rgba(34,197,94,0.05)] border border-[rgba(34,197,94,0.15)] select-none">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--success)]"></span>
          </div>
          <span className="text-[10px] font-black text-[var(--success)] uppercase tracking-widest">
            LIVE_FEED
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
