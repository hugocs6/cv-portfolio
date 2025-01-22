# CV Portfolio en ligne

Un portfolio moderne et réactif construit avec Next.js, présentant mes compétences en cybersécurité et développement web.

## 🌐 [Voir le site en ligne](https://cv-portfolio-gamma.vercel.app/)

## 🛠 Technologies Utilisées

- **Framework**: Next.js 14
- **Styling**: TailwindCSS
- **Icônes**: Lucide React
- **Déploiement**: Vercel

## ✨ Fonctionnalités

- Design responsive pour tous les appareils
- Mode sombre/clair
- Animations fluides
- Navigation par onglets
- Interface utilisateur moderne
- Optimisation des images avec Next.js
- Performance optimisée

## 🚀 Installation Locale

```bash
# Cloner le repository
git clone https://github.com/hugocs6/cv-portfolio

# Accéder au répertoire
cd cv-portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## 📁 Structure du Projet

```
cv-portfolio/
├── src/
│   ├── app/
│   │   ├── page.js
│   │   └── layout.js
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── Navbar.js
│   │   ├── sections/
│   │   │   ├── Experience.js
│   │   │   ├── Skills.js
│   │   │   └── Education.js
│   │   └── ui/
│   │       ├── ThemeToggle.js
│   │       └── InfoCard.js
│   └── styles/
│       └── globals.css
└── public/
    └── images/
        └── profile.jpg
```

## 🔄 Mise à Jour du Contenu

Pour mettre à jour le contenu du CV, modifiez les fichiers correspondants dans le dossier `components/sections/`.

## 📱 Responsive Design

Le site est optimisé pour :
- Mobile (< 640px)
- Tablette (640px - 1024px)
- Desktop (> 1024px)

## 🌙 Mode Sombre

Le site inclut un thème sombre qui peut être activé via le bouton en haut à droite.

## 🚀 Déploiement

Le site est automatiquement déployé sur Vercel à chaque push sur la branche main.

## 👤 Auteur

- Hugo Cannier
- Portfolio: [cv-portfolio-gamma.vercel.app](https://cv-portfolio-gamma.vercel.app/)
- GitHub: [@hugocs6](https://github.com/hugocs6)

## 📄 Licence

Ce projet est sous licence MIT.