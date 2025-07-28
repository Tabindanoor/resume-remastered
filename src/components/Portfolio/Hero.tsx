import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 shadow-hero border border-white/20">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Muhammad Azeem Iqbal
          </h1>
          <h2 className="text-2xl md:text-3xl text-accent font-semibold mb-8">
            Physics Educator & Researcher
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            M.Phil Physics graduate with 9+ years of teaching experience, dedicated to advancing 
            physics education and conducting innovative research in nanomaterials and ferrites.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>Azeemazeemi7861@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+92-345-7775106</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Faisalabad, Pakistan</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Experience
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg font-semibold rounded-xl"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;