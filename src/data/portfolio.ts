export const navItems = [
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#pipeline', label: 'Pipeline' },
  { href: '#contact', label: 'Contact' },
]

export const signals = [
  {
    title: 'Automatiser',
    text: 'Réduire les tâches manuelles et les écarts entre environnements.',
  },
  {
    title: 'Fiabiliser',
    text: 'Rendre les builds, checks et releases reproductibles.',
  },
  {
    title: 'Observer',
    text: 'Favoriser les signaux utiles plutôt que le bruit opérationnel.',
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
    name: 'Portfolio cloud-ready',
    description:
      'Application React/Vite packagée avec Docker, contrôles qualité, release SemVer et publication registry.',
    stack: ['React', 'Vite', 'Docker', 'GHCR'],
  },
  {
    name: 'Pipeline qualité',
    description:
      'Pré-commit, ESLint, Prettier, Hadolint et validations YAML/JSON pour garder un dépôt propre.',
    stack: ['ESLint', 'Prettier', 'Hadolint', 'GitHub Actions'],
  },
  {
    name: 'Image de production',
    description:
      'Build multi-stage, runtime nginx non-root, cache assets et fallback SPA pour déploiement statique.',
    stack: ['Node', 'Nginx', 'Docker', 'SPA'],
  },
]

export const pipelineSteps = ['Code', 'Quality', 'Build', 'Image', 'Release']
