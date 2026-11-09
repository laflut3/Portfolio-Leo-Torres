import { ArrowLeft, ArrowUpRight, GitFork, Globe } from 'lucide-react'
import { Link, useLocation } from '@tanstack/react-router'
import { ProjectFlowDiagram } from '@/components/common/ProjectFlowDiagram'
import { ProjectLink } from '@/components/common/ProjectLink'
import { TagList } from '@/components/common/TagList'
import { pathFor, useTranslation } from '@/i18n'

export function ProjectDetailSection() {
  const { locale, copy } = useTranslation()
  const location = useLocation()
  const slug = location.pathname.split('/').filter(Boolean).at(-1)
  const projects = copy.projects.entries
  const index = projects.findIndex((project) => project.slug === slug)
  const project = projects[index]

  if (!project) {
    return (
      <section className="mt-20 max-w-3xl max-md:mt-12">
        <Link
          to={pathFor(locale, 'projects')}
          className="inline-flex min-h-10 items-center gap-2 text-sm text-[var(--portfolio-text-soft)] no-underline hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {copy.projects.labels.back}
        </Link>
        <h1 className="mt-10 text-4xl font-semibold tracking-[-0.06em] text-foreground">
          {copy.projects.labels.unknown}
        </h1>
      </section>
    )
  }

  const technologies = [...new Set([...project.languages, ...project.stack])]
  const previousProject = projects[index - 1]
  const nextProject = projects[index + 1]
  const projectNumber = String(index + 1).padStart(2, '0')

  return (
    <article className="mt-16 max-md:mt-10">
      <Link
        to={pathFor(locale, 'projects')}
        className="inline-flex min-h-10 items-center gap-2 text-sm text-[var(--portfolio-text-soft)] no-underline transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        {copy.projects.labels.back}
      </Link>

      <header className="mt-10 grid grid-cols-[1fr_auto] items-end gap-6 border-b border-[var(--portfolio-line)] pb-8 max-md:mt-7 max-md:grid-cols-1">
        <div>
          <p className="mb-4 text-xs font-bold tracking-[0.16em] text-[var(--portfolio-accent)] uppercase">
            {copy.projects.kicker} / {projectNumber}
          </p>
          <h1 className="m-0 max-w-5xl text-[clamp(2.75rem,7vw,6rem)] leading-[0.94] font-semibold tracking-[-0.07em] text-foreground">
            {project.title}
          </h1>
          <p className="mt-6 mb-0 max-w-3xl text-lg leading-8 text-[var(--portfolio-text-soft)]">
            {project.text}
          </p>
        </div>
        <p className="m-0 max-w-xs text-right text-xs leading-5 text-[var(--portfolio-text-soft)] max-md:text-left">
          {project.categories.join(' · ')}
        </p>
      </header>

      <div className="grid grid-cols-[minmax(0,1fr)_17rem] gap-12 py-10 max-lg:grid-cols-[minmax(0,1fr)_14rem] max-md:grid-cols-1 max-md:gap-9 max-md:py-8">
        <div className="min-w-0">
          <section aria-labelledby="project-overview-title">
            <h2
              id="project-overview-title"
              className="mb-3 text-xs font-bold tracking-[0.14em] text-[var(--portfolio-accent)] uppercase"
            >
              {copy.projects.labels.overview}
            </h2>
            <p className="m-0 max-w-3xl text-base leading-7 text-foreground">
              {project.details}
            </p>
          </section>

          <div className="mt-10">
            <ProjectFlowDiagram
              title={copy.projects.labels.diagram}
              caption={copy.projects.labels.diagramCaption}
              steps={project.diagram}
            />
          </div>
        </div>

        <aside className="border-l border-[var(--portfolio-line)] pl-6 max-md:border-l-0 max-md:border-t max-md:pl-0 max-md:pt-6">
          <section aria-labelledby="project-tech-title">
            <h2
              id="project-tech-title"
              className="mb-3 text-xs font-bold tracking-[0.14em] text-[var(--portfolio-accent)] uppercase"
            >
              {copy.projects.labels.technologies}
            </h2>
            {technologies.length > 0 ? (
              <TagList items={technologies} />
            ) : (
              <p className="m-0 text-sm leading-6 text-[var(--portfolio-text-soft)]">
                {copy.projects.labels.noTechnologies}
              </p>
            )}
          </section>

          <section className="mt-9" aria-labelledby="project-links-title">
            <h2
              id="project-links-title"
              className="mb-3 text-xs font-bold tracking-[0.14em] text-[var(--portfolio-accent)] uppercase"
            >
              {copy.projects.labels.links}
            </h2>
            <div className="grid gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center justify-between gap-3 border border-[var(--portfolio-line)] px-3 text-sm text-foreground no-underline transition-colors hover:border-[var(--portfolio-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <span className="inline-flex items-center gap-2">
                    <GitFork className="size-4" aria-hidden="true" />
                    {copy.projects.viewGithub}
                  </span>
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              )}
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center justify-between gap-3 border border-[var(--portfolio-line)] px-3 text-sm text-foreground no-underline transition-colors hover:border-[var(--portfolio-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <span className="inline-flex items-center gap-2">
                    <Globe className="size-4" aria-hidden="true" />
                    {copy.projects.viewWebsite}
                  </span>
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </section>
        </aside>
      </div>

      <nav
        className="grid grid-cols-2 border-y border-[var(--portfolio-line)] max-sm:grid-cols-1"
        aria-label={copy.projects.labels.projectNavigation}
      >
        {previousProject ? (
          <ProjectLink
            slug={previousProject.slug}
            className="border-r border-[var(--portfolio-line)] py-5 pr-6 text-left no-underline hover:bg-[var(--portfolio-panel)] max-sm:border-r-0 max-sm:border-b max-sm:pr-0"
          >
            <span className="block text-xs text-[var(--portfolio-text-soft)]">
              {copy.projects.labels.previous}
            </span>
            <span className="mt-2 inline-flex items-center gap-2 font-medium text-foreground">
              <ArrowLeft className="size-4" aria-hidden="true" />
              {previousProject.title}
            </span>
          </ProjectLink>
        ) : (
          <span className="border-r border-[var(--portfolio-line)] max-sm:hidden" />
        )}
        {nextProject ? (
          <ProjectLink
            slug={nextProject.slug}
            className="py-5 pl-6 text-right no-underline hover:bg-[var(--portfolio-panel)] max-sm:pl-0"
          >
            <span className="block text-xs text-[var(--portfolio-text-soft)]">
              {copy.projects.labels.next}
            </span>
            <span className="mt-2 inline-flex items-center gap-2 font-medium text-foreground">
              {nextProject.title}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </span>
          </ProjectLink>
        ) : null}
      </nav>
    </article>
  )
}
