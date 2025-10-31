import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'Всі статті' },
    { value: 'care', label: 'Догляд' },
    { value: 'trends', label: 'Тренди' },
    { value: 'occasions', label: 'Події' },
    { value: 'diy', label: 'Майстер-класи' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Як зберегти свіжість букета надовго',
      category: 'care',
      date: '15 жовтня 2024',
      readTime: '5 хв',
      excerpt: 'Прості поради, які допоможуть вашим квітам залишатися красивими тиждень і більше. Правильний догляд — запорука довговічності.',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      author: 'Олена Петренко'
    },
    {
      id: 2,
      title: 'Мова квітів: що означає кожна троянда',
      category: 'occasions',
      date: '10 жовтня 2024',
      readTime: '7 хв',
      excerpt: 'Дізнайтеся про символіку різних квітів та їх значення в букетах. Від червоних троянд до білих лілій.',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      author: 'Марія Коваль'
    },
    {
      id: 3,
      title: 'Сезонні квіти: що обрати восени',
      category: 'trends',
      date: '5 жовтня 2024',
      readTime: '6 хв',
      excerpt: 'Огляд найкращих осінніх квітів для ваших букетів та композицій. Теплі відтінки та текстури.',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      author: 'Ірина Сидоренко'
    },
    {
      id: 4,
      title: 'Створюємо букет своїми руками',
      category: 'diy',
      date: '1 жовтня 2024',
      readTime: '10 хв',
      excerpt: 'Покроковий майстер-клас зі створення елегантного букета в домашніх умовах для початківців.',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      author: 'Олена Петренко'
    },
    {
      id: 5,
      title: 'Весільна флористика 2024: топ-5 трендів',
      category: 'trends',
      date: '25 вересня 2024',
      readTime: '8 хв',
      excerpt: 'Найактуальніші тренди весільної флористики цього року. Від мінімалізму до буйства фарб.',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      author: 'Марія Коваль'
    },
    {
      id: 6,
      title: 'Квіти для дому: створюємо затишок',
      category: 'care',
      date: '20 вересня 2024',
      readTime: '6 хв',
      excerpt: 'Як обрати кімнатні рослини та квіти, які створять атмосферу тепла у вашій оселі.',
      image: 'https://cdn.poehali.dev/files/2560f57f-9e0e-4134-b7ce-e826b03db9d8.png',
      author: 'Ірина Сидоренко'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <svg className="absolute top-0 left-0 w-full h-full -z-10 opacity-20" viewBox="0 0 1200 400">
          <path d="M0,100 Q300,50 600,100 T1200,100" stroke="#E91E63" strokeWidth="2" fill="none"/>
          <path d="M0,200 Q400,150 800,200 T1200,200" stroke="#F5A5B8" strokeWidth="1.5" fill="none"/>
        </svg>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl font-serif font-bold text-primary mb-6">Блог про квіти</h1>
            <p className="text-xl text-foreground/70 mb-8">
              Поради, ідеї та натхнення від наших флористів
            </p>

            <div className="relative max-w-xl mx-auto">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Шукати статті..." 
                className="pl-12 pr-4 h-12 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-b">
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
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground">Статей не знайдено</p>
            </div>
          ) : (
            <>
              <Card className="overflow-hidden mb-12 animate-fade-in hover:shadow-2xl transition-shadow">
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto overflow-hidden">
                    <img 
                      src={filteredPosts[0].image} 
                      alt={filteredPosts[0].title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-4">Рекомендуємо</Badge>
                    <h2 className="text-4xl font-serif font-bold mb-4">{filteredPosts[0].title}</h2>
                    <p className="text-foreground/70 mb-6 leading-relaxed">{filteredPosts[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <Icon name="User" size={16} />
                        <span>{filteredPosts[0].author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} />
                        <span>{filteredPosts[0].date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} />
                        <span>{filteredPosts[0].readTime}</span>
                      </div>
                    </div>
                    <Button className="w-fit rounded-full">
                      Читати статтю <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post, index) => (
                  <Card 
                    key={post.id} 
                    className="overflow-hidden group hover:shadow-xl transition-all cursor-pointer animate-scale-in"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Icon name="Calendar" size={14} />
                        <span>{post.date}</span>
                        <span>•</span>
                        <Icon name="Clock" size={14} />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-xs font-semibold text-primary">{post.author[0]}</span>
                          </div>
                          <span className="text-muted-foreground">{post.author}</span>
                        </div>
                        <Button variant="link" className="p-0 h-auto text-primary">
                          Читати
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center max-w-2xl mx-auto animate-scale-in">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Icon name="Mail" size={32} className="text-primary" />
            </div>
            <h2 className="text-3xl font-serif font-bold mb-4">Підпишіться на розсилку</h2>
            <p className="text-foreground/70 mb-6">
              Отримуйте свіжі статті, поради та ексклюзивні пропозиції прямо на вашу пошту
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input placeholder="Ваш email" className="rounded-full" />
              <Button className="rounded-full px-8">Підписатись</Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
