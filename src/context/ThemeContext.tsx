'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark'

interface ThemeContextType {
  theme: Theme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Always set dark theme
    const root = document.documentElement
    root.classList.add('dark')
    root.style.setProperty('--background', '#0f172a')
    root.style.setProperty('--foreground', '#f8fafc')
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="min-h-screen bg-slate-900">{children}</div>
  }

  return (
    <ThemeContext.Provider value={{ theme: 'dark' }}>
      <div className="min-h-screen bg-slate-900 text-white">
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    return { theme: 'dark' as Theme }
  }
  return context
}