import { useEffect } from 'react'
import { ContactSection } from '@/components/sections/ContactSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { InterestsSection } from '@/components/sections/SignalSection'
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
  }, [copy.metadata, locale, page])

  return null
}

export function ProfilePage() {
  return (
    <>
      <PageMetadata page="profile" />
      <HeroSection />
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

export function EducationPage() {
  return (
    <>
      <PageMetadata page="education" />
      <EducationSection />
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
