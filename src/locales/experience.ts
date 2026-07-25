import type { Locale } from '@/i18n'

export const experience = {
  'fr-fr': {
    experience: {
      kicker: 'Expérience professionnelle',
      title: 'Mes expériences en entreprise.',
      text: 'Des expériences en développement, systèmes et réseaux.',
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
            'J’ai travaillé comme Dev Open sur du développement back-end en Java et Spring Boot, au sein de la squad Identification & Authentification, de septembre 2024 à septembre 2025.',
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
            'Je travaille comme Dev Open sur du développement back-end en Java et Spring Boot, dans la squad Accès fiabilisé des partenaires depuis octobre 2025.',
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
          description: `Ma mission était de refondre de zéro le système d’information de Discomp Électronique afin de le moderniser.

J’ai d’abord fait un état des lieux du système d’information et trié les anciennes archives, fichiers et dossiers papier.

J’ai ensuite refondu l’ensemble du parc informatique, notamment avec l’achat de nouveaux équipements de bureau. J’ai configuré et sécurisé les postes sur le réseau, ainsi que l’ordinateur portable distant.

J’ai mis en place un système de sessions par machine, permettant aux utilisateurs de se connecter à Azure Active Directory. Les employés n’étaient ainsi plus dépendants d’un poste précis.

J’ai également mis en place le Wi-Fi invité, configuré les machines de la salle de réunion et documenté le travail réalisé.`,
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
      text: 'Experience in development, systems and networking.',
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
            'I worked as an Open Developer on Java and Spring Boot back-end development in the Identification & Authentication squad from September 2024 to September 2025.',
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
            'I have worked as an Open Developer on Java and Spring Boot back-end development in the Partner Access Reliability squad since October 2025.',
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
          description: `My assignment was to rebuild Discomp Électronique’s information system from scratch in order to modernize it.

I first assessed the existing information system and sorted the old archives, files and paper folders.

I then rebuilt the entire IT estate, including purchasing new office equipment. I configured and secured the workstations on the network, as well as the remote laptop.

I set up a per-machine session system allowing users to sign in to Azure Active Directory. Employees were therefore no longer dependent on a specific workstation.

I also set up guest Wi-Fi, configured the meeting-room machines and documented the work carried out.`,
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
