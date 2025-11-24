import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Корпоративный форум",
    type: "Бизнес",
    description: "Полное техническое оснащение конференц-зала на 500 человек",
    image: "https://cdn.poehali.dev/projects/3c22778a-f7ec-4309-8e7d-f53927c40aea/files/1e3c9a50-5f96-46c3-82f8-4623a256c63b.jpg",
    tags: ["Звук", "Свет", "Видео"]
  },
  {
    title: "Музыкальный фестиваль",
    type: "Концерт",
    description: "Световое шоу и звуковое оборудование для open-air мероприятия",
    image: "https://cdn.poehali.dev/projects/3c22778a-f7ec-4309-8e7d-f53927c40aea/files/e5098300-304e-4b0d-b2a5-52bd4a0b1e88.jpg",
    tags: ["Свет", "Звук", "Спецэффекты"]
  },
  {
    title: "Свадебное торжество",
    type: "Свадьба",
    description: "Романтичная подсветка банкетного зала и качественный звук",
    image: "https://cdn.poehali.dev/projects/3c22778a-f7ec-4309-8e7d-f53927c40aea/files/cd3678a5-324a-460e-a122-2669fd22db16.jpg",
    tags: ["Свет", "Звук", "Конфетти"]
  },
  {
    title: "День города",
    type: "Городское мероприятие",
    description: "Масштабное световое оформление центральной площади",
    image: "https://cdn.poehali.dev/projects/3c22778a-f7ec-4309-8e7d-f53927c40aea/files/1e3c9a50-5f96-46c3-82f8-4623a256c63b.jpg",
    tags: ["Свет", "Спецэффекты", "Лазеры"]
  },
  {
    title: "Корпоратив",
    type: "Вечеринка",
    description: "Клубный свет и профессиональный звук для новогоднего корпоратива",
    image: "https://cdn.poehali.dev/projects/3c22778a-f7ec-4309-8e7d-f53927c40aea/files/e5098300-304e-4b0d-b2a5-52bd4a0b1e88.jpg",
    tags: ["Звук", "Свет", "Дым"]
  },
  {
    title: "Fashion показ",
    type: "Показ мод",
    description: "Динамичное световое сопровождение подиума",
    image: "https://cdn.poehali.dev/projects/3c22778a-f7ec-4309-8e7d-f53927c40aea/files/cd3678a5-324a-460e-a122-2669fd22db16.jpg",
    tags: ["Свет", "Звук"]
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 px-4">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Портфолио <span className="text-secondary">проектов</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 500 успешно реализованных мероприятий в Краснодаре и крае
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                <Badge className="absolute top-4 right-4 bg-secondary/90 text-secondary-foreground">
                  {project.type}
                </Badge>
              </div>
              
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline"
                      className="border-secondary/40 text-secondary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;