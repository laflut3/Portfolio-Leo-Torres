import { useState } from 'react'
import { ArrowUpRight, FolderGit2, GitFork } from 'lucide-react'
import { ProjectLink } from '@/components/common/ProjectLink'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/i18n'

type ProjectTheme = 'all' | 'school' | 'personal' | 'openSource'
type ProjectCategory = Exclude<ProjectTheme, 'all'>

export function ProjectsSection() {
  const { copy } = useTranslation()
  const [activeTheme, setActiveTheme] = useState<ProjectTheme>('all')
  const themes: ProjectTheme[] = ['all', 'personal', 'school', 'openSource']
  const projects = copy.projects.entries.filter(
    (project) => activeTheme === 'all' || project.themes.includes(activeTheme),
  )

  return (
    <section id="projects" className="mt-20 max-md:mt-12">
      <header className="mb-10 grid grid-cols-[1fr_auto] items-end gap-8 border-b border-[var(--portfolio-line)] pb-8 max-md:grid-cols-1 max-md:gap-5">
        <div>
          <p className="mb-4 flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[var(--portfolio-accent)] uppercase">
            <FolderGit2 className="size-4" aria-hidden="true" />
            {copy.projects.kicker}
          </p>
          <h1 className="m-0 text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] font-semibold tracking-[-0.075em] text-foreground">
            {copy.projects.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--portfolio-text-soft)]">
            {copy.projects.intro}
          </p>
        </div>
        <p className="m-0 font-mono text-sm tabular-nums text-[var(--portfolio-text-soft)] max-md:justify-self-start">
          {String(copy.projects.entries.length).padStart(2, '0')} /{' '}
          {copy.projects.entries.length}
        </p>
      </header>

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
            onClick={() => setActiveTheme(theme)}
          >
            {copy.projects.filters[theme]}
          </Button>
        ))}
        <span
          className="ml-auto self-center font-mono text-xs tabular-nums text-[var(--portfolio-text-soft)] max-md:ml-0"
          role="status"
          aria-live="polite"
        >
          {String(projects.length).padStart(2, '0')}
        </span>
      </div>

      {projects.length === 0 ? (
        <p className="border-y border-[var(--portfolio-line)] py-8 text-[var(--portfolio-text-soft)]">
          {copy.projects.filters.empty}
        </p>
      ) : (
        <ol className="m-0 list-none border-t border-[var(--portfolio-line)] p-0">
          {projects.map((project, index) => {
            const technologies = [
              ...new Set([...project.languages, ...project.stack]),
            ]

            return (
              <li key={project.slug}>
                <article
                  className="grid grid-cols-[3.5rem_minmax(0,1.5fr)_minmax(13rem,0.9fr)_auto] items-center gap-x-6 gap-y-4 border-b border-[var(--portfolio-line)] py-6 max-lg:grid-cols-[3rem_minmax(0,1fr)_auto] max-md:grid-cols-[2.5rem_minmax(0,1fr)] max-md:gap-x-3 max-md:py-5"
                  data-reveal
                >
                  <span className="self-start pt-1 font-mono text-sm tabular-nums text-[var(--portfolio-accent)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <p className="m-0 text-xs text-[var(--portfolio-text-soft)]">
                      {(project.themes as ProjectCategory[])
                        .map((theme) => copy.projects.filters[theme])
                        .join(' · ')}
                      {project.categories.length > 0 && (
                        <> / {project.categories.slice(0, 2).join(' · ')}</>
                      )}
                    </p>
                    <h2 className="mt-2 mb-0 text-xl leading-tight font-medium tracking-[-0.03em] text-foreground md:text-2xl">
                      {project.title}
                    </h2>
                    <p className="mt-2 mb-0 max-w-2xl text-sm leading-6 text-[var(--portfolio-text-soft)]">
                      {project.text}
                    </p>
                  </div>
                  <div className="min-w-0 max-lg:col-start-2 max-md:col-start-2">
                    <p className="m-0 text-[10px] font-semibold tracking-[0.14em] text-[var(--portfolio-text-soft)] uppercase">
                      {copy.projects.labels.technologies}
                    </p>
                    <p className="mt-2 mb-0 text-sm leading-6 text-foreground">
                      {technologies.length > 0
                        ? technologies.join(' · ')
                        : copy.projects.labels.noTechnologies}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 max-md:col-start-2">
                    <ProjectLink
                      slug={project.slug}
                      className="inline-flex min-h-10 items-center gap-2 border-b border-[var(--portfolio-accent)] text-sm font-semibold text-foreground no-underline transition-colors hover:text-[var(--portfolio-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      {copy.projects.viewDetails}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </ProjectLink>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="grid size-10 place-items-center border border-[var(--portfolio-line)] text-[var(--portfolio-text-soft)] transition-colors hover:border-[var(--portfolio-accent)] hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                        aria-label={`${copy.projects.viewGithub}: ${project.title}`}
                      >
                        <GitFork className="size-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              </li>
            )
          })}
        </ol>
      )}
    </section>
  )
}
