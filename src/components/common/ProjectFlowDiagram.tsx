import { ArrowDown, ArrowRight } from 'lucide-react'
import type { CSSProperties } from 'react'

export function ProjectFlowDiagram({
  title,
  caption,
  steps,
}: {
  title: string
  caption: string
  steps: readonly string[]
}) {
  return (
    <figure className="m-0 border-y border-[var(--portfolio-line)] py-6">
      <figcaption className="mb-5 flex items-baseline justify-between gap-4">
        <span className="text-sm font-semibold text-foreground">{title}</span>
        <span className="text-xs text-[var(--portfolio-text-soft)]">
          {caption}
        </span>
      </figcaption>
      <ol
        className="m-0 grid list-none grid-cols-[repeat(var(--flow-count),minmax(0,1fr))] gap-3 p-0 max-md:grid-cols-1"
        style={{ '--flow-count': steps.length } as CSSProperties}
      >
        {steps.map((step, index) => (
          <li
            key={`${index}-${step}`}
            className="relative flex min-h-28 flex-col justify-between border border-[var(--portfolio-line)] bg-[var(--portfolio-panel)] p-4 max-md:min-h-0 max-md:flex-row max-md:items-center max-md:gap-4"
          >
            <span className="font-mono text-xs tabular-nums text-[var(--portfolio-accent)]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="mt-5 text-sm leading-5 font-medium text-foreground max-md:mt-0 max-md:flex-1">
              {step}
            </span>
            {index < steps.length - 1 && (
              <>
                <ArrowRight
                  className="absolute top-1/2 -right-3 z-10 size-5 -translate-y-1/2 bg-background p-0.5 text-[var(--portfolio-accent)] max-md:hidden"
                  aria-hidden="true"
                />
                <ArrowDown
                  className="hidden size-4 shrink-0 text-[var(--portfolio-accent)] max-md:block"
                  aria-hidden="true"
                />
              </>
            )}
          </li>
        ))}
      </ol>
    </figure>
  )
}
