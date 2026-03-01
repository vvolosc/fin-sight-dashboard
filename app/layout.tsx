import type { Metadata } from 'next';

import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';

import outputs from '@/amplify_outputs.json';
import AuthContextProvider from '@/app/AuthContextProvider';
import ConfigureAmplifyClientSide from '@/app/ConfigureAmplifyClientSide';
import { Footer } from '@/components/shared/Footer';
import { Header } from '@/components/shared/Header';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Fin Sight Dashboard',
};

Amplify.configure(outputs);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-main text-foreground font-sans selection:bg-primary/30">
        <ConfigureAmplifyClientSide />
        <AuthContextProvider>
          <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <Header />
            <main className="p-space-lg max-w-[1400px] mx-auto grid grid-cols-12 gap-space-md content-start w-full">
              {children}
            </main>
            <Footer />
          </div>
        </AuthContextProvider>
      </body>
    </html>
  );
}
