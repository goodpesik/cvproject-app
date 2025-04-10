import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.scss';
import './tailwind.css';

import { UserProvider } from './context/user.context';
import { AuthProvider } from './context/auth-context';
import { Toaster } from '@/components/ui/sonner';
import { ApiLoadingOverlay } from './components/loader';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CV Creator',
  description: 'Generate your unique CV',
  other: {
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap',
      },
    ],
  } as any,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <AuthProvider>
            <ApiLoadingOverlay />
            {children}
          </AuthProvider>
        </UserProvider>
        <Toaster />
      </body>
    </html>
  );
}
