import { Code, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mt-24 mb-18 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 rounded-[2rem] border border-[var(--portfolio-line)] bg-[var(--portfolio-panel)] p-8 max-md:mt-14 max-md:grid-cols-1"
      data-reveal
    >
      <div>
        <p className="m-0 inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[var(--portfolio-cyan)] uppercase">
          <Mail className="size-4" aria-hidden="true" />
          Contact
        </p>
        <h2 className="mt-3 text-[clamp(1.9rem,4vw,3.3rem)] leading-[1.08] font-medium tracking-normal text-foreground">
          Parlons infrastructure, automatisation ou projets orientés DevOps.
        </h2>
      </div>
      <div className="flex flex-wrap justify-end gap-3 max-md:justify-start">
        <Button asChild>
          <a href="https://github.com/ltorres" target="_blank" rel="noreferrer">
            <Code data-icon="inline-start" />
            GitHub
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="mailto:leo.torres@example.com">
            <Mail data-icon="inline-start" />
            Me contacter
          </a>
        </Button>
      </div>
    </section>
  )
}
