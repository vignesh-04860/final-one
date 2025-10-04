import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import chatbotImage from "@/assets/chatbot-project.jpg";
const Projects = () => {
  const project = {
    title: "ML-Driven Interactive Chatbot for Hate Speech Detection",
    description: "An intelligent chatbot that uses Machine Learning models to detect hate speech in conversations and respond with positive alternatives, aiming to reduce cyberbullying and promote safe online interactions.",
    image: chatbotImage,
    technologies: ["Python", "Machine Learning", "NLP", "React", "Node.js"],
    features: ["Real-time hate speech detection using ML models", "Suitable for social media and educational platforms"]
  };
  return <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          
        </div>

        <Card className="overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-80 lg:h-auto overflow-hidden group">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
              <h3 className="text-3xl font-bold">{project.title}</h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div>
                
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                
                
              </div>

              <div className="flex gap-4 pt-4">
                
                
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>;
};
export default Projects;