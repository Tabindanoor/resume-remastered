import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Sophisticated pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M40 40c0-22.091-17.909-40-40-40v40h40zm0 0c22.091 0 40 17.909 40 40H40V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-lg rotate-45 blur-sm animate-pulse delay-300"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="bg-white/15 backdrop-blur-md rounded-3xl p-16 shadow-hero border border-white/30 hover:bg-white/20 transition-all duration-700">
          {/* Academic badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-accent/30">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-white font-medium">Academic Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
            Muhammad Azeem Iqbal
          </h1>
          <h2 className="text-3xl md:text-4xl text-accent font-semibold mb-10 tracking-wide">
            Physics Educator & Researcher
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            M.Phil Physics graduate with 9+ years of teaching experience, dedicated to advancing 
            physics education and conducting innovative research in nanomaterials and ferrites.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-white/90">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Mail className="w-5 h-5 text-accent" />
              <span className="font-medium">Azeemazeemi7861@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Phone className="w-5 h-5 text-accent" />
              <span className="font-medium">+92-345-7775106</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="font-medium">Faisalabad, Pakistan</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-accent-gradient hover:scale-105 text-white px-10 py-7 text-lg font-semibold rounded-2xl shadow-elegant hover:shadow-xl transition-all duration-500 border border-accent/30"
            >
              View Experience
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/40 text-white hover:bg-white/20 backdrop-blur-sm px-10 py-7 text-lg font-semibold rounded-2xl hover:scale-105 transition-all duration-500"
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