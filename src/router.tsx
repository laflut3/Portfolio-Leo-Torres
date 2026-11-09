import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  redirect,
} from '@tanstack/react-router'
import { PortfolioLayout } from '@/App'
import { I18nProvider } from '@/i18n'
import {
  ContactPage,
  ExperiencePage,
  LegalPage,
  ProjectDetailPage,
  ProjectsPage,
  ProfilePage,
  SkillsPage,
} from '@/pages/PortfolioPages'

const rootRoute = createRootRoute({ component: Outlet })

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  beforeLoad: () => {
    throw redirect({ to: '/fr-fr/profil' })
  },
})

function localeLayout(locale: 'fr-fr' | 'en-us') {
  return function LocaleLayout() {
    return (
      <I18nProvider locale={locale}>
        <PortfolioLayout locale={locale} />
      </I18nProvider>
    )
  }
}

const frenchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'fr-fr',
  component: localeLayout('fr-fr'),
})
const englishRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'en-us',
  component: localeLayout('en-us'),
})

const frenchIndexRoute = createRoute({
  getParentRoute: () => frenchRoute,
  path: '/',
  beforeLoad: () => {
    throw redirect({ to: '/fr-fr/profil' })
  },
})
const englishIndexRoute = createRoute({
  getParentRoute: () => englishRoute,
  path: '/',
  beforeLoad: () => {
    throw redirect({ to: '/en-us/profile' })
  },
})
const frenchProfileRoute = createRoute({
  getParentRoute: () => frenchRoute,
  path: 'profil',
  component: ProfilePage,
})
const frenchSkillsRoute = createRoute({
  getParentRoute: () => frenchRoute,
  path: 'competences',
  component: SkillsPage,
})
const frenchProjectsRoute = createRoute({
  getParentRoute: () => frenchRoute,
  path: 'projets',
  component: ProjectsPage,
})
const frenchProjectDetailRoute = createRoute({
  getParentRoute: () => frenchRoute,
  path: 'projets/$slug',
  component: ProjectDetailPage,
})
const frenchContactRoute = createRoute({
  getParentRoute: () => frenchRoute,
  path: 'contact',
  component: ContactPage,
})
const frenchExperienceRoute = createRoute({
  getParentRoute: () => frenchRoute,
  path: 'experience-professionnelle',
  component: ExperiencePage,
})
const englishProfileRoute = createRoute({
  getParentRoute: () => englishRoute,
  path: 'profile',
  component: ProfilePage,
})
const englishSkillsRoute = createRoute({
  getParentRoute: () => englishRoute,
  path: 'skills',
  component: SkillsPage,
})
const englishProjectsRoute = createRoute({
  getParentRoute: () => englishRoute,
  path: 'projects',
  component: ProjectsPage,
})
const englishProjectDetailRoute = createRoute({
  getParentRoute: () => englishRoute,
  path: 'projects/$slug',
  component: ProjectDetailPage,
})
const englishContactRoute = createRoute({
  getParentRoute: () => englishRoute,
  path: 'contact',
  component: ContactPage,
})
const englishExperienceRoute = createRoute({
  getParentRoute: () => englishRoute,
  path: 'professional-experience',
  component: ExperiencePage,
})
const frenchLegalRoute = createRoute({
  getParentRoute: () => frenchRoute,
  path: 'confidentialite',
  component: LegalPage,
})
const englishLegalRoute = createRoute({
  getParentRoute: () => englishRoute,
  path: 'privacy',
  component: LegalPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  frenchRoute.addChildren([
    frenchIndexRoute,
    frenchProfileRoute,
    frenchSkillsRoute,
    frenchProjectsRoute,
    frenchProjectDetailRoute,
    frenchExperienceRoute,
    frenchContactRoute,
    frenchLegalRoute,
  ]),
  englishRoute.addChildren([
    englishIndexRoute,
    englishProfileRoute,
    englishSkillsRoute,
    englishProjectsRoute,
    englishProjectDetailRoute,
    englishExperienceRoute,
    englishContactRoute,
    englishLegalRoute,
  ]),
])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
