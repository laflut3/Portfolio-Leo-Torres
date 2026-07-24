# Consignes du dépôt Portfolio Léo Torres

Ces consignes s’appliquent à toutes les modifications réalisées dans ce dépôt.

Le fichier doit être nommé `AGENTS.md` afin d’être détecté automatiquement par Codex.

---

## 1. Objectif du projet

Ce dépôt contient le portfolio professionnel de **Léo Torres**.

Le portfolio doit présenter de manière claire, originale et cohérente :

- son identité professionnelle ;
- son parcours ;
- ses compétences techniques ;
- ses expériences ;
- ses projets ;
- ses domaines d’expertise ;
- ses coordonnées professionnelles ;
- sa capacité à concevoir des expériences web modernes, interactives et performantes.

Le projet doit refléter un profil orienté :

- ingénierie logicielle ;
- développement backend ;
- DevOps ;
- cloud ;
- Kubernetes ;
- infrastructure ;
- automatisation ;
- cybersécurité ;
- développement frontend moderne ;
- Three.js ;
- WebGL ;
- React Three Fiber ;
- GSAP ;
- expériences web 3D.

---

## 2. Identité du projet

Utiliser les appellations suivantes :

- nom complet : `Portfolio Léo Torres` ;
- nom court : `Léo Torres` ;
- identifiant technique : `portfolio-leo-torres`.

Ne pas utiliser les noms suivants pour désigner ce portfolio :

- `Hub-LeMontage` ;
- `Hub LeMontage` ;
- `LeMontage`.

Ces anciens noms peuvent uniquement être conservés lorsqu’ils désignent explicitement un projet présenté dans le portfolio.

Toutes les décisions graphiques, éditoriales et techniques doivent servir l’identité du **Portfolio Léo Torres**.

Le résultat ne doit pas ressembler à :

- une landing page SaaS générique ;
- un template de portfolio standard ;
- une interface produite automatiquement sans direction artistique ;
- une accumulation d’effets visuels sans intention ;
- une copie directe d’un site existant.

Chaque page publique importante doit rechercher :

- une silhouette visuelle reconnaissable ;
- une hiérarchie claire ;
- une composition adaptée au contenu ;
- une métaphore visuelle liée au parcours et aux compétences de Léo Torres ;
- un élément principal mémorable ;
- une utilisation intentionnelle de la 3D ;
- une animation servant la narration ;
- une excellente lisibilité ;
- une expérience mobile complète ;
- une cohérence forte entre les pages.

---

## 3. Principes généraux de travail

Avant toute modification :

1. examiner l’architecture du dépôt ;
2. lire les fichiers de documentation pertinents ;
3. examiner les dépendances existantes ;
4. identifier le gestionnaire de paquets utilisé ;
5. examiner les scripts disponibles dans les `package.json` ;
6. inventorier les skills disponibles ;
7. charger tous les skills réellement adaptés à la demande ;
8. examiner les composants UI existants ;
9. vérifier les conventions de code du projet ;
10. éviter toute dépendance inutile.

Ne pas :

- improviser une solution si un skill adapté existe ;
- remplacer une technologie déjà utilisée sans justification ;
- ajouter une bibliothèque qui duplique une dépendance existante ;
- effectuer une refonte complète lorsqu’une modification localisée suffit ;
- supprimer une fonctionnalité existante sans demande explicite ;
- modifier un fichier généré sans modifier également sa source reproductible ;
- prétendre avoir exécuté une vérification qui n’a pas réellement été faite.

---

## 4. Utilisation obligatoire des skills

### 4.1 Règle générale

Au début de chaque demande :

1. inventorier les skills disponibles ;
2. sélectionner les skills réellement adaptés ;
3. charger ces skills avant d’éditer le code ;
4. appliquer leurs recommandations ;
5. résoudre explicitement les éventuelles contradictions entre skills ;
6. suivre en priorité les consignes de ce dépôt lorsqu’un skill propose une règle incompatible.

