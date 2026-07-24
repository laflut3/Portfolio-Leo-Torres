import { ArrowUpRight, Code2 } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { pathFor, useTranslation } from '@/i18n'

export function SkillsPreviewSection() {
  const { locale, copy } = useTranslation()

  return (
    <section className="mt-24 border-y border-[var(--portfolio-line)] py-12 max-md:mt-16 max-md:py-9">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-10 max-md:grid-cols-1 max-md:gap-7">
        <div className="max-w-3xl" data-reveal>
          <div className="flex items-center gap-2 text-[var(--portfolio-accent)]">
            <Code2 className="size-4" aria-hidden="true" />
            <p className="m-0 text-xs font-bold tracking-[0.16em] uppercase">
              {copy.skillsPreview.kicker}
            </p>
          </div>
          <h2 className="mt-4 text-[clamp(2.2rem,4vw,4rem)] leading-[0.98] font-semibold tracking-[-0.06em] text-foreground">
            {copy.skillsPreview.title}
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-[var(--portfolio-text-soft)]">
            {copy.skillsPreview.text}
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link to={pathFor(locale, 'skills')}>
            {copy.skillsPreview.action}
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
