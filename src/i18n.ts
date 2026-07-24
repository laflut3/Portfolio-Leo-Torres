const copy = {
  fr: {
    coordinates: '43.61° N · Montpellier · Systèmes & logiciel',
    title: 'Construire sereinement.|Livrer avec intention.',
    lead: 'Développeur orienté DevOps : je rends les systèmes complexes intentionnels, observables et prêts à évoluer.',
    body: "Du premier commit à la production, j'aime créer des chemins fiables qui permettent aux équipes d'avancer vite sans perdre le contrôle.",
    explore: 'Explorer mon profil',
    contact: 'Me contacter',
    system: '01 / SYSTÈME ORBITAL',
    quiet: 'VIVANT, SANS BRUIT',
    principle: 'Principe de travail',
    clarity: 'La clarté est une fonctionnalité de performance.',
  },
  en: {
    coordinates: '43.61° N · Montpellier · Systems & software',
    title: 'Build calm.|Ship with intent.',
    lead: 'DevOps-minded developer, making complex systems feel deliberate, observable and ready to evolve.',
    body: 'From the first commit to production, I enjoy creating reliable paths that let teams move quickly without losing control.',
    explore: 'Explore my profile',
    contact: 'Contact me',
    system: '01 / ORBITAL SYSTEM',
    quiet: 'LIVE, NOT LOUD',
    principle: 'Operating principle',
    clarity: 'Clarity is a performance feature.',
  },
  es: {
    coordinates: '43.61° N · Montpellier · Sistemas y software',
    title: 'Construir con calma.|Entregar con intención.',
    lead: 'Desarrollador orientado a DevOps: hago que los sistemas complejos sean intencionales, observables y listos para evolucionar.',
    body: 'Del primer commit a producción, me gusta crear caminos fiables que permitan a los equipos avanzar rápido sin perder el control.',
    explore: 'Explorar mi perfil',
    contact: 'Contactarme',
    system: '01 / SISTEMA ORBITAL',
    quiet: 'VIVO, SIN RUIDO',
    principle: 'Principio de trabajo',
    clarity: 'La claridad es una funcionalidad de rendimiento.',
  },
  de: {
    coordinates: '43.61° N · Montpellier · Systeme & Software',
    title: 'Mit Ruhe bauen.|Mit Absicht liefern.',
    lead: 'DevOps-orientierter Entwickler: Ich mache komplexe Systeme bewusst, beobachtbar und bereit für ihre Weiterentwicklung.',
    body: 'Vom ersten Commit bis zur Produktion baue ich verlässliche Wege, mit denen Teams schnell vorankommen, ohne die Kontrolle zu verlieren.',
    explore: 'Mein Profil entdecken',
    contact: 'Kontakt aufnehmen',
    system: '01 / ORBITALES SYSTEM',
    quiet: 'LEBENDIG, NICHT LAUT',
    principle: 'Arbeitsprinzip',
    clarity: 'Klarheit ist ein Leistungsmerkmal.',
  },
  pt: {
    coordinates: '43.61° N · Montpellier · Sistemas e software',
    title: 'Construir com calma.|Entregar com intenção.',
    lead: 'Desenvolvedor com mentalidade DevOps: torno sistemas complexos intencionais, observáveis e prontos para evoluir.',
    body: 'Do primeiro commit à produção, gosto de criar caminhos confiáveis que permitem às equipas avançar rápido sem perder o controlo.',
    explore: 'Explorar o meu perfil',
    contact: 'Entrar em contacto',
    system: '01 / SISTEMA ORBITAL',
    quiet: 'VIVO, SEM RUÍDO',
    principle: 'Princípio de trabalho',
    clarity: 'A clareza é uma funcionalidade de desempenho.',
  },
} as const

export type PortfolioLanguage = keyof typeof copy

function browserLanguage(): PortfolioLanguage {
  const language = navigator.language.slice(0, 2) as PortfolioLanguage
  return language in copy ? language : 'fr'
}

export function heroCopy() {
  return copy[browserLanguage()]
}
