import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const About = () => {
  const team = [
    {
      id: 1,
      name: 'Олена Петренко',
      role: 'Головний флорист',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      description: '15 років досвіду у флористиці'
    },
    {
      id: 2,
      name: 'Марія Коваль',
      role: 'Дизайнер композицій',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      description: 'Спеціаліст з весільного декору'
    },
    {
      id: 3,
      name: 'Ірина Сидоренко',
      role: 'Флорист-декоратор',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      description: 'Майстер екзотичних композицій'
    }
  ];

  const values = [
    {
      icon: 'Flower2',
      title: 'Свіжість',
      description: 'Працюємо тільки зі свіжими квітами від перевірених постачальників'
    },
    {
      icon: 'Heart',
      title: 'Любов до справи',
      description: 'Кожна композиція створюється з душею та увагою до деталей'
    },
    {
      icon: 'Users',
      title: 'Клієнтоорієнтованість',
      description: 'Індивідуальний підхід до кожного замовлення та побажання'
    },
    {
      icon: 'Award',
      title: 'Професіоналізм',
      description: 'Наша команда — це досвідчені флористи з міжнародними сертифікатами'
    }
  ];

  const achievements = [
    { number: '2018', label: 'Рік заснування' },
    { number: '5000+', label: 'Щасливих клієнтів' },
    { number: '200+', label: 'Весіль прикрашено' },
    { number: '4.9', label: 'Рейтинг' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 overflow-hidden">
        <svg className="absolute top-0 right-0 w-full h-full -z-10 opacity-20" viewBox="0 0 1200 800">
          <path d="M0,200 Q300,150 600,200 T1200,200" stroke="#E91E63" strokeWidth="2" fill="none"/>
          <path d="M0,400 Q400,350 800,400 T1200,400" stroke="#F5A5B8" strokeWidth="1.5" fill="none"/>
        </svg>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl font-serif font-bold text-primary mb-6">Про нас</h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              FLEUR — це не просто квітковий магазин. Це місце, де народжуються емоції, 
              створюються спогади та втілюються мрії у вигляді прекрасних флористичних композицій.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png" 
                alt="Our story" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Наша історія</h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Все почалося з маленької майстерні у центрі Києва у 2018 році. 
                  Олена Петренко, засновниця FLEUR, мріяла створити місце, де кожна людина 
                  зможе знайти ідеальний букет для висловлення своїх почуттів.
                </p>
                <p>
                  За шість років ми виросли з невеликої студії у популярну квіткову майстерню 
                  з командою талановитих флористів. Наші композиції прикрашають найважливіші 
                  моменти життя тисяч людей — від романтичних побачень до розкішних весіль.
                </p>
                <p>
                  Сьогодні FLEUR — це синонім якості, стилю та індивідуального підходу. 
                  Ми продовжуємо розвиватися, але залишаємося вірними нашій місії — 
                  дарувати емоції через мову квітів.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center text-primary mb-4 animate-fade-in">
            Наші цінності
          </h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-in">
            Принципи, якими ми керуємось у роботі
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-shadow animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-5xl font-serif font-bold mb-2">{achievement.number}</div>
                <div className="text-primary-foreground/80">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center text-primary mb-4 animate-fade-in">
            Наша команда
          </h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-in">
            Талановиті флористи, які творять красу
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.id} 
                className="overflow-hidden group hover:shadow-xl transition-shadow animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">
              Готові створити щось особливе?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Дозвольте нам допомогти вам висловити ваші емоції через прекрасні квіти
            </p>
            <Button size="lg" className="rounded-full px-8">
              Замовити консультацію
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
