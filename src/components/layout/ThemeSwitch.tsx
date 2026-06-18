import { Monitor, Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { type ThemeMode, useThemeMode } from '@/hooks/useThemeMode'

const options: Array<{
  mode: ThemeMode
  label: string
  Icon: typeof Sun
}> = [
  { mode: 'light', label: 'Light mode', Icon: Sun },
  { mode: 'dark', label: 'Dark mode', Icon: Moon },
  { mode: 'system', label: 'System preference', Icon: Monitor },
]

export function ThemeSwitch() {
  const { mode, setMode } = useThemeMode()

  return (
    <div
      className="fixed top-5 right-5 z-30 flex rounded-full border border-[var(--portfolio-line)] bg-[color-mix(in_oklch,var(--portfolio-panel-strong)_88%,transparent)] p-1 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl"
      aria-label="Theme selection"
    >
      {options.map(({ mode: optionMode, label, Icon }) => (
        <button
          key={optionMode}
          type="button"
          aria-label={label}
          aria-pressed={mode === optionMode}
          className={cn(
            'inline-flex size-8 items-center justify-center rounded-full text-[var(--portfolio-text-soft)] transition-colors hover:text-foreground',
            mode === optionMode &&
              'bg-[var(--portfolio-panel-strong)] text-foreground shadow-sm',
          )}
          onClick={() => setMode(optionMode)}
        >
          <Icon aria-hidden="true" className="size-3.5" />
        </button>
      ))}
    </div>
  )
}
