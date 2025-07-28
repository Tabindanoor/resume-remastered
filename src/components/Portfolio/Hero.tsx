import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-subtle-gradient"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="bg-card rounded-2xl p-12 md:p-16 shadow-hero border border-muted">
          {/* Professional badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-primary font-medium text-sm">Physics Educator</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Muhammad Azeem Iqbal
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-8">
            M.Phil Physics • Teaching Excellence
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
            Dedicated physics educator with 9+ years of teaching experience and M.Phil qualification, 
            passionate about advancing physics education and conducting research in nanomaterials.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-foreground">Azeemazeemi7861@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-foreground">+92-345-7775106</span>
            </div>
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-foreground">Faisalabad, Pakistan</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View Experience
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300"
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