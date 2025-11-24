import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Lightbulb",
    title: "Световое оформление",
    description: "Создаём уникальную атмосферу с помощью профессионального светового оборудования. От романтичной подсветки до мощного концертного света.",
    gradient: "from-secondary to-secondary/80"
  },
  {
    icon: "Music",
    title: "Звуковое сопровождение",
    description: "Качественный звук на любой площадке. Подберём и настроим оборудование для идеального звучания вашего мероприятия.",
    gradient: "from-secondary to-secondary/80"
  },
  {
    icon: "Sparkles",
    title: "Спецэффекты",
    description: "Дым, конфетти, лазеры, пиротехника - создадим wow-эффект и незабываемые впечатления для ваших гостей.",
    gradient: "from-secondary to-secondary"
  },
  {
    icon: "Wrench",
    title: "Монтаж и демонтаж",
    description: "Профессиональная установка оборудования, настройка и техническая поддержка на протяжении всего мероприятия.",
    gradient: "from-secondary to-secondary"
  },
  {
    icon: "Users",
    title: "Техническая команда",
    description: "Опытные специалисты будут контролировать работу оборудования и оперативно решать любые технические вопросы.",
    gradient: "from-secondary/80 to-secondary"
  },
  {
    icon: "Headphones",
    title: "Консультация",
    description: "Поможем подобрать оптимальный комплект оборудования под ваш бюджет и задачи мероприятия.",
    gradient: "from-secondary/80 to-secondary"
  }
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Наши <span className="text-secondary">услуги</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Комплексное техническое обеспечение мероприятий любого формата
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 bg-card border-border hover:border-secondary/50"
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={service.icon as any} size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-card border border-secondary/30 rounded-2xl p-8 max-w-3xl">
            <Icon name="Shield" size={48} className="text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Почему выбирают нас?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Check" className="text-secondary" size={20} />
                  <span className="font-semibold">Опыт 10+ лет</span>
                </div>
                <p className="text-sm text-muted-foreground">Работали с крупнейшими площадками города</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Check" className="text-secondary" size={20} />
                  <span className="font-semibold">Гарантия качества</span>
                </div>
                <p className="text-sm text-muted-foreground">Новое сертифицированное оборудование</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Check" className="text-secondary" size={20} />
                  <span className="font-semibold">Гибкие цены</span>
                </div>
                <p className="text-sm text-muted-foreground">Скидки при аренде на длительный срок</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;