Ne pas charger tous les skills sans discernement pour une petite correction isolée.

Pour une création, une refonte ou une modification visuelle importante, utiliser tous les groupes de skills concernés.

Le compte rendu final doit contenir une section `Skills utilisés`.

---

## 5. Skills de design et de conception confirmés dans l’environnement

Les skills suivants sont considérés comme installés et disponibles pour ce projet.

### 5.1 Figma

#### `figma-generate-design`

Utiliser pour :

- créer une nouvelle proposition de page ;
- explorer plusieurs directions artistiques ;
- produire une maquette modifiable ;
- tester une composition avant de coder ;
- préparer une refonte importante ;
- concevoir une expérience multi-section.

#### `figma-use`

Utiliser pour :

- lire un fichier Figma existant ;
- modifier une maquette ;
- exploiter les composants d’un design system ;
- vérifier les espacements et dimensions ;
- maintenir la cohérence entre la maquette et le code ;
- contrôler les variantes responsive.

Lorsqu’une maquette Figma existe, elle constitue une référence visuelle importante, sans remplacer les contraintes techniques, d’accessibilité, de performance et de responsive design du dépôt.

---

### 5.2 Three.js fondamentaux

#### `threejs-fundamentals`

Utiliser pour :

- initialiser une scène ;
- configurer la caméra ;
- configurer le renderer ;
- gérer la boucle de rendu ;
- gérer le redimensionnement ;
- structurer une application Three.js ;
- organiser le cycle de vie de la scène.

#### `threejs-geometry`

Utiliser pour :

- créer des géométries natives ;
- créer des géométries personnalisées ;
- générer des formes procédurales ;
- réduire le nombre de sommets ;
- réduire le nombre de triangles ;
- partager les géométries ;
- utiliser l’instancing pour les objets répétés.

#### `threejs-materials`

Utiliser pour :

- choisir les matériaux ;
- configurer les matériaux PBR ;
- gérer la rugosité ;
- gérer le métal ;
- gérer la transparence ;
- gérer les matériaux émissifs ;
- réutiliser les matériaux ;
- limiter le nombre de matériaux distincts.

#### `threejs-lighting`

Utiliser pour :

- concevoir l’éclairage ;
- configurer les ombres ;
- gérer les environment maps ;
- limiter le coût des lumières ;
- adapter l’éclairage aux modes clair et sombre ;
- éviter les éclairages excessifs.

#### `threejs-textures`

Utiliser pour :

- charger les textures ;
- configurer les espaces colorimétriques ;
- gérer les normal maps ;
- gérer les roughness maps ;
- gérer les environment maps ;
- limiter la résolution ;
- réduire le poids des textures ;
- éviter les chargements en double.

#### `threejs-animation`

Utiliser pour :

- animer les objets ;
- animer les caméras ;
- utiliser `AnimationMixer` ;
- lire les animations GLTF ;
- gérer le temps indépendamment du nombre d’images par seconde ;
- synchroniser Three.js avec GSAP lorsque nécessaire.

#### `threejs-loaders`

Utiliser pour :

- charger les modèles GLTF et GLB ;
- gérer les erreurs de chargement ;
- afficher un état de chargement ;
- utiliser Draco lorsque le modèle l’exige ;
- utiliser Meshopt lorsque le modèle l’exige ;
- mettre les assets en cache ;
- éviter les chargements en double.

#### `threejs-shaders`

Utiliser pour :

- écrire des vertex shaders ;
- écrire des fragment shaders ;
- organiser les uniforms ;
- créer des effets visuels spécifiques ;
- optimiser les calculs GPU ;
- prévoir un fallback lorsque l’effet est purement décoratif ;
- tester les limitations des GPU mobiles.

#### `threejs-postprocessing`

Utiliser pour :

