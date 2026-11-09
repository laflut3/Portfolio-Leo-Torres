# Portfolio Léo Torres — direction artistique

## Concept

**Constellation d'ingénierie.** Le portfolio décrit un système fiable comme un
ensemble de services en orbite autour d'un noyau : le code, l'infrastructure,
la sécurité et l'automatisation restent reliés, visibles et maîtrisés.

## Système visuel

- Palette : encre bleutée, ivoire froid, cuivre solaire et cyan atmosphérique.
- Typographie : Geist Variable, avec une échelle éditoriale dense et des labels
  monospace à chasse large.
- Composition : split éditorial asymétrique, grandes marges, cartes compactes
  imbriquées et lignes orbitales plutôt qu'une grille SaaS uniforme.
- Thèmes : les tokens `--portfolio-*` pilotent les deux modes ; aucun contenu
  dépend du canvas pour être compris.

## Logo

- Le logo repose sur un monogramme LT géométrique, traversé par une seule orbite
  et un point cuivré. Il reprend la métaphore du système solaire sans devenir
  une illustration.
- Les variantes vectorielles et les règles d’utilisation se trouvent dans
  `public/brand/`. Le favicon simplifie le signe pour conserver la lisibilité à
  16 px.
- Utiliser `logo-light.svg` sur fond clair, `logo-dark.svg` sur fond sombre et
  `logo-monochrome.svg` lorsque la couleur est imposée.

## Projets

- L’index utilise une liste éditoriale numérotée. Chaque ligne met en avant le
  nom, une description courte, les technologies connues et l’accès à la fiche.
- Une fiche projet présente son résumé, ses technologies, ses liens publics et
  un schéma de fonctionnement en HTML. Les schémas restent lisibles sans
  animation et passent en colonne sur mobile.
- Les diagrammes décrivent uniquement les éléments présents dans les sources
  disponibles. Les projets sans stack documentée l’indiquent clairement.
- Les filtres restent utilisables au clavier et les couleurs s’appuient sur les
  variables du thème clair et sombre.

## Confidentialité

- Les informations de confidentialité et d’hébergement sont accessibles depuis
  le pied de page dans les deux langues du site.
- Aucune bannière cookies ne s’affiche tant que le site n’active aucun traceur
  non essentiel. La préférence d’apparence reste dans le stockage local.

## 3D et animation

- Le noyau est une icosphère procédurale, entourée de trois orbites : aucun
  modèle téléchargé, aucune texture et peu de draw calls.
- Le DPR est limité à 1.5, les ombres et le post-processing sont absents.
- L'arrivée révèle le signal, le monogramme puis le contenu avec GSAP. Les
  animations utilisent `transform`/opacité et sont désactivées ou figées avec
  `prefers-reduced-motion`.

## Responsive, accessibilité et interdits

- Sous 768px, le split devient une colonne ; la scène reste décorative et le
  texte reste dans le DOM.
- Le canvas est masqué aux lecteurs d'écran, les contrôles sont HTML et le focus
  suit les tokens de thème.
- Pas de dégradé violet générique, pas de grille de trois cartes identiques,
  pas d'effet 3D indispensable à la compréhension, pas de texture lourde.
