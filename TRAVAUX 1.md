# 🏛️ PROPERTY HUB MANAGEMENT — TRAVAUX 1

**Projet** : Site web vitrine haut de gamme — agence immobilière (Djibouti)
**Statut** : ✅ Maquette de présentation client — fonctionnelle en local
**Date** : 8 juin 2026
**Type** : Site one-page (single page) responsive

---

## 1. Point de départ

Le projet ne contenait **qu'un dossier `Images/`** (logo + photos d'appartements + un flyer marketing). Tout a été conçu à partir de cette matière première.

**Informations extraites du logo et du flyer :**
- Marque : **Property Hub Management**
- Localisation : **Djibouti** — Horizon Residence, Héron
- Partenaire : **Sky Construction · Wadan City** (résidences/villas modernes)
- Téléphones : `+253 77 10 09 09` · `+253 21 51 33 33` · `+253 77 21 07 41` · `+253 21 25 13 43`
- Offre : appartements **meublés / non-meublés** + **villas**
- Identité visuelle : **or + vert émeraude** sur fond sombre, typographie serif élégante
- Promesse de marque : *« un cadre de vie moderne, sécurisé et élégant »*

---

## 2. Stack technique mise en place

| Technologie | Rôle |
|---|---|
| **Next.js 15** (App Router) | Framework React, performance et SEO |
| **TypeScript** | Code typé et fiable |
| **Tailwind CSS v4** | Système de design / styles |
| **Framer Motion** | Animations, transitions, micro-interactions |
| **Lenis** | Smooth scroll (défilement fluide premium) |
| **GSAP** | Animations avancées au scroll |

> Le projet **compile sans erreur** (`npm run build` ✅) et tourne en local via `npm run dev` → http://localhost:3000

---

## 3. Direction artistique (DA)

- **Palette** : Onyx (noir profond) · **Or** (dégradé `#9a7a2f → #e7cd8a`) · **Émeraude** profond · Crème
- **Typographies** : *Cormorant Garamond* (titres, serif luxe) + *Manrope* (texte, sans-serif)
- **Ambiance** : luxe immobilier, beaucoup d'espace, grandes images, effets de profondeur
- Design system centralisé (couleurs, animations, boutons) dans `app/globals.css`

---

## 4. Sections réalisées (12)

| # | Section | Contenu & animations |
|---|---|---|
| 1 | **Navigation** | Barre transparente devenant verre dépoli au scroll · menu mobile · CTA « Réserver une visite » |
| 2 | **Hero** | Image immeuble plein écran · **parallax** · révélation de texte animée · indicateur de défilement |
| 3 | **Statistiques** | 4 **compteurs animés** au scroll (120+ biens, 98 % satisfaits, 10 ans, 24/7) |
| 4 | **À propos** | Histoire de l'agence · mise en page superposée · carte flottante en verre dépoli · parallax image |
| 5 | **Nos biens** | Cartes **filtrables** (Tous / Meublés / Non-meublés / Villas) · specs (chambres, sdb, m²) · **galerie lightbox** au clic |
| 6 | **Wadan City** | Bannière parallax émeraude/or · partenariat Sky Construction · disponibilité limitée |
| 7 | **Galerie** | **Masonry** immersif · zoom au survol · lightbox plein écran (navigation clavier ←/→/Échap) |
| 8 | **Services** | 6 prestations · cartes avec micro-interactions (location, vente, gestion locative, conciergerie…) |
| 9 | **Témoignages** | Carousel animé · 3 avis clients |
| 10 | **Contact** | Formulaire qui **ouvre WhatsApp pré-rempli** · 4 numéros cliquables · carte Google Maps Djibouti |
| 11 | **Footer** | Liens, coordonnées, mention partenaire, copyright dynamique |
| 12 | **Barre de progression** | Indicateur de scroll doré en haut de page |

---

## 5. Fonctionnalités transverses

- ✅ **100 % responsive** (mobile, tablette, desktop)
- ✅ **Smooth scroll** premium (Lenis)
- ✅ **Lightbox / galerie** réutilisable (clavier + clic)
- ✅ **Filtrage dynamique** des biens par catégorie
- ✅ **Formulaire → WhatsApp** (pas de backend nécessaire pour la maquette)
- ✅ **SEO de base** (titres, description, mots-clés, Open Graph)
- ✅ **Accessibilité** : respect de `prefers-reduced-motion`, labels ARIA
- ✅ **Optimisation images** Next.js (AVIF/WebP automatiques)
- ✅ **Bilingue FR / EN** — bascule instantanée via le bouton `FR/EN` de la navbar, préférence mémorisée (localStorage), tout le contenu traduit (textes, biens, formulaire, message WhatsApp)

---

## 6. Organisation du projet

```
Property hub management/
├── app/
│   ├── layout.tsx        → polices, métadonnées SEO
│   ├── page.tsx          → assemblage des sections
│   └── globals.css       → design system (couleurs, animations)
├── components/           → 13 composants (Hero, Navbar, Gallery, Contact…)
├── lib/
│   ├── properties.ts     → DONNÉES des biens, bilingues FR/EN (à éditer pour les vrais prix)
│   ├── i18n.tsx          → contexte de langue + sélecteur FR/EN
│   └── translations.ts   → dictionnaire de tous les textes (FR + EN)
├── public/images/        → toutes les images renommées proprement
├── Images/               → dossier source d'origine (conservé)
└── DEPLOIEMENT-VPS.md     → procédure de mise en ligne Hostinger VPS (PM2 + Nginx)
```

> 📌 **Les biens et leurs infos sont centralisés dans `lib/properties.ts`** — c'est le seul fichier à modifier pour mettre à jour textes, prix, surfaces et photos.

---

## 7. ⏭️ Reste à faire (prochaines étapes)

- [ ] **Prix réels** — remplacer les « Sur demande » par les vrais loyers/prix (fichier `lib/properties.ts`) — *en attente des valeurs client*
- [ ] **SEO mise en ligne** — ajouter `metadataBase` + image OpenGraph dans `app/layout.tsx` (partage WhatsApp/réseaux)
- [ ] **Ajustements DA** — affiner selon le retour client (couleurs, ton, photos)
- [x] **Hébergement décidé** — **Hostinger VPS (Node.js)** : on garde `next start` + l'optimisation images AVIF/WebP
- [x] **Build de production re-vérifié** ✅ (`/` = 65,6 kB / 171 kB First Load JS, lint + types OK)
- [x] **Procédure de déploiement** rédigée → voir `DEPLOIEMENT-VPS.md` (PM2 + Nginx + HTTPS)
- [ ] **Mise en ligne** — exécuter la procédure VPS sur Hostinger
- [x] **Version bilingue FR / EN** — sélecteur de langue + dictionnaire complet (`lib/i18n.tsx`, `lib/translations.ts`)
- [ ] *(Optionnel)* Page détaillée par bien · formulaire avec envoi e-mail réel

---

*Document de suivi — Travaux 1. À présenter au client comme maquette de validation.*
