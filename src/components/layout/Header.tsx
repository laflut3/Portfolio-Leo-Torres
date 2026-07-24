import { navItems } from '@/data/portfolio'

export function Header() {
  return (
    <header
      className="relative z-10 mx-auto mt-5 flex w-[min(1120px,calc(100%_-_40px))] items-center justify-between gap-5 rounded-full border border-[color-mix(in_oklch,var(--portfolio-line)_80%,transparent)] bg-[color-mix(in_oklch,var(--portfolio-panel-strong)_85%,transparent)] px-3 py-3 pr-24 shadow-[0_16px_50px_color-mix(in_oklch,var(--foreground)_8%,transparent)] backdrop-blur-xl max-md:w-[min(100%_-_28px,1120px)] max-md:rounded-[1.5rem] max-md:pr-20"
      data-reveal
    >
      <a
        href="#top"
        className="inline-flex size-10 items-center justify-center rounded-full bg-foreground font-bold tracking-[-0.08em] text-background no-underline transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:rotate-[-8deg]"
      >
        LT
      </a>
      <nav aria-label="Main navigation" className="flex gap-4 max-md:gap-2">
        {navItems.map((item) => {
          return (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-sm text-[var(--portfolio-text-soft)] no-underline transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[color-mix(in_oklch,var(--foreground)_6%,transparent)] hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {item.label}
            </a>
          )
        })}
      </nav>
    </header>
  )
}
