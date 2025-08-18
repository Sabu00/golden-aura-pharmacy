import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gold mb-4">PharmaCare</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your trusted neighborhood pharmacy committed to providing quality healthcare 
                solutions and exceptional service to our community.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-gold">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-gold">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-gold">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-gold">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Prescription Refills</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Transfer Prescription</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Health Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Insurance Information</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">COVID-19 Resources</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Patient Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Immunizations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Health Screenings</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Medication Therapy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Compounding</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Durable Medical Equipment</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors">Home Delivery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>123 Healthcare Ave</p>
                  <p>Medical District, MD 21201</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-muted-foreground">(555) 123-CARE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-muted-foreground">info@pharmacare.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>Mon-Fri: 8AM-10PM</p>
                  <p>Sat-Sun: 9AM-8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 PharmaCare. All rights reserved. Licensed Pharmacy #12345
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-gold text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-gold text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-gold text-sm transition-colors">HIPAA Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;