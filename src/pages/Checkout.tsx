import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const [deliveryType, setDeliveryType] = useState('courier');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const cartItems = [
    { id: 1, name: 'Рожева мрія', price: 1250, quantity: 1, image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png' },
    { id: 2, name: 'Весняна свіжість', price: 980, quantity: 2, image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png' }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = deliveryType === 'courier' ? 150 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-muted/20">
      <svg className="absolute top-0 left-0 w-full h-64 -z-10 opacity-20" viewBox="0 0 1200 200">
        <path d="M0,100 Q300,50 600,100 T1200,100" stroke="#E91E63" strokeWidth="2" fill="none"/>
      </svg>

      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Повернутись до кошика
        </Button>

        <h1 className="text-5xl font-serif font-bold text-center text-primary mb-12 animate-fade-in">
          Оформлення замовлення
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 animate-fade-in">
              <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                Контактні дані
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Ім'я *</Label>
                  <Input id="name" placeholder="Олена" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="surname">Прізвище *</Label>
                  <Input id="surname" placeholder="Коваленко" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input id="phone" placeholder="+380 XX XXX XX XX" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@email.com" className="mt-2" />
                </div>
              </div>
            </Card>

            <Card className="p-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                Спосіб доставки
              </h2>
              <RadioGroup value={deliveryType} onValueChange={setDeliveryType}>
                <div className="flex items-start space-x-3 p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value="courier" id="courier" />
                  <div className="flex-1">
                    <Label htmlFor="courier" className="cursor-pointer font-semibold">
                      Кур'єрська доставка
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Доставка протягом 2-4 годин по Києву (150 ₴)
                    </p>
                  </div>
                  <Icon name="Truck" size={24} className="text-primary" />
                </div>

                <div className="flex items-start space-x-3 p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer mt-4">
                  <RadioGroupItem value="pickup" id="pickup" />
                  <div className="flex-1">
                    <Label htmlFor="pickup" className="cursor-pointer font-semibold">
                      Самовивіз
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      З нашого магазину за адресою: вул. Квіткова, 15 (безкоштовно)
                    </p>
                  </div>
                  <Icon name="Store" size={24} className="text-primary" />
                </div>
              </RadioGroup>

              {deliveryType === 'courier' && (
                <div className="mt-6 space-y-4 animate-fade-in">
                  <div>
                    <Label htmlFor="address">Адреса доставки *</Label>
                    <Input id="address" placeholder="вул. Хрещатик, 1" className="mt-2" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="apartment">Квартира/офіс</Label>
                      <Input id="apartment" placeholder="12" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="entrance">Під'їзд</Label>
                      <Input id="entrance" placeholder="3" className="mt-2" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="deliveryTime">Бажаний час доставки</Label>
                    <Input id="deliveryTime" type="time" className="mt-2" />
                  </div>
                </div>
              )}
            </Card>

            <Card className="p-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                Отримувач (якщо не ви)
              </h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="recipientName">Ім'я отримувача</Label>
                    <Input id="recipientName" placeholder="Марія" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="recipientPhone">Телефон отримувача</Label>
                    <Input id="recipientPhone" placeholder="+380 XX XXX XX XX" className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cardMessage">Текст листівки</Label>
                  <Textarea 
                    id="cardMessage" 
                    placeholder="Напишіть побажання для отримувача..."
                    className="mt-2 min-h-[100px]"
                  />
                  <p className="text-xs text-muted-foreground mt-2">До 200 символів</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  4
                </div>
                Спосіб оплати
              </h2>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-start space-x-3 p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value="card" id="card" />
                  <div className="flex-1">
                    <Label htmlFor="card" className="cursor-pointer font-semibold">
                      Картка онлайн
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">Visa, Mastercard</p>
                  </div>
                  <Icon name="CreditCard" size={24} className="text-primary" />
                </div>

                <div className="flex items-start space-x-3 p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer mt-4">
                  <RadioGroupItem value="cash" id="cash" />
                  <div className="flex-1">
                    <Label htmlFor="cash" className="cursor-pointer font-semibold">
                      Готівкою при отриманні
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">Оплата кур'єру</p>
                  </div>
                  <Icon name="Wallet" size={24} className="text-primary" />
                </div>
              </RadioGroup>
            </Card>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm cursor-pointer">
                Я погоджуюсь з <span className="text-primary underline">умовами обробки персональних даних</span>
              </Label>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-8 animate-scale-in">
              <h2 className="text-2xl font-serif font-semibold mb-6">Ваше замовлення</h2>
              
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-4 border-b">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">Кількість: {item.quantity}</p>
                      <p className="text-sm font-semibold text-primary">{item.price * item.quantity} ₴</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 py-4 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Товари</span>
                  <span className="font-medium">{subtotal} ₴</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Доставка</span>
                  <span className="font-medium">{deliveryFee > 0 ? `${deliveryFee} ₴` : 'Безкоштовно'}</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold pt-4 border-t mb-6">
                <span>Разом:</span>
                <span className="text-primary">{total} ₴</span>
              </div>

              <Button className="w-full" size="lg">
                Оформити замовлення
              </Button>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Shield" size={16} className="text-primary" />
                  <span>Безпечна оплата</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Truck" size={16} className="text-primary" />
                  <span>Швидка доставка</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Gift" size={16} className="text-primary" />
                  <span>Подарункова упаковка</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
