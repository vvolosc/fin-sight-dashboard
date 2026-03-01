import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(
          'flex h-9 w-full bg-transparent px-3 py-1 text-[11px] font-medium transition-all tabular-nums',
          'placeholder:text-[rgba(226,232,240,0.2)]',
          'focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          'aria-invalid:ring-[rgba(239,68,68,0.4)] aria-invalid:border-[var(--danger)]',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