- configurer `EffectComposer` ;
- appliquer un bloom raisonné ;
- appliquer une correction colorimétrique ;
- appliquer un effet de profondeur si nécessaire ;
- limiter les passes coûteuses ;
- conserver la lisibilité ;
- désactiver ou réduire les effets sur mobile.

#### `threejs-interaction`

Utiliser pour :

- effectuer du raycasting ;
- sélectionner un objet ;
- gérer les interactions souris ;
- gérer les interactions tactiles ;
- gérer les interactions clavier ;
- gérer les contrôles de caméra ;
- nettoyer les écouteurs d’événements.

Ce skill ne doit pas être utilisé pour accéder à des secrets, des clés, des fichiers `.env` ou des données sensibles.

#### `threejs-webgl`

Utiliser pour :

- concevoir une architecture WebGL avancée ;
- optimiser le pipeline de rendu ;
- analyser les performances GPU ;
- développer des effets avancés ;
- gérer correctement les ressources ;
- évaluer WebGL et WebGPU selon les besoins.

#### `web3d-integration-patterns`

Utiliser pour :

- intégrer Three.js dans une interface HTML ;
- synchroniser le canvas avec les composants React ;
- gérer les overlays ;
- gérer les transitions entre contenu 2D et 3D ;
- préserver l’accessibilité ;
- préserver le SEO ;
- garder les informations essentielles dans le DOM.

---

### 5.3 React Three Fiber

#### `react-three-fiber`

Utiliser lorsque le projet utilise React pour gérer la scène 3D.

Ce skill doit guider :

- l’utilisation de `Canvas` ;
- l’utilisation de `useFrame` ;
- l’utilisation de `useThree` ;
- l’utilisation de Drei ;
- le découpage en composants ;
- le cycle de vie des ressources ;
- la réduction des re-renders ;
- le chargement des GLB ;
- la gestion du suspense ;
- le nettoyage des ressources.

Ne pas migrer une scène Three.js native vers React Three Fiber sans demande explicite ou justification claire.

---

### 5.4 Génération d’assets 3D

#### `threejs-asset-pipeline`

Utiliser pour toute génération d’asset 3D original.

Ce skill doit permettre de :

- définir les contraintes de l’asset ;
- écrire un script Blender Python reproductible ;
- exécuter Blender en mode headless ;
- exporter un fichier GLB ;
- vérifier le fichier généré ;
- intégrer le modèle dans le frontend ;
- documenter la régénération de l’asset.

#### `blender-web-pipeline`

Utiliser pour :

- préparer un modèle Blender pour le Web ;
- appliquer les transformations ;
- positionner le pivot ;
- organiser les objets ;
- organiser les matériaux ;
- réduire la complexité géométrique ;
- préparer l’export GLTF ou GLB ;
- vérifier l’échelle et l’orientation.

#### `substance-3d-texturing`

Utiliser pour :

- définir une stratégie de texturing PBR ;
- concevoir les matériaux ;
- préparer les différentes maps ;
- optimiser la résolution ;
- réduire le poids des textures ;
- maintenir une identité graphique cohérente.

L’utilisation de Substance 3D n’est pas obligatoire lorsqu’un matériau procédural Blender ou Three.js suffit.

---

### 5.5 GSAP

#### `gsap-core`

Utiliser pour :

- créer les tweens ;
- choisir les easings ;
- animer les propriétés CSS ;
- animer les propriétés JavaScript ;
- organiser le nettoyage ;
- utiliser `gsap.context()` lorsque nécessaire.

#### `gsap-timeline`

Utiliser pour :

- créer les séquences ;
- synchroniser les animations ;
- utiliser les labels ;
- éviter les délais arbitraires ;
- rendre les animations maintenables ;
- coordonner les scènes Three.js et le DOM.

#### `gsap-scrolltrigger`

Utiliser pour :

- synchroniser une animation avec le scroll ;
- épingler une section ;
- utiliser `scrub` ;
- gérer les changements de layout ;
- rafraîchir les positions ;
- nettoyer les instances `ScrollTrigger`.

