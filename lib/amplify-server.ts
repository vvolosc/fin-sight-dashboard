import { cookies } from 'next/headers';

import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';

import type { Schema } from '@/amplify/data/resource';
import outputs from '@/amplify_outputs.json';

export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs,
});

export const client = generateServerClientUsingCookies<Schema>({
  config: outputs,
  cookies,
});
