const advantages = [
  { title: "Не просто увлажнение — а удержание влаги", description: "Гиалуроновая кислота помогает воде дольше оставаться на поверхности слизистой, а не испаряться через 10 минут после промывания." },
  { title: "Поддержка местной защиты слизистой", description: "Тимические пептиды способствуют поддержанию естественных защитных функций слизистой оболочки носа в условиях городской нагрузки." },
  { title: "Без сосудосуживающих компонентов", description: "Подходит для регулярного применения — не вызывает привыкания и эффекта «замкнутого круга», знакомого по обычным каплям." },
  { title: "Формат для реальной жизни", description: "Компактный флакон 30 мл, ~220 доз, удобный наконечник — берите с собой в офис, в дорогу и в отпуск." },
];

const AdvantagesSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Чем ТимиЛор отличается от обычного спрея
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {advantages.map((a, i) => (
            <div key={a.title} className="flex gap-4 items-start bg-card rounded-2xl p-6 border border-border">
              <span className="shrink-0 w-8 h-8 rounded-lg bg-primary/8 text-primary font-bold text-sm flex items-center justify-center">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-base mb-1">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-muted-foreground text-sm max-w-xl mx-auto">
          Это не «ещё одна морская вода» — это формула «2 в 1» для тех, кто хочет встроить заботу о слизистой в свой ежедневный ритуал.
        </p>
      </div>
    </section>
  );
};

export default AdvantagesSection;
