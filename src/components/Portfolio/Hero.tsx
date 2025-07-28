import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import azeemCV from "/sir azeem cv.pdf"

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-secondary to-muted overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(210_40%_94%_/_0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(210_40%_94%_/_0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
                <span className="text-primary font-semibold">M.Phil Physics</span> • Senior Lecturer • Researcher
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Transforming physics education with 9+ years of teaching excellence and 
                cutting-edge research in nanomaterials and ferrites.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">

              <a href="#experience">
  <Button 
    size="lg" 
    className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-base font-semibold rounded-xl shadow-card hover:shadow-hero transition-all duration-300"
  >
    My Academic Contributions
  </Button>
</a>
              {/* <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-base font-semibold rounded-xl shadow-card hover:shadow-hero transition-all duration-300"
              >
                 My Academic Contributions
              </Button> */}

              <a 
  href="/prof azeem cv.pdf" 
  download 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button 
    variant="outline" 
    size="lg"
    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-base font-semibold rounded-xl transition-all duration-300"
  >
    Download CV
  </Button>
</a>

              {/* <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-base font-semibold rounded-xl transition-all duration-300"
              >
                Download CV
              </Button> */}
            </div>
          </motion.div>
          
          {/* Right Content */}
          <motion.div 
            className="lg:justify-self-end"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Optional profile image */}
            {/* <img src="/profile.jpg" alt="Muhammad Azeem Iqbal" className="w-full max-w-xs rounded-2xl mb-8 shadow-md" /> */}
            
            <div className="bg-card rounded-2xl p-8 shadow-hero border border-muted max-w-md">
              <h3 className="text-xl font-semibold text-foreground mb-6">Get In Touch</h3>

              <div className="space-y-4">
                {[{
                  icon: Mail,
                  label: "Email",
                  value: "Azeemazeemi7861@gmail.com"
                }, {
                  icon: Phone,
                  label: "Phone",
                  value: "+92-345-7775106"
                }, {
                  icon: MapPin,
                  label: "Location",
                  value: "Faisalabad, Pakistan"
                }].map(({ icon: Icon, label, value }, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-all">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{label}</p>
                      <p className="text-sm font-medium text-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
