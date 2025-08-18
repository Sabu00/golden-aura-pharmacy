import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Search, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-hero border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-gold">PharmaCare</div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-foreground hover:text-gold transition-colors">Home</a>
              <a href="#" className="text-foreground hover:text-gold transition-colors">Medications</a>
              <a href="#" className="text-foreground hover:text-gold transition-colors">Services</a>
              <a href="#" className="text-foreground hover:text-gold transition-colors">About</a>
              <a href="#" className="text-foreground hover:text-gold transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center text-sm text-muted-foreground">
              <Phone className="w-4 h-4 mr-2" />
              <span>(555) 123-CARE</span>
            </div>
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="bg-gold text-gold-foreground border-gold hover:bg-gold/90">
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;