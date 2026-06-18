import { TagList } from '@/components/common/TagList'
import { SectionHeading } from '@/components/common/SectionHeading'
import { projects } from '@/data/portfolio'

export function ProjectsSection() {
  return (
    <section id="projects" className="mt-24 max-md:mt-14">
      <SectionHeading
        kicker="Projets"
        title="Des exemples concrets, centrés sur la qualité de livraison."
      />
      <div className="grid gap-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="grid grid-cols-[minmax(0,1fr)_minmax(220px,0.42fr)] items-center gap-6 rounded-lg border border-[var(--portfolio-line)] bg-[var(--portfolio-panel)] p-6 max-md:grid-cols-1"
            data-reveal
          >
            <div>
              <h3 className="m-0 text-base font-medium text-foreground">
                {project.name}
              </h3>
              <p className="mt-3 leading-7 text-[var(--portfolio-text-soft)]">
                {project.description}
              </p>
            </div>
            <TagList items={project.stack} />
          </article>
        ))}
      </div>
    </section>
  )
}
