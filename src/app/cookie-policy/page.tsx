import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Политика cookies",
  description: 'Политика использования файлов cookie на сайте ТОО "ALEM PROFI".',
};

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Политика cookies</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {company.legalName} · БИН {company.bin}
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">1. Что такое cookies</h2>
          <p>
            Файлы cookie — это небольшие текстовые файлы, которые сохраняются
            на вашем устройстве при посещении сайта. Они позволяют сайту
            запоминать ваши действия и предпочтения в течение определённого
            времени.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">2. Использование cookies</h2>
          <p>Сайт {company.legalName} использует cookies в следующих целях:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <span className="font-medium text-foreground">Технические cookies</span> —
              обеспечивают корректную работу сайта и навигацию
            </li>
            <li>
              <span className="font-medium text-foreground">Аналитические cookies</span> —
              позволяют анализировать посещаемость и поведение пользователей
              для улучшения сайта
            </li>
            <li>
              <span className="font-medium text-foreground">Функциональные cookies</span> —
              запоминают ваши настройки и обеспечивают удобство использования
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">3. Аналитика</h2>
          <p>
            Для анализа посещаемости сайта могут использоваться аналитические
            инструменты, которые собирают обезличенные данные о поведении
            пользователей: просмотренные страницы, время на сайте, источник
            перехода. Эти данные не позволяют идентифицировать конкретного
            пользователя.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">4. Улучшение пользовательского опыта</h2>
          <p>
            Cookies помогают нам понять, как пользователи взаимодействуют с
            сайтом, какие страницы и разделы наиболее востребованы, и на
            основе этих данных улучшать содержание и удобство сайта.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">5. Управление cookies</h2>
          <p>
            Вы можете в любой момент отключить или ограничить использование
            cookies в настройках вашего браузера. Обратите внимание, что
            отключение технических cookies может повлиять на работу отдельных
            функций сайта.
          </p>
          <p className="mt-2">
            Способ управления cookies зависит от используемого браузера.
            Инструкции доступны в справке вашего браузера (Chrome, Firefox,
            Safari, Edge и др.).
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">6. Контакты</h2>
          <p>
            По вопросам, связанным с использованием cookies, обращайтесь:{" "}
            <a href={`mailto:${company.email}`} className="text-primary underline">
              {company.email}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
