import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "M.Phil (Physics)",
      year: "2024",
      institution: "Govt. College & University, Faisalabad",
      type: "Postgraduate"
    },
    {
      degree: "M.Sc (Physics)",
      year: "2014",
      institution: "University of Punjab, Lahore",
      type: "Master's"
    },
    {
      degree: "B.Ed",
      year: "2013",
      institution: "Allama Iqbal Open University, Islamabad",
      type: "Professional"
    },
    {
      degree: "B.Sc (Physics)",
      year: "2011",
      institution: "University of Punjab, Lahore",
      type: "Bachelor's"
    },
    {
      degree: "F.Sc",
      year: "2009",
      institution: "B.I.S.E Faisalabad",
      type: "Intermediate"
    },
    {
      degree: "Matriculation",
      year: "2007",
      institution: "B.I.S.E Faisalabad",
      type: "Secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Education</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey spanning over a decade, from foundational studies to advanced research in Physics
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Timeline dot */}
                <div className="hidden md:flex w-16 h-16 bg-accent rounded-full items-center justify-center shadow-lg relative z-10">
                  <GraduationCap className="w-8 h-8 text-accent-foreground" />
                </div>
                
                <Card className="flex-1 bg-card shadow-card border-0 p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-accent/10 text-accent font-semibold text-sm rounded-full">
                          {edu.type}
                        </span>
                        <span className="text-2xl font-bold text-accent">{edu.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;