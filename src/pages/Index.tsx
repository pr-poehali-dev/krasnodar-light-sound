import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Catalog />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
