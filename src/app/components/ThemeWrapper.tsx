'use client';

import { ThemeProvider } from '../theme';

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
} 