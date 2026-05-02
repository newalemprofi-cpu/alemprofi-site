import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import CTA from "@/components/sections/home/CTA";

export const metadata: Metadata = {
  title: "Программы",
  description: 'Образовательные программы ТОО "ALEM PROFI": ИИ, автоматизация, цифровые инструменты.',
};

const programs = [
  {
    id: "ai-basics",
    title: "ИИ с нуля",
    description:
      "Практический курс для тех, кто хочет разобраться в инструментах искусственного интеллекта и начать применять их в работе.",
    forWhom: "Специалисты любого профиля без технического опыта.",
    result: "Умение работать с ИИ-инструментами: генерация текста, анализ данных, автоматизация рутинных задач.",
  },
  {
    id: "photo-video-ai",
    title: "Фото и видео с нейросетями",
    description:
      "Курс по созданию и обработке визуального контента с помощью нейросетевых инструментов.",
    forWhom: "Контент-мейкеры, дизайнеры, маркетологи, специалисты по SMM.",
    result: "Практические навыки работы с нейросетями для генерации и редактирования изображений и видео.",
  },
  {
    id: "telegram-bots",
    title: "Telegram-боты и автоматизация",
    description:
      "Программа по созданию Telegram-ботов и настройке автоматических рабочих процессов без глубоких знаний программирования.",
    forWhom: "Предприниматели, администраторы, специалисты, автоматизирующие коммуникации.",
    result: "Самостоятельно разработанный рабочий Telegram-бот и настроенные процессы автоматизации.",
  },
  {
    id: "digital-tools",
    title: "Цифровые инструменты для работы",
    description:
      "Обзор и практика работы с современными цифровыми сервисами для повышения личной и командной эффективности.",
    forWhom: "Специалисты, руководители, сотрудники, переходящие на цифровой формат работы.",
    result: "Уверенное владение набором цифровых инструментов для организации задач, коммуникации и документооборота.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Программы</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Практические образовательные программы в области цифровых навыков и
            современных технологий.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader
          label="Направления обучения"
          title="Чему мы обучаем"
          description="Каждая программа ориентирована на практику и реальные рабочие задачи."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {programs.map((program) => (
            <Card key={program.id} hover className="p-8">
              <CardTitle className="text-xl">{program.title}</CardTitle>
              <CardDescription className="mt-3 text-base">
                {program.description}
              </CardDescription>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Для кого
                  </p>
                  <p className="mt-1 text-sm">{program.forWhom}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Результат
                  </p>
                  <p className="mt-1 text-sm">{program.result}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
