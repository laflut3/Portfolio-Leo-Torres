import {
  BookOpen,
  GraduationCap,
  Plane,
  School,
  ShieldCheck,
} from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { education } from '@/data/portfolio'

const educationIcons = [GraduationCap, Plane, ShieldCheck, BookOpen, School]

export function EducationSection() {
  return (
    <section id="education" className="mt-24 max-md:mt-14">
      <SectionHeading
        kicker="Education"
        title="A technical, scientific and operational path."
        icon={<GraduationCap className="size-4" aria-hidden="true" />}
      />
      <div className="relative grid gap-4">
        <div
          aria-hidden="true"
          className="absolute top-7 bottom-7 left-[1.15rem] w-px bg-[linear-gradient(to_bottom,transparent,var(--portfolio-line),transparent)] max-md:hidden"
        />
        {education.map((degree, index) => {
          const Icon = educationIcons[index] ?? GraduationCap
          const isCurrent = degree.status === 'In progress'

          return (
            <article
              key={degree.title}
              className="grid grid-cols-[2.35rem_minmax(0,1fr)] gap-4 rounded-2xl border border-[var(--portfolio-line)] bg-[var(--portfolio-panel)] p-5 shadow-[0_18px_56px_rgba(0,0,0,0.06)] backdrop-blur-sm max-md:grid-cols-1"
              data-reveal
            >
              <span
                className={`relative z-[1] grid size-10 place-items-center rounded-xl border ${
                  isCurrent
                    ? 'border-[color-mix(in_oklch,var(--portfolio-amber)_42%,transparent)] bg-[color-mix(in_oklch,var(--portfolio-amber)_12%,transparent)] text-[var(--portfolio-amber)]'
                    : 'border-[color-mix(in_oklch,var(--portfolio-cyan)_24%,transparent)] bg-[color-mix(in_oklch,var(--portfolio-cyan)_8%,transparent)] text-[var(--portfolio-cyan)]'
                }`}
              >
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="m-0 text-xl leading-tight font-medium text-foreground">
                      {degree.title}
                    </h3>
                    <p className="mt-1 max-w-3xl text-sm leading-6 text-[var(--portfolio-text-soft)]">
                      {degree.meta}
                    </p>
                  </div>
                  <span
                    className={`rounded-md border px-2.5 py-1 text-xs font-medium ${
                      isCurrent
                        ? 'border-[color-mix(in_oklch,var(--portfolio-amber)_32%,transparent)] bg-[color-mix(in_oklch,var(--portfolio-amber)_10%,transparent)] text-[color-mix(in_oklch,var(--portfolio-amber)_70%,var(--foreground))]'
                        : 'border-[color-mix(in_oklch,var(--portfolio-cyan)_24%,transparent)] bg-[color-mix(in_oklch,var(--portfolio-cyan)_7%,transparent)] text-[color-mix(in_oklch,var(--portfolio-cyan)_58%,var(--foreground))]'
                    }`}
                  >
                    {degree.status}
                  </span>
                </div>
                <p className="mt-4 max-w-3xl leading-7 text-[var(--portfolio-text-soft)]">
                  {degree.text}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
