import { useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { LanguageSwitch } from '@/components/layout/LanguageSwitch'
import { ThemeSwitch } from '@/components/layout/ThemeSwitch'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { type Locale, pathFor, type PageKey, useTranslation } from '@/i18n'

const pages: PageKey[] = ['profile', 'skills', 'projects', 'contact']

export function Header({ locale }: { locale: Locale }) {
  const location = useLocation()
  const { copy } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="relative z-10 mx-auto mt-5 grid w-[min(1240px,calc(100%_-_48px))] grid-cols-[1fr_auto_1fr] items-center gap-6 border-b border-[var(--portfolio-line)] py-4 max-md:flex max-md:w-[min(100%_-_28px,1240px)] max-md:justify-between max-md:gap-3"
      data-reveal
    >
      <Link
        to={pathFor(locale, 'profile')}
        className="justify-self-start text-lg font-semibold tracking-[-0.045em] text-foreground no-underline"
      >
        Léo Torres
      </Link>
      <nav
        aria-label={copy.footer.navigation}
        className="flex justify-self-center gap-1 max-md:hidden"
      >
        {pages.map((page) => {
          const path = pathFor(locale, page)
          return (
            <Link
              key={page}
              to={path}
              className={`inline-flex min-h-10 items-center border-b px-2 py-1 text-sm no-underline transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${location.pathname === path ? 'border-[var(--portfolio-accent)] text-foreground' : 'border-transparent text-[var(--portfolio-text-soft)] hover:border-[var(--portfolio-line)] hover:text-foreground'}`}
            >
              {copy.nav[page]}
            </Link>
          )
        })}
      </nav>
      <div className="flex justify-self-end gap-2 border-l border-[var(--portfolio-line)] pl-3 max-md:border-l-0 max-md:pl-0">
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="hidden size-10 place-items-center border border-[var(--portfolio-line)] text-foreground max-md:grid"
              aria-label={copy.nav.menu}
            >
              <Menu aria-hidden="true" className="size-4" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            showCloseButton={false}
            className="w-[min(24rem,calc(100vw-1.5rem))] border-[var(--portfolio-line)] bg-[var(--portfolio-panel-strong)] px-6 py-6 shadow-[-24px_0_70px_color-mix(in_oklch,var(--foreground)_14%,transparent)] data-open:duration-500 data-closed:duration-350"
          >
            <SheetHeader className="border-b border-[var(--portfolio-line)] p-0 pb-5">
              <SheetTitle className="text-sm font-semibold tracking-[-0.035em]">
                Léo Torres
              </SheetTitle>
              <SheetClose asChild>
                <button
                  type="button"
                  className="absolute top-5 right-5 grid size-10 place-items-center border border-[var(--portfolio-line)] text-foreground transition-colors hover:border-[var(--portfolio-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  aria-label={copy.nav.closeMenu}
                >
                  <X aria-hidden="true" className="size-4" />
                </button>
              </SheetClose>
            </SheetHeader>
            <nav
              aria-label={copy.footer.navigation}
              className="grid gap-1 py-4"
            >
              {pages.map((page) => {
                const path = pathFor(locale, page)
                return (
                  <Link
                    key={page}
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between border-l-2 px-3 py-3 text-lg no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${location.pathname === path ? 'border-[var(--portfolio-accent)] bg-[color-mix(in_oklch,var(--portfolio-accent)_10%,transparent)] text-foreground' : 'border-transparent text-[var(--portfolio-text-soft)] hover:border-[var(--portfolio-line)] hover:bg-[color-mix(in_oklch,var(--portfolio-accent)_5%,transparent)] hover:text-foreground'}`}
                  >
                    {copy.nav[page]}
                    <span aria-hidden="true">↗</span>
                  </Link>
                )
              })}
            </nav>
            <div className="mt-auto border-t border-[var(--portfolio-line)] pt-5 text-sm text-[var(--portfolio-text-soft)]">
              {copy.footer.description}
            </div>
          </SheetContent>
        </Sheet>
        <LanguageSwitch locale={locale} />
        <ThemeSwitch />
      </div>
    </header>
  )
}
