import type { Locale } from '@/i18n'

export const projects = {
  'fr-fr': {
    projects: {
      kicker: 'Projets',
      title: 'Mes projets',
      viewDetails: 'Voir le détail',
      hideDetails: 'Masquer le détail',
      viewGithub: 'Voir le dépôt',
      labels: { categories: 'Domaines', languages: 'Langages' },
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
          title: 'Pixie',
          themes: ['openSource'],
          categories: ['Logiciel système', 'Backend', 'Infrastructure web'],
          languages: ['Rust'],
          githubUrl: 'https://github.com/laflut3/Pixie',
          text: 'Serveur HTTP statique écrit en Rust.',
          details:
            'Un projet open source centré sur un serveur web léger, distribué notamment via Docker.',
          stack: ['Rust', 'HTTP', 'Docker'],
        },
        {
          title: 'Let Note',
          themes: ['personal', 'openSource'],
          categories: ['Application web', 'Éducation', 'Logiciel'],
          languages: ['TypeScript', 'Rust'],
          githubUrl: 'https://github.com/laflut3/let-note',
          text: 'Application de suivi universitaire inspirée de Pronote.',
          details:
            'Le projet associe une interface React avec Vite et un backend Rust, avec une documentation de déploiement local et Kubernetes.',
          stack: ['React', 'Vite', 'Rust', 'Kubernetes'],
        },
        {
          title: 'DO Royal',
          themes: ['school'],
          categories: ['Jeu vidéo', 'Multijoueur', 'Application web'],
          languages: ['Java', 'JavaScript'],
          githubUrl: 'https://github.com/laflut3/DO_royal',
          text: 'Jeu de battle royale multijoueur réalisé dans un cadre scolaire.',
          details:
            'Il réunit un backend Java et un frontend JavaScript autour d’une carte, d’une zone de jeu, de personnages et d’un mode spectateur.',
          stack: ['Java', 'JavaScript', 'Jeu multijoueur'],
        },
        {
          title: 'Rust-based project',
          themes: ['openSource'],
          categories: ['Outillage développeur', 'Backend', 'DevOps'],
          languages: ['Rust'],
          githubUrl: 'https://github.com/laflut3/Rust-based-project',
          text: 'Socle reproductible pour démarrer un service Rust.',
          details:
            'Le dépôt structure l’intégration continue, la construction de conteneurs, les releases et les contrôles de sécurité d’un service Rust.',
          stack: ['Rust', 'CI/CD', 'Docker', 'Sécurité'],
        },
        {
          title: 'Portfolio Léo Torres',
          themes: ['personal'],
          categories: ['Site web', 'Portfolio', 'Expérience interactive'],
          languages: ['TypeScript'],
          githubUrl: 'https://github.com/laflut3/Portfolio-Leo-Torres',
          text: 'Portfolio professionnel localisé, conçu comme une expérience éditoriale.',
          details:
            'Il présente le parcours et les projets de Léo Torres avec React, TypeScript, une navigation localisée et une préparation au déploiement.',
          stack: ['React', 'TypeScript', 'Vite', 'i18n'],
        },
        {
          title: 'docs-LeMontage',
          themes: ['personal'],
          categories: ['Site web', 'Documentation technique', 'DevOps'],
          languages: ['TypeScript'],
          githubUrl: 'https://github.com/FleoThing/docs-LeMontage',
          text: 'Site de présentation et de documentation publique de l’écosystème LeMontage.',
          details:
            'Une application React localisée avec TanStack Router, Tailwind CSS et shadcn, construite dans une image Nginx non-root puis déployée avec Helm sur Kubernetes.',
          stack: [
            'React',
            'TanStack Router',
            'Tailwind CSS',
            'Helm',
            'Kubernetes',
          ],
        },
        {
          title: 'Hub LeMontage',
          themes: ['personal'],
          categories: ['Application web', 'Collaboration', 'DevOps'],
          languages: ['TypeScript'],
          githubUrl: 'https://github.com/FleoThing/Hub-LeMontage',
          text: 'Plateforme collaborative full-stack de l’écosystème LeMontage.',
          details:
            'Monorepo React et Fastify, avec API validée par Zod, persistance PostgreSQL via Kysely, déploiement local Compose et livraison Kubernetes pilotée par Helm et Argo CD.',
          stack: [
            'React',
            'Fastify',
            'PostgreSQL',
            'Docker Compose',
            'Helm',
            'Argo CD',
          ],
        },
        {
          title: 'LeMontage',
          themes: ['openSource'],
          categories: ['Logiciel', 'Automatisation', 'Création vidéo'],
          languages: ['Python'],
          githubUrl: 'https://github.com/FleoThing/LeMontage',
          text: 'Moteur de pipelines YAML local-first pour transformer des vidéos longues en clips sous-titrés.',
          details:
            'Il orchestre localement transcription, détection d’extraits, découpe, sous-titrage et export pour les formats vidéo courts.',
          stack: ['Python', 'YAML', 'FFmpeg', 'Whisper', 'Docker'],
        },
        {
          title: 'La Confrérie du Manchot',
          themes: ['school'],
          categories: ['Jeu web 3D', 'Éducation', 'Événementiel'],
          languages: ['JavaScript'],
          githubUrl: 'https://github.com/laflut3/NDI',
          text: 'Jeu éducatif 3D créé pour la Nuit de l’Info 2025.',
          details:
            'Le jeu sensibilise à l’indépendance numérique, aux logiciels libres et à la sobriété numérique par des quêtes et des quiz.',
          stack: ['JavaScript', '3D', 'Jeu web', 'Nuit de l’Info'],
        },
        {
          title: 'Barenetes',
          themes: ['school', 'openSource'],
          categories: ['Logiciel système', 'Orchestration', 'Infrastructure'],
          languages: ['Rust'],
          githubUrl: 'https://github.com/do-2k25-28/Barenetes',
          text: 'Réimplémentation minimale et pédagogique de Kubernetes en Rust.',
          details:
            'Le projet décompose les primitives du plan de contrôle en composants gRPC : API, agent, ordonnanceur, CLI et réseau.',
          stack: ['Rust', 'Kubernetes', 'gRPC', 'Protobuf'],
        },
        {
          title: 'Forum Angular',
          themes: ['school'],
          categories: ['Application web', 'Réseau social', 'Apprentissage'],
          languages: ['TypeScript'],
          githubUrl: 'https://github.com/laflut3/forum_angular',
          text: 'Projet d’apprentissage autour du développement d’un forum avec Angular.',
          details:
            'Dépôt scolaire référencé pour illustrer l’apprentissage du framework Angular.',
          stack: ['Angular', 'TypeScript', 'Apprentissage'],
        },
        {
          title: 'Omni',
          themes: ['school'],
          categories: [
            'Application web',
            'Outils collaboratifs',
            'Projet de groupe',
          ],
          languages: [],
          githubUrl:
            'https://gitlab.polytech.umontpellier.fr/projet-groupe/omni',
          text: 'Projet scolaire de reproduction d’outils collaboratifs inspirés de Google.',
          details:
            'Il explore la conception d’outils de productivité et de collaboration dans le cadre d’un projet de groupe.',
          stack: ['Projet de groupe', 'Outils collaboratifs'],
        },
        {
          title: 'Projet DO-cument',
          themes: ['school'],
          categories: [
            'Application web',
            'Gestion de fichiers',
            'Projet de groupe',
          ],
          languages: [],
          githubUrl:
            'https://gitlab.polytech.umontpellier.fr/projet-groupe/projet-DO-cument',
          text: 'Projet scolaire de reproduction d’un service de stockage et de partage de fichiers.',
          details:
            'Il s’inscrit dans un travail de groupe autour des usages et mécanismes d’un drive.',
          stack: ['Projet de groupe', 'Partage de fichiers'],
        },
        {
          title: 'Heart disease analysis',
          themes: ['school'],
          categories: ['Science des données', 'Santé', 'Analyse statistique'],
          languages: ['R'],
          githubUrl: 'https://github.com/DimMarr/heart-disease-analysis',
          text: 'Analyse de données sur les maladies cardiaques dans une démarche d’apprentissage de R.',
          details:
            'Projet scolaire consacré à l’exploration et à l’analyse de données de santé.',
          stack: ['R', 'Analyse de données', 'Santé'],
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
      title: 'My projects',
      viewDetails: 'View details',
      hideDetails: 'Hide details',
      viewGithub: 'View repository',
      labels: { categories: 'Domains', languages: 'Languages' },
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
          title: 'Pixie',
          themes: ['openSource'],
          categories: ['Systems software', 'Backend', 'Web infrastructure'],
          languages: ['Rust'],
          githubUrl: 'https://github.com/laflut3/Pixie',
          text: 'A static HTTP server written in Rust.',
          details:
            'An open-source project focused on a lightweight web server, distributed in particular through Docker.',
          stack: ['Rust', 'HTTP', 'Docker'],
        },
        {
          title: 'Let Note',
          themes: ['personal', 'openSource'],
          categories: ['Web application', 'Education', 'Software'],
          languages: ['TypeScript', 'Rust'],
          githubUrl: 'https://github.com/laflut3/let-note',
          text: 'A university tracking application inspired by Pronote.',
          details:
            'The project combines a React and Vite interface with a Rust backend, plus local and Kubernetes deployment documentation.',
          stack: ['React', 'Vite', 'Rust', 'Kubernetes'],
        },
        {
          title: 'DO Royal',
          themes: ['school'],
          categories: ['Video game', 'Multiplayer', 'Web application'],
          languages: ['Java', 'JavaScript'],
          githubUrl: 'https://github.com/laflut3/DO_royal',
          text: 'A multiplayer battle royale game developed as an academic project.',
          details:
            'It combines a Java backend and a JavaScript frontend around a map, play zone, characters and spectator mode.',
          stack: ['Java', 'JavaScript', 'Multiplayer game'],
        },
        {
          title: 'Rust-based project',
          themes: ['openSource'],
          categories: ['Developer tooling', 'Backend', 'DevOps'],
          languages: ['Rust'],
          githubUrl: 'https://github.com/laflut3/Rust-based-project',
          text: 'A reproducible foundation for starting a Rust service.',
          details:
            'The repository structures CI, container builds, releases and security checks for a Rust service.',
          stack: ['Rust', 'CI/CD', 'Docker', 'Security'],
        },
        {
          title: 'Léo Torres Portfolio',
          themes: ['personal'],
          categories: ['Website', 'Portfolio', 'Interactive experience'],
          languages: ['TypeScript'],
          githubUrl: 'https://github.com/laflut3/Portfolio-Leo-Torres',
          text: 'A localized professional portfolio designed as an editorial experience.',
          details:
            'It presents Léo Torres’s background and projects with React, TypeScript, localized navigation and deployment readiness.',
          stack: ['React', 'TypeScript', 'Vite', 'i18n'],
        },
        {
          title: 'docs-LeMontage',
          themes: ['personal'],
          categories: ['Website', 'Technical documentation', 'DevOps'],
          languages: ['TypeScript'],
          githubUrl: 'https://github.com/FleoThing/docs-LeMontage',
          text: 'The public presentation and documentation website for the LeMontage ecosystem.',
          details:
            'A localized React application with TanStack Router, Tailwind CSS and shadcn, built into a non-root Nginx image and deployed to Kubernetes with Helm.',
          stack: [
            'React',
            'TanStack Router',
            'Tailwind CSS',
            'Helm',
            'Kubernetes',
          ],
        },
        {
          title: 'Hub LeMontage',
          themes: ['personal'],
          categories: ['Web application', 'Collaboration', 'DevOps'],
          languages: ['TypeScript'],
          githubUrl: 'https://github.com/FleoThing/Hub-LeMontage',
          text: 'A full-stack collaborative platform in the LeMontage ecosystem.',
          details:
            'A React and Fastify monorepo with a Zod-validated API, PostgreSQL persistence through Kysely, local Compose deployment and Kubernetes delivery driven by Helm and Argo CD.',
          stack: [
            'React',
            'Fastify',
            'PostgreSQL',
            'Docker Compose',
            'Helm',
            'Argo CD',
          ],
        },
        {
          title: 'LeMontage',
          themes: ['openSource'],
          categories: ['Software', 'Automation', 'Video creation'],
          languages: ['Python'],
          githubUrl: 'https://github.com/FleoThing/LeMontage',
          text: 'A local-first YAML pipeline engine that turns long videos into captioned clips.',
          details:
            'It orchestrates transcription, clip detection, cutting, captions and exports locally for short-form video.',
          stack: ['Python', 'YAML', 'FFmpeg', 'Whisper', 'Docker'],
        },
        {
          title: 'The Penguin Brotherhood',
          themes: ['school'],
          categories: ['3D web game', 'Education', 'Event project'],
          languages: ['JavaScript'],
          githubUrl: 'https://github.com/laflut3/NDI',
          text: 'A 3D educational game created for Nuit de l’Info 2025.',
          details:
            'The game raises awareness of digital independence, free software and digital sobriety through quests and quizzes.',
          stack: ['JavaScript', '3D', 'Web game', 'Nuit de l’Info'],
        },
        {
          title: 'Barenetes',
          themes: ['school', 'openSource'],
          categories: ['Systems software', 'Orchestration', 'Infrastructure'],
          languages: ['Rust'],
          githubUrl: 'https://github.com/do-2k25-28/Barenetes',
          text: 'A minimal, educational reimplementation of Kubernetes in Rust.',
          details:
            'The project breaks down control-plane primitives into gRPC components: API, agent, scheduler, CLI and networking.',
          stack: ['Rust', 'Kubernetes', 'gRPC', 'Protobuf'],
        },
        {
          title: 'Angular Forum',
          themes: ['school'],
          categories: ['Web application', 'Social network', 'Learning'],
          languages: ['TypeScript'],
          githubUrl: 'https://github.com/laflut3/forum_angular',
          text: 'A learning project focused on building a forum with Angular.',
          details:
            'An academic repository that illustrates learning the Angular framework.',
          stack: ['Angular', 'TypeScript', 'Learning'],
        },
        {
          title: 'Omni',
          themes: ['school'],
          categories: [
            'Web application',
            'Collaborative tools',
            'Group project',
          ],
          languages: [],
          githubUrl:
            'https://gitlab.polytech.umontpellier.fr/projet-groupe/omni',
          text: 'An academic project recreating collaborative tools inspired by Google.',
          details:
            'It explores the design of productivity and collaboration tools as part of a group project.',
          stack: ['Group project', 'Collaborative tools'],
        },
        {
          title: 'Projet DO-cument',
          themes: ['school'],
          categories: ['Web application', 'File management', 'Group project'],
          languages: [],
          githubUrl:
            'https://gitlab.polytech.umontpellier.fr/projet-groupe/projet-DO-cument',
          text: 'An academic project recreating a file storage and sharing service.',
          details:
            'It is a group project around the uses and mechanics of a drive.',
          stack: ['Group project', 'File sharing'],
        },
        {
          title: 'Heart disease analysis',
          themes: ['school'],
          categories: ['Data science', 'Health', 'Statistical analysis'],
          languages: ['R'],
          githubUrl: 'https://github.com/DimMarr/heart-disease-analysis',
          text: 'Heart disease data analysis as part of learning R.',
          details:
            'An academic project focused on exploring and analyzing health data.',
          stack: ['R', 'Data analysis', 'Health'],
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
