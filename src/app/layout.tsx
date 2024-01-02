import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import { ThemeProvider } from '@/components/theme-provider';
import ScrollProgress from '@/components/ScrollBarProgress';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kids Corner School - Berrechid',
  description: 'Kids Corner School - Berrechid',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollProgress />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
