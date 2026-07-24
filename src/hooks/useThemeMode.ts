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
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const applyMode = () => {
      const isDark = mode === 'dark' || (mode === 'system' && media.matches)
      root.classList.toggle('light', !isDark)
      root.classList.toggle('dark', isDark)
    }

    applyMode()
    requestAnimationFrame(() => root.classList.add('theme-ready'))
    media.addEventListener('change', applyMode)
    localStorage.setItem(storageKey, mode)

    return () => media.removeEventListener('change', applyMode)
  }, [mode])

  return { mode, setMode }
}
