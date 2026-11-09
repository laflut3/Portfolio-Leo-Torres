import type { Locale } from '@/i18n'

export const legal = {
  'fr-fr': {
    legal: {
      kicker: 'Informations du site',
      title: 'Confidentialité et cookies',
      intro:
        'Ce portfolio présente le parcours et les projets de Léo Torres, notamment dans le cadre de sa recherche d’emploi.',
      publisherTitle: 'Éditeur',
      publisher:
        'Léo Torres publie ce site personnel à titre non professionnel. Les informations permettant son identification ont été communiquées à l’hébergeur.',
      contact: 'Contact : leo0609leo@gmail.com · +33 7 83 08 49 92',
      hostingTitle: 'Hébergement',
      hosting:
        'Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.',
      hostingContact: 'Contacter Vercel',
      dataTitle: 'Données et stockage',
      dataIntro:
        'Le site ne comporte ni compte, ni formulaire de contact, ni outil publicitaire ou de mesure d’audience.',
      dataTheme:
        'Le choix du thème clair, sombre ou système est mémorisé dans le stockage local du navigateur (`portfolio-theme`). Il sert uniquement à conserver l’apparence choisie et reste sur l’appareil.',
      dataContact:
        'Les coordonnées affichées sont publiques. Si tu contactes Léo par e-mail ou téléphone, l’échange passe par le service de communication que tu utilises, pas par un formulaire du site.',
      dataHosting:
        'Pour fournir et sécuriser l’hébergement, Vercel indique traiter des données techniques telles que les adresses IP et les journaux de requêtes. Consulte sa notice de confidentialité pour le détail de ses traitements.',
      cookiesTitle: 'Cookies et traceurs',
      cookies:
        'Le code du site ne dépose pas de cookie publicitaire ni de traceur d’audience. Il mémorise uniquement la préférence d’affichage dans le stockage local. Aucun bandeau de consentement n’est donc affiché. Si des traceurs non nécessaires sont ajoutés, ils devront rester désactivés avant le consentement.',
      rightsTitle: 'Demandes relatives aux données',
      rights:
        'Pour toute question sur les données liées à ce site, écris à Léo Torres à l’adresse indiquée plus haut. Tu peux aussi déposer une réclamation auprès de la CNIL.',
      vercelPrivacy: 'Notice de confidentialité de Vercel',
      cnil: 'Contacter la CNIL',
    },
    metadata: {
      legal: [
        'Confidentialité et cookies — Portfolio Léo Torres',
        'Informations sur l’éditeur, l’hébergement, les données et les traceurs du portfolio de Léo Torres.',
      ],
    },
  },
  'en-us': {
    legal: {
      kicker: 'Site information',
      title: 'Privacy and cookies',
      intro:
        'This portfolio presents Léo Torres’s background and projects, including for his job search.',
      publisherTitle: 'Publisher',
      publisher:
        'Léo Torres publishes this personal website on a non-professional basis. His identifying details have been provided to the hosting provider.',
      contact: 'Contact: leo0609leo@gmail.com · +33 7 83 08 49 92',
      hostingTitle: 'Hosting',
      hosting:
        'The website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States.',
      hostingContact: 'Contact Vercel',
      dataTitle: 'Data and storage',
      dataIntro:
        'The website has no account system, contact form, advertising tools or audience analytics.',
      dataTheme:
        'The light, dark or system theme choice is stored in your browser’s local storage (`portfolio-theme`). It only remembers your display preference and stays on your device.',
      dataContact:
        'The contact details shown here are public. If you contact Léo by email or phone, the exchange takes place through your chosen communication service, not through a website form.',
      dataHosting:
        'To provide and secure hosting, Vercel says it processes technical data such as IP addresses and request logs. See its privacy notice for details about its processing.',
      cookiesTitle: 'Cookies and trackers',
      cookies:
        'The website code does not set advertising cookies or audience trackers. It only remembers the display preference in local storage, so no consent banner is shown. If non-essential trackers are added, they must remain disabled until consent is given.',
      rightsTitle: 'Data requests',
      rights:
        'For questions about data related to this website, contact Léo Torres at the address above. You may also file a complaint with the CNIL.',
      vercelPrivacy: 'Vercel privacy notice',
      cnil: 'Contact the CNIL',
    },
    metadata: {
      legal: [
        'Privacy and cookies — Léo Torres Portfolio',
        'Publisher, hosting, data and tracker information for Léo Torres’s portfolio.',
      ],
    },
  },
} satisfies Record<Locale, object>
