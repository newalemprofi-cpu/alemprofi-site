import { company, footerLinks } from "@/data/company";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0B1F3A" }}>
      <div className="mx-auto max-w-[1200px] px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <p className="text-base font-bold tracking-tight text-white">
              {company.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              {company.legalName}
            </p>
            <p className="mt-1 text-sm text-white/40">
              БИН: {company.bin}
            </p>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">
              Контакты
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="text-sm text-white/65 transition-colors duration-150 hover:text-white"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/65 transition-colors duration-150 hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-white/65 transition-colors duration-150 hover:text-white"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">
              Документы
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-14 border-t border-white/[0.08] pt-6 text-center text-xs text-white/25">
          © {new Date().getFullYear()} {company.legalName}. Все права защищены.
        </div>

      </div>
    </footer>
  );
}
