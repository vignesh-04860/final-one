import { Card } from "@/components/ui/card";
import { Code2, Database, Palette, Server } from "lucide-react";
const Skills = () => {
  const skillCategories = [{
    icon: Code2,
    title: "Frontend Development",
    skills: [{
      name: "React.js",
      level: 80
    }, {
      name: "JavaScript",
      level: 75
    }, {
      name: "HTML/CSS",
      level: 90
    }]
  }, {
    icon: Server,
    title: "Backend Development",
    skills: [{
      name: "Node.js",
      level: 70
    }, {
      name: "REST APIs",
      level: 60
    }]
  }, {
    icon: Database,
    title: "Database",
    skills: [{
      name: "MongoDB",
      level: 80
    }, {
      name: "MySQL",
      level: 90
    }]
  }, {
    icon: Palette,
    title: "Design & Tools",
    skills: [{
      name: "Responsive Design",
      level: 80
    }, {
      name: "UI/UX Principles",
      level: 80
    }]
  }];
  return <section id="skills" className="py-20 px-4 md:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          return <Card key={categoryIndex} className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 animate-fade-in" style={{
            animationDelay: `${categoryIndex * 0.1}s`
          }}>
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-r from-primary to-secondary mb-4">
                    <Icon className="text-background" size={28} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center mx-0">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div style={{
                    width: `${skill.level}%`,
                    animationDelay: `${(categoryIndex + skillIndex) * 0.1}s`
                  }} className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out mx-0 py-0 px-0 my-0" />
                      </div>
                    </div>)}
                </div>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};
export default Skills;