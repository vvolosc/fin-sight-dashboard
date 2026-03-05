'use client';

import { Activity, Lock, ShieldAlert } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="h-10 border-t border-border-dim px-space-md flex items-center justify-between text-[10px] font-bold text-foreground/40 uppercase tracking-widest bg-main/40 backdrop-blur-md">
      <div className="flex items-center gap-space-md">
        <span className="flex items-center gap-space-xs">
          <ShieldAlert size={12} className="text-foreground/40" />
          Amplify demo
        </span>
        <div className="h-3 w-[1px] bg-border-dim" />
        <span className="flex items-center gap-space-xs text-primary/70">
          <Activity size={12} />
          AWS Lambda: Working
        </span>
      </div>
      <div className="flex items-center gap-space-xs opacity-50 hover:opacity-100 transition-opacity cursor-help">
        <Lock size={12} />
        Deployed: IaC
      </div>
    </footer>
  );
};

export { Footer };
