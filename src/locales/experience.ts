import type { Locale } from '@/i18n'

export const experience = {
  'fr-fr': {
    experience: {
      kicker: 'Expérience professionnelle',
      title: 'Mes expériences en entreprise.',
      text: 'Cette page présentera mes expériences, mes responsabilités et les projets menés au sein des équipes que j’ai rejointes.',
    },
    metadata: {
      experience: [
        'Expérience professionnelle — Portfolio Léo Torres',
        'Les expériences professionnelles, responsabilités et projets de Léo Torres.',
      ],
    },
  },
  'en-us': {
    experience: {
      kicker: 'Professional experience',
      title: 'My professional experience.',
      text: 'This page will present my professional experience, responsibilities and projects completed within the teams I have joined.',
    },
    metadata: {
      experience: [
        'Professional experience — Leo Torres Portfolio',
        'Leo Torres professional experience, responsibilities and projects.',
      ],
    },
  },
} satisfies Record<Locale, object>
