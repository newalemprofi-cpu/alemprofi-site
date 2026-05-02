import { TeamMember } from "@/types";
import { Section, SectionHeader } from "@/components/ui/Section";

interface TeamProps {
  members: TeamMember[];
}

export default function Team({ members }: TeamProps) {
  return (
    <Section muted>
      <SectionHeader label="Команда" title="Люди, которые делают результат" centered />
      <div className="grid gap-8 md:grid-cols-3">
        {members.map((member) => (
          <div key={member.id} className="text-center">
            <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-muted" />
            <h3 className="font-semibold">{member.name}</h3>
            <p className="text-sm text-primary">{member.role}</p>
            <p className="mt-2 text-xs text-muted-foreground">{member.bio}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
