import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Symbols } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const assets = [
  { name: Symbols.BTC, bgClass: 'bg-btc' },
  { name: Symbols.ETH, bgClass: 'bg-eth' },
  { name: Symbols.SOL, bgClass: 'bg-sol' },
  { name: Symbols.DOT, bgClass: 'bg-dot' },
  { name: Symbols.ADA, bgClass: 'bg-ada' },
];

export const getAssetBgClass = (symbol: string | null | undefined) =>
  assets.find(({ name }) => name === symbol)?.bgClass || 'bg-white';
