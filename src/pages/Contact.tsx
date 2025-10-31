import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+380 44 123 4567',
      description: 'Пн-Нд: 09:00 - 21:00'
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'hello@fleur.ua',
      description: 'Відповімо протягом 2 годин'
    },
    {
      icon: 'MapPin',
      title: 'Адреса',
      content: 'вул. Квіткова, 15',
      description: 'Київ, Україна'
    }
  ];

  const workingHours = [
    { day: 'Понеділок - П\'ятниця', hours: '09:00 - 21:00' },
    { day: 'Субота', hours: '10:00 - 20:00' },
    { day: 'Неділя', hours: '10:00 - 19:00' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'Instagram', link: '#' },
    { name: 'Facebook', icon: 'Facebook', link: '#' },
    { name: 'Telegram', icon: 'Send', link: '#' }
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
            <h1 className="text-6xl font-serif font-bold text-primary mb-6">Зв'яжіться з нами</h1>
            <p className="text-xl text-foreground/70">
              Ми завжди раді допомогти вам обрати ідеальний букет або відповісти на ваші запитання
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-lg transition-shadow animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={info.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{info.title}</h3>
                <p className="text-lg font-medium mb-1">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 animate-fade-in">
              <h2 className="text-3xl font-serif font-bold mb-6">Напишіть нам</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Ім'я *</Label>
                    <Input id="firstName" placeholder="Олена" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Прізвище</Label>
                    <Input id="lastName" placeholder="Коваленко" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="example@email.com" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input id="phone" placeholder="+380 XX XXX XX XX" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="subject">Тема звернення</Label>
                  <Input id="subject" placeholder="Консультація щодо букета" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="message">Повідомлення *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Розкажіть нам, чим ми можемо допомогти..."
                    className="mt-2 min-h-[150px]"
                  />
                </div>

                <Button className="w-full rounded-full" size="lg">
                  Відправити повідомлення
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
                <h3 className="text-2xl font-serif font-bold mb-6">Графік роботи</h3>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-primary font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <h3 className="text-2xl font-serif font-bold mb-6">Ми в соцмережах</h3>
                <p className="text-muted-foreground mb-6">
                  Слідкуйте за нашими новинками та отримуйте натхнення щодня
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
                    >
                      <Icon name={social.icon as any} size={24} />
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <h3 className="text-2xl font-serif font-bold mb-6">Швидкі запитання?</h3>
                <p className="text-muted-foreground mb-4">
                  Зателефонуйте нам прямо зараз або напишіть у месенджер
                </p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start rounded-full" size="lg">
                    <Icon name="Phone" size={20} className="mr-3" />
                    Передзвонити
                  </Button>
                  <Button variant="outline" className="w-full justify-start rounded-full" size="lg">
                    <Icon name="MessageCircle" size={20} className="mr-3" />
                    Написати в Telegram
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 animate-fade-in">Як нас знайти</h2>
          <Card className="overflow-hidden animate-scale-in">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Інтерактивна карта</p>
                <p className="text-sm text-muted-foreground">вул. Квіткова, 15, Київ</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-background animate-fade-in">
            <Icon name="Flower2" size={48} className="text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-3xl font-serif font-bold mb-4">Чекаємо на ваш візит!</h2>
            <p className="text-foreground/70 leading-relaxed">
              Завітайте до нашого магазину, щоб побачити всю красу наших композицій на власні очі. 
              Наші флористи з радістю допоможуть вам обрати ідеальний букет та розкажуть про догляд за квітами.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
