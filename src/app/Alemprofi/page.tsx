import type { Metadata } from "next";
import Hero from "@/components/sections/home/Hero";
import ServicesPreview from "@/components/sections/home/ServicesPreview";
import AboutPreview from "@/components/sections/home/AboutPreview";
import CTA from "@/components/sections/home/CTA";
import LegalTrust from "@/components/sections/home/LegalTrust";

export const metadata: Metadata = {
  title: "ALEM PROFI — официальная образовательная платформа",
  description:
    'Официальный сайт ТОО "ALEM PROFI". Образовательные программы в области искусственного интеллекта, автоматизации и цифровых навыков в Казахстане.',
  keywords: [
    "ALEM PROFI",
    "обучение ИИ",
    "цифровые навыки",
    "Казахстан",
    "онлайн курсы",
    "автоматизация",
    "повышение квалификации",
  ],
  openGraph: {
    title: "ALEM PROFI — официальная образовательная платформа",
    description:
      'Официальный сайт ТОО "ALEM PROFI". Практические образовательные программы в области ИИ, автоматизации и цифровых инструментов.',
    url: "https://ustazalemi.kz/Alemprofi",
    siteName: "ALEM PROFI",
    locale: "ru_KZ",
    type: "website",
  },
  alternates: {
    canonical: "https://ustazalemi.kz/Alemprofi",
  },
};

export default function AlemprofiPage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <CTA />
      <LegalTrust />
    </>
  );
}
