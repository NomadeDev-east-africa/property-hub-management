import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Property Hub Management — L'excellence immobilière à Djibouti",
  description:
    "Property Hub Management vous offre un cadre de vie moderne, sécurisé et élégant à Djibouti. Appartements meublés et non-meublés, villas et gestion locative haut de gamme.",
  keywords: [
    "immobilier Djibouti",
    "appartement meublé Djibouti",
    "location appartement Djibouti",
    "Property Hub Management",
    "Wadan City",
    "villa Djibouti",
  ],
  openGraph: {
    title: "Property Hub Management — L'excellence immobilière à Djibouti",
    description:
      "Un cadre de vie moderne, sécurisé et élégant à Djibouti. Appartements meublés & non-meublés, villas et gestion locative.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
