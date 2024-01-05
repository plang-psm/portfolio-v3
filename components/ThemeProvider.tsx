'use client'

import { ThemeProvider as Themes } from 'next-themes'

// Theme provider used to wrap and apply them to the whole app.
export function ThemeProvider({ children } : {children: React.ReactNode}) {
  return <Themes attribute='class'>{children}</Themes>
}