#### `gsap-plugins`

Utiliser pour :

- choisir les plugins adaptés ;
- enregistrer les plugins ;
- vérifier qu’un plugin est réellement nécessaire ;
- vérifier les contraintes de licence ;
- éviter l’ajout de plugins inutiles.

#### `gsap-utils`

Utiliser pour :

- répartir des valeurs ;
- contraindre des valeurs ;
- interpoler ;
- créer des comportements répétitifs ;
- simplifier les calculs ;
- réduire la duplication.

#### `gsap-react`

Utiliser pour :

- intégrer GSAP dans React ;
- respecter le cycle de vie des composants ;
- gérer `useGSAP` si disponible ;
- utiliser les contextes ;
- restaurer les styles ;
- éviter les animations fantômes après démontage.

#### `gsap-performance`

Utiliser pour :

- limiter le coût des animations ;
- éviter les recalculs de layout ;
- privilégier les transformations ;
- privilégier l’opacité ;
- limiter le travail effectué à chaque frame ;
- optimiser les animations mobiles ;
- mesurer avant d’optimiser.

#### `gsap-frameworks`

Utiliser pour :

- respecter les conventions du framework ;
- éviter les manipulations DOM incompatibles avec React ;
- adapter l’animation au cycle de vie du framework ;
- organiser le nettoyage.

---

## 6. Combinaisons de skills obligatoires par type de tâche

### 6.1 Nouvelle page publique sans 3D

Charger au minimum :

- `figma-generate-design` si une phase de conception est nécessaire ;
- `figma-use` si une maquette existe.

Examiner aussi les autres skills de design installés et charger ceux qui sont réellement adaptés.

### 6.2 Nouvelle section Three.js

Charger les skills concernés parmi :

- `threejs-fundamentals` ;
- `threejs-geometry` ;
- `threejs-materials` ;
- `threejs-lighting` ;
- `threejs-textures` ;
- `threejs-animation` ;
- `threejs-loaders` ;
- `threejs-shaders` ;
- `threejs-postprocessing` ;
- `threejs-interaction` ;
- `threejs-webgl` ;
- `web3d-integration-patterns` ;
- `react-three-fiber` si la scène utilise React.

### 6.3 Génération d’un asset 3D

Charger au minimum :

- `threejs-asset-pipeline` ;
- `blender-web-pipeline` ;
- `threejs-geometry` ;
- `threejs-materials` ;
- `threejs-textures` ;
- `threejs-loaders`.

Ajouter `substance-3d-texturing` si un texturing PBR avancé est réellement nécessaire.

### 6.4 Animation d’interface avec GSAP

Charger selon le besoin :

- `gsap-core` ;
- `gsap-timeline` ;
- `gsap-scrolltrigger` ;
- `gsap-plugins` ;
- `gsap-utils` ;
- `gsap-react` ;
- `gsap-performance` ;
- `gsap-frameworks`.

### 6.5 Page 3D animée au scroll

Charger au minimum :

- `threejs-fundamentals` ;
- `threejs-animation` ;
- `threejs-loaders` ;
- `threejs-webgl` ;
- `web3d-integration-patterns` ;
- `react-three-fiber` si React est utilisé ;
- `gsap-core` ;
- `gsap-timeline` ;
- `gsap-scrolltrigger` ;
- `gsap-react` si React est utilisé ;
- `gsap-performance`.

### 6.6 Refonte complète du portfolio

Pour une refonte complète :

1. utiliser Figma lorsque pertinent ;
2. charger tous les skills de design disponibles réellement adaptés ;
3. charger les skills Three.js concernés ;
4. charger les skills de génération d’assets concernés ;
5. charger les skills GSAP concernés ;
6. effectuer une passe de critique visuelle ;
7. corriger les éléments génériques ou incohérents ;
8. valider les performances et l’accessibilité.

---

