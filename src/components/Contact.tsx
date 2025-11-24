import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    event: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", phone: "", event: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Готовы обсудить ваше мероприятие и подобрать оптимальное решение
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Input
                      name="event"
                      placeholder="Тип мероприятия"
                      value={formData.event}
                      onChange={handleChange}
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Расскажите о вашем мероприятии..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-background border-border resize-none"
                    />
                  </div>
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Телефон</h3>
                    <a href="tel:+79001234567" className="text-primary hover:underline text-lg">
                      +7 (900) 123-45-67
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 22:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-secondary to-primary p-3 rounded-lg flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <a href="mailto:info@eventrent.ru" className="text-primary hover:underline">
                      info@eventrent.ru
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Адрес</h3>
                    <p className="text-muted-foreground">
                      г. Краснодар, ул. Красная, 123
                      <br />
                      Офис 45 (вход со двора)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-secondary to-primary p-3 rounded-lg flex-shrink-0">
                    <Icon name="MessageCircle" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Мессенджеры</h3>
                    <div className="flex gap-3">
                      <a 
                        href="https://wa.me/79001234567" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        WhatsApp
                      </a>
                      <span className="text-muted-foreground">•</span>
                      <a 
                        href="https://t.me/eventrent" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        Telegram
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Быстрый ответ 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
