import type { Metadata } from "next";

import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import "./app.css";
import ConfigureAmplifyClientSide from './ConfigureAmplifyClientSide';
import AuthContextProvider from './AuthContextProvider';


export const metadata: Metadata = {
  title: "Fin Sight Dashboard",
};

Amplify.configure(outputs);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (        
    <html lang="en">
      <body>
        <ConfigureAmplifyClientSide />
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
