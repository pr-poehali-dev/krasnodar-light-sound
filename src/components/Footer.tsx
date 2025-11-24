import Icon from "@/components/ui/icon";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-4">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">EventRent</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Профессиональная аренда светового, звукового оборудования и спецэффектов в Краснодаре
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="bg-card hover:bg-primary/20 p-2 rounded-lg transition-colors"
                aria-label="VK"
              >
                <Icon name="Facebook" size={20} className="text-primary" />
              </a>
              <a 
                href="#" 
                className="bg-card hover:bg-primary/20 p-2 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={20} className="text-primary" />
              </a>
              <a 
                href="https://t.me/eventrent" 
                className="bg-card hover:bg-primary/20 p-2 rounded-lg transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" size={20} className="text-primary" />
              </a>
              <a 
                href="https://wa.me/79001234567" 
                className="bg-card hover:bg-primary/20 p-2 rounded-lg transition-colors"
                aria-label="WhatsApp"
              >
                <Icon name="Phone" size={20} className="text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Услуги</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button 
                  onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Световое оборудование
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Звуковое оборудование
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Спецэффекты
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Техническая поддержка
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-primary" />
                <a href="tel:+79001234567" className="hover:text-primary transition-colors">
                  +7 (900) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-primary" />
                <a href="mailto:info@eventrent.ru" className="hover:text-primary transition-colors">
                  info@eventrent.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="text-primary mt-1" />
                <span>г. Краснодар, ул. Красная, 123</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 EventRent. Все права защищены.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors"
          >
            <Icon name="ArrowUp" size={16} />
            Наверх
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
