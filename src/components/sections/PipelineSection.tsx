import { SectionHeading } from '@/components/common/SectionHeading'
import { pipelineSteps } from '@/data/portfolio'

export function PipelineSection() {
  return (
    <section
      id="pipeline"
      className="mt-24 overflow-hidden rounded-[2rem] border border-[var(--portfolio-line)] bg-[linear-gradient(135deg,var(--portfolio-panel-strong),var(--portfolio-panel))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.12)] max-md:mt-14"
      data-reveal
    >
      <SectionHeading
        kicker="Ma façon de travailler"
        title="Comprendre avant d’automatiser, mesurer avant de complexifier."
        reveal={false}
      />
      <div className="mt-7 grid grid-cols-5 gap-2.5 max-md:grid-cols-1">
        {pipelineSteps.map((step, index) => (
          <div
            key={step}
            className="min-h-32 rounded-2xl border border-[color-mix(in_oklch,var(--portfolio-cyan)_20%,transparent)] bg-[linear-gradient(180deg,color-mix(in_oklch,var(--portfolio-panel-strong)_86%,transparent),color-mix(in_oklch,var(--portfolio-bg-c)_90%,transparent))] p-4"
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
