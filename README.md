# Portfolio de Bradley Djedje

Site portfolio professionnel, moderne et ultra-performant pour **Bradley Djedje**, Chef de Projets Informatique & Développeur Full-Stack, actuellement **en alternance chez Semware** et étudiant en **Master MIASHS ICE-LD** (Université de Toulouse).

---

## 🚀 Stack Technologique

- **Framework** : [Astro 5](https://astro.build/) (Génération statique hybride ultra-rapide, zéro JS superflu par défaut).
- **Styling** : [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` (Dernier moteur compilé avec intégration Vite native et syntaxe CSS moderne `@import "tailwindcss"`).
- **Design System** : Thème sombre premium avec *Glassmorphism*, orbes lumineux d'ambiance (*ambient glow*), dégradés dynamiques et micro-interactions fluides.
- **Typographie** : *Plus Jakarta Sans* & *Space Grotesk* (Google Fonts).
- **Typage & Rigueur** : TypeScript (Interfaces pour les projets, certifications et timeline).

---

## ✨ Fonctionnalités Clés

- **En-tête fixe & Navigation fluide** : Menu de navigation avec indicateur de section active, bouton d'action directe et menu burger adaptatif sur mobile.
- **Hero interactif** : Présentation percutante du profil avec badge de statut d'alternance animé, résumé en console de code interactive, statistiques clés et bouton de copie d'adresse email en 1 clic dans le presse-papier.
- **Section À Propos & Vision** : Mise en valeur de la double compétence technique et gestion de projet (Alternance Semware, Master MIASHS ICE-LD, BUT Informatique).
- **Matrice de Compétences** : Cartographie des savoir-faire en 4 piliers (Full-Stack, Bases de données & Data, DevOps & Systèmes, Méthodologie & Soft Skills) avec mise en avant des compétences maîtresses.
- **Timeline de Parcours filtrable** : Historique interactif chronologique avec filtres par catégorie (*Tout*, *Expériences*, *Formations*).
- **Vitrine de Projets & Modales interactives** : Fiches projets avec tags technologiques et ouverture d'une fenêtre modale détaillée (contexte, missions clés, livrables, technologies).
- **Certifications & Accréditations** : Mise en avant des certifications vérifiées (Databricks, HackerRank, Postman).
- **Contact & Feedback Utilisateur** : Coordonnées directes, boutons de copie rapide, formulaire de prise de contact préformaté et système de notifications *toast* flottantes.

---

## 📁 Architecture du Projet

```text
site portfolio/
├── src/
│   ├── components/
│   │   ├── Header.astro         # Barre de navigation fixe, logo et liens d'ancrage
│   │   ├── Hero.astro           # Accroche principale, stats, console interacteur et CTA
│   │   ├── About.astro          # Vision, alternance Semware et atouts du profil
│   │   ├── Skills.astro         # Matrice des compétences organisée en 4 piliers
│   │   ├── Timeline.astro       # Parcours interactif avec filtres d'expérience et formation
│   │   ├── Projects.astro       # Cartes des projets phares (CNRS, Egerine, Data, Spring Boot)
│   │   ├── ProjectModal.astro   # Modale plein écran avec détails des missions et livrables
│   │   ├── Certifications.astro # Accréditations Cloud, Python et API
│   │   ├── Contact.astro        # Coordonnées directes, formulaire et boutons d'action
│   │   └── Footer.astro         # Liens sociaux, copyright et retour rapide
│   ├── layouts/
│   │   └── Layout.astro         # Structure HTML5, SEO, OpenGraph, orbes et système de toast
│   ├── pages/
│   │   └── index.astro          # Page d'accueil assemblant l'ensemble des composants
│   └── styles/
│       └── global.css           # Thème sombre, glassmorphism et utilitaires de style
├── astro.config.mjs             # Configuration Astro avec le plugin Tailwind CSS v4
├── package.json                 # Dépendances et scripts de développement
└── README.md                    # Documentation complète du projet
```

---

## 🛠️ Commandes Disponibles

### Installation des dépendances
```bash
npm install
```

### Démarrer le serveur de développement local
```bash
npm run dev
```
Le site sera accessible localement sur `http://localhost:4321`.

### Compiler le projet pour la production
```bash
npm run build
```
Les fichiers statiques optimisés pour le déploiement sont générés dans le dossier `dist/`.

### Prévisualiser le build de production localement
```bash
npm run preview
```

---

## 🎯 Profil de Bradley Djedje

- **Poste actuel** : Chef de Projets Informatique & Développeur Full-Stack (Alternance chez **Semware**).
- **Cursus universitaire** :
  - **Master MIASHS ICE-LD** (2025 - 2027 • En cours, Université de Toulouse - Ingénierie du Commerce Électronique & Logiciels Distribués).
  - **BUT Informatique** (2022 - 2025, IUT de Blagnac, Université Toulouse 2).
- **Parcours professionnel** :
  - **Semware** (2025 - Présent) : Chef de Projets IT & Développeur Full-Stack (Alternance).
  - **CNRS** (Mars - Juin 2025) : Développeur Backend Django pour observatoire robotisé, automatisation Python et collaboration scientifique.
  - **Egerine** (Février - Avril 2024) : Développeur Web Full-Stack Angular, sécurisation d'API REST, administration serveur et documentation.
- **Certifications** :
  - **Databricks Fundamentals Accreditation** (Databricks Academy)
  - **Python (Basic) Certificate** (HackerRank)
  - **Postman API Fundamentals Student Expert** (Postman)
- **Localisation & Contact** : Toulouse (Permis B, véhiculé) • `djedjebradley77@gmail.com`.
