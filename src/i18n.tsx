/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode, useContext } from 'react'

export const locales = ['fr-fr', 'en-us'] as const
export type Locale = (typeof locales)[number]
export type PageKey = 'profile' | 'skills' | 'education' | 'contact'

const paths: Record<Locale, Record<PageKey, string>> = {
  'fr-fr': {
    profile: '/fr-fr/profil',
    skills: '/fr-fr/competences',
    education: '/fr-fr/parcours',
    contact: '/fr-fr/contact',
  },
  'en-us': {
    profile: '/en-us/profile',
    skills: '/en-us/skills',
    education: '/en-us/education',
    contact: '/en-us/contact',
  },
}

export function pathFor(locale: Locale, page: PageKey) {
  return paths[locale][page]
}

const copy = {
  'fr-fr': {
    htmlLang: 'fr',
    language: { label: 'Langue', french: 'Français', english: 'Anglais' },
    theme: {
      label: 'Apparence',
      light: 'Clair',
      dark: 'Sombre',
      system: 'Système',
    },
    nav: {
      profile: 'Profil',
      skills: 'Compétences',
      education: 'Parcours',
      contact: 'Contact',
    },
    hero: {
      coordinates: '43.61° N · Montpellier · Systèmes & logiciel',
      title: ['Construire sereinement.', 'Livrer avec intention.'],
      lead: 'Développeur orienté DevOps : je rends les systèmes complexes intentionnels, observables et prêts à évoluer.',
      body: "Du premier commit à la production, j'aime créer des chemins fiables qui permettent aux équipes d'avancer vite sans perdre le contrôle.",
      explore: 'Explorer mes compétences',
      contact: 'Me contacter',
      system: '01 / SYSTÈME ORBITAL',
      quiet: 'VIVANT, SANS BRUIT',
      principle: 'Principe de travail',
      clarity: 'La clarté est une fonctionnalité de performance.',
    },
    signals: [
      {
        title: 'Profil',
        text: 'Développeur orienté DevOps, attentif à des systèmes simples, fiables et maintenables.',
      },
      {
        title: 'Approche',
        text: 'Je veux comprendre le cycle complet : code, qualité, images, livraison et opérations.',
      },
      {
        title: 'Univers',
        text: "L'astrophysique et l'espace nourrissent mon intérêt pour les systèmes précis et exigeants.",
      },
    ],
    skills: {
      kicker: 'Compétences',
      title: 'Les sujets DevOps que je pratique et approfondis.',
      entries: [
        ['Systèmes', ['Linux', 'Réseau', 'Shell', 'Sécurité']],
        [
          'Déploiement & automatisation',
          ['CI/CD', 'Docker', 'Nginx', 'Release'],
        ],
        ['Développement', ['TypeScript', 'React', 'API', 'Scripting']],
        [
          'Bases de données',
          ['SQL', 'Modélisation', 'Requêtes', 'Persistance'],
        ],
        ['Qualité', ['Pre-commit', 'Linting', 'Tests', 'Quality gates']],
        ['Observabilité', ['Logs', 'Health checks', 'Alerting', 'Runbooks']],
        [
          'Gestion',
          ['Planification', 'Documentation', 'Coordination', 'Livraison'],
        ],
        ['IA', ['LLM', 'Prompting', 'Automatisation', 'Intégration']],
      ],
    },
    education: {
      kicker: 'Parcours',
      title: 'Un parcours technique, scientifique et opérationnel.',
      inProgress: 'En cours',
      earned: 'Obtenu',
      entries: [
        [
          'Diplôme d’ingénieur',
          'En cours',
          'Polytech Montpellier',
          'Développement logiciel et exploitation opérationnelle (DO)',
          'Formation en développement, opérations et méthodes de production concrètes.',
          'En cours',
        ],
        [
          'BUT Informatique',
          '2025',
          'IUT Montpellier',
          'Parcours DACS',
          'Développement, réseau, sécurité et mise en production d’applications fiables.',
          'Obtenu',
        ],
        [
          'Licence Sciences, technologies et santé',
          '2025',
          'IAE',
          'Parcours sciences et technologies, management des technologies et des sciences (e-learning)',
          'Un complément scientifique et organisationnel autour du management de la technologie.',
          'Obtenu',
        ],
        [
          'Baccalauréat STI2D',
          '2022',
          'Lycée Mermoz, Montpellier',
          'Mention bien',
          'Une base technique dédiée à la conception, aux systèmes et au raisonnement industriel.',
          'Obtenu',
        ],
        [
          'BIA',
          '2021',
          'Lycée Jean Jaurès',
          'Brevet d’initiation aéronautique',
          'Le lien entre curiosité scientifique, aéronautique et culture du vol.',
          'Obtenu',
        ],
      ],
    },
    contact: {
      kicker: 'Contact',
      title:
        'Parlons infrastructure, automatisation ou projets orientés DevOps.',
      github: 'GitHub',
      email: 'Me contacter',
    },
    footer: 'Conçu avec React, Vite, Tailwind et Docker.',
    intro: {
      title: 'Connexion au système',
      statuses: [
        ['Pipeline', 'Build vérifié'],
        ['Sécurité', 'Contrôles actifs'],
        ['Signal', 'Interface prête'],
      ],
    },
    metadata: {
      profile: [
        'Portfolio Léo Torres — Profil',
        'Développeur orienté DevOps, infrastructure, automatisation et systèmes fiables.',
      ],
      skills: [
        'Compétences — Portfolio Léo Torres',
        'Compétences techniques de Léo Torres : DevOps, cloud, automatisation et développement.',
      ],
      education: [
        'Parcours — Portfolio Léo Torres',
        'Parcours académique et technique de Léo Torres.',
      ],
      contact: [
        'Contact — Portfolio Léo Torres',
        'Contacter Léo Torres pour un projet logiciel, DevOps ou infrastructure.',
      ],
    },
  },
  'en-us': {
    htmlLang: 'en',
    language: { label: 'Language', french: 'French', english: 'English' },
    theme: {
      label: 'Appearance',
      light: 'Light',
      dark: 'Dark',
      system: 'System',
    },
    nav: {
      profile: 'Profile',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      coordinates: '43.61° N · Montpellier · Systems & software',
      title: ['Build calm.', 'Ship with intent.'],
      lead: 'DevOps-minded developer, making complex systems feel deliberate, observable and ready to evolve.',
      body: 'From the first commit to production, I enjoy creating reliable paths that let teams move quickly without losing control.',
      explore: 'Explore my skills',
      contact: 'Contact me',
      system: '01 / ORBITAL SYSTEM',
      quiet: 'LIVE, NOT LOUD',
      principle: 'Operating principle',
      clarity: 'Clarity is a performance feature.',
    },
    signals: [
      {
        title: 'Profile',
        text: 'DevOps-minded developer focused on simple, reliable and maintainable systems.',
      },
      {
        title: 'Approach',
        text: 'I like understanding the full cycle: code, quality, images, delivery and operations.',
      },
      {
        title: 'Universe',
        text: 'Astrophysics and space fuel my interest in demanding, precise systems.',
      },
    ],
    skills: {
      kicker: 'Skills',
      title: 'The DevOps topics I like practicing and deepening.',
      entries: [
        ['Systems', ['Linux', 'Networking', 'Shell', 'Security']],
        ['Deployment & automation', ['CI/CD', 'Docker', 'Nginx', 'Release']],
        ['Development', ['TypeScript', 'React', 'APIs', 'Scripting']],
        ['Databases', ['SQL', 'Modeling', 'Queries', 'Persistence']],
        ['Quality', ['Pre-commit', 'Linting', 'Testing', 'Quality gates']],
        ['Observability', ['Logs', 'Health checks', 'Alerting', 'Runbooks']],
        [
          'Management',
          ['Planning', 'Documentation', 'Coordination', 'Delivery'],
        ],
        ['AI', ['LLMs', 'Prompting', 'Automation', 'Integration']],
      ],
    },
    education: {
      kicker: 'Education',
      title: 'A technical, scientific and operational path.',
      inProgress: 'In progress',
      earned: 'Earned',
      entries: [
        [
          'Engineering degree',
          'In progress',
          'Polytech Montpellier',
          'Software development and operational exploitation (DO)',
          'Focused on development, operations and practical production methods.',
          'In progress',
        ],
        [
          'BUT in Computer Science',
          '2025',
          'IUT Montpellier',
          'DACS specialization',
          'Development, networking, security and production delivery for reliable applications.',
          'Earned',
        ],
        [
          'Bachelor in Science, Technology and Health',
          '2025',
          'IAE',
          'Science and technology track, technology and science management path (e-learning)',
          'A scientific and organizational complement around technology management.',
          'Earned',
        ],
        [
          'STI2D Baccalaureate',
          '2022',
          'Lycee Mermoz, Montpellier',
          'With honors',
          'A technical foundation focused on design, systems and industrial reasoning.',
          'Earned',
        ],
        [
          'BIA',
          '2021',
          'Lycee Jean Jaures',
          'Aeronautics initiation certificate',
          'An introduction to aeronautics connecting scientific curiosity, flight culture and aviation.',
          'Earned',
        ],
      ],
    },
    contact: {
      kicker: 'Contact',
      title:
        "Let's talk infrastructure, automation or DevOps-oriented projects.",
      github: 'GitHub',
      email: 'Contact me',
    },
    footer: 'Built with React, Vite, Tailwind and Docker.',
    intro: {
      title: 'Connecting to the system',
      statuses: [
        ['Pipeline', 'Build verified'],
        ['Security', 'Checks active'],
        ['Signal', 'Interface ready'],
      ],
    },
    metadata: {
      profile: [
        'Leo Torres Portfolio — Profile',
        'DevOps-minded developer focused on infrastructure, automation and reliable systems.',
      ],
      skills: [
        'Skills — Leo Torres Portfolio',
        'Leo Torres technical skills: DevOps, cloud, automation and software development.',
      ],
      education: [
        'Education — Leo Torres Portfolio',
        'Leo Torres academic and technical background.',
      ],
      contact: [
        'Contact — Leo Torres Portfolio',
        'Contact Leo Torres for a software, DevOps or infrastructure project.',
      ],
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
