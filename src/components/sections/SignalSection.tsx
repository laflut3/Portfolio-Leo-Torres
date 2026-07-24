import { Compass, Orbit, Rocket } from 'lucide-react'
import { signals } from '@/data/portfolio'

const signalIcons = [Rocket, Compass, Orbit]

export function SignalSection() {
  return (
    <section
      className="signal-grid grid grid-cols-12 gap-4 max-md:grid-cols-1"
      aria-label="Axes principaux"
    >
      {signals.map((signal, index) => {
        const Icon = signalIcons[index] ?? Rocket

        return (
          <article
            key={signal.title}
            className={`signal-card rounded-[2rem] border border-[color-mix(in_oklch,var(--portfolio-line)_88%,transparent)] bg-[var(--portfolio-panel)] p-6 shadow-[0_22px_60px_color-mix(in_oklch,var(--foreground)_6%,transparent)] ${
              index === 0
                ? 'col-span-6 max-md:col-span-1'
                : 'col-span-3 max-md:col-span-1'
            }`}
            data-reveal
          >
            <span className="grid size-10 place-items-center rounded-xl border border-[color-mix(in_oklch,var(--portfolio-cyan)_24%,transparent)] bg-[color-mix(in_oklch,var(--portfolio-cyan)_8%,transparent)] text-[var(--portfolio-cyan)]">
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-xl leading-tight font-medium text-foreground">
              {signal.title}
            </h2>
            <p className="mt-3 leading-7 text-[var(--portfolio-text-soft)]">
              {signal.text}
            </p>
          </article>
        )
      })}
    </section>
  )
}