## 7. Processus de conception obligatoire

Pour toute création ou refonte visuelle importante :

1. examiner l’existant ;
2. examiner les composants UI disponibles ;
3. inventorier et charger les skills adaptés ;
4. définir le besoin fonctionnel ;
5. définir le public visé ;
6. définir une direction artistique claire ;
7. définir une métaphore visuelle liée à Léo Torres ;
8. définir la hiérarchie visuelle ;
9. définir la palette ;
10. définir les typographies ;
11. définir la grille ;
12. définir les espacements ;
13. définir le rythme entre les sections ;
14. définir la place de la 3D ;
15. définir le langage d’animation ;
16. définir les contraintes mobile ;
17. définir les contraintes d’accessibilité ;
18. implémenter ;
19. effectuer une revue critique ;
20. corriger ;
21. exécuter les validations.

Pour une modification importante, créer ou mettre à jour `DESIGN.md`.

---

## 8. Contenu obligatoire de `DESIGN.md`

Le fichier `DESIGN.md` doit contenir au minimum :

- l’identité du Portfolio Léo Torres ;
- le concept visuel ;
- la métaphore principale ;
- les références visuelles ;
- la palette ;
- les variables de thème ;
- les typographies ;
- la grille ;
- les espacements ;
- les règles de composition ;
- les règles relatives aux illustrations ;
- les règles relatives aux assets 3D ;
- les règles relatives aux matériaux ;
- les règles relatives à l’éclairage ;
- le langage d’animation ;
- les règles GSAP ;
- les règles responsive ;
- les règles d’accessibilité ;
- les règles de performance ;
- les interdictions graphiques.

---

## 9. Règles contre les designs génériques

Éviter par défaut :

- les landing pages SaaS standardisées ;
- les héros systématiquement centrés ;
- les grilles uniformes de cartes arrondies ;
- le glassmorphism sans justification ;
- les dégradés violets ou bleus génériques ;
- les fonds remplis de particules sans intention ;
- les icônes décoratives sans fonction ;
- les animations identiques sur toutes les sections ;
- les textes fictifs ;
- les placeholders ;
- les compositions parfaitement symétriques sans intention ;
- les effets de bloom excessifs ;
- les mouvements de caméra gratuits ;
- les animations qui réduisent la lisibilité ;
- l’utilisation systématique d’une police neutre ;
- les assets 3D génériques téléchargés sans adaptation ;
- les scènes lourdes qui n’apportent aucune information ;
- les titres vagues comme `Welcome`, `Discover`, `Innovation` ou `Experience` sans contexte ;
- les boutons d’action génériques sans objectif précis.

Chaque page importante doit comporter :

- un concept clair ;
- une composition liée au contenu ;
- un élément mémorable ;
- une hiérarchie forte ;
- une typographie intentionnelle ;
- une narration visuelle ;
- un rythme propre ;
- une expérience mobile complète ;
- une version réduite des animations ;
- un contenu réellement utile.

---

## 10. Composants UI

Utiliser en priorité les composants shadcn présents dans :

```text
app/frontend/src/components/ui/
```

Lorsqu’un composant shadcn adapté existe :

- le réutiliser ;
- respecter son API ;
- conserver les variantes existantes ;
- conserver les conventions d’accessibilité ;
- éviter de dupliquer son style.

Lorsqu’un composant shadcn adapté n’est pas installé :

- l’ajouter avec la méthode shadcn utilisée par le projet ;
- ne pas recréer manuellement un équivalent ;
- vérifier les dépendances ajoutées ;
- adapter son style au thème existant.

Créer un composant spécifique uniquement lorsque :

- aucun composant shadcn ne répond au besoin ;
- la logique métier justifie une abstraction ;
- l’expérience Three.js exige une intégration spécifique ;
- le composant possède une responsabilité claire et réutilisable.

Ne pas créer un composant uniquement pour déplacer quelques classes CSS.

---

## 11. Internationalisation

