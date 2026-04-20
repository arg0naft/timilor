-- Update site_content with stronger marketing copy
UPDATE public.site_content SET value = 'Пептидный спрей · 30 мл · для ежедневного ухода' WHERE key = 'hero_badge';
UPDATE public.site_content SET value = 'ТимиЛор — назальный спрей с тимическими пептидами 0,01% и гиалуроновой кислотой. Увлажняет слизистую носа и поддерживает её защитные функции при сухом воздухе, кондиционерах и нагрузках большого города.' WHERE key = 'hero_description';
UPDATE public.site_content SET value = 'Купить ТимиЛор' WHERE key = 'hero_cta_primary';
UPDATE public.site_content SET value = 'Как это работает' WHERE key = 'hero_cta_secondary';
UPDATE public.site_content SET value = 'тимические пептиды 0,01% · гиалуроновая кислота' WHERE key = 'hero_subtitle';

UPDATE public.site_content SET value = 'Узнаёте себя?' WHERE key = 'problems_title';
UPDATE public.site_content SET value = 'ТимиЛор создан для ежедневной поддержки слизистой в этих ситуациях' WHERE key = 'problems_subtitle';

UPDATE public.site_content SET value = 'Как работает ТимиЛор' WHERE key = 'howitworks_title';
UPDATE public.site_content SET value = 'Два компонента работают в связке: пептиды поддерживают защитные функции слизистой, а гиалуроновая кислота удерживает влагу. Вместе — комфортное дыхание каждый день.' WHERE key = 'howitworks_subtitle';

UPDATE public.site_content SET value = 'Кому подойдёт ТимиЛор' WHERE key = 'audience_title';
UPDATE public.site_content SET value = 'Удобный формат для повседневного использования всей семьёй' WHERE key = 'audience_subtitle';

UPDATE public.site_content SET value = 'Что внутри флакона' WHERE key = 'ingredients_title';
UPDATE public.site_content SET value = 'Два ключевых компонента и физиологичная основа — без сосудосуживающих веществ' WHERE key = 'ingredients_subtitle';

UPDATE public.site_content SET value = 'Отвечаем на главные вопросы' WHERE key = 'faq_title';
UPDATE public.site_content SET value = 'Коротко о составе, применении и доверии к продукту' WHERE key = 'faq_subtitle';

UPDATE public.site_content SET value = 'Где купить ТимиЛор' WHERE key = 'buy_title';
UPDATE public.site_content SET value = 'Выбирайте удобный формат: аптеки рядом с домом или доставка с маркетплейса. Один флакон — на 1–2 месяца ежедневного ухода.' WHERE key = 'buy_subtitle';

UPDATE public.site_content SET value = 'Назальный спрей с тимическими пептидами 0,01% и гиалуроновой кислотой. Ежедневный уход за слизистой носа · 30 мл.' WHERE key = 'footer_description';
UPDATE public.site_content SET value = 'ТимиЛор — биологически активная добавка. Не является лекарственным средством и не заменяет назначенное врачом лечение. Перед применением рекомендуется ознакомиться с инструкцией и при необходимости проконсультироваться со специалистом.' WHERE key = 'footer_disclaimer';

-- Update content_cards: ingredients
UPDATE public.content_cards SET title = 'Тимические пептиды 0,01%', description = 'Натуральные пептиды из тимуса крупного рогатого скота. Способствуют поддержанию местных защитных функций слизистой оболочки носа.' WHERE section = 'ingredients' AND title = 'Пептидный комплекс';
UPDATE public.content_cards SET description = 'Помогает удерживать влагу на поверхности слизистой и поддерживать ощущение комфорта в течение дня.' WHERE section = 'ingredients' AND title = 'Гиалуроновая кислота';
UPDATE public.content_cards SET description = 'Физиологически совместимая основа: бережно увлажняет слизистую носа без пересушивания.' WHERE section = 'ingredients' AND title = 'Изотонический раствор';
UPDATE public.content_cards SET title = 'Понятный состав', description = 'Без сосудосуживающих компонентов. Прозрачная формула для регулярного ежедневного ухода.' WHERE section = 'ingredients' AND title = 'Без консервантов';

