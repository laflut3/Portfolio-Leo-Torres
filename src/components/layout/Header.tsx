import { Link, useLocation } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { LanguageSwitch } from '@/components/layout/LanguageSwitch'
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
      className="relative z-10 mx-auto mt-5 flex w-[min(1120px,calc(100%_-_40px))] items-center justify-between gap-5 rounded-full border border-[color-mix(in_oklch,var(--portfolio-line)_80%,transparent)] bg-[color-mix(in_oklch,var(--portfolio-panel-strong)_85%,transparent)] px-3 py-3 pr-24 shadow-[0_16px_50px_color-mix(in_oklch,var(--foreground)_8%,transparent)] backdrop-blur-xl max-md:w-[min(100%_-_28px,1120px)] max-md:rounded-[1.5rem] max-md:pr-3"
      data-reveal
    >
      <Link
        to={pathFor(locale, 'profile')}
        className="inline-flex size-10 items-center justify-center rounded-full bg-foreground font-bold tracking-[-0.08em] text-background no-underline transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:rotate-[-8deg]"
      >
        LT
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
              className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-sm no-underline transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${location.pathname === path ? 'bg-[color-mix(in_oklch,var(--foreground)_8%,transparent)] text-foreground' : 'text-[var(--portfolio-text-soft)] hover:bg-[color-mix(in_oklch,var(--foreground)_6%,transparent)] hover:text-foreground'}`}
            >
              {copy.nav[page]}
            </Link>
          )
        })}
      </nav>
      <div className="absolute right-3 flex items-center gap-1.5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="hidden size-10 place-items-center rounded-full border border-[color-mix(in_oklch,var(--portfolio-line)_80%,transparent)] bg-[color-mix(in_oklch,var(--portfolio-panel)_90%,transparent)] text-foreground max-md:grid"
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
      </div>
    </header>
  )
}
