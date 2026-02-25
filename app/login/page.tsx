'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function LoginPage() {
  const { route } = useAuthenticator();
  const router = useRouter();

  useEffect(() => {
    if (route === 'authenticated') {
      router.push('/');
    }
  }, [route, router]);

  return <Authenticator />;
}
