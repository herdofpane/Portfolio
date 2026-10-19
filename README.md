# Portfolio Web

<div align="center">

[![Live Demo](https://img.shields.io/badge/Demo-En_Ligne-success?style=for-the-badge&logo=githubpages&logoColor=white)](https://herdofpane.github.io/Portfolio/)
[![Astro](https://img.shields.io/badge/Astro-v5-bc52ee?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/herdofpane/Portfolio/actions)

<p align="center">
  Site portfolio professionnel, moderne et ultra-performant, conçu avec Astro et Tailwind CSS v4.
</p>

[**Consulter la Démo en Ligne**](https://herdofpane.github.io/Portfolio/) • [**Dépôt GitHub**](https://github.com/herdofpane/Portfolio)

</div>

---

## Stack Technologique

- **Framework Web** : [Astro 5](https://astro.build/) — Génération statique hybride ultra-rapide (SSG), architecture en îles et zéro JavaScript superflu côté client par défaut.
- **Moteur de Styles** : [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` — Moteur de compilation haute performance intégré à Vite, utilisant la directive moderne `@import "tailwindcss"`.
- **Langage et Typage** : [TypeScript](https://www.typescriptlang.org/) — Typage strict des structures de données, composants et interactions.
- **Design System et UI** :
  - Palette sombre contemporaine (*Dark Mode*) avec accents Cyan, Bleu et Violet.
  - Effets de transparence et flous d'arrière-plan (*Glassmorphism*).
  - Orbes lumineux d'ambiance dynamiques (*Ambient Glow*).
  - Micro-interactions, transitions douces et conformité accessibilité (WCAG AA).
- **Typographie** : *Plus Jakarta Sans* et *Space Grotesk* (Google Fonts).
- **CI/CD et Hébergement** : GitHub Actions pour le build automatisé et déploiement continu sur GitHub Pages.

---

## Fonctionnalités Clés

- **Navigation fluide et Sticky Header** : En-tête fixe avec effet de flou dynamique, suivi des sections actives, menu burger optimisé mobile et bouton d'action directe.
- **Hero Interactif** :
  - Badge animé avec statut de disponibilité.
  - Console de code interactive simulant un terminal de développement.
  - Indicateurs et métriques clés.
  - Action rapide de copie des coordonnées avec retour visuel immédiat.
- **Présentation et À Propos** : Mise en valeur du profil technique, de la méthodologie logicielle et du positionnement professionnel.
- **Matrice de Compétences** : Grille modulaire organisée par domaines techniques (Full-Stack, Bases de données, DevOps et Méthodologies).
- **Timeline Chronologique** : Parcours professionnel et académique avec système d'onglets de filtrage dynamique.
- **Vitrine de Projets et Modales Détaillées** :
  - Cartes interactives de réalisations avec tags technologiques.
  - Modales d'exploration détaillée (contexte, missions, livrables et stack associée).
  - Gestion ergonomique de la fermeture (touche Échap, clic sur le fond et bouton dédié).
- **Section Certifications** : Présentation structurée des accréditations et certifications officielles.
- **Prise de Contact et Notifications Toast** :
  - Coordonnées directes et boutons de copie rapide en un clic.
  - Formulaire de message préformaté prêt à l'envoi.
  - Système global de notifications toast flottantes pour informer l'utilisateur des actions réussies.

---

## Architecture du Projet

```text
site portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml           # Pipeline CI/CD GitHub Actions vers GitHub Pages
├── src/
│   ├── components/
│   │   ├── Header.astro         # Barre de navigation fixe, logo et ancres
│   │   ├── Hero.astro           # Présentation principale, console interactive et CTA
│   │   ├── About.astro          # Vision, parcours et compétences clés
│   │   ├── Skills.astro         # Matrice de compétences en 4 piliers
│   │   ├── Timeline.astro       # Timeline chronologique avec filtres dynamiques
│   │   ├── Projects.astro       # Cartes de projets avec tags et déclencheurs de modale
│   │   ├── ProjectModal.astro   # Fenêtre modale avec détails des missions et livrables
│   │   ├── Certifications.astro # Badges et certifications officielles
│   │   ├── Contact.astro        # Coordonnées, boutons de copie et formulaire de contact
│   │   └── Footer.astro         # Copyright, identité professionnelle et ancre de retour
│   ├── layouts/
│   │   └── Layout.astro         # Shell HTML5, SEO, OpenGraph, orbes et gestionnaire de toasts
│   ├── pages/
│   │   └── index.astro          # Assemblage de la page d'accueil
│   └── styles/
│       └── global.css           # Thème sombre, utilitaires glassmorphism et animations
├── .npmrc                       # Configuration locale npm (optimisation des sorties d'installation)
├── astro.config.mjs             # Configuration Astro (site, base path, Tailwind v4)
├── package.json                 # Scripts de build et dépendances
├── tsconfig.json                # Configuration TypeScript
└── README.md                    # Documentation du projet
```

---

## Commandes Disponibles

| Commande | Action |
| :--- | :--- |
| `npm install` | Installe les dépendances du projet |
| `npm run dev` (ou `npm start`) | Démarre le serveur local de développement (`http://localhost:4321/Portfolio/`) |
| `npm run build` | Compile le site statique optimisé pour la production dans le dossier `dist/` |
| `npm run preview` | Lance un serveur local pour prévisualiser le build de production |
| `npm run astro` | Exécute des commandes Astro CLI (ex: `npm run astro check`) |

---

## Déploiement Continu (CI/CD)

Le projet intègre un pipeline d'intégration et de déploiement continus via **GitHub Actions** ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) :

1. **Déclenchement automatique** : À chaque `push` sur la branche `main` ou via exécution manuelle (`workflow_dispatch`).
2. **Build reproductible** :
   - Environnement Ubuntu avec Node.js 20.
   - Installation déterministe via `npm ci`.
   - Compilation Astro optimisée avec injection des paramètres de déploiement (`--site` et `--base`).
3. **Déploiement sur GitHub Pages** : Publication instantanée sans interruption de service sur [herdofpane.github.io/Portfolio](https://herdofpane.github.io/Portfolio/).

---

<div align="center">
  <sub>Site portfolio personnel • Développé avec Astro et Tailwind CSS v4</sub>
</div>
