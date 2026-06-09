import { useLang, type Lang } from "./i18n";

/**
 * Dictionnaire de tous les textes du site.
 * Pour ajouter/modifier un texte : éditez les deux langues ci-dessous.
 * Les données des biens (noms, descriptions…) sont dans `lib/properties.ts`.
 */
export const dict = {
  fr: {
    nav: {
      links: [
        { href: "#about", label: "À propos" },
        { href: "#properties", label: "Nos biens" },
        { href: "#gallery", label: "Galerie" },
        { href: "#services", label: "Services" },
        { href: "#contact", label: "Contact" },
      ],
      cta: "Réserver une visite",
    },
    hero: {
      eyebrow: "Immobilier d'exception · Djibouti",
      titleLine1: "Vivez l'excellence,",
      titleLine2: "au cœur de Djibouti",
      paragraph:
        "Property Hub Management offre à votre famille un cadre de vie moderne, sécurisé et élégant. Appartements meublés, non-meublés et villas d'exception, gérés avec une exigence absolue.",
      ctaPrimary: "Découvrir nos biens",
      ctaSecondary: "Prendre contact",
      scroll: "DÉFILER",
    },
    stats: {
      items: [
        { label: "Biens gérés à Djibouti", suffix: "+" },
        { label: "Clients satisfaits", suffix: "%" },
        { label: "D'expertise locale", suffix: " ans" },
        { label: "Accompagnement dédié", suffix: "/7" },
      ],
    },
    about: {
      eyebrow: "Notre maison",
      titlePre: "L'art de vivre, ",
      titleEm: "signé Property Hub",
      paragraph1:
        "Née à Djibouti, Property Hub Management accompagne familles, expatriés et investisseurs dans la recherche d'un cadre de vie à la hauteur de leurs ambitions. De la résidence Horizon aux villas de Wadan City, nous sélectionnons et gérons des biens où le confort rencontre l'élégance.",
      paragraph2:
        "Chaque appartement est pensé comme une adresse : sécurité, finitions soignées, et un service de gestion locative qui veille sur votre tranquillité, du premier rendez-vous à la remise des clés.",
      cardText: "années à façonner l'habitat haut de gamme à Djibouti",
      features: [
        ["Sélection rigoureuse", "Des biens choisis pour leur qualité et leur emplacement."],
        ["Gestion sereine", "Un interlocuteur unique, disponible et réactif."],
        ["Cadre sécurisé", "Des résidences modernes pensées pour les familles."],
        ["Investissement", "Un patrimoine qui valorise votre avenir."],
      ],
    },
    properties: {
      eyebrow: "Notre collection",
      titlePre: "Des adresses ",
      titleEm: "choisies pour vous",
      filters: [
        { key: "all", label: "Tous les biens" },
        { key: "meuble", label: "Meublés" },
        { key: "non-meuble", label: "Non meublés" },
        { key: "villa", label: "Villas" },
      ],
      viewGallery: "Voir la galerie",
      bedsSuffix: "ch.",
      bathsSuffix: "sdb",
      ask: "Demander →",
    },
    showcase: {
      eyebrow: "En partenariat avec Sky Construction",
      titlePre: "Wadan City — ",
      titleEm: "une nouvelle opportunité",
      paragraph:
        "Offrez à votre famille un cadre de vie moderne, sécurisé et élégant à Djibouti. Des villas pensées comme un investissement d'avenir — disponibilité limitée.",
      ctaPrimary: "Saisir l'opportunité",
      ctaSecondary: "Voir les villas",
    },
    gallery: {
      eyebrow: "Immersion",
      titlePre: "Une galerie qui parle ",
      titleEm: "d'elle-même",
      paragraph:
        "Promenez-vous dans nos intérieurs : matières, lumière et détails qui font la différence. Cliquez sur une image pour l'agrandir.",
      enlarge: "Agrandir",
    },
    services: {
      eyebrow: "Ce que nous faisons",
      titlePre: "Un service ",
      titleEm: "d'exception",
      titlePost: ", de bout en bout",
      items: [
        ["Location meublée", "Des appartements clé en main, prêts à vivre. Vous posez vos valises, nous gérons le reste."],
        ["Location non meublée", "Des espaces nus et lumineux, à composer selon votre style et vos besoins."],
        ["Vente & investissement", "Villas et résidences à fort potentiel, à Wadan City et au-delà. Bâtissez votre patrimoine."],
        ["Gestion locative", "Encaissement, entretien, relation locataire : un interlocuteur unique pour votre sérénité."],
        ["Conciergerie", "Un accompagnement sur mesure pour expatriés et familles : du premier contact à l'emménagement."],
        ["Conseil & visite", "Visites guidées, conseils personnalisés et réponse rapide à chacune de vos demandes."],
      ],
    },
    testimonials: {
      eyebrow: "Ils nous font confiance",
      items: [
        {
          quote:
            "Nous cherchions un appartement meublé pour notre installation à Djibouti. Property Hub a tout simplifié : visite, état des lieux, emménagement. Un service impeccable.",
          name: "Amina H.",
          role: "Locataire · Horizon Residence",
        },
        {
          quote:
            "Un interlocuteur réactif et de vrais conseils d'investissement. J'ai acquis une villa à Wadan City en toute confiance. Je recommande sans hésiter.",
          name: "Karim D.",
          role: "Investisseur · Wadan City",
        },
        {
          quote:
            "La gestion locative de mon bien est entre de bonnes mains. Plus aucune charge mentale : tout est suivi, transparent et professionnel.",
          name: "Sophie M.",
          role: "Propriétaire bailleur",
        },
      ],
    },
    contact: {
      eyebrow: "Parlons de votre projet",
      titlePre: "Réservez votre ",
      titleEm: "visite privée",
      paragraph:
        "Une question, une visite, un projet d'investissement ? Notre équipe vous répond avec attention. Écrivez-nous, nous vous recontactons rapidement.",
      addressLabel: "Notre adresse",
      addressValue: "Horizon Residence, Héron — Djibouti",
      phoneLabel: "Téléphone",
      whatsappBtn: "Discuter sur WhatsApp",
      formTitle: "Demande de visite",
      formSubtitle: "Réponse sous 24h ouvrées.",
      fieldName: "Nom complet",
      fieldNamePh: "Votre nom",
      fieldPhone: "Téléphone",
      fieldPhonePh: "+253 ...",
      fieldInterest: "Je suis intéressé(e) par",
      interestOptions: [
        "Appartement meublé",
        "Appartement non meublé",
        "Villa / investissement",
        "Gestion locative",
        "Autre",
      ],
      fieldMessage: "Message",
      fieldMessagePh: "Dites-nous en plus...",
      submit: "Envoyer ma demande",
      sent: "Merci ! Votre message s'ouvre dans WhatsApp pour finaliser l'envoi.",
      waGreeting: "Bonjour Property Hub Management,",
      waName: "Nom",
      waPhone: "Téléphone",
      waInterest: "Intérêt",
      mapTitle: "Property Hub Management — Djibouti",
    },
    footer: {
      tagline:
        "L'excellence immobilière à Djibouti. Un cadre de vie moderne, sécurisé et élégant pour votre famille.",
      explore: "Explorer",
      exploreLinks: [
        ["À propos", "#about"],
        ["Nos biens", "#properties"],
        ["Galerie", "#gallery"],
        ["Services", "#services"],
      ],
      servicesTitle: "Services",
      servicesLinks: [
        ["Location meublée", "#properties"],
        ["Location non meublée", "#properties"],
        ["Vente & investissement", "#services"],
        ["Gestion locative", "#services"],
      ],
      contactTitle: "Contact",
      rights: "Tous droits réservés.",
      partner: "En partenariat avec",
    },
  },

  en: {
    nav: {
      links: [
        { href: "#about", label: "About" },
        { href: "#properties", label: "Our properties" },
        { href: "#gallery", label: "Gallery" },
        { href: "#services", label: "Services" },
        { href: "#contact", label: "Contact" },
      ],
      cta: "Book a visit",
    },
    hero: {
      eyebrow: "Exceptional real estate · Djibouti",
      titleLine1: "Live excellence,",
      titleLine2: "in the heart of Djibouti",
      paragraph:
        "Property Hub Management offers your family a modern, secure and elegant living environment. Furnished and unfurnished apartments and exceptional villas, managed to the highest standards.",
      ctaPrimary: "Discover our properties",
      ctaSecondary: "Get in touch",
      scroll: "SCROLL",
    },
    stats: {
      items: [
        { label: "Properties managed in Djibouti", suffix: "+" },
        { label: "Satisfied clients", suffix: "%" },
        { label: "Of local expertise", suffix: " yrs" },
        { label: "Dedicated support", suffix: "/7" },
      ],
    },
    about: {
      eyebrow: "Our house",
      titlePre: "The art of living, ",
      titleEm: "by Property Hub",
      paragraph1:
        "Born in Djibouti, Property Hub Management supports families, expatriates and investors in their search for a living environment worthy of their ambitions. From the Horizon residence to the villas of Wadan City, we select and manage properties where comfort meets elegance.",
      paragraph2:
        "Every apartment is designed as an address of its own: security, refined finishes, and a property-management service that watches over your peace of mind, from the first appointment to the handover of keys.",
      cardText: "years shaping high-end living in Djibouti",
      features: [
        ["Rigorous selection", "Properties chosen for their quality and their location."],
        ["Effortless management", "A single point of contact, available and responsive."],
        ["Secure setting", "Modern residences designed for families."],
        ["Investment", "An asset that grows your future."],
      ],
    },
    properties: {
      eyebrow: "Our collection",
      titlePre: "Addresses ",
      titleEm: "chosen for you",
      filters: [
        { key: "all", label: "All properties" },
        { key: "meuble", label: "Furnished" },
        { key: "non-meuble", label: "Unfurnished" },
        { key: "villa", label: "Villas" },
      ],
      viewGallery: "View gallery",
      bedsSuffix: "bd",
      bathsSuffix: "ba",
      ask: "Enquire →",
    },
    showcase: {
      eyebrow: "In partnership with Sky Construction",
      titlePre: "Wadan City — ",
      titleEm: "a new opportunity",
      paragraph:
        "Give your family a modern, secure and elegant living environment in Djibouti. Villas designed as an investment for the future — limited availability.",
      ctaPrimary: "Seize the opportunity",
      ctaSecondary: "View the villas",
    },
    gallery: {
      eyebrow: "Immersion",
      titlePre: "A gallery that speaks ",
      titleEm: "for itself",
      paragraph:
        "Wander through our interiors: materials, light and details that make the difference. Click an image to enlarge it.",
      enlarge: "Enlarge",
    },
    services: {
      eyebrow: "What we do",
      titlePre: "",
      titleEm: "Exceptional service",
      titlePost: ", end to end",
      items: [
        ["Furnished rental", "Turnkey apartments, ready to live in. You drop your bags, we handle the rest."],
        ["Unfurnished rental", "Bare, light-filled spaces to compose around your style and your needs."],
        ["Sales & investment", "High-potential villas and residences, in Wadan City and beyond. Build your wealth."],
        ["Property management", "Rent collection, maintenance, tenant relations: a single point of contact for your peace of mind."],
        ["Concierge", "Tailored support for expatriates and families: from first contact to move-in."],
        ["Advice & viewings", "Guided viewings, personalised advice and a fast response to every request."],
      ],
    },
    testimonials: {
      eyebrow: "They trust us",
      items: [
        {
          quote:
            "We were looking for a furnished apartment for our move to Djibouti. Property Hub made everything simple: viewing, inventory, move-in. Impeccable service.",
          name: "Amina H.",
          role: "Tenant · Horizon Residence",
        },
        {
          quote:
            "A responsive contact and genuine investment advice. I bought a villa in Wadan City with complete confidence. I recommend them without hesitation.",
          name: "Karim D.",
          role: "Investor · Wadan City",
        },
        {
          quote:
            "The management of my property is in good hands. No more mental load: everything is tracked, transparent and professional.",
          name: "Sophie M.",
          role: "Landlord",
        },
      ],
    },
    contact: {
      eyebrow: "Let's talk about your project",
      titlePre: "Book your ",
      titleEm: "private visit",
      paragraph:
        "A question, a viewing, an investment project? Our team will give you their full attention. Write to us and we'll get back to you quickly.",
      addressLabel: "Our address",
      addressValue: "Horizon Residence, Héron — Djibouti",
      phoneLabel: "Phone",
      whatsappBtn: "Chat on WhatsApp",
      formTitle: "Visit request",
      formSubtitle: "Response within 24 business hours.",
      fieldName: "Full name",
      fieldNamePh: "Your name",
      fieldPhone: "Phone",
      fieldPhonePh: "+253 ...",
      fieldInterest: "I'm interested in",
      interestOptions: [
        "Furnished apartment",
        "Unfurnished apartment",
        "Villa / investment",
        "Property management",
        "Other",
      ],
      fieldMessage: "Message",
      fieldMessagePh: "Tell us more...",
      submit: "Send my request",
      sent: "Thank you! Your message is opening in WhatsApp to complete the sending.",
      waGreeting: "Hello Property Hub Management,",
      waName: "Name",
      waPhone: "Phone",
      waInterest: "Interest",
      mapTitle: "Property Hub Management — Djibouti",
    },
    footer: {
      tagline:
        "Real estate excellence in Djibouti. A modern, secure and elegant living environment for your family.",
      explore: "Explore",
      exploreLinks: [
        ["About", "#about"],
        ["Our properties", "#properties"],
        ["Gallery", "#gallery"],
        ["Services", "#services"],
      ],
      servicesTitle: "Services",
      servicesLinks: [
        ["Furnished rental", "#properties"],
        ["Unfurnished rental", "#properties"],
        ["Sales & investment", "#services"],
        ["Property management", "#services"],
      ],
      contactTitle: "Contact",
      rights: "All rights reserved.",
      partner: "In partnership with",
    },
  },
} as const;

/** Hook pratique : renvoie le dictionnaire de la langue active. */
export function useT() {
  const { lang } = useLang();
  return dict[lang];
}

export type { Lang };
