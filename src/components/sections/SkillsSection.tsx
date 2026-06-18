import { TagList } from '@/components/common/TagList'
import { SectionHeading } from '@/components/common/SectionHeading'
import { skills } from '@/data/portfolio'

export function SkillsSection() {
  return (
    <section id="skills" className="mt-24 max-md:mt-14">
      <SectionHeading
        kicker="Compétences"
        title="Les sujets DevOps que j’aime pratiquer et approfondir."
      />
      <div className="grid grid-cols-4 gap-3.5 max-md:grid-cols-1">
        {skills.map((skill) => (
          <article
            key={skill.title}
            className="rounded-lg border border-[var(--portfolio-line)] bg-[var(--portfolio-panel)] p-5"
            data-reveal
          >
            <h3 className="m-0 text-base font-medium text-foreground">
              {skill.title}
            </h3>
            <TagList items={skill.items} />
          </article>
        ))}
      </div>
    </section>
  )
}
