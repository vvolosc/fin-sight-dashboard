'use client';

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
