import { Check } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const bullets = [
  "Тимические пептиды 0,01% и гиалуроновая кислота — два компонента в одном флаконе",
  "30 мл и около 220 доз — флакона хватает на 1–2 месяца ежедневного ухода",
  "Без сосудосуживающих компонентов — не вызывает «замкнутого круга» капель",
  "Подходит для ежедневного применения дома, в офисе и в дороге",
];

const HeroSection = () => {
  const { data: content } = useSiteContent();

  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 section-gradient-primary" />

      <div className="relative max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-medium text-accent bg-accent/8 border border-accent/12 rounded-full px-5 py-2 mb-8">
            {content?.hero_badge ?? "Пептидный спрей · 30 мл · для ежедневного ухода"}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            {content?.hero_title ?? (
              <>
                Сухой воздух — не повод
                <br />
                <span className="text-primary">терпеть дискомфорт.</span>
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {content?.hero_description ??
              "ТимиЛор — назальный спрей с тимическими пептидами 0,01% и гиалуроновой кислотой. Увлажняет слизистую носа и поддерживает её защитные функции при сухом воздухе, кондиционерах и нагрузках большого города."}
          </p>
        </div>

        {/* Bullets */}
        <div className="max-w-md mx-auto mb-10 space-y-3">
          {bullets.map((b) => (
            <div key={b} className="flex items-start gap-3 text-sm text-foreground/80">
              <Check className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <span>{b}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="#buy"
            className="w-full sm:w-auto bg-accent text-accent-foreground px-10 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-opacity shadow-lg shadow-accent/20"
          >
            {content?.hero_cta_primary ?? "Купить ТимиЛор"}
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto border-2 border-border text-foreground px-10 py-4 rounded-full text-lg font-semibold hover:bg-muted/50 transition-colors"
          >
            {content?.hero_cta_secondary ?? "Как это работает"}
          </a>
        </div>

        {/* Price line */}
        <p className="text-center text-sm text-muted-foreground">
          От 390 ₽ • 30 мл • ~220 доз • хватает на 1–2 месяца
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
