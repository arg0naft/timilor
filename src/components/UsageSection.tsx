const steps = [
  { title: "Подготовьте флакон", description: "Снимите защитный колпачок. При первом использовании сделайте 2–3 пробных нажатия в воздух — спрей готов к работе." },
  { title: "Сделайте впрыскивание", description: "Аккуратно введите наконечник в носовой ход и нажмите 1–2 раза. Повторите для второго носового хода." },
  { title: "Повторяйте ежедневно", description: "Используйте утром и вечером — или по необходимости в течение дня. Подходит для регулярного ухода в соответствии с инструкцией." },
];

const UsageSection = () => {
  return (
    <section className="py-20 md:py-28 section-gradient-soft">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Просто использовать каждый день
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-5 text-lg font-bold">
                {i + 1}
              </div>
              <h3 className="font-semibold text-base mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Компактный флакон 30 мл — помещается в сумку, рюкзак и бардачок. Удобно дома, в офисе и в дороге.
        </p>
      </div>
    </section>
  );
};

export default UsageSection;
