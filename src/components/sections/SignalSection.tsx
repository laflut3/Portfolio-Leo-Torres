import { Rocket } from 'lucide-react'
import { signals } from '@/data/portfolio'

export function SignalSection() {
  return (
    <section
      className="grid grid-cols-3 gap-3.5 max-md:grid-cols-1"
      aria-label="Axes principaux"
    >
      {signals.map((signal) => (
        <article
          key={signal.title}
          className="rounded-lg border border-[var(--portfolio-line)] bg-[var(--portfolio-panel)] p-6"
          data-reveal
        >
          <Rocket
            className="size-5 text-[var(--portfolio-cyan)]"
            aria-hidden="true"
          />
          <h2 className="mt-3 text-xl leading-tight font-medium text-foreground">
            {signal.title}
          </h2>
          <p className="mt-3 leading-7 text-[var(--portfolio-text-soft)]">
            {signal.text}
          </p>
        </article>
      ))}
    </section>
  )
}
