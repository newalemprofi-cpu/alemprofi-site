import type { Metadata } from "next";
import { company } from "@/data/company";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Контакты",
  description: 'Контактная информация ТОО "ALEM PROFI". Телефон, WhatsApp, email, адрес.',
};

export default function ContactsPage() {
  return (
    <>
      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Контакты</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Свяжитесь с нами любым удобным способом.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{company.legalName}</h2>
            <dl className="mt-8 space-y-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Телефон
                </dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="text-base font-medium hover:text-primary"
                  >
                    {company.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  WhatsApp
                </dt>
                <dd className="mt-1">
                  <a
                    href={company.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium hover:text-primary"
                  >
                    {company.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${company.email}`}
                    className="text-base font-medium hover:text-primary"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Адрес
                </dt>
                <dd className="mt-1 text-base">
                  Республика Казахстан, Западно-Казахстанская область, город Уральск,
                  проспект Абулхаир Хана, строение 2А, 090004
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Режим работы
                </dt>
                <dd className="mt-1 text-base">Пн–Пт 09:00–18:00</dd>
              </div>
            </dl>
          </div>

          {/* WhatsApp CTA */}
          <div className="flex flex-col justify-center rounded-xl border p-8">
            <h3 className="text-xl font-bold">Написать в WhatsApp</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Самый быстрый способ связи — напишите нам в WhatsApp, и мы
              ответим в рабочее время.
            </p>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Открыть WhatsApp
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              Или напишите на{" "}
              <a href={`mailto:${company.email}`} className="underline hover:text-foreground">
                {company.email}
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
