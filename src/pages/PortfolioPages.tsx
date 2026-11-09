import { useEffect } from 'react'
import { useLocation } from '@tanstack/react-router'
import { ContactSection } from '@/components/sections/ContactSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { LegalSection } from '@/components/sections/LegalSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ProjectDetailSection } from '@/components/sections/ProjectDetailSection'
import { InterestsSection } from '@/components/sections/SignalSection'
import { SkillsPreviewSection } from '@/components/sections/SkillsPreviewSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { pathFor, type PageKey, useTranslation } from '@/i18n'

function PageMetadata({ page }: { page: PageKey }) {
  const { locale, copy } = useTranslation()

  useEffect(() => {
    const [title, description] = copy.metadata[page]
    const canonical = `https://leo-torres.dev${pathFor(locale, page)}`
    document.title = title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description)
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute('content', title)
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', description)
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', canonical)
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute('content', canonical)
  }, [copy.metadata, locale, page])

  return null
}

export function ProfilePage() {
  return (
    <>
      <PageMetadata page="profile" />
      <HeroSection />
      <SkillsPreviewSection />
      <EducationSection />
      <InterestsSection />
    </>
  )
}

export function SkillsPage() {
  return (
    <>
      <PageMetadata page="skills" />
      <SkillsSection />
    </>
  )
}

export function ProjectsPage() {
  return (
    <>
      <PageMetadata page="projects" />
      <ProjectsSection />
    </>
  )
}

function ProjectDetailMetadata({
  title,
  description,
  technologies,
  githubUrl,
}: {
  title: string
  description: string
  technologies: string
  githubUrl?: string
}) {
  const location = useLocation()

  useEffect(() => {
    const pageTitle = `${title} | Portfolio Léo Torres`
    const canonical = `https://leo-torres.dev${location.pathname}`
    const technologyList = technologies
      .split('|')
      .filter((technology) => technology.length > 0)
    document.title = pageTitle
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description)
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute('content', pageTitle)
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', description)
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', canonical)
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute('content', canonical)

    const structuredData = document.createElement('script')
    structuredData.type = 'application/ld+json'
    structuredData.dataset.projectMetadata = 'true'
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareSourceCode',
      name: title,
      description,
      url: canonical,
      ...(githubUrl ? { codeRepository: githubUrl } : {}),
      ...(technologyList.length > 0
        ? { programmingLanguage: technologyList }
        : {}),
    })
    document.head.append(structuredData)
    return () => structuredData.remove()
  }, [description, githubUrl, location.pathname, technologies, title])

  return null
}

export function ProjectDetailPage() {
  const { copy } = useTranslation()
  const location = useLocation()
  const slug = location.pathname.split('/').filter(Boolean).at(-1)
  const project = copy.projects.entries.find((entry) => entry.slug === slug)

  return (
    <>
      <ProjectDetailMetadata
        title={project?.title ?? copy.projects.labels.unknown}
        description={project?.text ?? copy.projects.labels.unknown}
        technologies={
          project
            ? [...new Set([...project.languages, ...project.stack])].join('|')
            : ''
        }
        githubUrl={project?.githubUrl}
      />
      <ProjectDetailSection />
    </>
  )
}

export function ExperiencePage() {
  return (
    <>
      <PageMetadata page="experience" />
      <ExperienceSection />
    </>
  )
}

export function ContactPage() {
  return (
    <>
      <PageMetadata page="contact" />
      <ContactSection />
    </>
  )
}

export function LegalPage() {
  return (
    <>
      <PageMetadata page="legal" />
      <LegalSection />
    </>
  )
}
