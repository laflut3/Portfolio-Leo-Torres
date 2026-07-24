import { ChevronDown, Monitor, Moon, Sun } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { type ThemeMode, useThemeMode } from '@/hooks/useThemeMode'
import { useTranslation } from '@/i18n'

export function ThemeSwitch() {
  const { mode, setMode } = useThemeMode()
  const { copy } = useTranslation()
  const options: Array<{ mode: ThemeMode; label: string; Icon: typeof Sun }> = [
    { mode: 'light', label: copy.theme.light, Icon: Sun },
    { mode: 'dark', label: copy.theme.dark, Icon: Moon },
    { mode: 'system', label: copy.theme.system, Icon: Monitor },
  ]
  const active = options.find((option) => option.mode === mode) ?? options[2]
  const ActiveIcon = active.Icon

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="theme-trigger fixed top-5 right-5 z-30 max-md:top-[6.1rem] max-md:right-3"
          aria-label={copy.theme.label}
        >
          <ActiveIcon aria-hidden="true" className="size-3.5" />
          <span className="max-md:hidden">{active.label}</span>
          <ChevronDown aria-hidden="true" className="size-3" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="theme-menu w-48">
        <DropdownMenuLabel>{copy.theme.label}</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={mode}
          onValueChange={(value) => setMode(value as ThemeMode)}
        >
          {options.map(({ mode: optionMode, label, Icon }) => (
            <DropdownMenuRadioItem
              key={optionMode}
              value={optionMode}
              className="theme-menu-item"
            >
              <Icon aria-hidden="true" className="size-3.5" /> {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
