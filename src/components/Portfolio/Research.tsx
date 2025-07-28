import { Card } from "@/components/ui/card";
import { FlaskConical, Atom } from "lucide-react";

const Research = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Research Projects</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contributing to cutting-edge research in nanomaterials and ferrite physics
          </p>
        </div>
        
        <Card className="bg-card shadow-card border-0 p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <FlaskConical className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Synthesis and Characterization of Zn₀.₃₅Cu₀.₃Ni₀.₃₅Fe₂O₄ GNP Nanocomposites
              </h3>
              
              <div className="mb-6">
                <span className="px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm">
                  Sol-Gel Auto-Combustion Method
                </span>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This research project focuses on the synthesis and comprehensive characterization of 
                  Zn₀.₃₅Cu₀.₃Ni₀.₃₅Fe₂O₄ Graphene Nano-Platelet (GNP) nanocomposites using the 
                  Sol-Gel Auto-Combustion Method. The study contributes to the advancement of 
                  nanomaterial science and ferrite physics.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-muted rounded-xl">
                  <Atom className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-primary mb-2">Nanomaterials</h4>
                  <p className="text-sm text-muted-foreground">Advanced material synthesis</p>
                </div>
                <div className="text-center p-6 bg-muted rounded-xl">
                  <FlaskConical className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-primary mb-2">Sol-Gel Method</h4>
                  <p className="text-sm text-muted-foreground">Innovative synthesis technique</p>
                </div>
                <div className="text-center p-6 bg-muted rounded-xl">
                  <div className="w-8 h-8 bg-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-sm">Fe</span>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Ferrite Physics</h4>
                  <p className="text-sm text-muted-foreground">Magnetic material research</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Research;