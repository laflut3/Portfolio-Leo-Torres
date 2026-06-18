import { ArrowUpRight, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mt-24 mb-18 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 rounded-lg border border-[var(--portfolio-line)] bg-[var(--portfolio-panel)] p-8 max-md:mt-14 max-md:grid-cols-1"
      data-reveal
    >
      <div>
        <p className="m-0 text-xs font-bold tracking-[0.16em] text-[var(--portfolio-cyan)] uppercase">
          Contact
        </p>
        <h2 className="mt-3 text-[clamp(1.9rem,4vw,3.3rem)] leading-[1.08] font-medium tracking-normal text-foreground">
          Disponible pour parler DevOps, plateforme et automatisation.
        </h2>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <a href="https://github.com/ltorres" target="_blank" rel="noreferrer">
            <Code data-icon="inline-start" />
            GitHub
          </a>
        </Button>
        <Button asChild variant="outline">
          <a
            href="https://github.com/ltorres/Portfolio-Leo-Torres"
            target="_blank"
            rel="noreferrer"
          >
            <ArrowUpRight data-icon="inline-start" />
            Voir le dépôt
          </a>
        </Button>
      </div>
    </section>
  )
}
