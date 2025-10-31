import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedOccasion, setSelectedOccasion] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Рожева мрія',
      category: 'bouquet',
      occasion: 'birthday',
      price: 1250,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      description: 'Ніжний букет з рожевих піонів та евкаліпту'
    },
    {
      id: 2,
      name: 'Весняна свіжість',
      category: 'bouquet',
      occasion: 'romance',
      price: 980,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      description: 'Букет з білих тюльпанів та рожевих троянд'
    },
    {
      id: 3,
      name: 'Елегантна композиція',
      category: 'composition',
      occasion: 'congratulations',
      price: 1850,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      description: 'Вишукана флористична композиція в кошику'
    },
    {
      id: 4,
      name: 'Гортензія в горщику',
      category: 'potted',
      occasion: 'all',
      price: 650,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      description: 'Жива гортензія рожевого відтінку'
    },
    {
      id: 5,
      name: 'Романтичний шарм',
      category: 'bouquet',
      occasion: 'romance',
      price: 1450,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      description: 'Червоні троянди з білими акцентами'
    },
    {
      id: 6,
      name: 'Осінні фарби',
      category: 'composition',
      occasion: 'thanksgiving',
      price: 1120,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      description: 'Композиція в теплих осінніх тонах'
    }
  ];

  const categories = [
    { value: 'all', label: 'Усі квіти' },
    { value: 'bouquet', label: 'Букети' },
    { value: 'composition', label: 'Композиції' },
    { value: 'potted', label: 'В горщиках' }
  ];

  const occasions = [
    { value: 'all', label: 'Всі приводи' },
    { value: 'birthday', label: 'День народження' },
    { value: 'romance', label: 'Романтика' },
    { value: 'congratulations', label: 'Привітання' },
    { value: 'thanksgiving', label: 'Подяка' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Як зберегти свіжість букета надовго',
      date: '15 жовтня 2024',
      excerpt: 'Прості поради, які допоможуть вашим квітам залишатися красивими тиждень і більше.',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png'
    },
    {
      id: 2,
      title: 'Мова квітів: що означає кожна троянда',
      date: '10 жовтня 2024',
      excerpt: 'Дізнайтеся про символіку різних квітів та їх значення в букетах.',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png'
    },
    {
      id: 3,
      title: 'Сезонні квіти: що обрати восени',
      date: '5 жовтня 2024',
      excerpt: 'Огляд найкращих осінніх квітів для ваших букетів та композицій.',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Олена Коваленко',
      rating: 5,
      text: 'Неймовірно красиві квіти! Замовила букет на день народження мами - вона в захваті. Доставка вчасно, квіти свіжі.',
      date: '28 жовтня 2024'
    },
    {
      id: 2,
      name: 'Михайло Петренко',
      rating: 5,
      text: 'Вже не перший раз замовляю тут букети для дружини. Завжди оригінальні композиції та чудовий сервіс!',
      date: '22 жовтня 2024'
    },
    {
      id: 3,
      name: 'Ірина Шевченко',
      rating: 5,
      text: 'Замовляла декор для весілля - результат перевершив усі очікування! Професійний підхід та увага до деталей.',
      date: '15 жовтня 2024'
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const occasionMatch = selectedOccasion === 'all' || product.occasion === selectedOccasion;
    return categoryMatch && occasionMatch;
  });

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen">
      <svg className="absolute top-0 left-0 w-full h-96 -z-10 opacity-30" viewBox="0 0 1200 400" preserveAspectRatio="none">
        <path d="M0,100 Q300,50 600,100 T1200,100 L1200,0 L0,0 Z" fill="#F5A5B8" opacity="0.3"/>
        <path d="M0,200 Q400,150 800,200 T1200,200" stroke="#E91E63" strokeWidth="2" fill="none" opacity="0.5"/>
      </svg>

      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg width="40" height="40" viewBox="0 0 40 40" className="animate-float">
                <path d="M20 5 L25 15 L20 35 L15 15 Z" fill="#E91E63" opacity="0.8"/>
                <ellipse cx="20" cy="15" rx="8" ry="5" fill="#F5A5B8"/>
              </svg>
              <span className="text-2xl font-serif font-bold text-primary">FLEUR</span>
            </div>
            
            <div className="hidden md:flex gap-8">
              <a href="#catalog" className="text-foreground/80 hover:text-primary transition-colors">Колекція</a>
              <a href="#delivery" className="text-foreground/80 hover:text-primary transition-colors">Доставка</a>
              <a href="#reviews" className="text-foreground/80 hover:text-primary transition-colors">Відгуки</a>
              <a href="#blog" className="text-foreground/80 hover:text-primary transition-colors">Блог</a>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="relative">
                  <Icon name="ShoppingBag" size={20} />
                  {cart.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
                      {cart.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-serif text-2xl">Ваш кошик</SheetTitle>
                </SheetHeader>
                <div className="mt-8 space-y-4">
                  {cart.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">Кошик порожній</p>
                  ) : (
                    <>
                      {cart.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 pb-4 border-b">
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-primary font-semibold">{item.price} ₴</p>
                          </div>
                          <Button variant="ghost" size="sm" onClick={() => removeFromCart(index)}>
                            <Icon name="X" size={16} />
                          </Button>
                        </div>
                      ))}
                      <div className="pt-4 space-y-4">
                        <div className="flex justify-between text-lg font-semibold">
                          <span>Разом:</span>
                          <span className="text-primary">{totalPrice} ₴</span>
                        </div>
                        <Button className="w-full" size="lg">
                          Оформити замовлення
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-primary mb-6 leading-tight">
              Говоріть на мові квітів
            </h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Ми створаєм емоції, які ви можете дарувати. Даруйте не квіти, а цілу історію — вашу історію любові, захоплення або турботи.
            </p>
            <Button size="lg" className="rounded-full px-8">
              Переглянути каталог
            </Button>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png" 
            alt="Flowers" 
            className="w-full h-full object-contain animate-float"
          />
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-serif font-bold text-center mb-4 animate-fade-in">Наша колекція</h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-in">Оберіть ідеальний букет для будь-якого приводу</p>
          
          <Tabs defaultValue="all" className="mb-12 animate-scale-in">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 gap-2 bg-transparent">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat.value} 
                  value={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in">
            {occasions.map(occ => (
              <Button
                key={occ.value}
                variant={selectedOccasion === occ.value ? "default" : "outline"}
                onClick={() => setSelectedOccasion(occ.value)}
                className="rounded-full"
              >
                {occ.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card key={product.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price} ₴</span>
                    <Button onClick={() => addToCart(product)} className="rounded-full">
                      <Icon name="ShoppingBag" size={18} className="mr-2" />
                      До кошика
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-serif font-bold text-center mb-16 animate-fade-in">Доставка та умови</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Швидка доставка</h3>
              <p className="text-muted-foreground">Доставка протягом 2-4 годин по місту. Точний час за домовленістю.</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Гарантія свіжості</h3>
              <p className="text-muted-foreground">Ми гарантуємо свіжість квітів мінімум 5-7 днів при правильному догляді.</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Gift" size={32} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Подарункова упаковка</h3>
              <p className="text-muted-foreground">Кожен букет упаковується в дизайнерський папір з листівкою.</p>
            </Card>
          </div>

          <Card className="p-8 animate-fade-in">
            <h3 className="font-serif text-2xl font-semibold mb-6">Зони доставки</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">Київ (центр)</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-2">Безкоштовна доставка при замовленні від 800 ₴</p>
                  <p>Вартість доставки: 150 ₴</p>
                  <p>Час доставки: 2-3 години</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">Київ (райони)</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-2">Безкоштовна доставка при замовленні від 1200 ₴</p>
                  <p>Вартість доставки: 200 ₴</p>
                  <p>Час доставки: 3-4 години</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">Передмістя Києва</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-2">Безкоштовна доставка при замовленні від 1500 ₴</p>
                  <p>Вартість доставки: 300 ₴</p>
                  <p>Час доставки: 4-6 годин (за домовленістю)</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-serif font-bold text-center mb-4 animate-fade-in">Відгуки клієнтів</h2>
          <p className="text-center text-muted-foreground mb-16 animate-fade-in">Історії тих, хто обрав FLEUR</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">{review.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-serif font-bold text-center mb-4 animate-fade-in">Блог про квіти</h2>
          <p className="text-center text-muted-foreground mb-16 animate-fade-in">Поради та ідеї від наших флористів</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                  <h3 className="font-serif text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Читати далі <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg width="32" height="32" viewBox="0 0 40 40">
                  <path d="M20 5 L25 15 L20 35 L15 15 Z" fill="currentColor" opacity="0.8"/>
                  <ellipse cx="20" cy="15" rx="8" ry="5" fill="currentColor" opacity="0.5"/>
                </svg>
                <span className="text-xl font-serif font-bold">FLEUR</span>
              </div>
              <p className="text-sm opacity-80">Мова квітів у вашому серці</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакти</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +380 44 123 4567
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  hello@fleur.ua
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Київ, вул. Квіткова, 15
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Інформація</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>Про нас</p>
                <p>Доставка та оплата</p>
                <p>Гарантії</p>
                <p>Контакти</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ми в соцмережах</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center cursor-pointer hover:bg-background/20 transition-colors">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center cursor-pointer hover:bg-background/20 transition-colors">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center cursor-pointer hover:bg-background/20 transition-colors">
                  <Icon name="Send" size={20} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 FLEUR. Усі права захищено.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
