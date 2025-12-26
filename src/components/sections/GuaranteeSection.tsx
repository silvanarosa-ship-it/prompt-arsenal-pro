import { Shield, RefreshCcw, Clock } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className="inline-flex p-6 rounded-full bg-primary/10 mb-8 animate-fade-up opacity-0"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <Shield className="w-16 h-16 text-primary" />
          </div>
          
          <h2 
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            7 dias de <span className="text-gradient">garantia incondicional</span>
          </h2>
          
          <p 
            className="text-xl text-muted-foreground mb-8 animate-fade-up opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Ou você vê valor, ou não paga. Simples assim.
          </p>
          
          <div 
            className="flex flex-wrap justify-center gap-6 animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span>7 dias para testar</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <RefreshCcw className="w-5 h-5 text-primary" />
              <span>Reembolso sem perguntas</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span>Risco zero</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
