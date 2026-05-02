import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Политика возврата",
  description: 'Условия возврата денежных средств ТОО "ALEM PROFI".',
};

export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Политика возврата</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {company.legalName} · БИН {company.bin}
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">1. Общие положения</h2>
          <p>
            Настоящая политика описывает условия возврата денежных средств за
            образовательные программы {company.legalName}.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">2. Возврат до получения доступа</h2>
          <p>
            Возврат денежных средств в полном объёме возможен в случае, если
            пользователь обратился с соответствующим запросом до момента
            предоставления доступа к учебным материалам программы.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">3. Возврат после получения доступа</h2>
          <p>
            После предоставления доступа к учебным материалам запросы на
            возврат рассматриваются в индивидуальном порядке. Компания
            оставляет за собой право отказать в возврате или произвести его
            частично в зависимости от обстоятельств обращения.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">4. Срок рассмотрения</h2>
          <p>
            Срок рассмотрения запроса на возврат составляет до 10 рабочих
            дней с момента получения обращения. О решении пользователь
            уведомляется по указанным при регистрации контактным данным.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">5. Порядок обращения</h2>
          <p>
            Для подачи запроса на возврат направьте письмо на электронную
            почту с указанием:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Имени и фамилии</li>
            <li>Названия программы</li>
            <li>Даты оплаты</li>
            <li>Причины обращения</li>
          </ul>
          <p className="mt-2">
            Email:{" "}
            <a href={`mailto:${company.email}`} className="text-primary underline">
              {company.email}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
