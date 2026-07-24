import type { Locale } from '@/i18n'

export const experience = {
  'fr-fr': {
    experience: {
      kicker: 'Expérience professionnelle',
      title: 'Mes expériences en entreprise.',
      text: 'Les expériences qui m’ont permis de travailler sur le développement, les systèmes et les réseaux.',
      showMore: 'Voir plus',
      showLess: 'Voir moins',
      entries: [
        {
          role: 'Développeur Open',
          company: 'Crédit Agricole Technologies et Services',
          type: 'Contrat en alternance',
          period: 'Sept. 2024 — aujourd’hui',
          location: 'Montpellier, Occitanie · Hybride',
          description:
            'En tant que développeur back-end au sein de CA-TS, je travaille sur des projets utilisant Java et le framework Spring Boot. Mon rôle consiste à concevoir et faire évoluer des services en lien avec les besoins des équipes.',
          skillsLabel: 'Compétences utilisées',
          skills: ['Java', 'Spring Boot', 'Développement back-end'],
        },
        {
          role: 'Administrateur réseau et systèmes',
          company: 'Discomp Électronique',
          type: 'Stage',
          period: 'Avr. 2024 — juin 2024',
          location: 'Montarnaud, Occitanie · Sur site',
          description:
            'Ma mission était de recréer à partir de zéro le réseau informatique de Discomp Électronique pour l’adapter à son nouveau système d’information. Cela a commencé par l’achat de matériel de bureau et de composants réseau, puis par l’installation et la configuration de l’infrastructure.',
          skillsLabel: 'Compétences utilisées',
          skills: ['Réseaux', 'Systèmes', 'Sécurité réseau'],
        },
      ],
    },
    metadata: {
      experience: [
        'Expérience professionnelle — Portfolio Léo Torres',
        'Expériences professionnelles de Léo Torres : développement Java et Spring Boot, administration réseau et systèmes.',
      ],
    },
  },
  'en-us': {
    experience: {
      kicker: 'Professional experience',
      title: 'My professional experience.',
      text: 'The experiences through which I have worked on development, systems and networking.',
      showMore: 'See more',
      showLess: 'See less',
      entries: [
        {
          role: 'Open Developer',
          company: 'Crédit Agricole Technologies et Services',
          type: 'Work-study contract',
          period: 'Sept. 2024 — present',
          location: 'Montpellier, Occitanie · Hybrid',
          description:
            'As a back-end developer at CA-TS, I work on projects using Java and the Spring Boot framework. My role involves designing and improving services to meet the needs of the teams.',
          skillsLabel: 'Skills used',
          skills: ['Java', 'Spring Boot', 'Back-end development'],
        },
        {
          role: 'Network and systems administrator',
          company: 'Discomp Électronique',
          type: 'Internship',
          period: 'Apr. 2024 — Jun. 2024',
          location: 'Montarnaud, Occitanie · On-site',
          description:
            'My assignment was to rebuild Discomp Électronique’s network from scratch to adapt it to its new information system. It started with purchasing office equipment and network components, followed by installing and configuring the infrastructure.',
          skillsLabel: 'Skills used',
          skills: ['Networking', 'Systems', 'Network security'],
        },
      ],
    },
    metadata: {
      experience: [
        'Professional experience — Leo Torres Portfolio',
        'Leo Torres professional experience in Java and Spring Boot development, networking and systems administration.',
      ],
    },
  },
} satisfies Record<Locale, object>
