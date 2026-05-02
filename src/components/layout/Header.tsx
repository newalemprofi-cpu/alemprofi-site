import { navLinks } from "@/data/company";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-6">

        <a
          href="/"
          className="text-[17px] font-bold tracking-tight text-primary transition-opacity duration-150 hover:opacity-80"
        >
          ALEM PROFI
        </a>

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/contacts"
          className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-primary/85 hover:shadow-md active:scale-[0.98]"
        >
          Связаться
        </a>

      </div>
    </header>
  );
}