Pour chaque texte visible ajouté ou modifié :

- mettre à jour `app/frontend/src/i18n.ts` ;
- ne pas coder le texte directement dans un composant ;
- maintenir toutes les langues prises en charge ;
- conserver des clés cohérentes ;
- vérifier les textes longs ;
- vérifier les pluriels ;
- vérifier les variables interpolées ;
- vérifier les accents ;
- vérifier les caractères spéciaux.

Langues obligatoires :

- français ;
- anglais ;
- espagnol ;
- allemand ;
- portugais.

Avant de terminer :

- vérifier qu’aucune clé ne manque ;
- vérifier qu’aucune valeur n’est vide ;
- vérifier que les cinq langues possèdent les mêmes clés ;
- vérifier que les interfaces restent lisibles avec les traductions les plus longues.

---

## 12. Responsive design

Vérifier au minimum :

- mobile étroit ;
- mobile large ;
- tablette ;
- ordinateur portable ;
- grand écran.

Éviter :

- les débordements horizontaux ;
- les textes tronqués ;
- les boutons inaccessibles ;
- les modales trop grandes ;
- les canvas dépassant de leur conteneur ;
- les interfaces dépendant uniquement du survol ;
- les interactions impossibles au tactile ;
- les zones cliquables trop petites.

Pour Three.js :

- limiter le pixel ratio ;
- adapter la qualité ;
- réduire les ombres ;
- réduire le post-processing ;
- réduire le nombre d’objets ;
- limiter les textures ;
- vérifier l’orientation portrait ;
- vérifier l’orientation paysage ;
- conserver une alternative HTML lorsque la 3D est réduite ou désactivée.

---

## 13. Modes clair et sombre

Vérifier systématiquement :

- le mode clair ;
- le mode sombre ;
- les transitions de thème ;
- les scènes Three.js ;
- les overlays ;
- les bordures ;
- les focus ;
- les erreurs ;
- les états destructifs ;
- les menus ;
- les modales ;
- les graphiques ;
- les éléments de navigation.

Utiliser :

- les variables sémantiques du thème ;
- les classes sémantiques ;
- les tokens existants.

Éviter :

- les couleurs fixes non justifiées ;
- les textes gris illisibles ;
- les bordures invisibles ;
- les ombres incompatibles avec le thème ;
- les matériaux 3D illisibles dans un mode.

---

## 14. Accessibilité

Utiliser des éléments HTML sémantiques.

Vérifier :

- la navigation au clavier ;
- les états de focus ;
- les labels ;
- les descriptions ;
- les messages d’erreur ;
- les zones interactives ;
- l’ordre du DOM ;
- l’ordre de tabulation ;
- les contrastes ;
- les titres ;
- les landmarks ;
- les liens ;
- les boutons ;
- les formulaires.

Pour les animations :

- respecter `prefers-reduced-motion` ;
- proposer une version réduite ;
- éviter les flashs ;
- éviter les mouvements brusques ;
- ne pas bloquer la lecture ;
- ne pas conditionner une information importante à une animation.

Pour Three.js :

- fournir une alternative textuelle ;
- garder les informations importantes dans le DOM ;
- ne pas rendre une action disponible uniquement dans le canvas ;
- permettre une interaction clavier lorsque cela est pertinent ;
- afficher des contrôles accessibles ;
- désactiver les mouvements de caméra problématiques en mode réduit.

---

## 15. SEO

Lorsqu’une page publique ou son contenu change, vérifier :

- le titre ;
- la description ;
- l’URL canonique ;
- les directives robots ;
- les métadonnées Open Graph ;
- les métadonnées sociales ;
- les données structurées ;
- les balises de langue ;
- les titres de page ;
- la hiérarchie des titres ;
- le contenu indexable.

Pour les pages privées ou liées au compte :

```text
noindex, nofollow
```

Ne jamais exposer dans les métadonnées :

