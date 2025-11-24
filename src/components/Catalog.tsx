import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const equipmentCategories = [
  {
    title: "Световое оборудование",
    description: "Профессиональный свет для создания атмосферы",
    image: "https://cdn.poehali.dev/projects/3c22778a-f7ec-4309-8e7d-f53927c40aea/files/1e3c9a50-5f96-46c3-82f8-4623a256c63b.jpg",
    icon: "Lightbulb",
    items: [
      "LED прожекторы и PAR",
      "Moving head и сканеры",
      "Стробоскопы",
      "Светодиодные панели",
      "Архитектурная подсветка",
      "DMX контроллеры"
    ]
  },
  {
    title: "Звуковое оборудование",
    description: "Кристально чистый звук для любого мероприятия",
    image: "https://cdn.poehali.dev/projects/3c22778a-f7ec-4309-8e7d-f53927c40aea/files/e5098300-304e-4b0d-b2a5-52bd4a0b1e88.jpg",
    icon: "Music",
    items: [
      "Концертные акустические системы",
      "Микрофоны (проводные и радио)",
      "Микшерные пульты",
      "Усилители мощности",
      "Мониторы сцены",
      "DJ оборудование"
    ]
  },
  {
    title: "Спецэффекты",
    description: "Незабываемые визуальные эффекты",
    image: "https://cdn.poehali.dev/projects/3c22778a-f7ec-4309-8e7d-f53927c40aea/files/cd3678a5-324a-460e-a122-2669fd22db16.jpg",
    icon: "Sparkles",
    items: [
      "Генераторы дыма и тумана",
      "Конфетти-пушки",
      "Лазерные установки",
      "CO2 пушки",
      "Генераторы мыльных пузырей",
      "Пиротехнические эффекты"
    ]
  }
];

const Catalog = () => {
  return (
    <section id="catalog" className="py-20 px-4">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Каталог оборудования
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Современное профессиональное оборудование от ведущих мировых производителей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 bg-card border-border overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-primary/90 p-3 rounded-lg">
                    <Icon name={category.icon as any} size={24} className="text-primary-foreground" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{category.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {category.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать цены
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
