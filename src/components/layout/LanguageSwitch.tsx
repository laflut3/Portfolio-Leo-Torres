import { Languages } from 'lucide-react'
import { Link, useLocation } from '@tanstack/react-router'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { type Locale, pathFor, type PageKey, useTranslation } from '@/i18n'

function pageForPath(pathname: string): PageKey {
  if (pathname.endsWith('/skills') || pathname.endsWith('/competences'))
    return 'skills'
  if (pathname.endsWith('/projects') || pathname.endsWith('/projets'))
    return 'projects'
  if (
    pathname.endsWith('/professional-experience') ||
    pathname.endsWith('/experience-professionnelle')
  )
    return 'experience'
  if (pathname.endsWith('/contact')) return 'contact'
  return 'profile'
}

export function LanguageSwitch({ locale }: { locale: Locale }) {
  const location = useLocation()
  const { copy } = useTranslation()
  const page = pageForPath(location.pathname)
  const options: Array<{ locale: Locale; label: string }> = [
    { locale: 'fr-fr', label: copy.language.french },
    { locale: 'en-us', label: copy.language.english },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="theme-trigger"
          aria-label={copy.language.label}
        >
          <Languages className="size-3.5" aria-hidden="true" />
          <span>{locale === 'fr-fr' ? 'FR' : 'EN'}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="theme-menu w-44">
        <DropdownMenuLabel>{copy.language.label}</DropdownMenuLabel>
        {options.map((option) => (
          <DropdownMenuItem key={option.locale} asChild>
            <Link to={pathFor(option.locale, page)} className="theme-menu-item">
              <span>{option.label}</span>
              {option.locale === locale && <span aria-hidden="true">✓</span>}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
