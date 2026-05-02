import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница не найдена",
};

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-32 text-center">
      <p className="text-5xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight">Страница не найдена</h1>
      <p className="mt-2 text-muted-foreground">
        Такой страницы не существует или она была удалена.
      </p>
      <a
        href="/"
        className="mt-8 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
      >
        На главную
      </a>
    </div>
  );
}
