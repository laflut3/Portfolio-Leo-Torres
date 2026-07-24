import { lazy, Suspense } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { pathFor, useTranslation } from '@/i18n'

const OrbitArtifact = lazy(() =>
  import('@/components/visuals/OrbitArtifact').then((module) => ({
    default: module.OrbitArtifact,
  })),
)

export function HeroSection() {
  const reducedMotion = useReducedMotion()
  const { locale, copy } = useTranslation()
  const [titleLineOne, titleLineTwo] = copy.hero.title

  return (
    <section
      id="profile"
      className="hero-shell grid min-h-[calc(100dvh-132px)] grid-cols-[minmax(0,1.05fr)_minmax(320px,0.8fr)] items-center gap-10 py-10 pb-24 max-md:grid-cols-1 max-md:gap-5 max-md:pt-8"
    >
      <div className="relative z-[1]">
        <p
          className="hero-kicker m-0 text-xs font-bold tracking-[0.2em] text-[var(--portfolio-cyan)] uppercase"
          data-reveal
        >
          {copy.hero.coordinates}
        </p>
        <h1
          className="hero-title m-0 max-w-3xl text-[clamp(4rem,10.5vw,9.2rem)] leading-[0.82] font-semibold tracking-[-0.075em] text-foreground"
          data-reveal
        >
          {titleLineOne}
          <br />
          <span>{titleLineTwo}</span>
        </h1>
        <p
          className="mt-7 max-w-xl text-[clamp(1.15rem,2.2vw,1.65rem)] leading-snug font-medium text-[var(--portfolio-amber)]"
          data-reveal
        >
          {copy.hero.lead}
        </p>
        <p
          className="mt-6 max-w-xl text-[1.02rem] leading-8 text-[var(--portfolio-text-soft)]"
          data-reveal
        >
          {copy.hero.body}
        </p>
        <div className="mt-8 flex flex-wrap gap-3" data-reveal>
          <Button asChild size="lg">
            <Link to={pathFor(locale, 'skills')}>
              {copy.hero.explore} <ArrowUpRight data-icon="inline-end" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to={pathFor(locale, 'contact')}>
              {copy.hero.contact} <Mail data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="hero-visual" data-reveal>
        <div className="hero-visual-frame">
          <div className="hero-visual-fallback" aria-hidden="true" />
          <Suspense fallback={null}>
            <OrbitArtifact reducedMotion={reducedMotion} />
          </Suspense>
          <div className="hero-visual-caption">
            <span>{copy.hero.system}</span>
            <span>{copy.hero.quiet}</span>
          </div>
          <div className="hero-visual-card">
            <span className="hero-visual-card-label">
              {copy.hero.principle}
            </span>
            <strong>{copy.hero.clarity}</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
