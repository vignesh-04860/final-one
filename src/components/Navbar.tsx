import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Skills",
    href: "#skills"
  }, {
    name: "Certifications",
    href: "#certifications"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Vignesh V S
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
              </a>)}
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-300">
              
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden py-4 animate-fade-in">
            {navLinks.map(link => <a key={link.name} href={link.href} className="block py-3 text-foreground/80 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>)}
            <Button asChild className="w-full mt-4 bg-gradient-to-r from-primary to-secondary">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Let's Talk
              </a>
            </Button>
          </div>}
      </div>
    </nav>;
};
export default Navbar;