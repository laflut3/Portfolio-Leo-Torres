import type { Locale } from '@/i18n'

export const contact = {
  'fr-fr': {
    contact: {
      kicker: 'Contact',
      title: 'Me contacter',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'leo0609leo@gmail.com',
    },
    metadata: {
      contact: [
        'Contact — Portfolio Léo Torres',
        'Contacter Léo Torres pour un projet logiciel, DevOps ou infrastructure.',
      ],
    },
  },
  'en-us': {
    contact: {
      kicker: 'Contact',
      title:
        "Let's talk infrastructure, automation or DevOps-oriented projects.",
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'leo0609leo@gmail.com',
    },
    metadata: {
      contact: [
        'Contact — Leo Torres Portfolio',
        'Contact Leo Torres for a software, DevOps or infrastructure project.',
      ],
    },
  },
} satisfies Record<Locale, object>
