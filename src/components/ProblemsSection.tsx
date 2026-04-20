import { useSiteContent, useContentCards } from "@/hooks/useSiteContent";

const ProblemsSection = () => {
  const { data: content } = useSiteContent();
  const { data: cards } = useContentCards("problems");

  const fallback = [
    { title: "К вечеру нос «горит» от кондиционера", description: "Целый день в офисе с кондиционером или отоплением — и слизистая стянута, дышать некомфортно. Промывания морской водой помогают на 15–20 минут." },
    { title: "Сложно слезть с сосудосуживающих", description: "Привычные капли облегчают на пару часов, но без них становится только хуже. Слизистой нужна мягкая ежедневная поддержка, а не ещё один «скорый» спрей." },
    { title: "Городской воздух перегружает нос", description: "Пыль, выхлопы, отопление зимой и кондиционеры летом — слизистая работает на пределе каждый день." },
    { title: "Нужен уход, а не «скорая помощь»", description: "Когда хочется не разового эффекта, а простого ежедневного ритуала: впрыснул — и спокойно дышишь дальше." },
  ];

  const items = cards && cards.length > 0 ? cards : fallback;

  return (
    <section className="py-20 md:py-28 section-gradient-soft">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          {content?.problems_title ?? "Узнаёте себя?"}
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/15 transition-colors"
            >
              <h3 className="text-base font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground leading-relaxed">
            {content?.problems_bottom ??
              "Слизистая носа — первый барьер для всего, чем мы дышим. ТимиЛор создан, чтобы поддерживать её в условиях ежедневной городской нагрузки — без привыкания и без сосудосуживающих компонентов."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
