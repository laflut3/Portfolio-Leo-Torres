import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { useTranslation } from '@/i18n'

export function EducationSection() {
  const { copy } = useTranslation()
  return (
    <section id="education" className="profile-section mt-24 max-md:mt-14">
      <SectionHeading
        kicker={copy.education.kicker}
        title={copy.education.title}
        icon={<GraduationCap className="size-4" aria-hidden="true" />}
      />
      <div className="border-t border-[var(--portfolio-line)]">
        {copy.education.entries.map(
          ([title, date, school, meta, text, status]) => {
            const isCurrent = status === copy.education.inProgress

            return (
              <article
                key={title}
                className="education-card grid grid-cols-[9rem_minmax(0,1fr)_auto] gap-x-8 border-b border-[var(--portfolio-line)] py-8 max-md:grid-cols-1 max-md:gap-y-4"
                data-reveal
              >
                <span className="text-sm font-semibold tabular-nums text-[var(--portfolio-accent)]">
                  {date}
                </span>
                <div>
                  <h3 className="m-0 text-2xl leading-tight font-medium text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    {school}
                  </p>
                  <p className="mt-5 max-w-3xl text-sm font-medium leading-6 text-foreground">
                    {meta}
                  </p>
                  <p className="mt-3 max-w-3xl leading-7 text-[var(--portfolio-text-soft)]">
                    {text}
                  </p>
                </div>
                <span
                  className={`h-fit border-l pl-4 text-xs font-semibold tracking-[0.12em] uppercase max-md:border-l-0 max-md:pl-0 ${
                    isCurrent
                      ? 'border-[var(--portfolio-accent)] text-[var(--portfolio-accent)]'
                      : 'border-[var(--portfolio-line)] text-[var(--portfolio-text-soft)]'
                  }`}
                >
                  {status}
                </span>
              </article>
            )
          },
        )}
      </div>
    </section>
  )
}
