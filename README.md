# Portfolio Léo Torres

## Formulaire de contact

Le formulaire utilise Formspree, sans serveur applicatif. Crée un fichier `.env`
à partir de `.env.example`, puis renseigne l’endpoint public Formspree.

La variable `VITE_FORMSPREE_ENDPOINT` est publique par nature : n’y place jamais
un mot de passe Gmail ou une clé SMTP.

## Déploiement Vercel

Utilise le preset **Vite**, `pnpm run build` comme commande de build, `dist` comme
répertoire de sortie et `pnpm install --frozen-lockfile` pour l’installation.
Ajoute `VITE_FORMSPREE_ENDPOINT` dans les variables d’environnement Vercel avant
le déploiement : Vite l’intègre au build du frontend.

Portfolio React/Vite de Léo Torres, avec des routes publiques localisées :

- Français : `/fr-fr/profil`, `/fr-fr/competences`, `/fr-fr/projets`, `/fr-fr/contact`
- English: `/en-us/profile`, `/en-us/skills`, `/en-us/projects`, `/en-us/contact`

## Développement

Le projet utilise pnpm 11.9.0, activé par le champ `packageManager`.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Vérifications

```bash
pnpm format:check
pnpm lint
pnpm build
```
