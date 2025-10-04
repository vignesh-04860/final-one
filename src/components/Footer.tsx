import { Github, Linkedin, Mail, Heart } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-12 px-4 md:px-6 lg:px-8 border-t border-primary/20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Vignesh V S
            </h3>
            <p className="text-muted-foreground">
              Full Stack Developer passionate about creating exceptional digital experiences.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 px-[60px]">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors px-[80px]">
                Home
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors px-[80px]">
                About
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors px-[80px]">
                Projects
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors px-[80px]">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/vignesh-v-s-258176284" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="mailto:vigneshofficial882@gmail.com" className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Vignesh V S
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;