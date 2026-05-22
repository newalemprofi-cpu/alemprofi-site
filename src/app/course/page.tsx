"use client";

import { useRef, useState } from "react";

const WA =
  "https://wa.me/77071810121?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BA%D1%83%D1%80%D1%81.";

const HERO_BG = "https://cdn2.craftum.com/images/cover03.webp";

const CARDS = [
  {
    n: 1,
    img: "https://274418.selcdn.ru/cv08300-33250f0d-0664-43fc-9dbf-9d89738d114e/uploads/605898/13f1ab89-04e7-4050-9418-087fdc439fcd.png",
    title:
      "Жасанды интеллект және цифрлық технологиялар негізінде құндылыққа бағытталған оқыту мен тәрбиені дамыту",
  },
  {
    n: 2,
    img: "https://274418.selcdn.ru/cv08300-33250f0d-0664-43fc-9dbf-9d89738d114e/uploads/605898/2e3b61a5-c5ca-4791-a95f-805144aabb0e.png",
    title:
      "Жасанды интеллект және педагогтің кәсіби қызметінің цифрлық трансформациясы",
  },
  {
    n: 3,
    img: "https://274418.selcdn.ru/cv08300-33250f0d-0664-43fc-9dbf-9d89738d114e/uploads/605898/24a9ee0e-77f2-4307-adea-d41c96e795b4.png",
    title:
      "Педагогті аттестаттауға даярлауда жасанды интеллект пен цифрлық құралдарды пайдалану",
  },
];

export default function CoursePage() {
  const aboutRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);

  const [fields, setFields] = useState({
    name: "", phone: "", email: "", org: "", suggestion: "",
  });
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const set = (k: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setFields((p) => ({ ...p, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setTimeout(() => { setBusy(false); setSent(true); }, 800);
  };

  return (
    <div className="overflow-x-hidden">

      {/* ═══════════════ HERO ═══════════════ */}
      <section
        className="relative flex min-h-[100vh] items-center"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* overlay rgba(0,0,0,0.4) */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.4)" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-32 md:py-40">
          <h1
            className="text-5xl font-black leading-none tracking-tight text-white sm:text-6xl md:text-8xl"
            style={{ fontWeight: 900 }}
          >
            ALEM PROFI
          </h1>

          <p className="mt-4 max-w-xl text-2xl font-semibold text-white/90 md:text-3xl">
            Курсы повышения квалификации педагогов
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white px-8 py-3.5 text-sm font-bold text-[#0B1F3A] shadow transition hover:bg-white/90 active:scale-[0.97]"
            >
              Записаться на курс
            </a>
            <button
              onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-md border-2 border-white px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 active:scale-[0.97]"
            >
              Программа обучения
            </button>
          </div>
        </div>

        {/* scroll arrow */}
        <button
          aria-label="Прокрутить вниз"
          onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/60 transition hover:text-white"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </section>

      {/* ═══════════════ ABOUT SECTION ═══════════════ */}
      <section ref={aboutRef} className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
                style={{ fontWeight: 900 }}>
                Курсы повышения квалификации для педагогов
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-gray-600 md:pt-3">
              <p>
                <span className="font-bold text-gray-900">«ALEM PROFI»</span>{" "}
                осуществляет организацию курсов повышения квалификации педагогов
                в соответствии с современными требованиями системы образования
                Республики Казахстан.
              </p>
              <p>
                Программы направлены на развитие цифровых компетенций,
                освоение инструментов искусственного интеллекта и цифровой
                трансформации педагогической деятельности.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROGRAMS ═══════════════ */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="mb-2 text-center text-4xl font-black tracking-tight text-gray-900 md:text-5xl"
            style={{ fontWeight: 900 }}>
            Программы для общественного обсуждения
          </h2>
          <p className="mb-14 text-center text-sm text-gray-400">
            Приём предложений и замечаний — до 29.04.2026
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {CARDS.map(({ n, img, title }) => (
              <div
                key={n}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {/* card image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`Программа №${n}`}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />

                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Программа №{n}
                  </p>
                  <p className="mt-2 text-[15px] font-semibold leading-snug text-gray-900">
                    {title}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-500">
                      29.04.2026
                    </span>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-600">
                      80 сағат
                    </span>
                    <span className="rounded-full bg-green-50 px-3 py-1 text-green-600">
                      Онлайн формат
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FORM ═══════════════ */}
      <section ref={formRef} className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[680px] px-6">
          <h2 className="text-center text-3xl font-black tracking-tight text-gray-900 md:text-4xl"
            style={{ fontWeight: 900 }}>
            Оставить предложение или замечание
          </h2>
          <p className="mt-3 text-center text-sm text-gray-500">
            Предложения по образовательной программе принимаются в рамках
            общественного обсуждения
          </p>

          {sent ? (
            <div className="mt-10 rounded-2xl border border-green-100 bg-green-50 p-10 text-center">
              <svg className="mx-auto mb-3 h-10 w-10 text-green-500" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-semibold text-green-800">Предложение принято!</p>
              <p className="mt-1 text-sm text-green-600">
                Спасибо за участие в общественном обсуждении.
              </p>
              <button onClick={() => setSent(false)}
                className="mt-4 text-sm font-medium text-green-700 underline">
                Отправить ещё
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-8 flex flex-col gap-3">
              {[
                { k: "name" as const,       type: "text",  ph: "Ваше имя" },
                { k: "phone" as const,      type: "tel",   ph: "+7 (495) 888-00-00" },
                { k: "email" as const,      type: "email", ph: "E-mail" },
                { k: "org" as const,        type: "text",  ph: "Организация" },
                { k: "suggestion" as const, type: "text",  ph: "Предложение" },
              ].map(({ k, type, ph }) => (
                <input
                  key={k}
                  type={type}
                  value={fields[k]}
                  onChange={set(k)}
                  placeholder={ph}
                  required={k === "name" || k === "email"}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-[#2563EB]/20"
                />
              ))}

              <button
                type="submit"
                disabled={busy}
                className="mt-1 w-full rounded-lg bg-[#0B1F3A] py-3.5 text-sm font-bold text-white transition hover:bg-[#102847] active:scale-[0.98] disabled:opacity-60"
              >
                {busy ? "Отправка…" : "Отправить"}
              </button>

              <p className="text-center text-xs text-gray-400">
                Оставляя заявку, вы соглашаетесь на{" "}
                <a href="/privacy-policy" className="underline hover:text-gray-600">
                  обработку персональных данных
                </a>{" "}
                и с{" "}
                <a href="/terms" className="underline hover:text-gray-600">
                  условиями бронирования счёта
                </a>
              </p>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
