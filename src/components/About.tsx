import { GraduationCap, BookOpen, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
const About = () => {
  const education = [{
    icon: GraduationCap,
    degree: "B.E Computer Science and Engineering",
    institution: "Sri Ramakrishna Engineering College",
    period: "2023 - 2026",
    description: "Currently pursuing Bachelor's degree, focusing on full-stack development and emerging technologies."
  }, {
    icon: BookOpen,
    degree: "Diploma in Computer Science and Engineering",
    institution: "Sankara Polytechnic College",
    period: "2020 - 2023",
    description: "Built strong foundation in programming fundamentals and software development."
  }, {
    icon: Award,
    degree: "SSLC",
    institution: "Jaycee Higher Secondary School",
    period: "2019 - 2020",
    description: "Completed secondary education with distinction."
  }];
  return <section id="about" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6 animate-fade-in-left">
            <h3 className="text-3xl font-bold">Who I Am</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated Full Stack Developer with hands-on experience in designing and developing 
              interactive, efficient, and scalable applications. I work with front-end tools such as React, 
              JavaScript, HTML, and CSS, along with back-end technologies including Node.js and 
              databases like MySQL and MongoDB.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy tackling challenges, improving application performance, and building smooth user experiences. 
              I'm also keen on exploring new technologies, working on creative projects, and enhancing my skills as a developer.
            </p>
          </div>

          <div className="grid gap-6 animate-fade-in-right">
            <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Experience</h4>
                  <p className="text-muted-foreground">
                    Building full-stack applications with modern technologies and best practices
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <BookOpen className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Learning</h4>
                  <p className="text-muted-foreground">
                    Continuously exploring new technologies and improving development skills
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center animate-fade-in">Educational Journey</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => {
            const Icon = edu.icon;
            return <Card key={index} className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-gradient-to-r from-primary to-secondary">
                      <Icon className="text-background" size={32} />
                    </div>
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <p className="text-primary">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mx-0">{edu.period}</p>
                    
                  </div>
                </Card>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default About;