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
      form: {
        kicker: 'Message direct',
        title: 'Écris-moi quelques lignes.',
        text: 'Explique-moi simplement pourquoi tu me contactes. Je recevrai ton message par e-mail.',
        name: 'Nom',
        namePlaceholder: 'Ton nom',
        email: 'E-mail',
        emailPlaceholder: 'ton@email.com',
        message: 'Message',
        messagePlaceholder: 'Bonjour Léo, …',
        submit: 'Envoyer le message',
        sending: 'Envoi en cours…',
        success: 'Message envoyé. Merci, je te répondrai dès que possible.',
        error:
          'Le message n’a pas pu être envoyé. Essaie à nouveau ou utilise les coordonnées ci-dessus.',
        configuration:
          'Le formulaire n’est pas encore configuré. Utilise les coordonnées ci-dessus.',
      },
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
      form: {
        kicker: 'Direct message',
        title: 'Send me a few lines.',
        text: 'Simply tell me why you are reaching out. I will receive your message by email.',
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'you@email.com',
        message: 'Message',
        messagePlaceholder: 'Hello Leo, …',
        submit: 'Send message',
        sending: 'Sending…',
        success:
          'Message sent. Thank you, I will get back to you as soon as I can.',
        error:
          'The message could not be sent. Please try again or use the details above.',
        configuration:
          'The form has not been configured yet. Please use the details above.',
      },
    },
    metadata: {
      contact: [
        'Contact — Leo Torres Portfolio',
        'Contact Leo Torres for a software, DevOps or infrastructure project.',
      ],
    },
  },
} satisfies Record<Locale, object>
