import { Award, TrendingUp, Users } from "lucide-react";

const AuthoritySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08)_0%,transparent_70%)]" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              Criado por quem <span className="text-gradient">faz acontecer</span>
            </h2>
          </div>
          
          <div className="p-8 md:p-12 rounded-3xl bg-card border border-border shadow-premium animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <blockquote className="text-xl md:text-2xl font-medium text-center leading-relaxed mb-8">
              "Criado com base em mais de <span className="text-gradient font-bold">10 anos de experiência real</span> em marketing, vendas e estratégia digital."
            </blockquote>
            
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Award className="w-5 h-5 text-primary" />
                <span>Experiência comprovada</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Resultados reais</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span>Mercado brasileiro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
