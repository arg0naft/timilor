import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSiteContent, useFaqItems } from "@/hooks/useSiteContent";

const FaqSection = () => {
  const { data: content } = useSiteContent();
  const { data: faqItems } = useFaqItems();

  const fallback = [
    { id: "1", question: "Что такое ТимиЛор?", answer: "ТимиЛор — назальный спрей с тимическими пептидами 0,01% и гиалуроновой кислотой. Он способствует увлажнению слизистой носа и поддержанию её защитных функций при ежедневной нагрузке: сухой воздух, кондиционеры, отопление, городская среда." },
    { id: "2", question: "Чем ТимиЛор отличается от обычных спреев с морской водой?", answer: "Морская вода в основном промывает и кратковременно увлажняет. ТимиЛор объединяет два компонента: гиалуроновая кислота помогает удерживать влагу дольше, а тимические пептиды поддерживают местные защитные функции слизистой. Это формула «2 в 1» для ежедневного ухода." },
    { id: "3", question: "Можно ли использовать каждый день?", answer: "Да. ТимиЛор разработан как продукт для регулярного ежедневного ухода за слизистой носа в соответствии с инструкцией по применению." },
    { id: "4", question: "Есть ли в составе сосудосуживающие компоненты?", answer: "Нет. ТимиЛор не содержит сосудосуживающих компонентов и не вызывает эффекта «замкнутого круга», знакомого по привычным каплям." },
    { id: "5", question: "Подойдёт ли тем, кто хочет уйти от сосудосуживающих капель?", answer: "ТимиЛор может стать мягкой ежедневной поддержкой слизистой в период перехода с привычных капель — за счёт длительного увлажнения и отсутствия сосудосуживающих компонентов в составе." },
    { id: "6", question: "Это лекарство?", answer: "Нет. ТимиЛор — биологически активная добавка для ежедневной поддержки слизистой носа. Он не является лекарственным средством и не заменяет назначенное врачом лечение." },
    { id: "7", question: "Где купить ТимиЛор?", answer: "В аптеках вашего города, а также на крупных маркетплейсах и онлайн-площадках. Актуальные точки продаж — в блоке «Где купить» выше." },
  ];

  const items = faqItems && faqItems.length > 0 ? faqItems : fallback;

  return (
    <section id="faq" className="py-20 md:py-28 section-gradient-soft">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          {content?.faq_title ?? "Отвечаем на главные вопросы"}
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {items.map((faq, i) => (
            <AccordionItem
              key={faq.id}
              value={`item-${i}`}
              className="bg-card rounded-2xl border border-border px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 text-[15px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
