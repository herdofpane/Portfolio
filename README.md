# Portfolio de Bradley Djedje (Astro + Tailwind CSS v4)

Site portfolio professionnel, ultra-performant et responsive pour **Bradley Djedje**, Chef de Projets Informatique & Développeur Full-Stack, actuellement **en alternance chez Semware** et étudiant en **Master MIASHS ICE-LD** à l'Université de Toulouse.

---

## 🚀 Stack Technologique

- **Framework** : [Astro 5](https://astro.build/) (Génération statique ultra-rapide, composants modulaires).
- **Styling** : [Tailwind CSS v4](https://tailwindcss.com/) avec `@tailwindcss/vite` (Dernier moteur ultra-rapide, sans fichier de config lourd).
- **Typographie** : *Plus Jakarta Sans* & *Space Grotesk* (Google Fonts).
- **Thème** : Mode Sombre & Mode Clair dynamique avec persistance `localStorage`.
- **Interactivité** : Modales projets, timeline filtrable, toasts de confirmation, copie rapide en 1 clic de l'email/téléphone et formulaire relié au client de messagerie.

---

## 📁 Architecture du Projet

```text
site portfolio/
├── src/
│   ├── components/
│   │   ├── Header.astro         # Barre de navigation fixe, logo et sélecteur de thème
│   │   ├── Hero.astro           # Présentation principale, statut chez Semware & Master MIASHS, stats & CTA
│   │   ├── About.astro          # Vision, alternance Semware, Master MIASHS ICE-LD et atouts profil
│   │   ├── Skills.astro         # Stack organisée (Full-stack, BDD, DevOps, Gestion)
│   │   ├── Timeline.astro       # Parcours interactif avec filtres (Expériences & Formations)
│   │   ├── Projects.astro       # Cartes des projets phares (CNRS, Egerine, Data, Spring Boot)
│   │   ├── ProjectModal.astro   # Fenêtre modale avec détails des missions et livrables
│   │   ├── Certifications.astro # Accréditations Databricks, HackerRank et Postman
│   │   ├── Contact.astro        # Coordonnées directes, boutons de copie et formulaire
│   │   └── Footer.astro         # Liens et mentions légales
│   ├── layouts/
│   │   └── Layout.astro         # Layout principal HTML5, SEO, OpenGraph et orbes d'ambiance
│   ├── pages/
│   │   └── index.astro          # Page d'accueil assemblant tous les composants
│   └── styles/
│       └── global.css           # Imports Tailwind v4 et variables de design
├── astro.config.mjs             # Configuration Astro intégrant le plugin Tailwind v4 Vite
├── package.json                 # Dépendances du projet
└── README.md                    # Documentation
```

---

## 🛠️ Commandes Disponibles

Installez les dépendances si nécessaire :
```bash
npm install
```

### Lancer le serveur de développement local :
```bash
npm run dev
```
Le site sera accessible sur `http://localhost:4321`.

### Compiler pour la production :
```bash
npm run build
```
Les fichiers statiques optimisés sont générés dans le dossier `dist/`.

### Prévisualiser le build de production localement :
```bash
npm run preview
```

---

## 🎯 Profil de Bradley Djedje

- **Statut actuel** : Chef de Projets Informatique & Développeur Full-Stack en alternance chez **Semware** et étudiant en **Master MIASHS ICE-LD** (Université de Toulouse).
- **Formations** :
  - **Master MIASHS ICE-LD** (2025 - 2027 • En cours, Université de Toulouse - Ingénierie du Commerce Électronique & Logiciels Distribués).
  - **BUT Informatique** (2022 - 2025, IUT de Blagnac, Université Toulouse 2).
- **Expériences professionnelles** :
  - **Semware** (2025 - Présent • En cours) : Chef de Projets IT & Développeur Full-Stack (Alternance).
  - **CNRS** (Mars - Juin 2025) : Développeur Backend Django pour observatoire robotisé, automatisation Python et collaboration R&D.
  - **Egerine** (Février - Avril 2024) : Développeur Web Full-Stack Angular, sécurisation d'API REST, administration serveur et documentation.
- **Certifications** :
  - Databricks Fundamentals Accreditation (Databricks Academy)
  - Python (Basic) Certificate (HackerRank)
  - Postman API Fundamentals Student Expert (Postman)
- **Localisation & Contact** : Toulouse (Permis B, véhiculé), `+33 07 83 03 39 92`, `djedjebradley77@gmail.com`.
