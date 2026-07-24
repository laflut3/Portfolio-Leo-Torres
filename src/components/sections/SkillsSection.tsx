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
  Code2,
  Database,
  BadgeCheck,
  Activity,
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
      <div className="grid grid-cols-12 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
        {copy.skills.entries.map(([title, items], index) => {
          const Icon = skillIcons[index] ?? ServerCog

          return (
            <article
              key={title}
              className={`skill-card rounded-[2rem] border border-[color-mix(in_oklch,var(--portfolio-line)_86%,transparent)] bg-[var(--portfolio-panel)] p-5 shadow-[0_22px_60px_color-mix(in_oklch,var(--foreground)_6%,transparent)] max-lg:col-span-1 max-md:col-span-1 ${
                index === 0 || index === 5 ? 'col-span-4' : 'col-span-2'
              }`}
              data-reveal
            >
              <div className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-[color-mix(in_oklch,var(--portfolio-cyan)_24%,transparent)] bg-[color-mix(in_oklch,var(--portfolio-cyan)_8%,transparent)] text-[var(--portfolio-cyan)]">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <h3 className="m-0 text-base font-medium text-foreground">
                  {title}
                </h3>
              </div>
              <TagList items={[...items]} />
            </article>
          )
        })}
      </div>
    </section>
  )
}
