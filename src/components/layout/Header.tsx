import { navItems } from '@/data/portfolio'

export function Header() {
  return (
    <header
      className="sticky top-0 z-10 mx-auto flex w-[min(1120px,calc(100%_-_40px))] items-center justify-between py-5 pr-32 backdrop-blur-md max-md:w-[min(100%_-_28px,1120px)] max-md:items-start"
      data-reveal
    >
      <a
        href="#top"
        className="inline-flex size-11 items-center justify-center rounded-lg border border-[color-mix(in_oklch,var(--portfolio-cyan)_35%,transparent)] bg-[color-mix(in_oklch,var(--portfolio-panel-strong)_82%,transparent)] font-bold text-foreground no-underline"
      >
        LT
      </a>
      <nav
        aria-label="Navigation principale"
        className="flex gap-5 max-md:flex-wrap max-md:justify-end max-md:gap-x-3 max-md:gap-y-3"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm text-[var(--portfolio-text-soft)] no-underline transition-colors hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
