'use client'

import { ThemeProvider as Themes } from 'next-themes'
import { useEffect, useState } from 'react'

// Theme provider used to wrap and provide access to the theme provider through our application.
export function ThemeProvider({ children } : {children: React.ReactNode}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  },[])

  if(!mounted) {
    return <>{children}</>
  }
  
    return <Themes enableSystem={true} attribute='class'>{children}</Themes>
}