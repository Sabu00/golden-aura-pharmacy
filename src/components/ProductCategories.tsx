import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Bone, Eye, Pill, Activity } from "lucide-react";

const categories = [
  {
    icon: Heart,
    title: "Cardiovascular",
    description: "Heart health medications and supplements for optimal cardiovascular function.",
    itemCount: "150+ items",
    color: "text-red-400"
  },
  {
    icon: Brain,
    title: "Neurological",
    description: "Medications for neurological conditions and brain health support.",
    itemCount: "120+ items",
    color: "text-purple-400"
  },
  {
    icon: Bone,
    title: "Orthopedic",
    description: "Joint health, bone strength, and mobility enhancement products.",
    itemCount: "90+ items",
    color: "text-blue-400"
  },
  {
    icon: Eye,
    title: "Vision Care",
    description: "Eye health products, contact solutions, and vision supplements.",
    itemCount: "75+ items",
    color: "text-green-400"
  },
  {
    icon: Pill,
    title: "Pain Relief",
    description: "Over-the-counter and prescription pain management solutions.",
    itemCount: "200+ items",
    color: "text-gold"
  },
  {
    icon: Activity,
    title: "Wellness",
    description: "Vitamins, supplements, and general health maintenance products.",
    itemCount: "300+ items",
    color: "text-cyan-400"
  }
];

const ProductCategories = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Comprehensive <span className="text-gold">Healthcare</span> Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive range of pharmaceutical products and health solutions, 
            carefully curated by licensed pharmacists for your wellbeing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-gold transition-all duration-300 border-border bg-card/50 backdrop-blur">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                  <p className="text-sm text-gold font-medium">{category.itemCount}</p>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold/10">
                    Browse Category
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

export default ProductCategories;