import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      
      <div className="absolute inset-0 opacity-30">
        <img 
          src="https://cdn.poehali.dev/projects/3c22778a-f7ec-4309-8e7d-f53927c40aea/files/1e3c9a50-5f96-46c3-82f8-4623a256c63b.jpg"
          alt="Event lighting"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Свет. Звук. <span className="text-secondary">Эмоции.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Профессиональная аренда светового, звукового оборудования и спецэффектов для любых мероприятий в Краснодаре
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-secondary hover:bg-secondary/90 transition-colors text-lg px-8 py-6"
          >
            <Icon name="Phone" className="mr-2" size={20} />
            Заказать консультацию
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('catalog')}
            className="border-secondary text-foreground hover:bg-secondary/10 text-lg px-8 py-6"
          >
            <Icon name="Zap" className="mr-2" size={20} />
            Каталог оборудования
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">500+</div>
            <div className="text-muted-foreground">Мероприятий</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-muted-foreground">Поддержка</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">100%</div>
            <div className="text-muted-foreground">Качество</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-secondary" />
      </div>
    </section>
  );
};

export default Hero;