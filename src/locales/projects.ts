import type { Locale } from '@/i18n'

export const projects = {
  'fr-fr': {
    projects: {
      kicker: 'Projets',
      title: 'Mes projets',
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
    metadata: {
      projects: [
        'Projets — Portfolio Léo Torres',
        'Une sélection de projets de Léo Torres autour du logiciel, du DevOps et de l’infrastructure.',
      ],
    },
  },
  'en-us': {
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
    metadata: {
      projects: [
        'Projects — Leo Torres Portfolio',
        'A selection of Leo Torres projects focused on software, DevOps and infrastructure.',
      ],
    },
  },
} satisfies Record<Locale, object>
