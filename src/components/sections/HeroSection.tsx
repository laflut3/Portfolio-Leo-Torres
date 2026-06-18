import { type RefObject } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { OrbitPanel } from '@/components/visuals/OrbitPanel'

type HeroSectionProps = {
  orbitRef: RefObject<HTMLDivElement | null>
}

export function HeroSection({ orbitRef }: HeroSectionProps) {
  return (
    <section className="grid min-h-[calc(100svh-170px)] grid-cols-[minmax(0,1fr)_minmax(340px,0.72fr)] items-center gap-14 py-11 pb-16 max-md:grid-cols-1 max-md:gap-7 max-md:pt-8">
      <div>
        <p
          className="m-0 text-xs font-bold tracking-[0.16em] text-[var(--portfolio-cyan)] uppercase"
          data-reveal
        >
          DevOps • CI/CD • Containers • Cloud-ready
        </p>
        <h1
          className="m-0 max-w-3xl text-[clamp(4rem,12vw,8.4rem)] leading-[0.86] font-medium tracking-normal text-foreground"
          data-reveal
        >
          Leo Torres
        </h1>
        <p
          className="mt-5 text-[clamp(1.5rem,3vw,2.7rem)] font-semibold text-[var(--portfolio-amber)]"
          data-reveal
        >
          Développeur DevOps
        </p>
        <p
          className="mt-6 max-w-2xl text-[1.08rem] leading-8 text-[var(--portfolio-text-soft)]"
          data-reveal
        >
          Je construis des bases techniques fiables: pipelines clairs, images
          Docker propres, automatisation, qualité continue et déploiements
          pensés pour être maintenables.
        </p>
        <div className="mt-8 flex flex-wrap gap-3" data-reveal>
          <Button asChild size="lg">
            <a href="#projects">
              Voir les projets <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">
              Contact <Mail data-icon="inline-end" />
            </a>
          </Button>
        </div>
      </div>

      <OrbitPanel orbitRef={orbitRef} />
    </section>
  )
}
