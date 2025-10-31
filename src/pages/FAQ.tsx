import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      name: 'Замовлення та оплата',
      icon: 'ShoppingCart',
      questions: [
        {
          q: 'Як оформити замовлення?',
          a: 'Оберіть букет в каталозі, натисніть "Додати до кошика", заповніть форму з адресою доставки та контактними даними, оберіть спосіб оплати та підтвердіть замовлення. Ви отримаєте SMS з підтвердженням.'
        },
        {
          q: 'Які способи оплати ви приймаєте?',
          a: 'Ми приймаємо оплату картками Visa/Mastercard онлайн, готівкою при отриманні, а також безготівковий розрахунок для юридичних осіб. Всі онлайн-платежі захищені.'
        },
        {
          q: 'Чи можна оплатити частинами?',
          a: 'Так, при замовленнях від 3000 ₴ доступна розстрочка від Monobank та ПриватБанку. Оформити можна при оформленні замовлення.'
        },
        {
          q: 'Чи можна змінити або скасувати замовлення?',
          a: 'Так, ви можете змінити або скасувати замовлення за 3 години до запланованої доставки. Зателефонуйте нам або напишіть в чат.'
        }
      ]
    },
    {
      name: 'Доставка',
      icon: 'Truck',
      questions: [
        {
          q: 'Як швидко ви доставляєте?',
          a: 'Стандартна доставка по Києву — 2-4 години з моменту замовлення. Можлива термінова доставка за 1-2 години (+200 ₴) та доставка у визначений час.'
        },
        {
          q: 'Скільки коштує доставка?',
          a: 'Доставка по Києву (центр) — 150 ₴, райони — 200 ₴, передмістя — 300 ₴. Безкоштовна доставка при замовленні від 800 ₴ (центр), 1200 ₴ (райони), 1500 ₴ (передмістя).'
        },
        {
          q: 'Чи доставляєте ви в інші міста?',
          a: 'Так, ми доставляємо по всій Україні через партнерські квіткові студії. Термін доставки — 1-2 дні. Вартість залежить від міста та замовлення.'
        },
        {
          q: 'Що робити, якщо отримувача немає вдома?',
          a: 'Кур\'єр зв\'яжеться з отримувачем за 30 хвилин до доставки. Якщо контакту немає, кур\'єр зв\'язується з вами для уточнення дій.'
        },
        {
          q: 'Чи можна доставити анонімно?',
          a: 'Так, ми можемо доставити букет без вказівки відправника. Просто позначте це в коментарі до замовлення.'
        }
      ]
    },
    {
      name: 'Квіти та композиції',
      icon: 'Flower2',
      questions: [
        {
          q: 'Чи можна замовити індивідуальний букет?',
          a: 'Так! Напишіть нам ваші побажання (колірна гамма, види квітів, бюджет), і наш флорист створить унікальну композицію спеціально для вас.'
        },
        {
          q: 'Як довго зберігаються ваші букети?',
          a: 'При правильному догляді наші букети зберігають свіжість 7-14 днів. Ми працюємо тільки зі свіжими квітами від перевірених постачальників.'
        },
        {
          q: 'Чи можна замовити букет, якого немає на сайті?',
          a: 'Так, покажіть нам фото бажаного букета, і ми відтворимо його або створимо схожу композицію з доступних квітів.'
        },
        {
          q: 'Що робити, якщо квітка в букеті не відкрилася?',
          a: 'Бутони деяких квітів (піони, троянди) можуть бути закритими при доставці — це нормально. Вони розкриються за 1-2 дні. Якщо ні — зв\'яжіться з нами.'
        },
        {
          q: 'Чи включена упаковка у вартість?',
          a: 'Так, дизайнерська упаковка, стрічки та листівка включені у вартість кожного букета. Для подарункових наборів доступна преміум-упаковка.'
        }
      ]
    },
    {
      name: 'Гарантії та повернення',
      icon: 'Shield',
      questions: [
        {
          q: 'Що робити, якщо букет прийшов пошкодженим?',
          a: 'Зробіть фото букета одразу після отримання та зв\'яжіться з нами протягом 2 годин. Ми безкоштовно замінимо букет або повернемо гроші.'
        },
        {
          q: 'Чи можна повернути букет?',
          a: 'Свіжі квіти не підлягають поверненню згідно законодавства. Але якщо ви незадоволені якістю, ми замінимо букет або повернемо гроші.'
        },
        {
          q: 'Що входить у гарантію свіжості?',
          a: 'Ми гарантуємо, що букет залишиться свіжим мінімум 5 днів при дотриманні правил догляду. Якщо квіти зів\'яли раніше — повідомте нам.'
        },
        {
          q: 'Як підтвердити доставку?',
          a: 'Після доставки ви отримаєте SMS з підтвердженням. Також можете попросити кур\'єра зробити фото букета у отримувача.'
        }
      ]
    },
    {
      name: 'Підписка та бонуси',
      icon: 'Gift',
      questions: [
        {
          q: 'Що таке квіткова підписка?',
          a: 'Це регулярна доставка букетів за фіксованою ціною. Ви обираєте план (1-4 букети на місяць), і ми доставляємо свіжі композиції автоматично.'
        },
        {
          q: 'Чи можна призупинити підписку?',
          a: 'Так, ви можете призупинити підписку на будь-який період або пропустити місяць без додаткових платежів.'
        },
        {
          q: 'Чи є програма лояльності?',
          a: 'Так! За кожне замовлення ви отримуєте бонуси (5% від суми), які можна використати для наступних покупок. Підписники отримують подвійні бонуси.'
        },
        {
          q: 'Як отримати знижку?',
          a: 'Підпишіться на розсилку — отримаєте знижку 10% на перше замовлення. Також проводимо акції до свят та дні народження даруємо спеціальну знижку.'
        }
      ]
    },
    {
      name: 'Особливі події',
      icon: 'PartyPopper',
      questions: [
        {
          q: 'Чи оформляєте ви весілля?',
          a: 'Так, ми спеціалізуємось на весільній флористиці: букет нареченої, бутоньєрки, декор столів, квіткові арки. Консультація безкоштовна.'
        },
        {
          q: 'Який термін замовлення для великих подій?',
          a: 'Рекомендуємо замовляти оформлення весілля за 2-3 місяці, корпоративні події — за 1 місяць. Для невеликих букетів достатньо 1-2 днів.'
        },
        {
          q: 'Чи робите ви виїзні консультації?',
          a: 'Так, для великих проектів (весілля, корпоративи) наш флорист приїде до вас для обговорення деталей та огляду локації.'
        },
        {
          q: 'Чи можна орендувати квіткові композиції?',
          a: 'Так, ми надаємо в оренду великі квіткові інсталяції, арки, підставки для подій. Вартість залежить від складності та терміну оренди.'
        }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    questions: category.questions.filter(
      item =>
        searchQuery === '' ||
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <svg className="absolute top-0 left-0 w-full h-full -z-10 opacity-20" viewBox="0 0 1200 400">
          <path d="M0,100 Q300,50 600,100 T1200,100" stroke="#E91E63" strokeWidth="2" fill="none"/>
          <path d="M0,250 Q400,200 800,250 T1200,250" stroke="#F5A5B8" strokeWidth="1.5" fill="none"/>
        </svg>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl font-serif font-bold text-primary mb-6">Часті питання</h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Знайдіть відповіді на найпопулярніші запитання про наші послуги
            </p>

            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Пошук по питаннях..." 
                className="pl-12 pr-4 h-12 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16 animate-fade-in">
              <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground mb-2">Нічого не знайдено</p>
              <p className="text-sm text-muted-foreground">Спробуйте змінити запит або напишіть нам</p>
            </div>
          ) : (
            <div className="space-y-12 max-w-4xl mx-auto">
              {filteredCategories.map((category, catIndex) => (
                <div key={catIndex} className="animate-fade-in" style={{animationDelay: `${catIndex * 0.1}s`}}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={category.icon as any} size={24} className="text-primary" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold">{category.name}</h2>
                  </div>

                  <Card className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((item, qIndex) => (
                        <AccordionItem key={qIndex} value={`${catIndex}-${qIndex}`}>
                          <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center max-w-3xl mx-auto animate-fade-in">
            <Icon name="MessageCircleQuestion" size={48} className="text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-3xl font-serif font-bold mb-4">Не знайшли відповідь?</h2>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Наша служба підтримки завжди готова допомогти. Напишіть нам або зателефонуйте — 
              ми відповімо протягом 15 хвилин.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                +380 44 123 4567
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написати в чат
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground mb-4">Наші контакти:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <div className="flex items-center gap-2 justify-center">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <span>hello@fleur.ua</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span>Пн-Нд: 09:00 - 21:00</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
