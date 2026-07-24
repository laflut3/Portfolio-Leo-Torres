import type { Locale } from '@/i18n'

export const common = {
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
      closeMenu: 'Fermer la navigation',
    },
    footer: {
      description:
        'Portfolio personnel de Léo Torres ingénieur en informatique / DevOps',
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
      closeMenu: 'Close navigation',
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
  },
} satisfies Record<Locale, object>
