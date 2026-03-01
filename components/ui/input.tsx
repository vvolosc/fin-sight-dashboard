import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(
          'flex h-9 w-full bg-transparent px-space-xs py-1 text-[11px] font-medium transition-all tabular-nums',
          'placeholder:text-foreground/20',
          'focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          'aria-invalid:ring-danger/40 aria-invalid:border-danger',
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
