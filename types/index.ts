import React from 'react';

import type { Schema } from '../amplify/data/resource';

export interface MetricData {
  label: string;
  val: string;
  icon: React.ReactNode;
}

export enum Symbols {
  BTC = 'BTC',
  ETH = 'ETH',
  SOL = 'SOL',
  DOT = 'DOT',
  ADA = 'ADA',
}

export enum TransactionDirection {
  INFLOW = 'INFLOW',
  OUTFLOW = 'OUTFLOW',
}

export type Transaction = Schema['Transaction']['type'];
