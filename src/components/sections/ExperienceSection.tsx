import { BriefcaseBusiness } from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { useTranslation } from '@/i18n'

export function ExperienceSection() {
  const { copy } = useTranslation()

  return (
    <section className="mt-24 max-md:mt-14">
      <SectionHeading
        kicker={copy.experience.kicker}
        title={copy.experience.title}
        icon={<BriefcaseBusiness className="size-4" aria-hidden="true" />}
      />
      <p className="max-w-2xl border-t border-[var(--portfolio-line)] pt-7 leading-7 text-[var(--portfolio-text-soft)]">
        {copy.experience.text}
      </p>
    </section>
  )
}
