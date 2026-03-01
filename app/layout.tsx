import type { Metadata } from 'next';

import { Amplify } from 'aws-amplify';

import outputs from '@/amplify_outputs.json';
import ConfigureAmplifyClientSide from '@/app/ConfigureAmplifyClientSide';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Fin Sight Dashboard',
};

Amplify.configure(outputs);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ConfigureAmplifyClientSide />
        <div className="min-h-screen bg-[var(--bg-main)] text-[var(--foreground)] font-sans grid grid-rows-[auto_1fr_auto] selection:bg-[rgba(59,130,246,0.3)]">
          <Header />
          <main className="p-[var(--spacing-space-lg)] max-w-[1400px] mx-auto grid grid-cols-12 gap-[var(--spacing-space-md)] content-start w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
