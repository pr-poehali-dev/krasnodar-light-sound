import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const pricingCategories = [
  {
    category: "Световое оборудование",
    icon: "Lightbulb",
    items: [
      { name: "LED PAR прожектор", price: "от 500₽/сутки" },
      { name: "Moving head", price: "от 2000₽/сутки" },
      { name: "Светодиодная панель", price: "от 800₽/сутки" },
      { name: "Стробоскоп", price: "от 1000₽/сутки" },
      { name: "Лазерная установка", price: "от 3000₽/сутки" }
    ]
  },
  {
    category: "Звуковое оборудование",
    icon: "Music",
    items: [
      { name: "Активная колонка 500W", price: "от 1500₽/сутки" },
      { name: "Линейный массив", price: "от 5000₽/сутки" },
      { name: "Радиомикрофон", price: "от 800₽/сутки" },
      { name: "Микшерный пульт", price: "от 2000₽/сутки" },
      { name: "DJ комплект", price: "от 3000₽/сутки" }
    ]
  },
  {
    category: "Спецэффекты",
    icon: "Sparkles",
    items: [
      { name: "Генератор дыма", price: "от 1000₽/сутки" },
      { name: "Генератор тяжёлого дыма", price: "от 2000₽/сутки" },
      { name: "Конфетти-пушка", price: "от 1500₽/сутки" },
      { name: "CO2 пушка", price: "от 2500₽/сутки" },
      { name: "Генератор мыльных пузырей", price: "от 800₽/сутки" }
    ]
  }
];

const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Прайс-лист
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Прозрачные цены на аренду оборудования. Скидки при долгосрочной аренде
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {pricingCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg">
                    <Icon name={category.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex justify-between items-center pb-3 border-b border-border last:border-0"
                    >
                      <span className="text-sm">{item.name}</span>
                      <span className="font-semibold text-primary whitespace-nowrap ml-2">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
            <CardContent className="pt-6 text-center">
              <Icon name="Percent" size={40} className="text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Скидка 10%</h3>
              <p className="text-sm text-muted-foreground">При аренде от 3-х суток</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/30">
            <CardContent className="pt-6 text-center">
              <Icon name="Package" size={40} className="text-secondary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Комплекты</h3>
              <p className="text-sm text-muted-foreground">Готовые решения по выгодной цене</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/5 border-primary/30">
            <CardContent className="pt-6 text-center">
              <Icon name="Truck" size={40} className="text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Доставка</h3>
              <p className="text-sm text-muted-foreground">Бесплатно при заказе от 10 000₽</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-card border border-primary/30 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Нужна индивидуальная смета?</h3>
          <p className="text-muted-foreground mb-6">
            Оставьте заявку и наш специалист подберёт оптимальное решение под ваш бюджет
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Calculator" className="mr-2" size={20} />
            Получить смету
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
