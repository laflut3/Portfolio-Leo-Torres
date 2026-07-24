import type { Locale } from '@/i18n'

export const contact = {
  'fr-fr': {
    contact: {
      kicker: 'Contact',
      title: 'On échange ?',
      intro:
        'Un projet, une opportunité ou simplement une question : tu peux me joindre directement ici.',
      note: 'Le plus simple reste l’e-mail. Je te répondrai dès que possible.',
      github: 'GitHub',
      githubHandle: 'github.com/laflut3',
      linkedin: 'LinkedIn',
      linkedinHandle: 'linkedin.com/in/leo-torres-804687264',
      emailLabel: 'E-mail',
      email: 'leo0609leo@gmail.com',
      phoneLabel: 'Téléphone',
      phone: '+33 7 83 08 49 92',
      copy: 'Copier',
      copied: 'Copié',
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
      title: 'Let’s talk.',
      intro:
        'For a project, an opportunity or simply a question, you can reach me directly here.',
      note: 'Email is the easiest way to reach me. I will get back to you as soon as I can.',
      github: 'GitHub',
      githubHandle: 'github.com/laflut3',
      linkedin: 'LinkedIn',
      linkedinHandle: 'linkedin.com/in/leo-torres-804687264',
      emailLabel: 'Email',
      email: 'leo0609leo@gmail.com',
      phoneLabel: 'Phone',
      phone: '+33 7 83 08 49 92',
      copy: 'Copy',
      copied: 'Copied',
    },
    metadata: {
      contact: [
        'Contact — Leo Torres Portfolio',
        'Contact Leo Torres for a software, DevOps or infrastructure project.',
      ],
    },
  },
} satisfies Record<Locale, object>
