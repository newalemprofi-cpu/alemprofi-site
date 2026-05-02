import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

export default function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-accent/10 text-accent",
    secondary: "bg-muted text-muted-foreground",
    outline: "border border-border text-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
