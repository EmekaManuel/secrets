import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from './provider';
import './globals.css';

import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
 title: 'Secrets Out - Anonymous Message | Add Pictures as proof',
 description:
  'Secrets Out is an interactive anonymous messaging app with with pictures sharing features. Create your Profile Link and Send it to all your contacts to check what do your friends think.',
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang="en">
   <body className={inter.className}>
    <Provider>
     <main> {children}</main>
     <Toaster />
    </Provider>
   </body>
  </html>
 );
}
