import { ArrowRight, Sparkles, Bot, Cpu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
            <div className="flex-1 relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center">
              {/* Animated orbs */}
              <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/30 via-purple-500/20 to-blue-500/30 blur-3xl animate-float" />
              <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-500/20 via-primary/20 to-pink-500/20 blur-3xl animate-float delay-300" style={{ animationDelay: "1s" }} />
              
              {/* Central AI Bot visual */}
              <div 
                className="relative z-10 animate-fade-up opacity-0"
                style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
              >
                {/* Outer ring */}
                <div className="absolute inset-0 -m-8 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-0 -m-16 rounded-full border border-primary/10 animate-[spin_30s_linear_infinite_reverse]" />
                <div className="absolute inset-0 -m-24 rounded-full border border-primary/5 animate-[spin_40s_linear_infinite]" />
                
                {/* Main container */}
                <div className="relative p-8 md:p-12 rounded-3xl bg-card/80 backdrop-blur-xl border border-primary/20 shadow-premium">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
                  
                  {/* Icon grid */}
                  <div className="relative grid grid-cols-2 gap-6 md:gap-8">
                    <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors group">
                      <Bot className="w-10 h-10 md:w-12 md:h-12 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-xs md:text-sm font-medium text-center">IA Estratégica</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors group">
                      <Cpu className="w-10 h-10 md:w-12 md:h-12 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-xs md:text-sm font-medium text-center">Automação</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors group">
                      <Zap className="w-10 h-10 md:w-12 md:h-12 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-xs md:text-sm font-medium text-center">Produtividade</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors group">
                      <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-xs md:text-sm font-medium text-center">Criatividade</span>
                    </div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow whitespace-nowrap">
                    1.500+ Prompts
                  </div>
                </div>
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
