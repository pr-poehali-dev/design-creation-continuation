import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = [
    { value: 'all', label: 'Всі роботи' },
    { value: 'wedding', label: 'Весілля' },
    { value: 'bouquet', label: 'Букети' },
    { value: 'corporate', label: 'Корпоративи' },
    { value: 'decor', label: 'Декор' }
  ];

  const galleryItems = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      category: 'wedding',
      title: 'Весільна церемонія "Рожевий сад"',
      description: 'Романтичне оформлення літньої церемонії',
      likes: 234
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      category: 'bouquet',
      title: 'Авторський букет "Захід сонця"',
      description: 'Композиція в теплих осінніх тонах',
      likes: 189
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      category: 'corporate',
      title: 'Корпоративна подія TechCorp',
      description: 'Мінімалістичне оформлення офісного простору',
      likes: 156
    },
    {
      id: 4,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      category: 'decor',
      title: 'Квіткова інсталяція для ресторану',
      description: 'Вертикальний сад з живих квітів',
      likes: 278
    },
    {
      id: 5,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      category: 'wedding',
      title: 'Букет нареченої "Білосніжка"',
      description: 'Класичний білий букет з пивоніями',
      likes: 312
    },
    {
      id: 6,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      category: 'bouquet',
      title: 'Букет "Польова мрія"',
      description: 'Натуральна композиція з польових квітів',
      likes: 201
    },
    {
      id: 7,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      category: 'wedding',
      title: 'Квіткова арка "Едем"',
      description: 'Розкішна арка для виїзної церемонії',
      likes: 445
    },
    {
      id: 8,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      category: 'decor',
      title: 'Настільні композиції для банкету',
      description: 'Низькі композиції для святкового столу',
      likes: 167
    },
    {
      id: 9,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      category: 'bouquet',
      title: 'Букет "Тропічний рай"',
      description: 'Екзотичні квіти та зелень',
      likes: 223
    },
    {
      id: 10,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      category: 'corporate',
      title: 'Оформлення прес-конференції',
      description: 'Елегантне оформлення медіа події',
      likes: 134
    },
    {
      id: 11,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      category: 'wedding',
      title: 'Президіум молодят',
      description: 'Розкішне оформлення головного столу',
      likes: 389
    },
    {
      id: 12,
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      category: 'decor',
      title: 'Входна зона ресторану',
      description: 'Вітальна квіткова композиція',
      likes: 198
    }
  ];

  const filteredItems = galleryItems.filter(
    item => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <svg className="absolute top-0 left-0 w-full h-full -z-10 opacity-20" viewBox="0 0 1200 400">
          <path d="M0,100 Q300,50 600,100 T1200,100" stroke="#E91E63" strokeWidth="2" fill="none"/>
          <path d="M0,250 Q400,200 800,250 T1200,250" stroke="#F5A5B8" strokeWidth="1.5" fill="none"/>
        </svg>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl font-serif font-bold text-primary mb-6">Наші роботи</h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Портфоліо виконаних проектів — від ніжних букетів до масштабних івент-інсталяцій
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 border-b sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center animate-fade-in">
            {categories.map(cat => (
              <Button
                key={cat.value}
                variant={selectedCategory === cat.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.value)}
                className="rounded-full"
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden group hover:shadow-2xl transition-all cursor-pointer animate-scale-in"
                style={{animationDelay: `${index * 0.05}s`}}
                onClick={() => setLightboxImage(item.image)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <h3 className="font-serif text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-4 right-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxImage(item.image);
                    }}
                  >
                    <Icon name="Maximize2" size={18} />
                  </Button>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <Badge variant="secondary">{categories.find(c => c.value === item.category)?.label}</Badge>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Icon name="Heart" size={16} />
                    <span className="text-sm">{item.likes}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-4 right-4 rounded-full"
            onClick={() => setLightboxImage(null)}
          >
            <Icon name="X" size={24} />
          </Button>
          <img 
            src={lightboxImage} 
            alt="Lightbox" 
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Icon name="Sparkles" size={48} className="text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-4xl font-serif font-bold mb-6">Хочете так само?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Замовте консультацію, і ми створимо унікальний проект спеціально для вас
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

export default Gallery;
