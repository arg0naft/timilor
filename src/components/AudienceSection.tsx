import { useSiteContent } from "@/hooks/useSiteContent";

const fallback = [
  { title: "Жителям мегаполисов", description: "Сухой и пыльный воздух, перепады температур, отопление зимой — слизистой нужна ежедневная поддержка, а не разовые промывания." },
  { title: "Офисным сотрудникам", description: "Кондиционер летом, батареи зимой и 8+ часов в закрытом помещении. ТимиЛор помогает сохранять комфорт дыхания в течение рабочего дня." },
  { title: "Тем, кто уходит от сосудосуживающих", description: "Мягкая ежедневная поддержка слизистой в период перехода с привычных капель — без эффекта «замкнутого круга»." },
  { title: "В сезон повышенной нагрузки", description: "Когда вокруг чихают и кашляют, а воздух перегружен — слизистая нуждается в дополнительном увлажнении и заботе." },
  { title: "Семье — в домашнюю аптечку", description: "Удобный спрей для повседневного ухода. Один флакон на месяцы — формат, который не жалко использовать каждый день." },
  { title: "Тем, кто выбирает осознанный уход", description: "Понятный состав, прозрачная формула и ежедневный ритуал заботы о слизистой — без агрессивных компонентов." },
];

const AudienceSection = () => {
  const { data: content } = useSiteContent();

  return (
    <section className="py-20 md:py-28 section-gradient-soft">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          {content?.audience_title ?? "Кому подойдёт ТимиЛор"}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {fallback.map((a) => (
            <div key={a.title} className="bg-card rounded-2xl p-6 border border-border hover:border-accent/20 transition-colors">
              <h3 className="font-semibold text-base mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
