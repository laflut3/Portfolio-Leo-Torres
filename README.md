# Portfolio Léo Torres

## Contact par Gmail

Le formulaire de contact appelle l’API privée `/api/contact`. Crée un fichier
`.env` à partir de `.env.example`, puis renseigne l’adresse Gmail, son mot de
passe d’application et le destinataire. Ces variables ne doivent jamais être
préfixées par `VITE_` : elles sont lues uniquement par le serveur Node.

En développement, démarre le serveur d’envoi avec `pnpm dev:api` dans un second
terminal, puis le frontend avec `pnpm dev`. En production, l’image Docker sert
le portfolio et l’API sur le même port.

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
