import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Care = () => {
  const basicTips = [
    {
      icon: 'Scissors',
      title: 'Підрізайте стебла',
      description: 'Щодня підрізайте стебла під кутом 45° гострим ножем. Це покращує поглинання води.'
    },
    {
      icon: 'Droplets',
      title: 'Міняйте воду',
      description: 'Змінюйте воду щодня або через день. Використовуйте чисту відстояну воду кімнатної температури.'
    },
    {
      icon: 'Sun',
      title: 'Уникайте сонця',
      description: 'Тримайте букет подалі від прямих сонячних променів та опалювальних приладів.'
    },
    {
      icon: 'Thermometer',
      title: 'Оптимальна температура',
      description: 'Ідеальна температура для квітів — 18-22°C. У прохолодному місці простоять довше.'
    },
    {
      icon: 'Wind',
      title: 'Уникайте протягів',
      description: 'Протяги та кондиціонери прискорюють висихання квітів. Виберіть спокійне місце.'
    },
    {
      icon: 'Sparkles',
      title: 'Підживлення',
      description: 'Додавайте спеціальну підживку для квітів або краплю хлорки для свіжості води.'
    }
  ];

  const flowerTypes = [
    {
      name: 'Троянди',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      lifespan: '7-14 днів',
      tips: [
        'Видаляйте нижні листки, що торкаються води',
        'Підрізайте стебла кожні 2-3 дні',
        'Додайте цукор в воду (1 ч.л. на літр)',
        'Обприскуйте пелюстки водою щодня'
      ]
    },
    {
      name: 'Піони',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      lifespan: '5-7 днів',
      tips: [
        'Купуйте бутони, що тільки починають розкриватись',
        'Тримайте у прохолодному місці',
        'Змінюйте воду щодня',
        'Не ставте поруч з фруктами'
      ]
    },
    {
      name: 'Тюльпани',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      lifespan: '7-10 днів',
      tips: [
        'Підрізайте стебла під холодною водою',
        'Тюльпани продовжують рости у вазі',
        'Використовуйте холодну воду',
        'Додайте кубик льоду в воду'
      ]
    },
    {
      name: 'Лілії',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      lifespan: '10-14 днів',
      tips: [
        'Видаляйте пилок з тичинок (може плямувати)',
        'Обрізайте увядаючі квітки',
        'Залишайте листя на стеблі',
        'Тримайте подалі від інших квітів'
      ]
    }
  ];

  const faq = [
    {
      question: 'Чому квіти швидко в\'януть?',
      answer: 'Основні причини: забруднена вода, бактерії на стеблах, недостатнє підрізання стебел, висока температура або пряме сонце. Дотримуйтесь базових правил догляду для продовження життя букета.'
    },
    {
      question: 'Скільки води наливати у вазу?',
      answer: 'Наповніть вазу на 2/3. Стебла повинні бути занурені у воду на 5-7 см. Для різних квітів може бути різна рекомендація — уточніть у флориста при покупці.'
    },
    {
      question: 'Чи можна ставити різні квіти в одну вазу?',
      answer: 'Не всі квіти добре уживаються разом. Нарциси та гіацинти виділяють речовини, що шкодять іншим квітам. Краще тримати їх окремо. Професійні букети вже підібрані з урахуванням сумісності.'
    },
    {
      question: 'Що робити, якщо квіти почали в\'януть?',
      answer: 'Оновіть зріз стебел під водою, змініть воду, видаліть увядаючі листки та квіти. Можна на 2-3 години поставити букет у холодну воду з льодом для реанімації.'
    },
    {
      question: 'Чи потрібно обприскувати квіти водою?',
      answer: 'Так, легке обприскування водою корисне для більшості квітів (крім гербер та хризантем). Робіть це вранці або ввечері, уникаючи прямого сонця.'
    },
    {
      question: 'Які добавки можна використовувати для води?',
      answer: 'Спеціальна підживка для зрізаних квітів, аспірин (½ таблетки на літр), крапля хлорки або відбілювача, чайна ложка цукру. Це подовжить свіжість букета.'
    }
  ];

  const seasonalTips = [
    {
      season: 'Весна',
      icon: 'CloudRain',
      tips: 'Навесні популярні тюльпани, нарциси та гіацинти. Вони люблять прохолоду — ставте їх подалі від батарей.'
    },
    {
      season: 'Літо',
      icon: 'Sun',
      tips: 'Літні квіти стійкі до тепла, але потребують частішої зміни води. Додайте кубик льоду у спеку.'
    },
    {
      season: 'Осінь',
      icon: 'Leaf',
      tips: 'Хризантеми та айстри — королеви осені. Вони невибагливі, але не люблять обприскування.'
    },
    {
      season: 'Зима',
      icon: 'Snowflake',
      tips: 'Зимові букети тримайте подалі від опалення. Амаріліси та пуансетії люблять прохолоду.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <svg className="absolute top-0 right-0 w-full h-full -z-10 opacity-20" viewBox="0 0 1200 400">
          <path d="M0,100 Q300,50 600,100 T1200,100" stroke="#E91E63" strokeWidth="2" fill="none"/>
          <path d="M0,250 Q400,200 800,250 T1200,250" stroke="#F5A5B8" strokeWidth="1.5" fill="none"/>
        </svg>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl font-serif font-bold text-primary mb-6">Догляд за квітами</h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Прості та ефективні поради, які допоможуть зберегти красу букета надовго
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 animate-fade-in">
            Основні правила догляду
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {basicTips.map((tip, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-shadow animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={tip.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{tip.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{tip.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-4 animate-fade-in">
            Догляд за популярними квітами
          </h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-in">
            Кожен вид квітів має свої особливості
          </p>

          <Tabs defaultValue={flowerTypes[0].name} className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {flowerTypes.map(type => (
                <TabsTrigger key={type.name} value={type.name}>
                  {type.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {flowerTypes.map((type, index) => (
              <TabsContent key={type.name} value={type.name}>
                <Card className="overflow-hidden animate-fade-in">
                  <div className="grid md:grid-cols-2">
                    <div className="aspect-square md:aspect-auto">
                      <img 
                        src={type.image} 
                        alt={type.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-3xl font-serif font-bold mb-4">{type.name}</h3>
                      <div className="flex items-center gap-2 mb-6">
                        <Icon name="Clock" size={20} className="text-primary" />
                        <span className="text-muted-foreground">Життєвий цикл: {type.lifespan}</span>
                      </div>
                      <ul className="space-y-3">
                        {type.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 animate-fade-in">
            Сезонні поради
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {seasonalTips.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-shadow animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3">{item.season}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.tips}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 animate-fade-in">
            Поширені запитання
          </h2>

          <Card className="max-w-3xl mx-auto p-8 animate-scale-in">
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-background animate-fade-in">
            <Icon name="BookOpen" size={48} className="text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-3xl font-serif font-bold mb-4">Потрібна персональна порада?</h2>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Наші флористи завжди готові відповісти на ваші запитання про догляд за квітами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-block">
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
                  Написати нам
                </button>
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Care;
