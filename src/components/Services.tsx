import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Calendar, Truck, Phone, FileText, Shield } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Pharmacist Consultation",
    description: "Get expert advice from our licensed pharmacists about medications, interactions, and health concerns.",
    features: ["Medication reviews", "Drug interaction checks", "Dosage guidance"]
  },
  {
    icon: Calendar,
    title: "Prescription Management",
    description: "Never miss a dose with our comprehensive prescription tracking and refill reminder service.",
    features: ["Auto-refill setup", "SMS reminders", "Dosage scheduling"]
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description: "Fast, secure delivery of your medications right to your doorstep with real-time tracking.",
    features: ["Same-day delivery", "Temperature controlled", "Signature required"]
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Round-the-clock access to pharmaceutical support for urgent medication questions.",
    features: ["Emergency consultations", "After-hours support", "Poison control guidance"]
  },
  {
    icon: FileText,
    title: "Health Records",
    description: "Secure digital health records management for better care coordination with your healthcare providers.",
    features: ["Digital prescriptions", "Health history", "Lab results integration"]
  },
  {
    icon: Shield,
    title: "Insurance Processing",
    description: "Seamless insurance claim processing and prior authorization assistance for your medications.",
    features: ["Insurance verification", "Prior authorizations", "Cost optimization"]
  }
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional <span className="text-gold">Pharmacy</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond dispensing medications, we provide comprehensive healthcare services 
            designed to support your health journey every step of the way.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-primary transition-all duration-300 border-border bg-card/80 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-gold-foreground" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full border-gold text-gold hover:bg-gold/10">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;