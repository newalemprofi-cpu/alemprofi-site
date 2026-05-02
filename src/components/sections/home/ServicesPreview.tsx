import { Card, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";

const directions = [
  { title: "Курсы повышения квалификации" },
  { title: "Искусственный интеллект" },
  { title: "Автоматизация" },
  { title: "Цифровые навыки" },
];

export default function ServicesPreview() {
  return (
    <Section>
      <SectionHeader
        label="Направления"
        title="Чему мы обучаем"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {directions.map((item) => (
          <Card key={item.title} hover>
            <CardTitle>{item.title}</CardTitle>
          </Card>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href="/programs" className="text-sm font-semibold text-primary hover:underline">
          Все программы →
        </a>
      </div>
    </Section>
  );
}
