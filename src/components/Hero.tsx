import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Truck } from "lucide-react";
import heroImage from "@/assets/hero-pharmacy.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-hero py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your trusted partner for{" "}
                <span className="text-gold">health</span> and{" "}
                <span className="text-gold">wellness</span>
              </h1>
              <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
                Quality pharmaceuticals delivered with care. We provide prescription medications, 
                health consultations, and wellness products to keep you and your family healthy.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-gold shadow-gold border-0 text-gold-foreground hover:shadow-lg transition-all">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold/10">
                Consult Pharmacist
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 pt-4">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-gold" />
                <span className="text-muted-foreground">Licensed & Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-gold" />
                <span className="text-muted-foreground">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="w-6 h-6 text-gold" />
                <span className="text-muted-foreground">Free Delivery</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-primary bg-card border border-border">
              <img 
                src={heroImage} 
                alt="Professional pharmacy with modern medical equipment and medications"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;