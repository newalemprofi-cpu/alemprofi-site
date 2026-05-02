import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  muted?: boolean;
}

export function Section({ muted = false, className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-16 md:py-20", muted && "bg-muted", className)}
      {...props}
    >
      <div className="mx-auto max-w-[1200px] px-6">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center")}>
      {label && (
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          {label}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
