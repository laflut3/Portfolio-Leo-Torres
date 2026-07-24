import { useTranslation } from '@/i18n'
import { SectionHeading } from '@/components/common/SectionHeading'

export function InterestsSection() {
  const { copy } = useTranslation()
  return (
    <section
      id="interests"
      className="mt-24 max-md:mt-16"
      aria-label={copy.interests.label}
    >
      <SectionHeading
        kicker={copy.interests.label}
        title={copy.interests.title}
      />
      <div className="signal-grid grid grid-cols-3 gap-x-10 gap-y-12 border-t border-[var(--portfolio-line)] py-8 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-y-8">
        {copy.interests.entries.map((interest) => {
          return (
            <article key={interest.title} className="signal-card" data-reveal>
              <span className="block size-3 rounded-full bg-[var(--portfolio-accent)]" />
              <h2 className="mt-5 text-xl leading-tight font-semibold text-foreground">
                {interest.title}
              </h2>
              <p className="mt-3 leading-7 text-[var(--portfolio-text-soft)]">
                {interest.text}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
