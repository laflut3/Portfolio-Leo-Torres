import { Mail } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { PortraitPanel } from '@/components/visuals/PortraitPanel'
import { pathFor, useTranslation } from '@/i18n'

export function HeroSection() {
  const { locale, copy } = useTranslation()
  const [titleLineOne, titleLineTwo] = copy.hero.title

  return (
    <section
      id="profile"
      className="hero-shell grid min-h-[calc(100dvh-104px)] grid-cols-[minmax(0,1fr)_minmax(360px,0.65fr)] items-center gap-x-20 gap-y-10 py-16 pb-20 max-lg:gap-x-10 max-md:grid-cols-1 max-md:gap-10 max-md:py-12"
    >
      <div className="relative z-[1]">
        <p
          className="hero-kicker m-0 text-xs font-semibold tracking-[0.16em] text-[var(--portfolio-accent)] uppercase"
          data-reveal
        >
          {copy.hero.coordinates}
        </p>
        <h1
          className="hero-title m-0 max-w-[44rem] text-[clamp(3.1rem,4.3vw,4.5rem)] leading-[0.94] font-semibold tracking-[-0.065em] text-foreground"
          data-reveal
        >
          {titleLineOne}
          <br />
          <span>{titleLineTwo}</span>
        </h1>
        <p
          className="mt-8 max-w-[34rem] text-[clamp(1.08rem,1.35vw,1.22rem)] leading-8 font-medium text-foreground"
          data-reveal
        >
          {copy.hero.lead}
        </p>
        <p
          className="mt-4 max-w-xl text-[1rem] leading-8 text-[var(--portfolio-text-soft)]"
          data-reveal
        >
          {copy.hero.body}
        </p>
        <div className="mt-8 flex flex-wrap gap-3" data-reveal>
          <Button asChild size="lg">
            <Link to={pathFor(locale, 'contact')}>
              {copy.hero.contact} <Mail data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </div>

      <PortraitPanel />
    </section>
  )
}
