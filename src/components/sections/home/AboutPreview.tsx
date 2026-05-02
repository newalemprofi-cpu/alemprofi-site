import { Section } from "@/components/ui/Section";

export default function AboutPreview() {
  return (
    <Section muted>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            О компании
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            ТОО «ALEM PROFI»
          </h2>
          <p className="mt-4 text-muted-foreground">
            Образовательная компания Республики Казахстан, работающая в сфере
            цифровых навыков и современных технологий.
          </p>
          <p className="mt-3 text-muted-foreground">
            Мы разрабатываем и реализуем практические образовательные программы
            для специалистов, которые хотят освоить инструменты искусственного
            интеллекта, автоматизации и цифровой работы.
          </p>
          <a
            href="/about"
            className="mt-6 inline-block text-sm font-semibold text-primary hover:underline"
          >
            О компании →
          </a>
        </div>
        <div className="aspect-video rounded-xl bg-muted" />
      </div>
    </Section>
  );
}
