/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode, useContext } from 'react'
import { common } from '@/locales/common'
import { contact } from '@/locales/contact'
import { profile } from '@/locales/profile'
import { projects } from '@/locales/projects'
import { skills } from '@/locales/skills'

export const locales = ['fr-fr', 'en-us'] as const
export type Locale = (typeof locales)[number]
export type PageKey = 'profile' | 'skills' | 'projects' | 'contact'

const paths: Record<Locale, Record<PageKey, string>> = {
  'fr-fr': {
    profile: '/fr-fr/profil',
    skills: '/fr-fr/competences',
    projects: '/fr-fr/projets',
    contact: '/fr-fr/contact',
  },
  'en-us': {
    profile: '/en-us/profile',
    skills: '/en-us/skills',
    projects: '/en-us/projects',
    contact: '/en-us/contact',
  },
}

export function pathFor(locale: Locale, page: PageKey) {
  return paths[locale][page]
}

const copy = {
  'fr-fr': {
    ...common['fr-fr'],
    ...profile['fr-fr'],
    ...skills['fr-fr'],
    ...projects['fr-fr'],
    ...contact['fr-fr'],
    metadata: {
      ...profile['fr-fr'].metadata,
      ...skills['fr-fr'].metadata,
      ...projects['fr-fr'].metadata,
      ...contact['fr-fr'].metadata,
    },
  },
  'en-us': {
    ...common['en-us'],
    ...profile['en-us'],
    ...skills['en-us'],
    ...projects['en-us'],
    ...contact['en-us'],
    metadata: {
      ...profile['en-us'].metadata,
      ...skills['en-us'].metadata,
      ...projects['en-us'].metadata,
      ...contact['en-us'].metadata,
    },
  },
} as const

type Copy = (typeof copy)[Locale]
const I18nContext = createContext<{ locale: Locale; copy: Copy } | null>(null)

export function I18nProvider({
  locale,
  children,
}: {
  locale: Locale
  children: ReactNode
}) {
  return (
    <I18nContext.Provider value={{ locale, copy: copy[locale] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(I18nContext)
  if (!context)
    throw new Error('useTranslation must be used inside I18nProvider')
  return context
}
