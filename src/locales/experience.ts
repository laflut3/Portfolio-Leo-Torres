import type { Locale } from '@/i18n'

export const experience = {
  'fr-fr': {
    experience: {
      kicker: 'Expérience professionnelle',
      title: 'Mes expériences en entreprise.',
      text: 'Les expériences qui m’ont permis de travailler sur le développement, les systèmes et les réseaux.',
      entries: [
        {
          role: 'Développeur Open',
          company: 'Crédit Agricole Technologies et Services',
          type: 'Contrat en alternance',
          period: 'Sept. 2024 — aujourd’hui',
          location: 'Montpellier, Occitanie · Hybride',
          description:
            'Je travaille comme développeur back-end sur des projets Java et Spring Boot.',
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
            'J’ai remis à niveau le réseau informatique de l’entreprise pour l’adapter à son nouveau système d’information.',
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
      entries: [
        {
          role: 'Open Developer',
          company: 'Crédit Agricole Technologies et Services',
          type: 'Work-study contract',
          period: 'Sept. 2024 — present',
          location: 'Montpellier, Occitanie · Hybrid',
          description:
            'I work as a back-end developer on Java and Spring Boot projects.',
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
            'I upgraded the company network to adapt it to its new information system.',
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
