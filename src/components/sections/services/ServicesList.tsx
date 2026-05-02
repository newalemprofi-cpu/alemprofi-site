import { Service } from "@/types";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";

interface ServicesListProps {
  services: Service[];
}

export default function ServicesList({ services }: ServicesListProps) {
  return (
    <Section>
      <SectionHeader
        label="Услуги"
        title="Всё для роста вашего бизнеса"
        description="Комплексные решения от стратегии до реализации."
      />
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.id} hover className="p-8">
            <CardTitle className="text-xl">{service.title}</CardTitle>
            <CardDescription className="mt-3 text-base">{service.description}</CardDescription>
            <ul className="mt-6 space-y-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
