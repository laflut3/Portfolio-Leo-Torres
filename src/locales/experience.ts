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
          role: 'Dev Open',
          company: 'Crédit Agricole Technologies et Services',
          type: 'Contrat en alternance',
          team: 'Squad Identification & Authentification',
          period: 'Sept. 2024 — sept. 2025',
          location: 'Montpellier, Occitanie · Hybride',
          description:
            'J’ai travaillé en tant que Dev Open sur du développement back-end en Java et Spring Boot. Cette expérience s’est déroulée dans la squad Identification & Authentification, de septembre 2024 à septembre 2025.',
          skillsLabel: 'Compétences utilisées',
          skills: ['Java', 'Spring Boot', 'Développement back-end'],
        },
        {
          role: 'Dev Open',
          company: 'Crédit Agricole Technologies et Services',
          type: 'Contrat en alternance',
          team: 'Squad Accès fiabilisé des partenaires',
          period: 'Oct. 2025 — aujourd’hui',
          location: 'Montpellier, Occitanie · Hybride',
          description:
            'Je travaille en tant que Dev Open sur du développement back-end en Java et Spring Boot. Depuis octobre 2025, cette expérience se poursuit dans la squad Accès fiabilisé des partenaires.',
          skillsLabel: 'Compétences utilisées',
          skills: ['Java', 'Spring Boot', 'Développement back-end'],
        },
        {
          role: 'Administrateur réseau et systèmes',
          company: 'Discomp Électronique',
          type: 'Stage',
          team: 'Infrastructure informatique',
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
          team: 'Identification & Authentication squad',
          period: 'Sept. 2024 — Sept. 2025',
          location: 'Montpellier, Occitanie · Hybrid',
          description:
            'I worked as an Open Developer on Java and Spring Boot back-end development. This experience took place in the Identification & Authentication squad, from September 2024 to September 2025.',
          skillsLabel: 'Skills used',
          skills: ['Java', 'Spring Boot', 'Back-end development'],
        },
        {
          role: 'Open Developer',
          company: 'Crédit Agricole Technologies et Services',
          type: 'Work-study contract',
          team: 'Partner Access Reliability squad',
          period: 'Oct. 2025 — present',
          location: 'Montpellier, Occitanie · Hybrid',
          description:
            'I work as an Open Developer on Java and Spring Boot back-end development. Since October 2025, this experience has continued in the Partner Access Reliability squad.',
          skillsLabel: 'Skills used',
          skills: ['Java', 'Spring Boot', 'Back-end development'],
        },
        {
          role: 'Network and systems administrator',
          company: 'Discomp Électronique',
          type: 'Internship',
          team: 'IT infrastructure',
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
