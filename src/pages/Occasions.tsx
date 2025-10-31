import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Occasions = () => {
  const occasions = [
    {
      id: 1,
      title: 'Весілля',
      description: 'Створимо незабутню атмосферу вашого особливого дня',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      icon: 'Heart',
      color: 'from-pink-500/20 to-rose-500/20',
      services: [
        'Букет нареченої',
        'Бутоньєрки',
        'Декор столів',
        'Квіткові арки',
        'Композиції для церемонії',
        'Оформлення банкетного залу'
      ]
    },
    {
      id: 2,
      title: 'День народження',
      description: 'Яскраві букети для ювіляра будь-якого віку',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      icon: 'Cake',
      color: 'from-purple-500/20 to-pink-500/20',
      services: [
        'Святкові букети',
        'Композиції з цифрами',
        'Квіткові коробки',
        'Декор приміщення',
        'Букети-сюрпризи',
        'Персональні композиції'
      ]
    },
    {
      id: 3,
      title: 'Корпоративні події',
      description: 'Професійний квітковий декор для ваших заходів',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      icon: 'Briefcase',
      color: 'from-blue-500/20 to-indigo-500/20',
      services: [
        'Оформлення офісу',
        'Букети для партнерів',
        'Презентаційні композиції',
        'Декор конференц-залів',
        'Квітковий брендинг',
        'Подарункові набори'
      ]
    },
    {
      id: 4,
      title: 'Романтика',
      description: 'Висловіть свої почуття мовою квітів',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      icon: 'HeartHandshake',
      color: 'from-red-500/20 to-pink-500/20',
      services: [
        'Букети троянд',
        'Ніжні композиції',
        'Квіти з листівками',
        'Сюрприз-доставка',
        'Букети-зізнання',
        'Романтичні набори'
      ]
    },
    {
      id: 5,
      title: 'Вітання',
      description: 'Універсальні букети для будь-якої радісної події',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      icon: 'Gift',
      color: 'from-amber-500/20 to-orange-500/20',
      services: [
        'Поздоровчі букети',
        'Квіти для випускників',
        'Композиції на підвищення',
        'Букети на новосілля',
        'Подяки флористу',
        'Універсальні композиції'
      ]
    },
    {
      id: 6,
      title: 'Співчуття',
      description: 'Виразіть підтримку у важкі моменти',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      icon: 'Flower',
      color: 'from-slate-500/20 to-gray-500/20',
      services: [
        'Траурні композиції',
        'Вінки',
        'Кошики для церемоній',
        'Стрічки з написами',
        'Білі букети',
        'Строгі композиції'
      ]
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Консультація',
      description: 'Обговорюємо ваші побажання, бюджет та деталі події'
    },
    {
      step: 2,
      title: 'Підбір концепції',
      description: 'Створюємо візуалізацію та підбираємо квіти'
    },
    {
      step: 3,
      title: 'Узгодження',
      description: 'Затверджуємо композиції та терміни'
    },
    {
      step: 4,
      title: 'Створення',
      description: 'Наші флористи втілюють проект у життя'
    },
    {
      step: 5,
      title: 'Доставка',
      description: 'Привозимо все точно в строк та встановлюємо'
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
            <h1 className="text-6xl font-serif font-bold text-primary mb-6">Квіти для кожної події</h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Від романтичних побачень до величних весіль — ми створимо ідеальне квіткове оформлення 
              для будь-якого приводу
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {occasions.map((occasion, index) => (
              <Card 
                key={occasion.id} 
                className="overflow-hidden group hover:shadow-2xl transition-all animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t ${occasion.color} to-transparent z-10`} />
                  <img 
                    src={occasion.image} 
                    alt={occasion.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center">
                    <Icon name={occasion.icon as any} size={24} className="text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-2">{occasion.title}</h3>
                  <p className="text-muted-foreground mb-4">{occasion.description}</p>
                  <div className="space-y-2 mb-6">
                    {occasion.services.slice(0, 4).map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>{service}</span>
                      </div>
                    ))}
                    {occasion.services.length > 4 && (
                      <p className="text-xs text-muted-foreground">+ ще {occasion.services.length - 4} послуг</p>
                    )}
                  </div>
                  <Button className="w-full rounded-full">
                    Замовити консультацію
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-4 animate-fade-in">Як ми працюємо</h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-in">
            Від ідеї до реалізації за 5 простих кроків
          </p>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div 
                key={item.step} 
                className="flex gap-6 mb-8 last:mb-0 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-0.5 h-16 bg-primary/20 mx-auto mt-2" />
                  )}
                </div>
                <Card className="p-6 flex-1">
                  <h3 className="text-xl font-serif font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">
                Чому обирають нас для важливих подій?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Досвід більше 6 років</h3>
                    <p className="text-sm text-muted-foreground">
                      Оформили понад 200 весіль та сотні корпоративних подій
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Індивідуальний підхід</h3>
                    <p className="text-sm text-muted-foreground">
                      Кожен проект унікальний, створюємо концепцію під ваш стиль
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Завжди вчасно</h3>
                    <p className="text-sm text-muted-foreground">
                      Гарантуємо доставку та встановлення точно в строк
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Гарантія якості</h3>
                    <p className="text-sm text-muted-foreground">
                      Працюємо тільки зі свіжими квітами преміум класу
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="mt-8 rounded-full px-8">
                Замовити безкоштовну консультацію
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <img 
                src="https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png" 
                alt="Event 1" 
                className="rounded-lg w-full h-64 object-cover"
              />
              <img 
                src="https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png" 
                alt="Event 2" 
                className="rounded-lg w-full h-64 object-cover mt-8"
              />
              <img 
                src="https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png" 
                alt="Event 3" 
                className="rounded-lg w-full h-64 object-cover -mt-8"
              />
              <img 
                src="https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png" 
                alt="Event 4" 
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-6">Плануєте важливу подію?</h2>
            <p className="text-lg mb-8 opacity-90">
              Замовте безкоштовну консультацію з нашим флористом вже сьогодні
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Зателефонувати
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написати
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Occasions;
