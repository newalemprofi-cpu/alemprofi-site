export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background py-24 md:py-36">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            ALEM PROFI
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            ALEM PROFI — официальная образовательная платформа
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Мы обучаем современным цифровым навыкам и образовательным программам
            в рамках действующего законодательства Республики Казахстан.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/programs"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Посмотреть программы
            </a>
            <a
              href="https://wa.me/77775091217"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-input px-6 py-3 text-sm font-semibold hover:bg-accent"
            >
              Связаться в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
