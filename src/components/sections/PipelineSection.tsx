import { SectionHeading } from '@/components/common/SectionHeading'
import { pipelineSteps } from '@/data/portfolio'

export function PipelineSection() {
  return (
    <section
      id="pipeline"
      className="mt-24 rounded-lg border border-[var(--portfolio-line)] bg-[var(--portfolio-panel)] p-8 max-md:mt-14"
      data-reveal
    >
      <SectionHeading
        kicker="Delivery orbit"
        title="Une chaîne courte, lisible et contrôlée."
        reveal={false}
      />
      <div className="mt-7 grid grid-cols-5 gap-2.5 max-md:grid-cols-1">
        {pipelineSteps.map((step, index) => (
          <div
            key={step}
            className="min-h-28 rounded-lg border border-[color-mix(in_oklch,var(--portfolio-cyan)_20%,transparent)] bg-[linear-gradient(180deg,color-mix(in_oklch,var(--portfolio-panel-strong)_86%,transparent),color-mix(in_oklch,var(--portfolio-bg-c)_90%,transparent))] p-4"
          >
            <span className="font-mono text-xs text-[var(--portfolio-amber)]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <strong className="mt-8 block text-foreground">{step}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}
