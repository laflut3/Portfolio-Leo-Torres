import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FolderGit2,
} from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { pathFor, useTranslation } from '@/i18n'

export function SkillsPreviewSection() {
  const { locale, copy } = useTranslation()

  return (
    <section
      id="skills-overview"
      className="profile-section profile-section--skills mt-24 max-md:mt-16"
    >
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(17rem,0.45fr)] items-end gap-10 max-md:grid-cols-1 max-md:gap-7">
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
        <div className="grid gap-2" data-reveal>
          <Button asChild>
            <Link to={pathFor(locale, 'skills')}>
              <Code2 aria-hidden="true" />
              {copy.skillsPreview.actions.skills}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to={pathFor(locale, 'projects')}>
              <FolderGit2 aria-hidden="true" />
              {copy.skillsPreview.actions.projects}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to={pathFor(locale, 'experience')}>
              <BriefcaseBusiness aria-hidden="true" />
              {copy.skillsPreview.actions.experience}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
