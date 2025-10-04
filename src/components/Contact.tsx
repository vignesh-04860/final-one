import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  const contactInfo = [{
    icon: Mail,
    title: "Email",
    value: "vigneshofficial882@gmail.com",
    href: "mailto:vigneshofficial882@gmail.com"
  }, {
    icon: Phone,
    title: "Phone",
    value: "+91 8825558612",
    href: "tel:+918825558612"
  }, {
    icon: MapPin,
    title: "Location",
    value: "Coimbatore, Tamil Nadu"
  }, {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/vignesh-v-s-258176284"
  }];
  return <section id="contact" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Contact</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          
        </div>

        <div className="flex flex-col items-center max-w-3xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left w-full">
            <div>
              <h3 className="text-3xl font-bold mb-6">Let's talk about everything!</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your visions. Don't hesitate to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = <Card key={index} className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-primary to-secondary">
                        <Icon className="text-background" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  </Card>;
              return info.href ? <a key={index} href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                    {content}
                  </a> : content;
            })}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;