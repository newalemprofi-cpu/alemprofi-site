import type { Metadata } from "next";
import ContactForm from "@/components/sections/contact/ContactForm";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Свяжитесь с ALEM PROFI для получения консультации.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Контакты</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Свяжитесь с нами для бесплатной консультации.
          </p>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
