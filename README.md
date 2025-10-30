# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Setup

```bash
nvm use
npm install

cp .env-sample .env

#dev
npm run dev

#prod
npm run build
npm run preview
```

## Firebase Deployment

```bash
# Build for production
npm run build

# If credentials expire, reauth first
firebase login --reauth

# Deploy to Firebase Hosting
firebase deploy --only hosting
```
