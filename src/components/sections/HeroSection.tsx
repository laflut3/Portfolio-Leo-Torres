import { ArrowUpRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PortraitPanel } from '@/components/visuals/PortraitPanel'

export function HeroSection() {
  return (
    <section
      id="profile"
      className="grid min-h-[calc(100svh-150px)] grid-cols-[minmax(0,1fr)_minmax(320px,0.58fr)] items-center gap-16 py-10 pb-20 max-md:grid-cols-1 max-md:gap-8 max-md:pt-8"
    >
      <div>
        <p
          className="m-0 text-xs font-bold tracking-[0.16em] text-[var(--portfolio-cyan)] uppercase"
          data-reveal
        >
          Leo Torres • Développeur DevOps
        </p>
        <h1
          className="m-0 max-w-3xl text-[clamp(3.8rem,10vw,7.8rem)] leading-[0.9] font-medium tracking-normal text-foreground"
          data-reveal
        >
          J’aime rendre les systèmes fiables.
        </h1>
        <p
          className="mt-5 text-[clamp(1.5rem,3vw,2.7rem)] font-semibold text-[var(--portfolio-amber)]"
          data-reveal
        >
          Et comprendre ceux qui orbitent au-dessus de nous.
        </p>
        <p
          className="mt-6 max-w-2xl text-[1.08rem] leading-8 text-[var(--portfolio-text-soft)]"
          data-reveal
        >
          Je suis Leo Torres, développeur avec une forte sensibilité DevOps.
          J’aime les environnements propres, les pipelines lisibles, les
          déploiements maîtrisés et les outils qui simplifient vraiment le
          travail d’une équipe.
        </p>
        <div className="mt-8 flex flex-wrap gap-3" data-reveal>
          <Button asChild size="lg">
            <a href="#projects">
              Découvrir mon profil <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">
              Contact <Mail data-icon="inline-end" />
            </a>
          </Button>
        </div>
      </div>

      <PortraitPanel />
    </section>
  )
}
