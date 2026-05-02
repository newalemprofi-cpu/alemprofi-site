import { company } from "@/data/company";

export default function CTA() {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Есть вопросы по программам?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Напишите нам напрямую — мы ответим и поможем выбрать подходящую программу.
        </p>
        <a
          href={company.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-md bg-white px-8 py-3 text-sm font-semibold text-primary hover:bg-white/90"
        >
          Написать в WhatsApp
        </a>
      </div>
    </section>
  );
}
