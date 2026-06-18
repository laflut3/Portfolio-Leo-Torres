import { Terminal } from 'lucide-react'

export function SpaceNoteSection() {
  return (
    <section
      className="mt-24 grid grid-cols-[auto_minmax(0,1fr)] items-start gap-6 rounded-lg border border-[var(--portfolio-line)] bg-[var(--portfolio-panel)] p-8 max-md:mt-14 max-md:grid-cols-1"
      data-reveal
    >
      <Terminal
        className="size-7 text-[var(--portfolio-amber)]"
        aria-hidden="true"
      />
      <div>
        <p className="m-0 text-xs font-bold tracking-[0.16em] text-[var(--portfolio-cyan)] uppercase">
          Astrophysique & espace
        </p>
        <h2 className="mt-3 text-[clamp(1.9rem,4vw,3.3rem)] leading-[1.08] font-medium tracking-normal text-foreground">
          J’aime les systèmes complexes qui restent compréhensibles.
        </h2>
        <p className="mt-3 leading-7 text-[var(--portfolio-text-soft)]">
          L’espace m’inspire pour la rigueur: trajectoires, télémétrie,
          contraintes, observation et précision. C’est aussi comme ça que
          j’aborde l’infrastructure.
        </p>
      </div>
    </section>
  )
}
