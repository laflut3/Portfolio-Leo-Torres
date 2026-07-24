/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode, useContext } from 'react'

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
      projects: 'Projets',
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
      title: 'Mes passions',
      entries: [
        {
          title: 'Astrophysique & espace',
          text: "j'aime l'espace et j'aime découvrir, explorer, comprendre ce que peut de personne comprenne. Les phénomènes, les échelles et les systèmes qui composent notre univers me fascinent.",
        },
        {
          title: 'Aéronautique',
          text: "Cette passion est née suite a mon passage du BIA lors de mes année de seconde. D'un simple diplome, je me suis pris de passion pour la culture du vol et l'aviation ",
        },
        {
          title: 'Le sport (Boxe, randonnée, escalade, salle de sport)',
          text: "Je suis une personne active, j'aime bouger, marcher, explorer et découvrir de nouveaux lieux. Le sport est pour moi un moyen de me défouler et de me ressourcer.",
        },
        {
          title: 'Le Cinéma',
          text: "Depuis mon plus jeune âge, j'ai toujours été passionné par le cinéma. J'aime découvrir de nouveaux films, de nouveaux réalisateurs et de nouvelles histoires.",
        },
        {
          title: 'Les jeux vidéo',
          text: "Une de mes principal passion, comme tout bon informaticien, est le monde du jeu vidéo. J'aime jouer et explorer de nouvelles histoires.",
        },
      ],
    },
    skillsPreview: {
      kicker: 'Compétences',
      title: 'De la Conception à la mise en production.',
      text: 'Je combine développement et exploitation pour construire des produits fiables et faciles à faire évoluer.',
      action: 'Découvrir mes compétences',
    },
    skills: {
      kicker: 'Compétences',
      title:
        'Les compétences que je mobilise pour concevoir et livrer des produits fiables.',
      development: {
        title: 'Développement',
        groups: [
          ['Bas niveau', ['C', 'Rust', 'GO', 'C++']],
          [
            'Haut niveau',
            [
              'Java',
              'Spring Boot',
              'Python',
              'bash',
              'Programmation orientée objet',
              'Programmation fonctionnelle',
            ],
          ],
          [
            'Web',
            [
              'Node.js',
              'TypeScript',
              'JavaScript',
              'React',
              'Angular',
              'Next.js',
              'Tailwind CSS',
              'Tanstack',
              '',
            ],
          ],
        ],
      },
      entries: [
        [
          'systemes, cloud, virtualisation',
          [
            'Linux',
            'Debian',
            'Ubuntu',
            'Arch Linux',
            'Windows',
            'Proxmox',
            'VMware',
            'VirtualBox',
            'AWS',
            'clever cloud',
          ],
        ],
        [
          'Conteneurs & déploiement',
          [
            'Docker',
            'Docker Compose',
            'Kubernetes',
            'Kustomize',
            'Helm',
            'Terraform',
            'Ansible',
            'gitlab-ci',
            'GitHub Actions',
            'argoCD',
          ],
        ],
        [
          'Bases de données',
          [
            'SQL',
            'PL-SQL',
            'NoSQL',
            'ORM',
            'Query builder',
            'Migrations',
            'Population',
            'Indexation',
          ],
        ],
        [
          'Observabilité',
          [
            'OpenTelemetry',
            'Prometheus',
            'Grafana',
            'Loki',
            'Alerting',
            'elasticsearch',
            'Kibana',
            'logstash',
            'Traefik',
            'Cadvizor',
          ],
        ],
        [
          'Qualité & sécurité',
          [
            'Postman',
            'ESLint',
            'Prettier',
            'SonarQube',
            'OxFormat',
            'OxLint',
            'Dependabot',
            'Renovate',
            'Trivy',
            'Jfrog Xray',
          ],
        ],
        [
          'Gestion de projet',
          [
            'Agile',
            'Scrum',
            'Safe',
            'cycle en V',
            'Emergent design',
            'Comptabilité (intermédiaire)',
            'Coordination d’équipe',
            'Droit du numérique (RGPD, CNIL, propriété intellectuelle)',
          ],
        ],
        [
          'IA & tooling',
          [
            'codex',
            'claude code',
            'open clo',
            'Skills engineering',
            'MCP',
            'n8n',
          ],
        ],
      ],
    },
    education: {
      kicker: 'Parcours',
      title: 'Mes Etudes',
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
    projects: {
      kicker: 'Projets',
      title: 'Des produits pensés de la première ligne à la production.',
      viewDetails: 'Voir le détail',
      hideDetails: 'Masquer le détail',
      viewGithub: 'Voir sur GitHub',
      filters: {
        label: 'Filtrer les projets',
        all: 'Tous',
        school: 'Scolaire',
        personal: 'Personnel',
        openSource: 'Open source',
        empty: 'Aucun projet dans cette catégorie pour le moment.',
      },
      entries: [
        {
          title: 'Portfolio Léo Torres',
          context: 'Portfolio personnel',
          theme: 'personal',
          githubUrl: 'https://github.com/laflut3/Portfolio-Leo-Torres',
          text: 'Un portfolio bilingue conçu comme une expérience éditoriale, avec un socle React, TypeScript et une navigation localisée.',
          details:
            'Le projet réunit une identité visuelle personnelle, une gestion de thème clair, sombre et système, ainsi que des parcours français et anglais conçus pour le référencement.',
          stack: ['React', 'TypeScript', 'TanStack Router', 'Docker'],
        },
        {
          title: 'Hub LeMontage',
          context: 'Plateforme collaborative',
          theme: 'openSource',
          githubUrl: null,
          text: 'Une plateforme pensée pour centraliser les usages d’équipe, avec une attention portée à la qualité, aux déploiements et à l’observabilité.',
          details:
            'Le travail couvre les flux produit et les fondations techniques : API typée, conteneurisation, déploiement GitOps et instrumentation des parcours importants.',
          stack: ['React', 'Fastify', 'Kubernetes', 'OpenTelemetry'],
        },
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
      name: 'Léo Torres',
      title: 'Développement logiciel & DevOps',
    },
    metadata: {
      profile: [
        'Portfolio Léo Torres — Profil',
        'Profil, compétences techniques, parcours et projets de Léo Torres, étudiant ingénieur orienté développement et DevOps.',
      ],
      skills: [
        'Compétences — Portfolio Léo Torres',
        'Compétences techniques de Léo Torres : DevOps, cloud, automatisation et développement.',
      ],
      projects: [
        'Projets — Portfolio Léo Torres',
        'Une sélection de projets de Léo Torres autour du logiciel, du DevOps et de l’infrastructure.',
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
      projects: 'Projects',
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
      title: 'My passions',
      entries: [
        {
          title: 'Astrophysics & space',
          text: 'I enjoy discovering, exploring and understanding what few people grasp. The phenomena, scales and systems that shape our universe fascinate me.',
        },
        {
          title: 'Aeronautics',
          text: 'This passion began with the BIA during secondary school. What started as a diploma became a lasting interest in flight culture and aviation.',
        },
        {
          title: 'Sport (boxing, hiking, climbing and gym)',
          text: 'I am an active person: I enjoy moving, walking, exploring and discovering new places. Sport helps me reset and recharge.',
        },
        {
          title: 'Cinema',
          text: 'Since childhood, I have loved cinema. I enjoy discovering new films, directors and stories.',
        },
        {
          title: 'Video games',
          text: 'One of my main passions is video games. I enjoy playing and exploring new stories.',
        },
      ],
    },
    skillsPreview: {
      kicker: 'Skills',
      title: 'From design to production.',
      text: 'I combine development and operations to build reliable products that are easy to evolve.',
      action: 'Explore my skills',
    },
    skills: {
      kicker: 'Skills',
      title: 'The skills I use to design and deliver reliable products.',
      development: {
        title: 'Development',
        groups: [
          ['Low-level', ['C', 'Rust', 'Go', 'C++']],
          [
            'High-level',
            [
              'Java',
              'Spring Boot',
              'Python',
              'Bash',
              'Object-oriented programming',
              'Functional programming',
            ],
          ],
          [
            'Web',
            [
              'Node.js',
              'TypeScript',
              'JavaScript',
              'React',
              'Angular',
              'Next.js',
              'Tailwind CSS',
              'TanStack',
            ],
          ],
        ],
      },
      entries: [
        [
          'Systems, cloud & virtualization',
          [
            'Linux',
            'Debian',
            'Ubuntu',
            'Arch Linux',
            'Windows',
            'Proxmox',
            'VMware',
            'VirtualBox',
            'AWS',
            'Clever Cloud',
          ],
        ],
        [
          'Containers & deployment',
          [
            'Docker',
            'Docker Compose',
            'Kubernetes',
            'Kustomize',
            'Helm',
            'Terraform',
            'Ansible',
            'GitLab CI',
            'GitHub Actions',
            'Argo CD',
          ],
        ],
        [
          'Databases',
          [
            'SQL',
            'PL/SQL',
            'NoSQL',
            'ORMs',
            'Query builders',
            'Migrations',
            'Seeding',
            'Indexing',
          ],
        ],
        [
          'Observability',
          [
            'OpenTelemetry',
            'Prometheus',
            'Grafana',
            'Loki',
            'Alerting',
            'Elasticsearch',
            'Kibana',
            'Logstash',
            'Traefik',
            'cAdvisor',
          ],
        ],
        [
          'Quality & security',
          [
            'Postman',
            'ESLint',
            'Prettier',
            'SonarQube',
            'OxFmt',
            'OxLint',
            'Dependabot',
            'Renovate',
            'Trivy',
            'JFrog Xray',
          ],
        ],
        [
          'Project management',
          [
            'Agile',
            'Scrum',
            'SAFe',
            'V-model',
            'Emergent design',
            'Accounting (intermediate)',
            'Team coordination',
            'Digital law (GDPR, CNIL, intellectual property)',
          ],
        ],
        [
          'AI & tooling',
          [
            'Codex',
            'Claude Code',
            'Open Claw',
            'Skills engineering',
            'MCP',
            'n8n',
          ],
        ],
      ],
    },
    education: {
      kicker: 'Education',
      title: 'My education',
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
    projects: {
      kicker: 'Projects',
      title: 'Products designed from the first line of code to production.',
      viewDetails: 'View details',
      hideDetails: 'Hide details',
      viewGithub: 'View on GitHub',
      filters: {
        label: 'Filter projects',
        all: 'All',
        school: 'Academic',
        personal: 'Personal',
        openSource: 'Open source',
        empty: 'No projects in this category yet.',
      },
      entries: [
        {
          title: 'Léo Torres Portfolio',
          context: 'Personal portfolio',
          theme: 'personal',
          githubUrl: 'https://github.com/laflut3/Portfolio-Leo-Torres',
          text: 'A bilingual portfolio designed as an editorial experience, built with React, TypeScript and localized navigation.',
          details:
            'The project combines a personal visual identity, light, dark and system theme handling, and French and English routes designed for search visibility.',
          stack: ['React', 'TypeScript', 'TanStack Router', 'Docker'],
        },
        {
          title: 'Hub LeMontage',
          context: 'Collaborative platform',
          theme: 'openSource',
          githubUrl: null,
          text: 'A platform designed to centralize team workflows, with particular attention to quality, deployments and observability.',
          details:
            'The work covers product workflows and technical foundations: a typed API, containerization, GitOps deployments and instrumentation for important user journeys.',
          stack: ['React', 'Fastify', 'Kubernetes', 'OpenTelemetry'],
        },
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
      name: 'Léo Torres',
      title: 'Software development & DevOps',
    },
    metadata: {
      profile: [
        'Leo Torres Portfolio — Profile',
        'Profile, technical skills, education and projects of Leo Torres, a computer engineering student focused on development and DevOps.',
      ],
      skills: [
        'Skills — Leo Torres Portfolio',
        'Leo Torres technical skills: DevOps, cloud, automation and software development.',
      ],
      projects: [
        'Projects — Leo Torres Portfolio',
        'A selection of Leo Torres projects focused on software, DevOps and infrastructure.',
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
