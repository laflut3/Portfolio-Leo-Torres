import { Activity, Boxes, Cloud, GitBranch } from 'lucide-react'
import { TagList } from '@/components/common/TagList'
import { SectionHeading } from '@/components/common/SectionHeading'
import { skills } from '@/data/portfolio'

const skillIcons = [Cloud, GitBranch, Boxes, Activity]

export function SkillsSection() {
  return (
    <section id="skills" className="mt-24 max-md:mt-14">
      <SectionHeading
        kicker="Compétences"
        title="Les sujets DevOps que j’aime pratiquer et approfondir."
        icon={<Cloud className="size-4" aria-hidden="true" />}
      />
      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
        {skills.map((skill, index) => {
          const Icon = skillIcons[index] ?? Cloud

          return (
            <article
              key={skill.title}
              className="rounded-2xl border border-[var(--portfolio-line)] bg-[var(--portfolio-panel)] p-5 shadow-[0_18px_56px_rgba(0,0,0,0.06)] backdrop-blur-sm"
              data-reveal
            >
              <div className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-[color-mix(in_oklch,var(--portfolio-cyan)_24%,transparent)] bg-[color-mix(in_oklch,var(--portfolio-cyan)_8%,transparent)] text-[var(--portfolio-cyan)]">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <h3 className="m-0 text-base font-medium text-foreground">
                  {skill.title}
                </h3>
              </div>
              <TagList items={skill.items} />
            </article>
          )
        })}
      </div>
    </section>
  )
}
