import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeWrapper from './components/ThemeWrapper';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A modern portfolio website showcasing my projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
