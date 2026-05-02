import { CaseStudy } from "@/types";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Section, SectionHeader } from "@/components/ui/Section";

interface CaseGridProps {
  cases: CaseStudy[];
}

export default function CaseGrid({ cases }: CaseGridProps) {
  return (
    <Section>
      <SectionHeader
        label="Кейсы"
        title="Результаты наших клиентов"
        description="Реальные истории трансформации и роста."
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <Card key={c.id} hover>
            <div className="mb-4 aspect-video rounded-lg bg-muted" />
            <div className="flex flex-wrap gap-2">
              {c.tags.map((tag) => (
                <Badge key={tag} variant="default">{tag}</Badge>
              ))}
            </div>
            <CardTitle className="mt-3">{c.title}</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">{c.client} · {c.industry}</p>
            <CardDescription>{c.description}</CardDescription>
            <ul className="mt-4 space-y-1">
              {c.results.map((r) => (
                <li key={r} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
