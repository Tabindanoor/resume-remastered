import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experienceData = [
    {
      position: "Physics Lecturer",
      duration: "01 Year ~ Present",
      company: "Punjab College of Science",
      location: "Faisalabad",
      current: true
    },
    {
      position: "Physics Lecturer",
      duration: "06 Years",
      company: "Kips College (Jail Road Campus)",
      location: "Faisalabad",
      current: false
    },
    {
      position: "Physics Lecturer",
      duration: "02 Years",
      company: "Superior College",
      location: "Chiniot",
      current: false
    },
    {
      position: "Physics O Level Teacher",
      duration: "01 Year",
      company: "Millennium Institute for Cambridge Studies",
      location: "35 Khawaja Islam Road",
      current: false
    }
  ];

  return (
    <section className="py-20 bg-section-gradient"  id="experience" >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Teaching Experience</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over 9 years of dedicated physics education across prestigious institutions
          </p>
        </div>
        
        <div className="grid gap-8">
          {experienceData.map((exp, index) => (
            <Card key={index} className="bg-card shadow-card border-0 p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <Briefcase className="w-8 h-8 text-primary-foreground group-hover:text-accent-foreground" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-primary">{exp.position}</h3>
                    {exp.current && (
                      <span className="px-4 py-2 bg-accent text-accent-foreground font-semibold rounded-full text-sm w-fit">
                        Current Position
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-xl font-semibold text-foreground mb-4">{exp.company}</h4>
                  
                  <div className="flex flex-wrap gap-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-accent" />
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-accent" />
                      <span className="font-medium">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="bg-accent/5 border-accent/20 p-8 inline-block">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-accent">9+</div>
                <div className="text-sm font-semibold text-muted-foreground">Years of Teaching</div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Dedicated to physics education across multiple academic levels
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;