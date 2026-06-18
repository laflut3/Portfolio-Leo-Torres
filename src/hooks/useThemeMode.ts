import { useEffect, useState } from 'react'

export type ThemeMode = 'light' | 'dark' | 'system'

const storageKey = 'portfolio-theme'

function readThemeMode(): ThemeMode {
  const stored = localStorage.getItem(storageKey)

  return stored === 'light' || stored === 'dark' || stored === 'system'
    ? stored
    : 'system'
}

export function useThemeMode() {
  const [mode, setMode] = useState<ThemeMode>(readThemeMode)

  useEffect(() => {
    const root = document.documentElement

    root.classList.toggle('light', mode === 'light')
    root.classList.toggle('dark', mode === 'dark')
    localStorage.setItem(storageKey, mode)
  }, [mode])

  return { mode, setMode }
}