-- Update content_cards: problems (replace medical-sounding titles with neutral situational ones)
UPDATE public.content_cards SET title = 'К вечеру нос «горит» от кондиционера', description = 'Целый день в офисе с кондиционером или отоплением — и слизистая стянута, дышать некомфортно.' WHERE section = 'problems' AND title = 'Сухость и жжение';
UPDATE public.content_cards SET title = 'Городской воздух перегружает нос', description = 'Пыль, выхлопы, отопление зимой и кондиционеры летом — слизистая работает на пределе каждый день.' WHERE section = 'problems' AND title = 'Заложенность и насморк';
UPDATE public.content_cards SET title = 'Сложно слезть с сосудосуживающих', description = 'Капли облегчают на пару часов, но без них становится хуже. Слизистой нужна мягкая ежедневная поддержка.' WHERE section = 'problems' AND title = 'Аллергический ринит';
UPDATE public.content_cards SET title = 'Нужен уход, а не «скорая помощь»', description = 'Когда хочется не разового эффекта, а простого ежедневного ритуала: впрыснул — и спокойно дышишь дальше.' WHERE section = 'problems' AND title = 'Синдром сухого носа';

-- Update content_cards: audience
UPDATE public.content_cards SET title = 'Жителям мегаполисов', description = 'Сухой и пыльный воздух, перепады температур, отопление зимой — слизистой нужна ежедневная поддержка.' WHERE section = 'audience' AND title = 'Дети';
UPDATE public.content_cards SET title = 'Офисным сотрудникам', description = 'Кондиционер летом, батареи зимой и 8+ часов в закрытом помещении. ТимиЛор помогает сохранять комфорт дыхания.' WHERE section = 'audience' AND title = 'Взрослые';
UPDATE public.content_cards SET title = 'Тем, кто уходит от сосудосуживающих', description = 'Мягкая ежедневная поддержка слизистой в период перехода с привычных капель — без эффекта «замкнутого круга».' WHERE section = 'audience' AND title = 'Спортсмены';
UPDATE public.content_cards SET title = 'Семье в домашнюю аптечку', description = 'Удобный спрей для повседневного ухода. Один флакон — на месяцы регулярного использования.' WHERE section = 'audience' AND title = 'Пожилые';

-- Update content_cards: how it works
UPDATE public.content_cards SET title = 'Удерживает влагу', description = 'Гиалуроновая кислота помогает воде дольше оставаться на поверхности слизистой носа.' WHERE section = 'howitworks' AND title = 'Увлажняет';
UPDATE public.content_cards SET title = 'Поддерживает защиту', description = 'Тимические пептиды способствуют поддержанию местных защитных функций слизистой оболочки носа.' WHERE section = 'howitworks' AND title = 'Восстанавливает';
UPDATE public.content_cards SET title = 'Работает мягко', description = 'Без сосудосуживающих компонентов — подходит для ежедневного применения без привыкания.' WHERE section = 'howitworks' AND title = 'Защищает';
UPDATE public.content_cards SET title = 'Удобно каждый день', description = 'Компактный флакон 30 мл и ~220 доз — берите с собой в офис, в дорогу и в отпуск.' WHERE section = 'howitworks' AND title = 'Очищает';

-- Update faq_items
UPDATE public.faq_items SET question = 'Это лекарство?', answer = 'Нет. ТимиЛор — биологически активная добавка для ежедневной поддержки слизистой носа. Он не является лекарственным средством и не заменяет назначенное врачом лечение.' WHERE question = 'Это лекарство?';
UPDATE public.faq_items SET question = 'Как часто можно использовать ТимиЛор?', answer = 'ТимиЛор разработан для регулярного ежедневного ухода за слизистой носа. Используйте в соответствии с инструкцией по применению — обычно утром и вечером или по необходимости в течение дня.' WHERE question = 'Как часто использовать?';
UPDATE public.faq_items SET question = 'Чем ТимиЛор отличается от обычной морской воды?', answer = 'Морская вода в основном промывает и кратковременно увлажняет. ТимиЛор объединяет два компонента: гиалуроновая кислота помогает удерживать влагу дольше, а тимические пептиды поддерживают местные защитные функции слизистой. Это формула «2 в 1» для ежедневного ухода.' WHERE question = 'Чем отличается от обычного солевого раствора?';
UPDATE public.faq_items SET question = 'Есть ли в составе сосудосуживающие компоненты?', answer = 'Нет. ТимиЛор не содержит сосудосуживающих компонентов и не вызывает эффекта «замкнутого круга», знакомого по привычным каплям.' WHERE question = 'Есть противопоказания?';
UPDATE public.faq_items SET question = 'С какого возраста можно применять?', answer = 'Рекомендации по возрасту указаны в инструкции к продукту. Перед применением у детей рекомендуется проконсультироваться со специалистом.' WHERE question = 'С какого возраста можно применять?';