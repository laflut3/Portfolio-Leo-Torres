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
      className="hero-shell grid min-h-[calc(100dvh-132px)] grid-cols-[minmax(0,1.08fr)_minmax(360px,0.72fr)] items-center gap-x-14 gap-y-8 py-12 pb-20 max-lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.68fr)] max-lg:gap-x-8 max-md:grid-cols-1 max-md:gap-5 max-md:pt-8"
    >
      <div className="relative z-[1]">
        <p
          className="hero-kicker m-0 text-xs font-bold tracking-[0.2em] text-[var(--portfolio-cyan)] uppercase"
          data-reveal
        >
          {copy.hero.coordinates}
        </p>
        <h1
          className="hero-title m-0 max-w-[42rem] text-[clamp(3.5rem,4.8vw,5.25rem)] leading-[0.9] font-semibold tracking-[-0.065em] text-foreground max-lg:text-[clamp(3.25rem,5vw,4.5rem)]"
          data-reveal
        >
          {titleLineOne}
          <br />
          <span>{titleLineTwo}</span>
        </h1>
        <p
          className="mt-8 max-w-[38rem] text-[clamp(1.1rem,1.55vw,1.35rem)] leading-snug font-medium text-[var(--portfolio-amber)]"
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
