# 📖 Guide Utilisateur — Portfolio de Bradley Djedje

Bienvenue dans le guide utilisateur officiel du site portfolio de **Bradley Djedje** (Développeur Full-Stack, Alternant chez Semware & Étudiant en Master MIASHS ICE-LD).

Ce document a été conçu pour répondre à deux besoins :
1. **Guide de Navigation (Visiteurs & Recruteurs)** : Comprendre et exploiter l'ensemble des fonctionnalités interactives du site.
2. **Guide de Maintenance & Personnalisation (Administrateur / Bradley)** : Mettre à jour facilement son profil, ajouter des projets, enrichir son parcours et publier les modifications sans risque d'erreur.

---

## 📑 Table des Matières

1. [🧭 Guide de Navigation (Visiteurs & Recruteurs)](#-1-guide-de-navigation-visiteurs--recruteurs)
   - [Barre de Navigation & En-tête](#11-barre-de-navigation--en-tête)
   - [Hero & Console Interactive](#12-hero--console-interactive)
   - [Matrice de Compétences 360°](#13-matrice-de-compétences-360)
   - [Timeline Chronologique Filtrable](#14-timeline-chronologique-filtrable)
   - [Projets & Modales Détaillées](#15-projets--modales-détaillées)
   - [Certifications Reconnues](#16-certifications-reconnues)
   - [Contact Direct & Notifications Toast](#17-contact-direct--notifications-toast)
2. [⚙️ Prise en Main Technique en Local](#-2-prise-en-main-technique-en-local)
   - [Prérequis](#21-prérequis)
   - [Installation & Lancement](#22-installation--lancement)
3. [✏️ Guide de Mise à Jour & Personnalisation](#-3-guide-de-mise-à-jour--personnalisation)
   - [Modifier ses Informations Personnelles & Statut](#31-modifier-ses-informations-personnelles--statut)
   - [Ajouter ou Modifier une Compétence](#32-ajouter-ou-modifier-une-compétence)
   - [Mettre à Jour la Chronologie (Expériences / Formations)](#33-mettre-à-jour-la-chronologie-expériences--formations)
   - [Ajouter ou Modifier un Projet (Cartes + Modale)](#34-ajouter-ou-modifier-un-projet-cartes--modale)
   - [Ajouter une Certification](#35-ajouter-une-certification)
   - [Intégrer un CV Téléchargeable (PDF)](#36-intégrer-un-cv-téléchargeable-pdf)
   - [Modifier les Coordonnées de Contact](#37-modifier-les-coordonnées-de-contact)
4. [🚀 Build & Déploiement Continu](#-4-build--déploiement-continu)
   - [Tester la Version de Production en Local](#41-tester-la-version-de-production-en-local)
   - [Publication Automatique sur GitHub Pages](#42-publication-automatique-sur-github-pages)
5. [❓ Résolution des Problèmes Fréquents (FAQ)](#-5-résolution-des-problèmes-fréquents-faq)

---

## 🧭 1. Guide de Navigation (Visiteurs & Recruteurs)

Le site a été optimisé pour offrir une expérience fluide, réactive et accessible à la fois sur écran d'ordinateur, tablette et smartphone.

### 1.1 Barre de Navigation & En-tête
* **En-tête Fixe (*Sticky Header*)** : La barre supérieure reste accessible en permanence avec un effet de flou d'arrière-plan (*glassmorphism*).
* **Indicateur de Section** : Au défilement, le lien correspondant à la section active est automatiquement mis en surbrillance.
* **Menu Burger Mobile** : Sur smartphone, cliquez sur l'icône de menu pour dérouler une navigation plein écran tactile.
* **Bouton Direct "Me contacter"** : Permet de descendre instantanément à la section contact depuis n'importe où.

### 1.2 Hero & Console Interactive
* **Badge de Disponibilité** : Indique le statut actuel en temps réel (Alternance chez Semware & Master MIASHS ICE-LD).
* **Console Développeur Interactive** :
  - Reproduit une fenêtre de terminal moderne avec coloration syntaxique.
  - Affiche l'objet JSON complet représentant le profil technique de Bradley.
* **Action Rapide de Copie d'Email** : Cliquez sur l'icône de presse-papier à côté des boutons principaux pour copier instantanément l'adresse email sans devoir ouvrir un client mail. Une notification flottante (*Toast*) confirme l'action.

### 1.3 Matrice de Compétences 360°
* La section regroupe les compétences techniques et humaines réparties en **4 piliers** :
  1. *Full-Stack Development* (Langages & frameworks applicatifs).
  2. *Data & Databases* (Gestion de données, Lakehouse, SQL & NoSQL).
  3. *DevOps & Architecture* (Conteneurs, serveurs, APIs, Linux).
  4. *Méthodologie & Soft Skills* (Agilité, gestion de projet, rigueur).

### 1.4 Timeline Chronologique Filtrable
* **Boutons de Filtres Dynamiques** :
  - **Tous** : Affiche l'ensemble du parcours chronologique.
  - **Expériences** : Isole les postes en entreprise et laboratoires (Semware, CNRS, Egerine).
  - **Formations** : Isole le parcours académique (Master MIASHS ICE-LD, BUT Informatique).
* **Badges de Période & Statut "En cours"** : Un repère visuel vert pulsant identifie immédiatement les engagements actuels.

### 1.5 Projets & Modales Détaillées
* **Cartes de Projets** : Chaque carte présente le domaine d'intervention, un résumé synthétique et les tags de stack technologique.
* **Modale d'Exploration Approfondie** :
  - Cliquez sur **"En savoir plus"** sur une carte pour ouvrir une modale complète.
  - Elle détaille le contexte, les défis techniques résolus, les livrables et la stack complète.
* **Raccourcis de Fermeture** :
  - Clic sur la croix en haut à droite.
  - Clic à l'extérieur de la boîte modale sur le fond semi-transparent.
  - Pression de la touche clavier <kbd>Échap</kbd> (<kbd>Escape</kbd>).

### 1.6 Certifications Reconnues
* Badges officiels avec lien de vérification vers les organismes certificateurs (Databricks, HackerRank, Postman).

### 1.7 Contact Direct & Notifications Toast
* **Boutons de Copie en un Clic** : Copiez le numéro de téléphone ou l'adresse email d'un simple clic sans sélection manuelle.
* **Formulaire de Message** :
  - Sélection de l'objet (Alternance, Échange technique, Opportunité professionnelle).
  - À la soumission, un client mail pré-rempli s'ouvre proprement et un toast de confirmation s'affiche à l'écran.

---

## ⚙️ 2. Prise en Main Technique en Local

### 2.1 Prérequis
Pour exécuter le projet sur votre machine de développement :
* **Node.js** : Version `18.x` ou supérieure (version `20.x` LTS recommandée).
* **Gestionnaire de paquets** : `npm` (inclus avec Node.js).
* **Git** : Installé et configuré sur votre poste.

### 2.2 Installation & Lancement

1. **Cloner le dépôt Git** :
   ```bash
   git clone https://github.com/herdofpane/Portfolio.git
   cd Portfolio
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement local** :
   ```bash
   npm run dev
   ```
   L'application est accessible à l'adresse suivante :
   👉 `http://localhost:4321/Portfolio/`

> [!NOTE]
> Le préfixe `/Portfolio/` correspond au chemin de base configuré dans `astro.config.mjs` pour correspondre à l'URL de déploiement GitHub Pages.

---

## ✏️ 3. Guide de Mise à Jour & Personnalisation

Tous les composants de contenu sont situés dans le dossier [`src/components/`](file:///c:/Users/bradl/Documents/projets/site%20portfolio/src/components). Voici comment modifier chaque élément étape par étape.

### 3.1 Modifier ses Informations Personnelles & Statut
* **Fichier cible** : [`src/components/Hero.astro`](file:///c:/Users/bradl/Documents/projets/site%20portfolio/src/components/Hero.astro)
* **Éléments éditables** :
  - **Badge de statut** : Modifier le texte à l'intérieur du badge vert (lignes ~15-19).
  - **Titre & Rôle** : Modifier le titre `Développeur Full-Stack` ou l'accroche descriptive.
  - **Badges d'attributs** : Mobilité (Permis B), localisation (Toulouse) et niveau de langue (Anglais B2).
  - **Console interactive** : Modifier le bloc `<pre><code>` pour ajuster les données affichées dans le terminal simulé.

### 3.2 Ajouter ou Modifier une Compétence
* **Fichier cible** : [`src/components/Skills.astro`](file:///c:/Users/bradl/Documents/projets/site%20portfolio/src/components/Skills.astro)
* Les compétences sont stockées dans le tableau `skillCategories` en haut du fichier Astro :
  ```javascript
  {
    title: 'Full-Stack Development',
    description: 'Conception d\'architectures web évolutives...',
    icon: 'code',
    skills: [
      { name: 'Python / Django', level: 'Avancé', highlight: true },
      { name: 'Angular / TypeScript', level: 'Avancé', highlight: true },
      // Ajouter une nouvelle compétence ici :
      { name: 'Vue.js', level: 'Intermédiaire', highlight: false }
    ]
  }
  ```

### 3.3 Mettre à Jour la Chronologie (Expériences / Formations)
* **Fichier cible** : [`src/components/Timeline.astro`](file:///c:/Users/bradl/Documents/projets/site%20portfolio/src/components/Timeline.astro)
* Dans le tableau `timelineData`, ajoutez un nouvel objet en tête de liste :
  ```javascript
  {
    type: 'experience', // ou 'education'
    date: '2026 - 2027',
    title: 'Intitulé du Poste ou du Diplôme',
    subtitle: 'Nom de l\'Entreprise ou Université',
    desc: 'Description synthétique de la mission...',
    bullets: [
      'Réalisation majeure 1',
      'Réalisation majeure 2'
    ],
    tags: ['Tech1', 'Tech2', 'Méthode'],
    isCurrent: true // mettre à false si terminé
  }
  ```

### 3.4 Ajouter ou Modifier un Projet (Cartes + Modale)
Pour ajouter un nouveau projet marquant, **deux fichiers** doivent être mis à jour de manière cohérente :

1. **La Carte Visuelle** dans [`src/components/Projects.astro`](file:///c:/Users/bradl/Documents/projets/site%20portfolio/src/components/Projects.astro) :
   Ajoutez une entrée dans le tableau `projects` avec un identifiant unique (ex: `'mon-nouveau-projet'`) :
   ```javascript
   {
     id: 'mon-nouveau-projet',
     title: 'Titre du Projet',
     subtitle: 'Organisation • Contexte',
     category: 'Web & Cloud',
     summary: 'Résumé percutant des réalisations...',
     stack: ['TypeScript', 'Node.js', 'Docker'],
     gradient: 'from-cyan-500/20 to-blue-600/20'
   }
   ```

2. **Le Contenu Détaillé de la Modale** dans [`src/components/ProjectModal.astro`](file:///c:/Users/bradl/Documents/projets/site%20portfolio/src/components/ProjectModal.astro) :
   Dans l'objet `projectDetails` du script côté client, ajoutez la clé correspondant à l'identifiant :
   ```javascript
   'mon-nouveau-projet': {
     category: 'Web & Cloud',
     title: 'Titre Complet du Projet',
     org: 'Nom Entreprise • 2026',
     overview: 'Description détaillée du contexte et des objectifs...',
     challenges: [
       'Défi technique 1 résolu...',
       'Défi technique 2 résolu...'
     ],
     stack: ['TypeScript', 'Node.js', 'Docker', 'PostgreSQL'],
     deliverables: 'Livrables produits (documentation, code source, déploiement)...'
   }
   ```

### 3.5 Ajouter une Certification
* **Fichier cible** : [`src/components/Certifications.astro`](file:///c:/Users/bradl/Documents/projets/site%20portfolio/src/components/Certifications.astro)
* Ajoutez un objet dans le tableau `certifications` :
  ```javascript
  {
    title: 'Nom de la Certification',
    issuer: 'Organisme Émetteur',
    date: 'Année ou Mois Année',
    credentialId: 'Identifiant Unique / URL',
    verifyUrl: 'https://...',
    badgeIcon: 'nom-icone'
  }
  ```

### 3.6 Intégrer un CV Téléchargeable (PDF)
Pour permettre aux recruteurs de télécharger directement votre CV en format PDF :
1. Créez un dossier `public/` à la racine du projet (s'il n'existe pas encore).
2. Déposez-y votre fichier PDF, par exemple : `public/CV_Bradley_Djedje.pdf`.
3. Dans [`src/components/Hero.astro`](file:///c:/Users/bradl/Documents/projets/site%20portfolio/src/components/Hero.astro) ou [`src/components/Header.astro`](file:///c:/Users/bradl/Documents/projets/site%20portfolio/src/components/Header.astro), ajoutez un lien de téléchargement :
   ```html
   <a 
     href={`${import.meta.env.BASE_URL}/CV_Bradley_Djedje.pdf`} 
     download="CV_Bradley_Djedje.pdf"
     class="px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold text-sm hover:bg-cyan-500/20 transition-all"
   >
     Télécharger mon CV (PDF)
   </a>
   ```

### 3.7 Modifier les Coordonnées de Contact
* **Fichier cible** : [`src/components/Contact.astro`](file:///c:/Users/bradl/Documents/projets/site%20portfolio/src/components/Contact.astro)
* Mettez à jour :
  - L'adresse email (attribut `href="mailto:..."` et attribut `data-copy="..."`).
  - Le numéro de téléphone (attribut `href="tel:..."` et `data-copy="..."`).
  - La ville de résidence et la mobilité.
  - Les liens de vos profils LinkedIn et GitHub.
* Pensez à répercuter le cas échéant dans [`src/components/Footer.astro`](file:///c:/Users/bradl/Documents/projets/site%20portfolio/src/components/Footer.astro) et [`src/layouts/Layout.astro`](file:///c:/Users/bradl/Documents/projets/site%20portfolio/src/layouts/Layout.astro) (métadonnées OpenGraph).

---

## 🚀 4. Build & Déploiement Continu

### 4.1 Tester la Version de Production en Local
Avant de pousser vos modifications sur GitHub, vérifiez systématiquement que le build de production s'exécute sans erreur :

```bash
# 1. Compiler les assets statiques
npm run build

# 2. Prévisualiser le résultat final
npm run preview
```
Cette étape génère le dossier `dist/` contenant le site statique entièrement compilé et optimisé.

### 4.2 Publication Automatique sur GitHub Pages
Le déploiement est entièrement automatisé grâce au workflow GitHub Actions défini dans [`.github/workflows/deploy.yml`](file:///c:/Users/bradl/Documents/projets/site%20portfolio/.github/workflows/deploy.yml).

Pour publier vos mises à jour en ligne :
1. **Ajoutez vos fichiers modifiés à Git** :
   ```bash
   git add .
   ```
2. **Créez un commit explicite** (au format Conventional Commits) :
   ```bash
   git commit -m "feat(projects): add new enterprise web project"
   ```
3. **Poussez sur la branche principale** :
   ```bash
   git push origin main
   ```
4. **Observer le déploiement** :
   - Rendez-vous sur l'onglet **Actions** de votre dépôt GitHub.
   - Le workflow compile le site et déploie automatiquement les fichiers sur GitHub Pages en moins de 2 minutes.
   - Votre site en ligne est immédiatement actualisé sur : [https://herdofpane.github.io/Portfolio/](https://herdofpane.github.io/Portfolio/)

---

## ❓ 5. Résolution des Problèmes Fréquents (FAQ)

### Le port 4321 est déjà occupé
Si le terminal indique que le port `4321` est utilisé par un autre processus :
```bash
npx astro dev --port 4322
```

### Les styles Tailwind v4 ne semblent pas s'actualiser
Videz le cache d'Astro en supprimant le dossier temporaire `.astro` puis relancez le serveur :
```bash
# Sur Windows PowerShell
Remove-Item -Recurse -Force .astro
npm run dev
```

### Le lien d'une image ou d'un asset est introuvable sur GitHub Pages
GitHub Pages héberge le projet sous un sous-dossier (`/Portfolio/`). Veillez toujours à préfixer vos liens statiques absolus avec la variable d'environnement de base d'Astro :
```astro
<img src={`${import.meta.env.BASE_URL}/mon-image.png`} alt="..." />
```

---

<div align="center">
  <sub>Document rédigé pour le projet <strong>Portfolio Bradley Djedje</strong> • Dernière révision : Mars 2025</sub>
</div>
