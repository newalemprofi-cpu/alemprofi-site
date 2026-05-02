import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ hover = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-white p-6 shadow-sm",
        hover && "transition-shadow duration-200 hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-lg font-semibold leading-snug tracking-tight text-foreground", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("mt-2 text-sm leading-relaxed text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  );
}
