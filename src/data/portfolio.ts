export const navItems = [
  { href: '#profile', label: 'Profil' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

export const signals = [
  {
    title: 'Profil',
    text: 'Développeur orienté DevOps, attentif aux systèmes simples, fiables et maintenables.',
  },
  {
    title: 'Approche',
    text: 'J’aime comprendre le cycle complet: code, qualité, image, livraison, exploitation.',
  },
  {
    title: 'Univers',
    text: 'L’astrophysique et le spatial nourrissent mon goût pour les systèmes exigeants et précis.',
  },
]

export const skills = [
  {
    title: 'Infrastructure',
    items: ['Linux', 'Réseau', 'Scripting', 'IaC'],
  },
  {
    title: 'CI/CD',
    items: ['GitHub Actions', 'Pre-commit', 'Quality gates', 'Release'],
  },
  {
    title: 'Containers',
    items: ['Docker', 'Nginx', 'Distroless', 'Hadolint'],
  },
  {
    title: 'Observability',
    items: ['Logs', 'Health checks', 'Alerting', 'Runbooks'],
  },
]

export const projects = [
  {
    name: 'Culture DevOps',
    description:
      'Automatiser ce qui peut l’être, documenter ce qui doit durer, garder une chaîne de livraison lisible.',
    stack: ['CI/CD', 'Docker', 'Release', 'Qualité'],
  },
  {
    name: 'Rigueur d’exploitation',
    description:
      'Privilégier les signaux utiles: logs clairs, checks pertinents, erreurs compréhensibles et corrections traçables.',
    stack: ['Observability', 'Runbooks', 'Linux', 'Monitoring'],
  },
  {
    name: 'Curiosité scientifique',
    description:
      'J’aime l’espace, l’astrophysique et les systèmes où chaque contrainte compte: trajectoire, énergie, observation.',
    stack: ['Astrophysique', 'Spatial', 'Télémétrie', 'Précision'],
  },
]

export const pipelineSteps = [
  'Comprendre',
  'Automatiser',
  'Fiabiliser',
  'Observer',
  'Améliorer',
]
