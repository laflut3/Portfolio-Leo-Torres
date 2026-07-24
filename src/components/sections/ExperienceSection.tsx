import { BriefcaseBusiness } from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { useTranslation } from '@/i18n'

export function ExperienceSection() {
  const { copy } = useTranslation()

  return (
    <section className="mt-24 pb-8 max-md:mt-14">
      <SectionHeading
        kicker={copy.experience.kicker}
        title={copy.experience.title}
        icon={<BriefcaseBusiness className="size-4" aria-hidden="true" />}
      />
      <p className="max-w-2xl leading-7 text-[var(--portfolio-text-soft)]">
        {copy.experience.text}
      </p>
      <div className="mt-10 border-t border-[var(--portfolio-line)]">
        {copy.experience.entries.map((entry) => (
          <article
            key={`${entry.role}-${entry.company}`}
            className="experience-card grid grid-cols-[10rem_minmax(0,1fr)] gap-x-8 border-b border-[var(--portfolio-line)] py-9 max-md:grid-cols-1 max-md:gap-y-4 max-md:py-7"
            data-reveal
          >
            <div className="text-sm leading-6 text-[var(--portfolio-text-soft)]">
              <p className="m-0 font-semibold text-[var(--portfolio-accent)]">
                {entry.period}
              </p>
              <p className="mt-1">{entry.location}</p>
            </div>
            <div>
              <p className="m-0 text-sm font-semibold text-[var(--portfolio-accent)]">
                {entry.type}
              </p>
              <h2 className="mt-2 text-2xl leading-tight font-medium text-foreground">
                {entry.role}
              </h2>
              <p className="mt-2 text-base font-medium text-foreground">
                {entry.company}
              </p>
              <p className="mt-4 max-w-3xl leading-7 text-[var(--portfolio-text-soft)]">
                {entry.description}
              </p>
              <ul
                className="mt-5 flex flex-wrap gap-2 p-0"
                aria-label={entry.skillsLabel}
              >
                {entry.skills.map((skill) => (
                  <li
                    key={skill}
                    className="list-none border border-[var(--portfolio-line)] px-2.5 py-1 text-sm font-medium text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
