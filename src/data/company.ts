import { NavLink } from "@/types";

export const company = {
  name: "ALEM PROFI",
  legalName: 'ТОО "ALEM PROFI"',
  bin: "250940026889",
  email: "info@alemprofi.kz",
  phone: "+7 777 509 12 17",
  whatsapp: "https://wa.me/77775091217",
  whatsappNumber: "77775091217",
} as const;

export const navLinks: NavLink[] = [
  { label: "Главная", href: "/" },
  { label: "О компании", href: "/about" },
  { label: "Программы", href: "/programs" },
  { label: "Контакты", href: "/contacts" },
  { label: "Курсы повышения квалификации педагогов", href: "/course" },
];

export const footerLinks: NavLink[] = [
  { label: "Политика конфиденциальности", href: "/privacy-policy" },
  { label: "Условия использования", href: "/terms" },
  { label: "Политика возврата", href: "/refund-policy" },
  { label: "Политика cookies", href: "/cookie-policy" },
];
