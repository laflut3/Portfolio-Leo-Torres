import { useState } from 'react'
import { ChevronDown, FolderGit2, GitFork } from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { TagList } from '@/components/common/TagList'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/i18n'

type ProjectTheme = 'all' | 'school' | 'personal' | 'openSource'
type ProjectCategory = Exclude<ProjectTheme, 'all'>

export function ProjectsSection() {
  const { copy } = useTranslation()
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [activeTheme, setActiveTheme] = useState<ProjectTheme>('all')
  const themes: ProjectTheme[] = ['all', 'school', 'personal', 'openSource']
  const projects = copy.projects.entries.filter(
    (project) => activeTheme === 'all' || project.themes.includes(activeTheme),
  )

  return (
    <section id="projects" className="mt-24 max-md:mt-14">
      <SectionHeading
        kicker={copy.projects.kicker}
        title={copy.projects.title}
        icon={<FolderGit2 className="size-4" aria-hidden="true" />}
      />
      <div
        className="mb-7 flex flex-wrap gap-2"
        role="group"
        aria-label={copy.projects.filters.label}
      >
        {themes.map((theme) => (
          <Button
            key={theme}
            type="button"
            variant={activeTheme === theme ? 'default' : 'outline'}
            size="sm"
            aria-pressed={activeTheme === theme}
            onClick={() => {
              setActiveTheme(theme)
              setExpandedProject(null)
            }}
          >
            {copy.projects.filters[theme]}
          </Button>
        ))}
      </div>
      {projects.length === 0 ? (
        <p className="border-y border-[var(--portfolio-line)] py-8 text-[var(--portfolio-text-soft)]">
          {copy.projects.filters.empty}
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-px border border-[var(--portfolio-line)] bg-[var(--portfolio-line)] max-md:grid-cols-1">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="skill-card flex min-h-80 flex-col bg-background p-7 max-md:min-h-0 max-md:p-6"
              data-reveal
            >
              <span className="text-sm font-semibold tabular-nums text-[var(--portfolio-accent)]">
                0{index + 1}
              </span>
              <TagList
                items={(project.themes as ProjectCategory[]).map(
                  (theme) => copy.projects.filters[theme],
                )}
              />
              <p className="mt-4 text-sm font-medium text-[var(--portfolio-text-soft)]">
                {copy.projects.labels.categories} ·{' '}
                {project.categories.join(' · ')}
              </p>
              <h3 className="mt-2 text-2xl leading-tight font-medium text-foreground">
                {project.title}
              </h3>
              <p className="mt-5 leading-7 text-[var(--portfolio-text-soft)]">
                {project.text}
              </p>
              {project.languages.length > 0 && (
                <p className="mt-4 text-sm text-[var(--portfolio-text-soft)]">
                  <span className="font-medium text-foreground">
                    {copy.projects.labels.languages}
                  </span>{' '}
                  {project.languages.join(' · ')}
                </p>
              )}
              <div className="mt-6">
                <TagList items={[...project.stack]} />
              </div>
              <div className="mt-auto pt-8">
                <div className="flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    aria-expanded={expandedProject === project.title}
                    aria-controls={`project-details-${index}`}
                    onClick={() =>
                      setExpandedProject((current) =>
                        current === project.title ? null : project.title,
                      )
                    }
                  >
                    {expandedProject === project.title
                      ? copy.projects.hideDetails
                      : copy.projects.viewDetails}
                    <ChevronDown
                      className={`transition-transform duration-200 ${expandedProject === project.title ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </Button>
                  {project.githubUrl && (
                    <Button variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {copy.projects.viewGithub}
                        <GitFork aria-hidden="true" />
                      </a>
                    </Button>
                  )}
                </div>
                {expandedProject === project.title && (
                  <p
                    id={`project-details-${index}`}
                    className="mt-5 border-t border-[var(--portfolio-line)] pt-5 leading-7 text-[var(--portfolio-text-soft)]"
                  >
                    {project.details}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
