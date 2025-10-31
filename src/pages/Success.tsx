import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  const orderDetails = {
    orderNumber: '#FL-2024-10-31-0542',
    date: '31 жовтня 2024, 14:30',
    deliveryTime: '15:00 - 16:00',
    address: 'вул. Хрещатик, 1, кв. 12',
    recipient: 'Марія Коваленко',
    phone: '+380 50 123 4567',
    total: 3210,
    items: [
      { name: 'Рожева мрія', price: 1250, quantity: 1 },
      { name: 'Весняна свіжість', price: 980, quantity: 2 }
    ]
  };

  const nextSteps = [
    {
      icon: 'Mail',
      title: 'Підтвердження на email',
      description: 'Ми відправили деталі замовлення на вашу пошту'
    },
    {
      icon: 'MessageSquare',
      title: 'SMS-повідомлення',
      description: 'Ви отримаєте SMS за 30 хвилин до доставки'
    },
    {
      icon: 'Truck',
      title: 'Доставка',
      description: 'Кур\'єр привезе букет у вказаний час'
    },
    {
      icon: 'Star',
      title: 'Відгук',
      description: 'Поділіться враженнями після отримання'
    }
  ];

  const recommendations = [
    {
      id: 1,
      name: 'Букет "Осінній вальс"',
      price: 1450,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png'
    },
    {
      id: 2,
      name: 'Композиція "Ніжність"',
      price: 1850,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png'
    },
    {
      id: 3,
      name: 'Букет "Романтика"',
      price: 1120,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full -z-10 opacity-20" viewBox="0 0 1200 400">
          <circle cx="600" cy="200" r="300" fill="#E91E63" opacity="0.1" />
          <path d="M0,200 Q300,150 600,200 T1200,200" stroke="#F5A5B8" strokeWidth="2" fill="none"/>
        </svg>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-scale-in">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-float">
              <Icon name="CheckCircle2" size={56} className="text-primary" />
            </div>
            <h1 className="text-5xl font-serif font-bold text-primary mb-4">Дякуємо за замовлення!</h1>
            <p className="text-xl text-foreground/70 mb-8">
              Ваше замовлення успішно оформлене. Ми вже почали готувати букет для вас.
            </p>
            <div className="inline-flex items-center gap-2 bg-muted px-6 py-3 rounded-full">
              <span className="text-sm text-muted-foreground">Номер замовлення:</span>
              <span className="font-mono font-semibold">{orderDetails.orderNumber}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-6 animate-fade-in">
              <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
                <Icon name="Package" size={24} className="text-primary" />
                Деталі замовлення
              </h2>
              <div className="space-y-4">
                <div className="pb-4 border-b">
                  <p className="text-sm text-muted-foreground mb-1">Дата замовлення</p>
                  <p className="font-medium">{orderDetails.date}</p>
                </div>
                <div className="pb-4 border-b">
                  <p className="text-sm text-muted-foreground mb-1">Час доставки</p>
                  <p className="font-medium">{orderDetails.deliveryTime}</p>
                </div>
                <div className="pb-4 border-b">
                  <p className="text-sm text-muted-foreground mb-1">Адреса</p>
                  <p className="font-medium">{orderDetails.address}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Отримувач</p>
                  <p className="font-medium">{orderDetails.recipient}</p>
                  <p className="text-sm text-muted-foreground">{orderDetails.phone}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
                <Icon name="ShoppingBag" size={24} className="text-primary" />
                Ваше замовлення
              </h2>
              <div className="space-y-4 mb-6">
                {orderDetails.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Кількість: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">{item.price * item.quantity} ₴</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xl font-bold pt-4 border-t">
                <span>Разом:</span>
                <span className="text-primary">{orderDetails.total} ₴</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 animate-fade-in">Що далі?</h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {nextSteps.map((step, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-shadow animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-8 max-w-3xl mx-auto mb-12 bg-gradient-to-br from-primary/5 to-background animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Sparkles" size={32} className="text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-serif font-bold mb-2">Підпишіться на розсилку</h3>
                <p className="text-muted-foreground">
                  Отримуйте знижки 10% на день народження та ексклюзивні пропозиції
                </p>
              </div>
              <Button className="rounded-full px-8 flex-shrink-0">
                Підписатись
              </Button>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button size="lg" onClick={() => navigate('/')} className="rounded-full px-8">
              <Icon name="Home" size={20} className="mr-2" />
              На головну
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/catalog')} className="rounded-full px-8">
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Продовжити покупки
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-4 animate-fade-in">
            Вам також може сподобатись
          </h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-in">
            Букети, які обирають наші клієнти
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {recommendations.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden group hover:shadow-xl transition-all cursor-pointer animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price} ₴</span>
                    <Button size="sm" className="rounded-full">
                      Замовити
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Icon name="Heart" size={48} className="text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-3xl font-serif font-bold mb-4">Потрібна допомога?</h2>
            <p className="text-foreground/70 mb-8">
              Якщо у вас виникли питання щодо замовлення, зв'яжіться з нами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                +380 44 123 4567
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написати в чат
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;
