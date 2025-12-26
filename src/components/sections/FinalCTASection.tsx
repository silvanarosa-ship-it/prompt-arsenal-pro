import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15)_0%,transparent_70%)]" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles 
            className="w-12 h-12 text-primary mx-auto mb-6 animate-fade-up opacity-0"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          />
          
          <h2 
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Pare de perder tempo com <span className="text-gradient">prompts ruins.</span>
          </h2>
          
          <p 
            className="text-xl text-muted-foreground mb-10 animate-fade-up opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Seu negócio merece respostas que geram resultados.
          </p>
          
          <Button 
            size="lg"
            onClick={scrollToPlans}
            className="group bg-gradient-primary hover:opacity-90 text-primary-foreground px-10 py-7 text-lg font-semibold shadow-glow transition-all duration-300 hover:scale-105 animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Escolher meu plano agora
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
