import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Subscriptions = () => {
  const plans = [
    {
      id: 1,
      name: 'Стартовий',
      price: 799,
      frequency: 'на місяць',
      popular: false,
      features: [
        '1 букет на місяць',
        'Доставка по Києву',
        'Базовий вибір квітів',
        'Стандартна упаковка',
        'Можливість пропустити місяць'
      ],
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png'
    },
    {
      id: 2,
      name: 'Преміум',
      price: 1499,
      frequency: 'на місяць',
      popular: true,
      features: [
        '2 букети на місяць',
        'Безкоштовна доставка',
        'Преміум квіти',
        'Дизайнерська упаковка',
        'Персональний флорист',
        'Вибір дати доставки',
        '-10% на додаткові замовлення'
      ],
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png'
    },
    {
      id: 3,
      name: 'Розкіш',
      price: 2999,
      frequency: 'на місяць',
      popular: false,
      features: [
        '4 букети на місяць',
        'Безкоштовна доставка',
        'Ексклюзивні квіти',
        'Авторська упаковка',
        'Особистий флорист 24/7',
        'Доставка у будь-який час',
        '-20% на всі замовлення',
        'Пріоритетне обслуговування'
      ],
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png'
    }
  ];

  const benefits = [
    {
      icon: 'Calendar',
      title: 'Регулярність',
      description: 'Квіти завжди вчасно, без зайвих зусиль'
    },
    {
      icon: 'Sparkles',
      title: 'Завжди свіже',
      description: 'Нові композиції кожного місяця'
    },
    {
      icon: 'TrendingDown',
      title: 'Економія',
      description: 'До 30% вигідніше разових покупок'
    },
    {
      icon: 'Gift',
      title: 'Бонуси',
      description: 'Спеціальні пропозиції для підписників'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Олена Кравченко',
      text: 'Підписка Преміум змінила мій дім! Тепер завжди маю свіжі квіти, а флорист підбирає букети під мій інтер\'єр.',
      plan: 'Преміум',
      rating: 5
    },
    {
      id: 2,
      name: 'Андрій Мельник',
      text: 'Дарую дружині підписку вже рік. Вона в захваті від кожного букета. Чудовий спосіб показати турботу!',
      plan: 'Розкіш',
      rating: 5
    },
    {
      id: 3,
      name: 'Марина Петренко',
      text: 'Стартовий план ідеально підійшов для мого офісу. Завжди є свіжі квіти, і це дуже підіймає настрій команді.',
      plan: 'Стартовий',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <svg className="absolute top-0 left-0 w-full h-full -z-10 opacity-20" viewBox="0 0 1200 400">
          <path d="M0,100 Q300,50 600,100 T1200,100" stroke="#E91E63" strokeWidth="2" fill="none"/>
          <path d="M0,250 Q400,200 800,250 T1200,250" stroke="#F5A5B8" strokeWidth="1.5" fill="none"/>
        </svg>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl font-serif font-bold text-primary mb-6">Квіткова підписка</h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Насолоджуйтесь свіжими букетами кожного місяця. Оберіть план, який підходить саме вам, 
              і забудьте про турботи — ми подбаємо про все інше.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-shadow animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>

          <h2 className="text-4xl font-serif font-bold text-center mb-12 animate-fade-in">Оберіть свій план</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={plan.id} 
                className={`overflow-hidden hover:shadow-2xl transition-all animate-scale-in ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 font-semibold">
                    Найпопулярніший
                  </div>
                )}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={plan.image} 
                    alt={plan.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-serif font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{plan.price} ₴</span>
                    <span className="text-muted-foreground ml-2">{plan.frequency}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full rounded-full ${plan.popular ? '' : 'variant-outline'}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    Оформити підписку
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-4 animate-fade-in">Як це працює</h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-in">Простий процес від підписки до доставки</p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Оберіть план', description: 'Виберіть підписку, яка підходить вам' },
              { step: '2', title: 'Налаштуйте', description: 'Вкажіть вподобання та адресу доставки' },
              { step: '3', title: 'Розслабтесь', description: 'Ми створюємо унікальні букети для вас' },
              { step: '4', title: 'Насолоджуйтесь', description: 'Отримуйте свіжі квіти регулярно' }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 animate-fade-in">Відгуки підписників</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="p-6 hover:shadow-lg transition-shadow animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">План: {testimonial.plan}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-6">Готові почати?</h2>
            <p className="text-lg mb-8 opacity-90">
              Перший місяць зі знижкою 20% для нових підписників
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full px-8">
                Оформити підписку
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Дізнатись більше
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscriptions;
