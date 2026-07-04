import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactDock } from "@/components/layout/contact-dock";
import { company } from "@/lib/data/company";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-space",
  display: "swap",
});

const siteUrl = "https://zilolamedical.uz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zilola Medical — Лечебно-диагностический центр в Ташкенте",
    template: "%s · Zilola Medical",
  },
  description:
    "Zilola Medical — частный лечебно-диагностический центр в Ташкенте с 2011 года. Опытные врачи, точная диагностика (УЗИ, ЭКГ, холтер, ЭЭГ, лаборатория), программы check-up, физиотерапия и гинекология. Запись на приём: +998 99 022 01 14.",
  keywords: [
    "клиника Ташкент",
    "лечебно-диагностический центр",
    "УЗИ Ташкент",
    "приём врача Ташкент",
    "невролог",
    "кардиолог",
    "гинеколог",
    "педиатр",
    "эндокринолог",
    "Zilola Medical",
    "Мирабадский район",
  ],
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Zilola Medical",
    title: "Zilola Medical — Лечебно-диагностический центр в Ташкенте",
    description:
      "Опытные врачи, точная диагностика и внимательная забота. Частная клиника в Ташкенте с 2011 года. Программы check-up и запись на приём.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zilola Medical — клиника в Ташкенте",
    description: "Опытные врачи, точная диагностика и внимательная забота с 2011 года.",
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1,
};

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: company.legalName,
  alternateName: "Zilola Medical",
  url: siteUrl,
  email: company.email,
  telephone: company.phones[0].value,
  medicalSpecialty: [
    "Neurology",
    "Cardiology",
    "Gynecology",
    "Pediatric",
    "Endocrine",
    "Physiotherapy",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    postalCode: company.address.postal,
    addressCountry: "UZ",
  },
  geo: { "@type": "GeoCoordinates", latitude: company.address.lat, longitude: company.address.lng },
  openingHours: "Mo-Sa 08:00-17:00",
  sameAs: [company.social.telegram, company.social.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ContactDock />
        </SmoothScroll>
      </body>
    </html>
  );
}
