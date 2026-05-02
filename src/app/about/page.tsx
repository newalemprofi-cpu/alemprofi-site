import type { Metadata } from "next";
import { company } from "@/data/company";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "О компании",
  description: 'ТОО "ALEM PROFI" — образовательная компания Республики Казахстан в сфере цифровых навыков и современных технологий.',
};

const leadership = [
  {
    name: "АЙТКАЛИЕВА ГУЛЬМИРА ЕРЖАНОВНА",
    role: "Руководитель",
    photo: "/team/director.jpg",
    initials: "АГЕ",
  },
  {
    name: "АЙТКАЛИЕВ ЕРКИНБЕК МАХСОТОВИЧ",
    role: "Учредитель",
    photo: "/team/founder.jpg",
    initials: "АЕМ",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">О компании</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
            {company.legalName} — образовательная компания Республики Казахстан,
            работающая в сфере цифровых навыков и современных технологий.
          </p>
        </div>
      </section>

      {/* Description */}
      <Section>
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Кто мы
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Образование в цифровую эпоху
          </h2>
          <p className="mt-4 text-muted-foreground">
            Мы разрабатываем и реализуем практические образовательные программы
            в области искусственного интеллекта, автоматизации и цифровых
            инструментов. Наши программы ориентированы на специалистов, желающих
            освоить современные технологии и применять их в повседневной работе.
          </p>
          <p className="mt-3 text-muted-foreground">
            Образовательная деятельность осуществляется в рамках действующего
            законодательства Республики Казахстан.
          </p>
        </div>
      </Section>

      {/* Leadership */}
      <Section muted>
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Руководство
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Команда</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 max-w-2xl">
          {leadership.map((person) => (
            <div key={person.name} className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {person.initials}
              </div>
              <div>
                <p className="font-semibold leading-snug">{person.name}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Legal information card */}
      <Section>
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Реквизиты
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Юридическая информация</h2>
        <div className="mt-8 max-w-xl rounded-xl border p-6">
          <dl className="space-y-3 text-sm">
            <div className="grid grid-cols-2 gap-2">
              <dt className="text-muted-foreground">Полное наименование</dt>
              <dd className="font-medium">{company.legalName}</dd>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <dt className="text-muted-foreground">БИН</dt>
              <dd className="font-medium">{company.bin}</dd>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <dt className="text-muted-foreground">ОКЭД</dt>
              <dd className="font-medium">85.59 — Прочее образование</dd>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <dt className="text-muted-foreground">Юридический адрес</dt>
              <dd className="font-medium">
                090004, РК, Западно-Казахстанская обл., г. Уральск, пр. Абулхаир Хана, стр. 2А
              </dd>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <dt className="text-muted-foreground">Руководитель</dt>
              <dd className="font-medium">Айткалиева Гульмира Ержановна</dd>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <dt className="text-muted-foreground">Учредитель</dt>
              <dd className="font-medium">Айткалиев Еркинбек Махсотович</dd>
            </div>
          </dl>
        </div>
      </Section>

      {/* Legal basis */}
      <Section muted>
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Правовая основа
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Деятельность в рамках законодательства
          </h2>
          <p className="mt-4 text-muted-foreground">
            {company.legalName} осуществляет образовательную деятельность в
            соответствии с действующим законодательством Республики Казахстан.
          </p>
          <p className="mt-3 text-muted-foreground">
            Программы повышения квалификации разрабатываются и реализуются с
            учётом установленных требований и правил, действующих в сфере
            дополнительного образования.
          </p>
        </div>
      </Section>
    </>
  );
}
