import { Quote, Star } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              O que estão <span className="text-gradient">dizendo</span>
            </h2>
          </div>
          
          <div 
            className="relative p-8 md:p-12 rounded-3xl bg-card border border-border shadow-premium animate-fade-up opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            
            <div className="relative z-10">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl font-medium text-center leading-relaxed mb-8">
                "O melhor e mais completo guia de prompts que eu já vi. Estou usando para vender meu infoproduto e está me ajudando <span className="text-gradient font-bold">MUITO!</span>"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  C
                </div>
                <div>
                  <p className="font-semibold">Cliente verificado</p>
                  <p className="text-sm text-muted-foreground">Infoprodutor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
