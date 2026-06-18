import { GraduationCap, Mail, UserRound, Wrench } from 'lucide-react'
import { navItems } from '@/data/portfolio'

const navIcons = {
  '#profile': UserRound,
  '#skills': Wrench,
  '#education': GraduationCap,
  '#contact': Mail,
}

export function Header() {
  return (
    <header
      className="sticky top-0 z-10 mx-auto flex w-[min(1120px,calc(100%_-_40px))] items-center justify-between gap-5 py-5 pr-32 backdrop-blur-md max-md:w-[min(100%_-_28px,1120px)] max-md:flex-col max-md:items-start max-md:gap-4 max-md:pr-24"
      data-reveal
    >
      <a
        href="#top"
        className="inline-flex size-11 items-center justify-center rounded-lg border border-[color-mix(in_oklch,var(--portfolio-cyan)_35%,transparent)] bg-[color-mix(in_oklch,var(--portfolio-panel-strong)_82%,transparent)] font-bold text-foreground no-underline"
      >
        LT
      </a>
      <nav
        aria-label="Main navigation"
        className="flex gap-5 max-md:flex-wrap max-md:justify-start max-md:gap-x-3 max-md:gap-y-3"
      >
        {navItems.map((item) => {
          const Icon = navIcons[item.href as keyof typeof navIcons]

          return (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-1.5 text-sm text-[var(--portfolio-text-soft)] no-underline transition-colors hover:text-foreground"
            >
              {Icon && <Icon className="size-3.5" aria-hidden="true" />}
              {item.label}
            </a>
          )
        })}
      </nav>
    </header>
  )
}
