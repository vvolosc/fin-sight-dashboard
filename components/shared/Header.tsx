'use client';

import { Search, Waves } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-header-height flex items-center justify-between px-space-lg border-b border-border-dim bg-main/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-space-sm">
        <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center text-white shadow-lg shadow-primary/25">
          <Waves size={22} />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tight leading-none text-white">
            FinSight
          </span>
          <span className="text-[9px] font-bold text-primary uppercase tracking-[0.25em] mt-1 opacity-80">
            Institutional_v2
          </span>
        </div>
      </div>

      <div className="flex items-center gap-space-md">
        <div className="hidden md:flex items-center bg-white/5 border border-border-dim rounded-md px-space-xs h-9 gap-space-xs focus-within:border-primary/50 transition-all">
          <Search size={14} className="opacity-30" />
          <input
            type="text"
            placeholder="SEARCH_MARKET_TAPE..."
            className="w-56 bg-transparent border-none outline-none text-xs text-white placeholder:opacity-20"
          />
        </div>

        <div className="h-4 w-[1px] bg-border-dim" />

        <div className="flex items-center gap-2.5 px-3.5 h-9 rounded-md bg-success/5 border border-success/15 select-none">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
          </div>
          <span className="text-[10px] font-black text-success uppercase tracking-widest">
            LIVE_FEED
          </span>
        </div>
      </div>
    </header>
  );
};

export { Header };
