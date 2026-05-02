import Hero from "@/components/sections/home/Hero";
import ServicesPreview from "@/components/sections/home/ServicesPreview";
import AboutPreview from "@/components/sections/home/AboutPreview";
import CTA from "@/components/sections/home/CTA";
import LegalTrust from "@/components/sections/home/LegalTrust";

export default function HomePage() {
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
