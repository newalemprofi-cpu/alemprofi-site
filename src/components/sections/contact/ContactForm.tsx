"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <SectionHeader
            label="Контакты"
            title="Свяжитесь с нами"
            description="Заполните форму и мы ответим в течение одного рабочего дня."
          />
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="font-semibold">Адрес</dt>
              <dd className="mt-1 text-muted-foreground">г. Алматы, Казахстан</dd>
            </div>
            <div>
              <dt className="font-semibold">Email</dt>
              <dd className="mt-1 text-muted-foreground">info@alemprofi.kz</dd>
            </div>
            <div>
              <dt className="font-semibold">Телефон</dt>
              <dd className="mt-1 text-muted-foreground">+7 (727) 000-00-00</dd>
            </div>
          </dl>
        </div>
        <div>
          {submitted ? (
            <div className="flex h-full items-center justify-center rounded-xl border p-10 text-center">
              <div>
                <p className="text-2xl font-bold">Спасибо!</p>
                <p className="mt-2 text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium" htmlFor="name">Имя</label>
                <input
                  id="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="email@company.kz"
                />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="company">Компания</label>
                <input
                  id="company"
                  type="text"
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Название компании"
                />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="message">Сообщение</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Опишите вашу задачу"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Отправить заявку
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
