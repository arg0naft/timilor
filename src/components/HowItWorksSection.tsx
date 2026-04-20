import { useSiteContent } from "@/hooks/useSiteContent";

const HowItWorksSection = () => {
  const { data: content } = useSiteContent();

  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {content?.howitworks_title ?? "Как работает ТимиЛор"}
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed">
          {content?.howitworks_subtitle ??
            "Два компонента работают в связке: пептиды поддерживают защитные функции слизистой, а гиалуроновая кислота удерживает влагу. Вместе — комфортное дыхание каждый день."}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Peptides */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-5 text-primary font-bold text-sm">
              01
            </div>
            <h3 className="text-lg font-bold mb-3">Тимические пептиды 0,01%</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Натуральные пептиды из тимуса крупного рогатого скота. Способствуют поддержанию местных защитных функций слизистой оболочки носа — той самой, которая ежедневно встречает пыль, сухой воздух и перепады температур.
            </p>
          </div>

          {/* Hyaluronic acid */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-5 text-accent font-bold text-sm">
              02
            </div>
            <h3 className="text-lg font-bold mb-3">Гиалуроновая кислота</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Удерживает влагу на поверхности слизистой и помогает сохранять ощущение увлажнённости и комфорта в течение всего дня — даже при работающем кондиционере или отоплении.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm font-medium text-primary">
            Это не просто промывание — это ежедневная поддержка слизистой в формуле «2 в 1».
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
