import { Section, SectionHeader } from "@/components/ui/Section";

export default function Mission() {
  return (
    <Section>
      <SectionHeader
        label="Миссия"
        title="Мы создаём профессионалов"
        description="ALEM PROFI — это команда экспертов, которые верят в силу знаний и инноваций для устойчивого роста бизнеса в Казахстане и Центральной Азии."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { title: "Миссия", body: "Помогать компаниям достигать результатов через профессиональный консалтинг и обучение." },
          { title: "Видение", body: "Стать ведущей консалтинговой компанией Центральной Азии к 2030 году." },
          { title: "Ценности", body: "Экспертиза, честность, результат и долгосрочное партнёрство с каждым клиентом." },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border p-6">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
