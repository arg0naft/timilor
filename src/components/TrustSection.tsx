const trustItems = [
  { title: "Прозрачный состав", description: "Тимические пептиды 0,01% и гиалуроновая кислота — два компонента, которые честно указаны на упаковке. Без скрытых ингредиентов." },
  { title: "Без сосудосуживающих", description: "Подходит для ежедневного применения и не вызывает «замкнутого круга» зависимости от привычных капель." },
  { title: "Цена ежедневного ухода", description: "Около 390 ₽ за 30 мл и ~220 доз. Цена флакона, который не страшно использовать каждый день — а не «беречь до простуды»." },
  { title: "Честная коммуникация", description: "ТимиЛор — БАД, а не лекарство. Мы говорим о ежедневной поддержке слизистой и комфорте дыхания — без громких медицинских обещаний." },
];

const TrustSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Почему ТимиЛор можно доверять
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustItems.map((item) => (
            <div key={item.title} className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
