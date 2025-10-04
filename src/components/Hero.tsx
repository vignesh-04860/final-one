import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <p className="text-secondary text-lg md:text-xl font-medium">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Vignesh V S
              </h1>
              <h2 className="text-3xl md:text-4xl text-muted-foreground">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Crafting interactive, efficient, and scalable applications with modern web technologies. 
              Specializing in React, Node.js, and building seamless user experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-300 group">
                <a href="#projects" className="flex items-center gap-2">
                  View Projects
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://www.linkedin.com/in/vignesh-v-s-258176284" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                <Github size={24} />
              </a>
              <a href="mailto:vigneshofficial882@gmail.com" className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-glow" />
              <img src={profileImage} alt="Vignesh V S" className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/30 shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;