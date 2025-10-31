import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
    'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
    'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
    'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png'
  ];

  const relatedProducts = [
    { id: 1, name: 'Весняна свіжість', price: 980, image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png' },
    { id: 2, name: 'Елегантна композиція', price: 1850, image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png' },
    { id: 3, name: 'Романтичний шарм', price: 1450, image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <svg className="absolute top-0 right-0 w-96 h-96 -z-10 opacity-20" viewBox="0 0 400 400">
        <path d="M0,100 Q100,50 200,100 T400,100" stroke="#E91E63" strokeWidth="2" fill="none"/>
        <path d="M0,200 Q150,150 300,200 T400,200" stroke="#F5A5B8" strokeWidth="1.5" fill="none"/>
      </svg>

      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Назад до каталогу
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4 animate-fade-in">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted/30">
              <img 
                src={images[selectedImage]} 
                alt="Product" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-primary scale-105' : 'border-transparent hover:border-primary/50'
                  }`}
                >
                  <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
            <Badge className="mb-4">Бестселер</Badge>
            <h1 className="text-5xl font-serif font-bold text-primary mb-4">Рожева мрія</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="fill-primary text-primary" />
                ))}
              </div>
              <span className="text-muted-foreground">(127 відгуків)</span>
            </div>

            <p className="text-3xl font-bold text-primary mb-8">1,250 ₴</p>

            <p className="text-foreground/70 leading-relaxed mb-8">
              Ніжний букет з рожевих піонів та евкаліпту. Ідеальний вибір для романтичних привітань, 
              днів народження або просто як знак уваги. Кожна квітка ретельно відібрана нашими флористами 
              для створення гармонійної композиції.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Icon name="Flower2" size={24} className="text-primary" />
                <span>Склад: 7 рожевих піонів, евкаліпт, декоративна зелень</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Ruler" size={24} className="text-primary" />
                <span>Висота: 45-50 см</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={24} className="text-primary" />
                <span>Свіжість гарантована: 7-10 днів</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Gift" size={24} className="text-primary" />
                <span>Подарункова упаковка включена</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border rounded-full">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-full"
                >
                  <Icon name="Minus" size={18} />
                </Button>
                <span className="px-6 font-semibold">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-full"
                >
                  <Icon name="Plus" size={18} />
                </Button>
              </div>
              <Button size="lg" className="flex-1 rounded-full">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Додати до кошика
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                <Icon name="Heart" size={20} />
              </Button>
            </div>

            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Опис</TabsTrigger>
                <TabsTrigger value="delivery">Доставка</TabsTrigger>
                <TabsTrigger value="care">Догляд</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-6 text-foreground/70">
                <p className="leading-relaxed">
                  Букет "Рожева мрія" створений для тих, хто цінує витончену красу та ніжність. 
                  Піони символізують щастя та процвітання, а евкаліпт додає свіжості та аромату. 
                  Ця композиція ідеально підходить для висловлення найтепліших почуттів.
                </p>
              </TabsContent>
              <TabsContent value="delivery" className="mt-6 text-foreground/70">
                <p className="leading-relaxed">
                  Доставка протягом 2-4 годин по Києву. Безкоштовна доставка при замовленні від 800 ₴. 
                  Можлива доставка у визначений час. Букет упакований у подарункову коробку з листівкою.
                </p>
              </TabsContent>
              <TabsContent value="care" className="mt-6 text-foreground/70">
                <p className="leading-relaxed">
                  Підрізайте стебла під кутом кожні 2 дні. Змінюйте воду щодня. Уникайте прямих сонячних променів 
                  та опалювальних приладів. Тримайте букет у прохолодному місці для максимальної свіжості.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 animate-fade-in">Схожі букети</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
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
                  <p className="text-2xl font-bold text-primary">{product.price} ₴</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
