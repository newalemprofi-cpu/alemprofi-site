import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://alemprofi.com";

export const metadata: Metadata = {
  title: {
    default: "ALEM PROFI — обучение ИИ и цифровым навыкам",
    template: "%s | ALEM PROFI",
  },
  description: 'Официальный сайт ТОО "ALEM PROFI". Образовательные программы в области искусственного интеллекта, автоматизации и цифровых навыков.',
  keywords: ["ALEM PROFI", "обучение ИИ", "цифровые навыки", "Казахстан", "онлайн курсы", "автоматизация"],
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    url: siteUrl,
    siteName: "ALEM PROFI",
    title: "ALEM PROFI — обучение ИИ и цифровым навыкам",
    description: 'Официальный сайт ТОО "ALEM PROFI". Практические образовательные программы в области ИИ, автоматизации и цифровых инструментов.',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ALEM PROFI",
  legalName: 'ТОО "ALEM PROFI"',
  identifier: "250940026889",
  url: siteUrl,
  email: "info@alemprofi.kz",
  telephone: "+77775091217",
  address: {
    "@type": "PostalAddress",
    streetAddress: "проспект Абулхаир Хана, строение 2А",
    addressLocality: "Уральск",
    addressRegion: "Западно-Казахстанская область",
    postalCode: "090004",
    addressCountry: "KZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geist.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
