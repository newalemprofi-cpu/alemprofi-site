import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: 'Политика конфиденциальности ТОО "ALEM PROFI".',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Политика конфиденциальности</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {company.legalName} · БИН {company.bin}
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">1. Общие положения</h2>
          <p>
            Настоящая политика конфиденциальности регулирует порядок обработки
            персональных данных пользователей сайта {company.legalName}
            (далее — «Компания»). Используя сайт, вы соглашаетесь с условиями
            настоящей политики.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">2. Собираемые данные</h2>
          <p>При взаимодействии с сайтом Компания может собирать следующие данные:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Имя и фамилия</li>
            <li>Номер телефона</li>
            <li>Адрес электронной почты</li>
            <li>Содержание сообщений, направленных через форму обратной связи</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">3. Цели обработки данных</h2>
          <p>Персональные данные обрабатываются исключительно в следующих целях:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Обеспечение обратной связи и консультирование пользователей</li>
            <li>Предоставление доступа к образовательным программам</li>
            <li>Информирование об изменениях в программах и условиях</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">4. Хранение и защита данных</h2>
          <p>
            Компания принимает технические и организационные меры для защиты
            персональных данных от несанкционированного доступа, изменения,
            раскрытия или уничтожения. Данные хранятся на защищённых серверах и
            не передаются третьим лицам без согласия пользователя, за
            исключением случаев, предусмотренных законодательством Республики
            Казахстан.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">5. Права пользователя</h2>
          <p>Пользователь вправе:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Запросить сведения о хранимых персональных данных</li>
            <li>Потребовать исправления неточных данных</li>
            <li>Отозвать согласие на обработку данных</li>
            <li>Потребовать удаления персональных данных</li>
          </ul>
          <p className="mt-2">
            Для реализации прав обратитесь по адресу:{" "}
            <a href={`mailto:${company.email}`} className="text-primary underline">
              {company.email}
            </a>
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">6. Контакты</h2>
          <p>
            По вопросам, связанным с обработкой персональных данных, обращайтесь:
          </p>
          <p className="mt-2">
            {company.legalName}, БИН {company.bin}
            <br />
            Email: <a href={`mailto:${company.email}`} className="text-primary underline">{company.email}</a>
            <br />
            Телефон: {company.phone}
          </p>
        </section>
      </div>
    </div>
  );
}
