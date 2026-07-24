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
      menu: 'Ouvrir la navigation',
    },
    hero: {
      coordinates: 'Léo Torres · Montpellier',
      title: ['Ingénieur en informatique', '& DevOps.'],
      lead: 'Étudiant à Polytech Montpellier en développement informatique et exploitation opérationnelle, l’informatique est plus qu’un travail : c’est une passion.',
      body: 'J’aime travailler sur ce qui relie le code, l’infrastructure et les utilisateurs. Je pense que la sécurité et la gestion de projet sont les points clés qui permettent à un projet d’être mené à bien.',
      explore: 'Voir mes compétences',
      contact: 'Me contacter',
      photoAlt: 'Portrait de Léo Torres',
    },
    interests: {
      label: 'Centres d’intérêt',
      title: 'Ce qui nourrit ma curiosité.',
      entries: [
        {
          title: 'Astrophysique & espace',
          text: 'Comprendre les phénomènes, les échelles et les systèmes qui composent notre univers.',
        },
        {
          title: 'Aéronautique',
          text: 'Une curiosité née avec le BIA, entre culture du vol, sciences et précision technique.',
        },
        {
          title: 'Systèmes & logiciel',
          text: 'Le goût de relier une idée, une interface et une infrastructure dans un ensemble cohérent.',
        },
      ],
    },
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
    footer: {
      description:
        'Portfolio personnel dédié aux systèmes fiables, au logiciel et à la livraison.',
      navigation: 'Navigation',
      connect: 'Me retrouver',
      stack: 'Stack',
      github: 'GitHub',
      contact: 'Me contacter',
      stackValue: 'React · Vite · TypeScript · Docker',
      copyright: 'Tous droits réservés.',
    },
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
      menu: 'Open navigation',
    },
    hero: {
      coordinates: 'Léo Torres · Montpellier',
      title: ['Computer engineering student', '& DevOps.'],
      lead: 'A computer engineering and operational systems student at Polytech Montpellier, I see computing as more than work: it is a passion.',
      body: 'I enjoy working on what connects code, infrastructure and users. I believe security and project management are key elements that enable a project to succeed.',
      explore: 'See my skills',
      contact: 'Contact me',
      photoAlt: 'Portrait of Leo Torres',
    },
    interests: {
      label: 'Interests',
      title: 'What fuels my curiosity.',
      entries: [
        {
          title: 'Astrophysics & space',
          text: 'Understanding the phenomena, scales and systems that shape our universe.',
        },
        {
          title: 'Aeronautics',
          text: 'A curiosity shaped by the BIA, between flight culture, science and technical precision.',
        },
        {
          title: 'Systems & software',
          text: 'A taste for connecting an idea, an interface and infrastructure into a coherent whole.',
        },
      ],
    },
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
    footer: {
      description:
        'A personal portfolio about reliable systems, software and delivery.',
      navigation: 'Navigation',
      connect: 'Find me online',
      stack: 'Stack',
      github: 'GitHub',
      contact: 'Contact me',
      stackValue: 'React · Vite · TypeScript · Docker',
      copyright: 'All rights reserved.',
    },
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
