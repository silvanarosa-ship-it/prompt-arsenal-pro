import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Robo3D } from "@/components/ui/robo-3d";
import { Spotlight } from "@/components/ui/spotlight";

const HeroSection = () => {
  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background" />
      
      <Card className="w-full min-h-screen rounded-none border-0 bg-card/50 backdrop-blur-sm relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="hsl(265 85% 65%)"
        />
        
        <div className="container relative z-10 px-4 md:px-6 py-20 min-h-screen flex items-center">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
            
            {/* Left content */}
            <div className="flex-1 space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-primary/20 animate-fade-up opacity-0" 
                style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground/80">+1.500 prompts estratégicos</span>
              </div>
              
              {/* Headline */}
              <h1 
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-up opacity-0" 
                style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
              >
                Pare de improvisar no ChatGPT.{" "}
                <span className="text-gradient">Use prompts que pensam por você.</span>
              </h1>
              
              {/* Subheadline */}
              <p 
                className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-up opacity-0" 
                style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
              >
                Mais de 1.500 prompts estratégicos de marketing, vendas, conteúdo e produtividade — criados para o mercado brasileiro.
              </p>
              
              {/* CTA */}
              <div 
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-up opacity-0" 
                style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
              >
                <Button 
                  size="lg" 
                  onClick={scrollToPlans}
                  className="group bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Quero acessar os prompts agora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div 
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground animate-fade-up opacity-0" 
                style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Entrega imediata</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>7 dias de garantia</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Acesso vitalício</span>
                </div>
              </div>
            </div>
            
            {/* Right content - 3D-like visual */}
            <div className="flex-1 relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center overflow-visible">
              {/* Animated orbs */}
              <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/30 via-purple-500/20 to-blue-500/30 blur-3xl animate-float" />
              <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-500/20 via-primary/20 to-pink-500/20 blur-3xl animate-float delay-300" style={{ animationDelay: "1s" }} />
              
              <div 
                className="absolute z-10 right-[-40px] md:right-[-80px] lg:right-[-120px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[560px] md:h-[560px] lg:w-[700px] lg:h-[700px] animate-fade-up opacity-0"
                style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
              >
                <Robo3D className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
