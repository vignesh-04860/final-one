import { Card } from "@/components/ui/card";
import { Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "MongoDB",
      issuer: "MongoDB University",
      icon: Award
    },
    {
      title: "Introduction to Blockchain",
      issuer: "Certification Provider",
      icon: Award
    },
    {
      title: "Introduction to Spark AR",
      issuer: "Meta",
      icon: Award
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card
                key={index}
                className="p-8 border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 group animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-gradient-to-r from-primary to-secondary group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-background" size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{cert.title}</h3>
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  </div>
                  <div className="pt-2">
                    <CheckCircle className="text-primary" size={20} />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
