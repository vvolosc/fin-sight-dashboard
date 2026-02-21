'use client';
import '../proxy';
import { useEffect } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const { user, signOut, route } = useAuthenticator();
    const router = useRouter();
  
    useEffect(() => {
      if (route === 'signOut') {
        router.push('/login');
      }
    }, [route, router]);
    
  return <>
    <h1>Dashboard {user?.username}</h1>
    <button onClick={signOut}>Sign out</button>
  </>;
}

export default Dashboard;