- des données personnelles privées ;
- des tokens ;
- des identifiants internes ;
- des endpoints privés ;
- des informations d’administration.

Ne pas dépendre exclusivement d’un canvas Three.js pour présenter un contenu indexable.

---

## 16. GEO et contexte LLM

Lorsque le contenu public change, mettre à jour :

```text
app/frontend/public/llms.txt
```

Mettre également à jour les autres fichiers de contexte machine existants.

Ne référencer que :

- les pages publiques ;
- les contenus canoniques ;
- les informations à jour ;
- les descriptions réellement présentes dans le portfolio.

Exclure :

- les routes privées ;
- les données personnelles ;
- les pages d’administration ;
- les endpoints internes ;
- les contenus temporaires ;
- les brouillons ;
- les données d’authentification.

Toute information importante présentée visuellement ou en 3D doit posséder une représentation textuelle exploitable.

---

## 17. Règles pour les assets 3D

Pour chaque asset généré :

- conserver le script Blender source ;
- générer l’asset de manière reproductible ;
- utiliser Blender en mode headless lorsque possible ;
- utiliser GLB par défaut ;
- appliquer les transformations ;
- vérifier l’échelle ;
- vérifier l’orientation ;
- positionner correctement le pivot ;
- utiliser des noms explicites ;
- limiter les triangles ;
- limiter les matériaux ;
- limiter les textures ;
- vérifier le poids final ;
- vérifier le chargement dans le navigateur ;
- documenter la commande de génération.

Emplacement recommandé des scripts :

```text
tools/blender/
```

Emplacement recommandé des modèles :

```text
app/frontend/public/models/
```

Ne pas :

- modifier manuellement un GLB généré sans mettre à jour le script source ;
- télécharger un asset externe générique lorsqu’un asset original peut raisonnablement être créé ;
- utiliser un asset sans vérifier sa licence ;
- ajouter un asset trop lourd pour son rôle ;
- ajouter une texture surdimensionnée.

---

## 18. Règles Three.js

Toujours :

- limiter `devicePixelRatio` ;
- gérer le redimensionnement ;
- gérer les erreurs de chargement ;
- nettoyer les ressources ;
- disposer les géométries inutilisées ;
- disposer les matériaux inutilisés ;
- disposer les textures inutilisées ;
- disposer les render targets inutilisés ;
- supprimer les écouteurs ;
- mettre en pause ou réduire le rendu lorsque la page est masquée ;
- éviter les allocations dans la boucle de rendu ;
- mesurer les draw calls ;
- mesurer les triangles ;
- tester sur mobile.

Préférer :

- les géométries partagées ;
- les matériaux partagés ;
- `InstancedMesh` pour les répétitions ;
- le lazy loading ;
- les modèles compressés ;
- les textures compressées ;
- une scène simple et lisible ;
- une alternative HTML.

---

## 19. Règles GSAP

Toute animation GSAP doit :

- servir la narration ;
- servir la compréhension ;
- respecter `prefers-reduced-motion` ;
- fonctionner sur mobile ;
- être nettoyée ;
- éviter les recalculs de layout inutiles ;
- utiliser les transformations lorsque possible ;
- préserver la lisibilité ;
- ne pas bloquer le contenu ;
- ne pas empêcher la navigation clavier.

Dans React :

- utiliser `gsap.context()` ou `useGSAP` selon l’installation ;
- limiter le scope ;
- nettoyer le contexte ;
- supprimer les `ScrollTrigger` ;
- ne pas cibler globalement le DOM sans nécessité.

---

## 20. Performance

### Frontend

Vérifier :

- la taille du bundle ;
- le code splitting ;
- le lazy loading ;
- les images ;
- les polices ;
- les dépendances ;
- les re-renders ;
- les animations ;
- les requêtes réseau ;
- les erreurs console.

### Three.js

Vérifier :

