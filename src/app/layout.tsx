import { Roboto } from 'next/font/google';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import { ThemeProvider } from '@/components/theme-provider';
import ScrollProgress from '@/components/ScrollBarProgress';
import Footer from '@/components/footer/Footer';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kids Corner School - Berrechid',
  description: 'Kids Corner School - Berrechid',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={[roboto.className, ''].join(' ')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollProgress />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
