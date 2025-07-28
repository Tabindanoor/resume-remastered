import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Ready to discuss physics education opportunities, research collaborations, or academic partnerships
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-foreground/80 text-sm">Email Address</div>
                    <div className="text-lg font-medium">Azeemazeemi7861@gmail.com</div>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-foreground/80 text-sm">Phone Numbers</div>
                    <div className="text-lg font-medium">+92-345-7775106</div>
                    <div className="text-md">+92-300-0987336</div>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-foreground/80 text-sm">Location</div>
                    <div className="text-lg font-medium">Faisalabad, Pakistan</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">Let's Connect</h3>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                Whether you're looking for an experienced physics educator, interested in research collaboration, 
                or seeking academic consultation, I'd love to hear from you. Let's discuss how we can work together 
                to advance physics education and research.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Full CV
                </Button>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 inline-block">
            <h4 className="text-xl font-bold text-primary-foreground mb-4">References Available</h4>
            <p className="text-primary-foreground/80">
              Professional references and recommendations available upon request
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;