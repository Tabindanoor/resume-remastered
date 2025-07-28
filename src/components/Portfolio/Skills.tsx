import { Card } from "@/components/ui/card";
import { 
  Monitor, 
  BarChart3, 
  Calculator, 
  Shield,
  BookOpen,
  Mic,
  Database,
  Users
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Communication & Presentation",
      icon: Mic,
      skills: [
        "Persuasive communication skills",
        "Report writing and documentation",
        "Oral presentations delivery",
        "Student engagement and interaction"
      ]
    },
    {
      title: "Technical & Computer Skills",
      icon: Monitor,
      skills: [
        "Advanced Microsoft Office Suite (Word, Excel, PowerPoint)",
        "Computer programming fundamentals",
        "Internet research and data collection",
        "Educational technology integration"
      ]
    },
    {
      title: "Research & Analysis",
      icon: BarChart3,
      skills: [
        "Mathematical calculations and modeling",
        "Data analysis and interpretation",
        "Scientific research methodology",
        "Project risk assessment"
      ]
    },
    {
      title: "Management & Administration",
      icon: Users,
      skills: [
        "Project and business management",
        "Administrative coordination",
        "Safety analysis and protocols",
        "Educational program development"
      ]
    }
  ];

  const hobbies = [
    { name: "Recitation of Holy Quran", icon: BookOpen },
    { name: "Books Reading", icon: BookOpen },
    { name: "Computer & Internet", icon: Monitor }
  ];

  return (
    <section className="py-20 bg-section-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Professional Skills</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning technical expertise, research capabilities, and educational excellence
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card shadow-card border-0 p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        
        <Card className="bg-card shadow-card border-0 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Hobbies & Interests</h3>
            <p className="text-muted-foreground">
              Personal interests that contribute to continuous learning and development
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <div key={index} className="text-center p-6 bg-muted rounded-xl hover:bg-accent/10 transition-colors duration-300">
                <hobby.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-primary">{hobby.name}</h4>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;