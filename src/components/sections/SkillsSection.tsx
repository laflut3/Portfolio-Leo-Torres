import {
  Activity,
  BadgeCheck,
  BrainCircuit,
  Code2,
  Database,
  ServerCog,
  UsersRound,
  Workflow,
} from 'lucide-react'
import { TagList } from '@/components/common/TagList'
import { SectionHeading } from '@/components/common/SectionHeading'
import { useTranslation } from '@/i18n'

const skillIcons = [
  ServerCog,
  Workflow,
  Database,
  Activity,
  BadgeCheck,
  UsersRound,
  BrainCircuit,
]

export function SkillsSection() {
  const { copy } = useTranslation()
  return (
    <section id="skills" className="mt-24 max-md:mt-14">
      <SectionHeading
        kicker={copy.skills.kicker}
        title={copy.skills.title}
        icon={<ServerCog className="size-4" aria-hidden="true" />}
      />
      <div className="border-t border-[var(--portfolio-line)]">
        <article
          className="skill-card grid grid-cols-[3rem_minmax(10rem,0.5fr)_minmax(0,1fr)] gap-x-5 border-b border-[var(--portfolio-line)] py-7 max-md:grid-cols-[2.25rem_minmax(0,1fr)] max-md:gap-x-3"
          data-reveal
        >
          <span className="pt-0.5 text-sm font-semibold tabular-nums text-[var(--portfolio-accent)]">
            01
          </span>
          <div className="flex items-center gap-3">
            <span className="grid size-8 shrink-0 place-items-center text-[var(--portfolio-accent)]">
              <Code2 className="size-4" aria-hidden="true" />
            </span>
            <h3 className="m-0 text-lg font-medium text-foreground">
              {copy.skills.development.title}
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-5 max-md:col-start-2 max-md:grid-cols-1">
            {copy.skills.development.groups.map(([title, items]) => (
              <section key={title} className="min-w-0">
                <h4 className="m-0 text-sm font-semibold text-foreground">
                  {title}
                </h4>
                <div className="mt-3">
                  <TagList items={[...items]} />
                </div>
              </section>
            ))}
          </div>
        </article>
        {copy.skills.entries.map(([title, items], index) => {
          const Icon = skillIcons[index] ?? ServerCog

          return (
            <article
              key={title}
              className="skill-card grid grid-cols-[3rem_minmax(10rem,0.5fr)_minmax(0,1fr)] gap-x-5 border-b border-[var(--portfolio-line)] py-7 max-md:grid-cols-[2.25rem_minmax(0,1fr)] max-md:gap-x-3"
              data-reveal
            >
              <span className="pt-0.5 text-sm font-semibold tabular-nums text-[var(--portfolio-accent)]">
                0{index + 2}
              </span>
              <div className="flex items-center gap-3">
                <span className="grid size-8 shrink-0 place-items-center text-[var(--portfolio-accent)]">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <h3 className="m-0 text-lg font-medium text-foreground">
                  {title}
                </h3>
              </div>
              <div className="max-md:col-start-2">
                <TagList items={[...items]} />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