- les draw calls ;
- les triangles ;
- les textures ;
- la mémoire GPU ;
- les shaders ;
- les ombres ;
- les lumières ;
- les passes de post-processing ;
- le temps de chargement ;
- le nombre d’objets ;
- les allocations ;
- le nettoyage.

### GSAP

Vérifier :

- le nombre de timelines ;
- le nombre de `ScrollTrigger` ;
- le travail par frame ;
- les propriétés animées ;
- les callbacks ;
- le nettoyage ;
- le comportement mobile.

Ne pas optimiser aveuglément. Identifier le goulot d’étranglement avant de modifier l’architecture.

---

## 21. Sécurité

Ne jamais exposer :

- un secret ;
- un mot de passe ;
- un token ;
- une clé privée ;
- une variable sensible ;
- un fichier `.env` ;
- une URL interne sensible ;
- un endpoint d’administration ;
- une donnée personnelle non publique.

Ne pas demander à un skill tiers de lire des secrets sans nécessité.

Examiner les scripts tiers avant de les exécuter.

Éviter :

- les commandes destructives ;
- les permissions excessives ;
- les téléchargements non vérifiés ;
- l’exécution arbitraire ;
- les dépendances inconnues ;
- les contenus externes non fiables.

---

## 22. Validation finale obligatoire

Avant de terminer une modification :

1. exécuter le lint ;
2. exécuter le contrôle de format ;
3. exécuter le contrôle TypeScript lorsqu’il existe ;
4. exécuter le build du workspace ;
5. exécuter les tests frontend lorsqu’ils existent ;
6. exécuter les tests backend pour toute modification backend ;
7. vérifier la console du navigateur ;
8. vérifier les erreurs réseau ;
9. vérifier les langues ;
10. vérifier le responsive ;
11. vérifier le mode clair ;
12. vérifier le mode sombre ;
13. vérifier l’accessibilité ;
14. vérifier le SEO ;
15. vérifier `llms.txt` lorsque nécessaire ;
16. vérifier les assets ;
17. vérifier les animations ;
18. vérifier le nettoyage des ressources ;
19. vérifier les performances principales ;
20. signaler les vérifications impossibles.

Utiliser les scripts du projet.

Ne pas inventer une commande si le workspace possède déjà un script approprié.

Si plusieurs gestionnaires de paquets sont présents, utiliser celui correspondant au lockfile principal du dépôt.

---

## 23. Compte rendu final obligatoire

Le compte rendu final doit contenir les sections suivantes.

### Fichiers modifiés

Lister les fichiers réellement modifiés.

### Skills utilisés

Pour chaque skill utilisé, préciser :

- son nom ;
- la raison de son utilisation ;
- la partie du projet concernée.

Ne jamais prétendre avoir utilisé un skill non chargé.

### Vérifications exécutées

Lister les commandes réellement exécutées.

### Résultats

Indiquer :

- les validations réussies ;
- les erreurs corrigées ;
- les erreurs restantes ;
- les avertissements ;
- les limites.

### Vérifications non réalisables

Indiquer clairement les vérifications qui n’ont pas pu être réalisées et pourquoi.

### Risques restants

Signaler :

- les risques de performance ;
- les risques responsive ;
- les risques d’accessibilité ;
- les risques de compatibilité ;
- les risques de maintenance ;
- les risques liés aux assets ou aux dépendances.

---

## 24. Critères de fin de tâche

Une tâche n’est terminée que lorsque :

- la demande fonctionnelle est satisfaite ;
- les skills adaptés ont été utilisés ;
- les composants existants ont été privilégiés ;
- les traductions sont complètes ;
- le responsive est vérifié ;
- les modes clair et sombre sont vérifiés ;
- l’accessibilité est vérifiée ;
- le SEO est vérifié lorsque nécessaire ;
- le contexte LLM est mis à jour lorsque nécessaire ;
- les performances ont été examinées ;
- les validations du workspace ont été exécutées ;
- les limitations sont signalées honnêtement.
