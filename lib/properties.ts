import type { Localized } from "./i18n";

export type Category = "meuble" | "non-meuble" | "villa";

export interface Property {
  id: string;
  name: Localized;
  category: Category;
  categoryLabel: Localized;
  status: Localized;
  location: Localized;
  price: Localized;
  priceNote: Localized;
  beds: number;
  baths: number;
  surface: number;
  cover: string;
  gallery: string[];
  highlights: Localized[];
  description: Localized;
}

export const properties: Property[] = [
  {
    id: "horizon-meuble-3p",
    name: {
      fr: "Résidence Horizon — Appartement Meublé",
      en: "Horizon Residence — Furnished Apartment",
    },
    category: "meuble",
    categoryLabel: { fr: "Meublé", en: "Furnished" },
    status: { fr: "Disponible", en: "Available" },
    location: {
      fr: "Horizon Residence, Héron, Djibouti",
      en: "Horizon Residence, Héron, Djibouti",
    },
    price: { fr: "Sur demande", en: "On request" },
    priceNote: {
      fr: "Loyer mensuel · charges incluses",
      en: "Monthly rent · utilities included",
    },
    beds: 3,
    baths: 2,
    surface: 120,
    cover: "/images/furnished-living-1.jpg",
    gallery: [
      "/images/furnished-living-1.jpg",
      "/images/furnished-dining.jpg",
      "/images/furnished-living-2.jpg",
      "/images/master-suite.jpg",
      "/images/kitchen.jpg",
      "/images/bathroom-1.jpg",
    ],
    highlights: [
      { fr: "Entièrement meublé", en: "Fully furnished" },
      { fr: "Climatisation", en: "Air conditioning" },
      { fr: "Cuisine équipée", en: "Fitted kitchen" },
      { fr: "Vue dégagée", en: "Open view" },
    ],
    description: {
      fr: "Un appartement clé en main au cœur d'Horizon Residence. Espaces lumineux, mobilier soigné et finitions modernes pour une installation immédiate, sans le moindre compromis sur le confort.",
      en: "A turnkey apartment in the heart of Horizon Residence. Bright spaces, refined furnishings and modern finishes for an immediate move-in, without the slightest compromise on comfort.",
    },
  },
  {
    id: "horizon-suite-parentale",
    name: { fr: "Suite Parentale Premium", en: "Premium Master Suite" },
    category: "meuble",
    categoryLabel: { fr: "Meublé", en: "Furnished" },
    status: { fr: "Disponible", en: "Available" },
    location: {
      fr: "Horizon Residence, Héron, Djibouti",
      en: "Horizon Residence, Héron, Djibouti",
    },
    price: { fr: "Sur demande", en: "On request" },
    priceNote: {
      fr: "Loyer mensuel · charges incluses",
      en: "Monthly rent · utilities included",
    },
    beds: 2,
    baths: 2,
    surface: 95,
    cover: "/images/master-suite.jpg",
    gallery: [
      "/images/master-suite.jpg",
      "/images/bedroom-double.jpg",
      "/images/guest-room.jpg",
      "/images/furnished-living-3.jpg",
      "/images/bathroom-2.jpg",
    ],
    highlights: [
      { fr: "Suite parentale", en: "Master suite" },
      { fr: "Dressing", en: "Walk-in closet" },
      { fr: "Lumière naturelle", en: "Natural light" },
      { fr: "Quartier sécurisé", en: "Secure neighbourhood" },
    ],
    description: {
      fr: "Une suite parentale raffinée pensée pour le repos. Volumes généreux, rangements intégrés et ambiance feutrée, à quelques minutes des commodités essentielles.",
      en: "A refined master suite designed for rest. Generous volumes, built-in storage and a cosy atmosphere, just minutes from essential amenities.",
    },
  },
  {
    id: "horizon-non-meuble-101",
    name: { fr: "Appartement 101 — Non Meublé", en: "Apartment 101 — Unfurnished" },
    category: "non-meuble",
    categoryLabel: { fr: "Non meublé", en: "Unfurnished" },
    status: { fr: "Disponible", en: "Available" },
    location: {
      fr: "Horizon Residence, Héron, Djibouti",
      en: "Horizon Residence, Héron, Djibouti",
    },
    price: { fr: "Sur demande", en: "On request" },
    priceNote: { fr: "Loyer mensuel", en: "Monthly rent" },
    beds: 3,
    baths: 2,
    surface: 130,
    cover: "/images/unfurnished-2.jpg",
    gallery: [
      "/images/unfurnished-2.jpg",
      "/images/unfurnished-1.jpg",
      "/images/empty-room-1.jpg",
      "/images/empty-room-2.jpg",
    ],
    highlights: [
      { fr: "Grands volumes", en: "Large volumes" },
      { fr: "Sol carrelé neuf", en: "New tiled flooring" },
      { fr: "Double exposition", en: "Dual aspect" },
      { fr: "Personnalisable", en: "Customisable" },
    ],
    description: {
      fr: "Une toile blanche prête à recevoir votre signature. Surfaces nettes, lumière abondante et plan ouvert : aménagez chaque pièce exactement comme vous l'imaginez.",
      en: "A blank canvas ready to receive your signature. Clean surfaces, abundant light and an open plan: arrange every room exactly as you imagine it.",
    },
  },
  {
    id: "wadan-villa",
    name: { fr: "Villa Wadan City — Sky Construction", en: "Wadan City Villa — Sky Construction" },
    category: "villa",
    categoryLabel: { fr: "Villa", en: "Villa" },
    status: { fr: "Nouvelle opportunité", en: "New opportunity" },
    location: {
      fr: "Wadan City Estate · Phase 1, Djibouti",
      en: "Wadan City Estate · Phase 1, Djibouti",
    },
    price: { fr: "Investissement", en: "Investment" },
    priceNote: {
      fr: "Vente · disponibilité limitée",
      en: "For sale · limited availability",
    },
    beds: 4,
    baths: 3,
    surface: 220,
    cover: "/images/flyer-villa.jpg",
    gallery: ["/images/flyer-villa.jpg", "/images/building.jpg", "/images/overview-collage.jpg"],
    highlights: [
      { fr: "Résidence moderne", en: "Modern residence" },
      { fr: "Cadre sécurisé", en: "Secure setting" },
      { fr: "Énergie solaire", en: "Solar energy" },
      { fr: "Investissement", en: "Investment" },
    ],
    description: {
      fr: "En partenariat avec Sky Construction, offrez à votre famille un cadre de vie moderne et sécurisé à Wadan City. Des villas élégantes, pensées comme un investissement d'avenir.",
      en: "In partnership with Sky Construction, give your family a modern and secure living environment in Wadan City. Elegant villas, designed as an investment for the future.",
    },
  },
];

