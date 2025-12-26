import { Check, Crown, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "START",
    subtitle: "SOB MEDIDA",
    price: "19,90",
    features: [
      "Escolhe 10 prompts",
      "Escolhe as categorias",
      "Entrega imediata",
      "Ideal para testar"
    ],
    icon: Zap,
    highlighted: false
  },
  {
    name: "ABSOLUTO",
    subtitle: "ACESSO COMPLETO",
    price: "49,90",
    originalPrice: "297",
    features: [
      "Acesso aos 1.500 prompts",
      "Todas as 30 categorias",
      "Do planejamento à venda",
      "Atualizações futuras"
    ],
    icon: Crown,
    highlighted: true,
    badge: "Mais escolhido"
  },
  {
    name: "PRO",
    subtitle: "CONTROLE TOTAL",
    price: "39,90",
    features: [
      "Escolhe 100 prompts",
      "Liberdade de categorias",
      "Ideal para criar e vender",
      "Entrega imediata"
    ],
    icon: Star,
    highlighted: false
  }
];

const PricingSection = () => {
  return (
    <section id="planos" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1)_0%,transparent_70%)]" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            Escolha seu <span className="text-gradient">arsenal</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Três opções para diferentes necessidades. Uma certeza: você vai parar de perder tempo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative rounded-2xl p-6 transition-all duration-500 animate-fade-up opacity-0 ${
                plan.highlighted 
                  ? "bg-card border-2 border-primary shadow-glow md:-mt-4 md:mb-4 md:scale-105 z-10" 
                  : "bg-card border border-border hover:border-primary/30"
              }`}
              style={{ 
                animationDelay: `${0.3 + index * 0.15}s`, 
                animationFillMode: "forwards",
                order: index === 1 ? 1 : index === 0 ? 0 : 2
              }}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold animate-pulse-glow">
                    <Crown className="w-4 h-4" />
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6 pt-2">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${plan.highlighted ? "bg-primary/20" : "bg-muted"}`}>
                  <plan.icon className={`w-6 h-6 ${plan.highlighted ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <h3 className="font-display text-xl font-bold mb-1">PLANO {plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
              </div>
              
              <div className="text-center mb-6">
                {plan.originalPrice && (
                  <p className="text-muted-foreground line-through text-sm mb-1">
                    R$ {plan.originalPrice}
                  </p>
                )}
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className={`font-display text-4xl font-bold ${plan.highlighted ? "text-gradient" : ""}`}>
                    {plan.price}
                  </span>
                </div>
                {plan.highlighted && (
                  <p className="text-sm text-primary font-medium mt-1">
                    Economia de 83%
                  </p>
                )}
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-primary" : "text-muted-foreground"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-6 font-semibold transition-all duration-300 ${
                  plan.highlighted 
                    ? "bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow hover:scale-105" 
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                {plan.highlighted ? "Quero acesso completo" : "Escolher este plano"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
