import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-primary text-white shadow-sm hover:bg-primary/85 hover:shadow-md active:scale-[0.98]",
    outline:
      "border border-border bg-white text-foreground hover:border-primary/30 hover:bg-muted active:scale-[0.98]",
    ghost:
      "text-foreground hover:bg-muted active:scale-[0.98]",
  };

  const sizes = {
    sm:  "px-4 py-2 text-xs",
    md:  "px-6 py-3 text-sm",
    lg:  "px-8 py-3.5 text-base",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
