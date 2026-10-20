# Portfolio de Bradley Djedje

<div align="center">

[![Live Demo](https://img.shields.io/badge/Demo-En_Ligne-success?style=for-the-badge&logo=githubpages&logoColor=white)](https://herdofpane.github.io/Portfolio/)
[![Astro](https://img.shields.io/badge/Astro-v5-bc52ee?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/herdofpane/Portfolio/actions)

<p align="center">
  Site portfolio professionnel, moderne et ultra-performant pour <strong>Bradley Djedje</strong>, Développeur Full-Stack, en alternance chez <strong>Semware</strong> et étudiant en <strong>Master MIASHS ICE-LD</strong> (Université de Toulouse).
</p>

[**🌐 Consulter la Démo en Ligne**](https://herdofpane.github.io/Portfolio/) • [**📖 Guide Utilisateur**](USER_GUIDE.md) • [**💼 Profil LinkedIn**](https://linkedin.com/in/bradley-djedje) • [**🐙 GitHub**](https://github.com/herdofpane)

</div>

---

## 🚀 Stack Technologique

- **Framework Web** : [Astro 5](https://astro.build/) — Génération statique hybride ultra-rapide (SSG), architecture en îles et zéro JavaScript superflu côté client par défaut.
- **Moteur de Styles** : [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` — Moteur de compilation haute performance intégré à Vite, utilisant la nouvelle directive moderne `@import "tailwindcss"`.
- **Langage & Typage** : [TypeScript](https://www.typescriptlang.org/) — Typage strict des données de projets, parcours chronologique et certifications.
- **Design System & UI** :
  - Palette sombre contemporaine (*Dark Mode*) avec accents Cyan, Bleu et Violet.
  - Effets de transparence et flous d'arrière-plan (*Glassmorphism*).
  - Orbes lumineux d'ambiance dynamiques (*Ambient Glow*).
  - Micro-interactions, transitions douces et conformité accessibilité (WCAG AA).
- **Typographie** : *Plus Jakarta Sans* & *Space Grotesk* (Google Fonts).
- **CI/CD & Hébergement** : GitHub Actions pour le build automatisé et déploiement continu sur GitHub Pages.

---

## ✨ Fonctionnalités Clés

- **Navigation fluide & Sticky Header** : En-tête fixe avec effet de flou dynamique, suivi des sections actives, menu burger optimisé mobile et bouton d'action directe.
- **Hero Interactif** :
  - Badge animé avec statut de disponibilité pour alternance.
  - Console de code interactive simulant l'exécution d'un profil développeur.
  - Indicateurs et statistiques clés (années d'expérience, projets menés, certifications).
  - Action rapide de copie de l'adresse email dans le presse-papier avec feedback visuel instantané.
- **À Propos & Parcours** : Présentation du profil Développeur Full-Stack, associant rigueur d'ingénierie logicielle et compréhension des enjeux métiers (Alternance chez Semware, Master MIASHS ICE-LD, BUT Informatique).
- **Matrice de Compétences 360°** : Organisée en 4 piliers majeurs :
  1. *Full-Stack Development* (Python, Django, Angular, TypeScript, Spring Boot, PHP).
  2. *Data & Databases* (PostgreSQL, MySQL, MongoDB, Databricks Lakehouse, PowerBI).
  3. *DevOps & Architecture* (Docker, Nginx, Linux, Git, REST APIs).
  4. *Méthodologie & Soft Skills* (Scrum/Agile, Documentation & Passation, Collaboration R&D, Reporting).
- **Timeline de Parcours Filtrable** : Parcours chronologique avec onglets de filtrage dynamique (*Tous*, *Expériences*, *Formations*).
- **Vitrine de Projets & Modales Détaillées** :
  - Cartes interactives catégorisées (CNRS, Egerine, Data Lakehouse, Spring Boot).
  - Modales d'exploration détaillée (contexte projet, missions clés, livrables, technologies).
  - Gestion ergonomique de la fermeture (touche `Échap`, clic sur le fond et bouton dédié).
- **Certifications Reconnues** : Accréditations officielles vérifiées (Databricks Fundamentals, HackerRank Python, Postman API Student Expert).
- **Prise de Contact & Feedback Toast** :
  - Coordonnées directes (email, téléphone, localisation avec mention de mobilité).
  - Boutons de copie rapide en un clic pour les coordonnées.
  - Formulaire de message préformaté prêt à l'envoi.
  - Système global de notifications *toast* flottantes pour informer l'utilisateur des actions réussies.

---

## 📁 Architecture du Projet

```text
site portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml           # Pipeline CI/CD GitHub Actions vers GitHub Pages
├── src/
│   ├── components/
│   │   ├── Header.astro         # Barre de navigation fixe, logo et ancres
│   │   ├── Hero.astro           # Présentation principale, console interactive et CTA
│   │   ├── About.astro          # Vision, parcours Semware et compétences clés
│   │   ├── Skills.astro         # Matrice de compétences en 4 piliers
│   │   ├── Timeline.astro       # Timeline chronologique avec filtres dynamiques
│   │   ├── Projects.astro       # Cartes de projets avec tags et déclencheurs de modale
│   │   ├── ProjectModal.astro   # Fenêtre modale avec détails des missions et livrables
│   │   ├── Certifications.astro # Badges et certifications officielles
│   │   ├── Contact.astro        # Coordonnées, boutons de copie et formulaire de contact
│   │   └── Footer.astro         # Copyright, mentions techniques et liens rapides
│   ├── layouts/
│   │   └── Layout.astro         # Shell HTML5, SEO, OpenGraph, orbes et gestionnaire de toasts
│   ├── pages/
│   │   └── index.astro          # Assemblage de la page d'accueil
│   └── styles/
│       └── global.css           # Thème sombre, utilitaires glassmorphism et animations
├── astro.config.mjs             # Configuration Astro (site, base path, Tailwind v4)
├── package.json                 # Scripts de build et dépendances
├── tsconfig.json                # Configuration TypeScript
├── USER_GUIDE.md                # Guide utilisateur et manuel d'administration
└── README.md                    # Documentation technique du projet
```

---

## 🛠️ Commandes Disponibles

| Commande | Action |
| :--- | :--- |
| `npm install` | Installe les dépendances du projet |
| `npm run dev` (ou `npm start`) | Démarre le serveur local de développement (`http://localhost:4321/Portfolio/`) |
| `npm run build` | Compile le site statique optimisé pour la production dans le dossier `dist/` |
| `npm run preview` | Lance un serveur local pour prévisualiser le build de production |
| `npm run astro` | Exécute des commandes Astro CLI (ex: `npm run astro check`) |

---

## 🌐 Déploiement Continu (CI/CD)

Le projet intègre un pipeline d'intégration et de déploiement continus via **GitHub Actions** ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) :

1. **Déclenchement automatique** : À chaque `push` sur la branche `main` ou via exécution manuelle (`workflow_dispatch`).
2. **Build reproductible** :
   - Environnement Ubuntu avec Node.js 20.
   - Installation déterministe via `npm ci`.
   - Compilation Astro optimisée avec injection des paramètres de déploiement (`--site` et `--base`).
3. **Déploiement sur GitHub Pages** : Publication instantanée sans interruption de service sur [herdofpane.github.io/Portfolio](https://herdofpane.github.io/Portfolio/).

---

## 🎯 Profil de Bradley Djedje

- **Poste Actuel** : Développeur Full-Stack (Alternance chez **Semware**).
- **Formation Supérieure** :
  - **Master MIASHS ICE-LD** (2025 - 2027 • En cours, Université de Toulouse - Ingénierie du Commerce Électronique & Logiciels Distribués).
  - **BUT Informatique** (2022 - 2025, IUT de Blagnac, Université Toulouse 2).
- **Expériences Professionnelles** :
  - **Semware** (2025 - Présent) : Développeur Full-Stack (Alternance).
  - **CNRS** (Mars - Juin 2025) : Développeur Backend Django, observatoire robotisé et flux de données scientifiques.
  - **Egerine** (Février - Avril 2024) : Développeur Web Full-Stack Angular, sécurisation d'API REST et administration serveur Linux.
- **Certifications Obtenues** :
  - **Databricks Fundamentals Accreditation** (Databricks Academy).
  - **Python (Basic) Certificate** (HackerRank).
  - **Postman API Fundamentals Student Expert** (Postman).
- **Contact & Réseaux** :
  - 📧 Email : [djedjebradley77@gmail.com](mailto:djedjebradley77@gmail.com)
  - 💼 LinkedIn : [linkedin.com/in/bradley-djedje](https://linkedin.com/in/bradley-djedje)
  - 🐙 GitHub : [github.com/herdofpane](https://github.com/herdofpane)
  - 📍 Localisation : Toulouse, France (Permis B, véhiculé & mobile)

---

<div align="center">
  <sub>Conçu et développé avec passion par Bradley Djedje • Propulsé par Astro & Tailwind CSS v4</sub>
</div>