export const galleryImages: { src: string; label: Localized }[] = [
  { src: "/images/building.jpg", label: { fr: "La résidence", en: "The residence" } },
  { src: "/images/furnished-living-1.jpg", label: { fr: "Salon meublé", en: "Furnished living room" } },
  { src: "/images/master-suite.jpg", label: { fr: "Suite parentale", en: "Master suite" } },
  { src: "/images/kitchen.jpg", label: { fr: "Cuisine équipée", en: "Fitted kitchen" } },
  { src: "/images/furnished-dining.jpg", label: { fr: "Salle à manger", en: "Dining room" } },
  { src: "/images/bedroom-double.jpg", label: { fr: "Chambre", en: "Bedroom" } },
  { src: "/images/furnished-living-2.jpg", label: { fr: "Espace de vie", en: "Living space" } },
  { src: "/images/bathroom-1.jpg", label: { fr: "Salle d'eau", en: "Bathroom" } },
  { src: "/images/bedroom-single.jpg", label: { fr: "Chambre d'amis", en: "Guest bedroom" } },
  { src: "/images/furnished-living-3.jpg", label: { fr: "Séjour", en: "Sitting room" } },
  { src: "/images/bathroom-3.jpg", label: { fr: "Sanitaires", en: "Washroom" } },
  { src: "/images/guest-room.jpg", label: { fr: "Chambre invité", en: "Guest room" } },
];
