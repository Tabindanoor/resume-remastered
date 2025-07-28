import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-section-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>
        
        <Card className="bg-card shadow-card border-0 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Career Objective</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A dynamic and self-motivated individual seeking for a challenging opportunity which 
                would provide an environment where I can apply my knowledge and experience helping 
                the organization to meet its goal and also enable my capabilities to full potential.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-muted rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">9+</div>
                  <div className="text-sm font-semibold text-muted-foreground">Years Teaching</div>
                </div>
                <div className="text-center p-6 bg-muted rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">M.Phil</div>
                  <div className="text-sm font-semibold text-muted-foreground">Physics</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-muted p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-primary mb-3">Personal Information</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span className="font-medium">Date of Birth:</span>
                    <span>13-Nov-1992</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Nationality:</span>
                    <span>Pakistani</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Marital Status:</span>
                    <span>Married</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Religion:</span>
                    <span>Islam</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-primary mb-3">Languages</h4>
                <div className="flex flex-wrap gap-3">
                  {["English", "Urdu", "Punjabi"].map((language) => (
                    <span 
                      key={language}
                      className="px-4 py-2 bg-accent/10 text-accent font-semibold rounded-lg"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;