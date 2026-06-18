import { Monitor, Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { type ThemeMode, useThemeMode } from '@/hooks/useThemeMode'

const options: Array<{
  mode: ThemeMode
  label: string
  Icon: typeof Sun
}> = [
  { mode: 'light', label: 'Mode clair', Icon: Sun },
  { mode: 'dark', label: 'Mode sombre', Icon: Moon },
  { mode: 'system', label: 'Préférence système', Icon: Monitor },
]

export function ThemeSwitch() {
  const { mode, setMode } = useThemeMode()

  return (
    <div
      className="flex rounded-lg border border-[var(--portfolio-line)] bg-[var(--portfolio-panel)] p-1"
      aria-label="Choix du thème"
    >
      {options.map(({ mode: optionMode, label, Icon }) => (
        <button
          key={optionMode}
          type="button"
          aria-label={label}
          aria-pressed={mode === optionMode}
          className={cn(
            'inline-flex size-7 items-center justify-center rounded-md text-[var(--portfolio-text-soft)] transition-colors hover:text-foreground',
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
