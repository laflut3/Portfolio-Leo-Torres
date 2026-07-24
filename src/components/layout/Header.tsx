import { Link, useLocation } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { LanguageSwitch } from '@/components/layout/LanguageSwitch'
import { ThemeSwitch } from '@/components/layout/ThemeSwitch'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { type Locale, pathFor, type PageKey, useTranslation } from '@/i18n'

const pages: PageKey[] = ['profile', 'skills', 'education', 'contact']

export function Header({ locale }: { locale: Locale }) {
  const location = useLocation()
  const { copy } = useTranslation()
  return (
    <header
      className="relative z-10 mx-auto mt-5 flex w-[min(1240px,calc(100%_-_48px))] items-center justify-between gap-5 border-b border-[var(--portfolio-line)] py-4 pr-48 max-md:w-[min(100%_-_28px,1240px)] max-md:pr-3"
      data-reveal
    >
      <Link
        to={pathFor(locale, 'profile')}
        className="text-lg font-semibold tracking-[-0.045em] text-foreground no-underline"
      >
        Léo Torres
      </Link>
      <nav
        aria-label={copy.footer.navigation}
        className="flex gap-4 max-md:hidden"
      >
        {pages.map((page) => {
          const path = pathFor(locale, page)
          return (
            <Link
              key={page}
              to={path}
              className={`inline-flex items-center gap-1.5 border-b pb-1 text-sm no-underline transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${location.pathname === path ? 'border-[var(--portfolio-accent)] text-foreground' : 'border-transparent text-[var(--portfolio-text-soft)] hover:border-[var(--portfolio-line)] hover:text-foreground'}`}
            >
              {copy.nav[page]}
            </Link>
          )
        })}
      </nav>
      <div className="absolute right-0 flex items-center gap-2 max-md:right-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="hidden size-10 place-items-center border border-[var(--portfolio-line)] text-foreground max-md:grid"
              aria-label={copy.nav.menu}
            >
              <Menu aria-hidden="true" className="size-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="theme-menu w-48">
            <DropdownMenuLabel>{copy.footer.navigation}</DropdownMenuLabel>
            {pages.map((page) => {
              const path = pathFor(locale, page)
              return (
                <DropdownMenuItem key={page} asChild>
                  <Link
                    to={path}
                    className="theme-menu-item px-2 py-2 text-sm no-underline"
                  >
                    {copy.nav[page]}
                  </Link>
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <LanguageSwitch locale={locale} />
        <ThemeSwitch />
      </div>
    </header>
  )
}
