import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-secondary to-muted">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(210_40%_94%_/_0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(210_40%_94%_/_0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-medium text-sm">Professional Educator</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Muhammad Azeem
                <span className="block text-primary">Iqbal</span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                M.Phil Physics • Senior Lecturer • Researcher
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Transforming physics education with 9+ years of teaching excellence and 
                cutting-edge research in nanomaterials and ferrites.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-base font-semibold rounded-xl shadow-card hover:shadow-hero transition-all duration-300"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-base font-semibold rounded-xl transition-all duration-300"
              >
                Download CV
              </Button>
            </div>
          </div>
          
          {/* Right Content - Contact Card */}
          <div className="lg:justify-self-end">
            <div className="bg-card rounded-2xl p-8 shadow-hero border border-muted max-w-md">
              <h3 className="text-xl font-semibold text-foreground mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground">Azeemazeemi7861@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium text-foreground">+92-345-7775106</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-sm font-medium text-foreground">Faisalabad, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;