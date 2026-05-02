import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Условия использования",
  description: 'Условия использования сайта и образовательных услуг ТОО "ALEM PROFI".',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Условия использования</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {company.legalName} · БИН {company.bin}
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">1. Общие положения</h2>
          <p>
            Настоящие условия регулируют использование сайта и образовательных
            услуг {company.legalName} (далее — «Компания»). Продолжая
            пользоваться сайтом, вы принимаете настоящие условия в полном
            объёме.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">2. Образовательные услуги</h2>
          <p>
            Компания предоставляет образовательные программы в дистанционном
            онлайн-формате. Содержание программ, сроки и порядок доступа
            определяются при оформлении заявки и могут уточняться перед
            началом обучения.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">3. Онлайн-формат обучения</h2>
          <p>
            Все программы реализуются в дистанционном формате. Доступ к
            учебным материалам предоставляется через указанные Компанией
            каналы. Для участия в программах необходимо наличие стабильного
            интернет-соединения и устройства, поддерживающего используемые
            платформы.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">4. Обязанности пользователя</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Предоставлять достоверные данные при регистрации</li>
            <li>Не передавать доступ к материалам третьим лицам</li>
            <li>Использовать материалы исключительно в личных, некоммерческих целях</li>
            <li>Соблюдать законодательство Республики Казахстан при использовании сайта</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">5. Ограничения ответственности</h2>
          <p>
            Компания не несёт ответственности за результаты, которые пользователь
            ожидает получить от обучения, поскольку они зависят от индивидуальных
            усилий и обстоятельств каждого участника. Материалы предоставляются
            «как есть» и могут обновляться без предварительного уведомления.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">6. Интеллектуальная собственность</h2>
          <p>
            Все учебные материалы, тексты, изображения и иные объекты,
            размещённые на сайте и в рамках программ, являются собственностью
            {" "}{company.legalName} или правообладателей, передавших права
            Компании. Воспроизведение, распространение и иное использование
            материалов без письменного разрешения запрещено.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">7. Изменения условий</h2>
          <p>
            Компания оставляет за собой право вносить изменения в настоящие
            условия. Актуальная версия всегда доступна на данной странице.
            Продолжение использования сайта после изменений означает принятие
            обновлённых условий.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-foreground">8. Контакты</h2>
          <p>
            {company.legalName}
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
