import { XCircle, AlertCircle, Clock, TrendingDown } from "lucide-react";

const painPoints = [
  {
    icon: AlertCircle,
    title: "Respostas genéricas",
    description: "O ChatGPT responde qualquer coisa, menos o que você precisa."
  },
  {
    icon: TrendingDown,
    title: "Falta de estratégia",
    description: "Você pede, ele responde. Mas sem direção, sem método, sem resultado."
  },
  {
    icon: Clock,
    title: "Perda de tempo",
    description: "Horas testando prompts que não funcionam. Resultado: frustração."
  },
  {
    icon: XCircle,
    title: "Conteúdo que não vende",
    description: "Textos bonitos, mas sem conversão. Sem CTA. Sem propósito."
  }
];

const PainSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            O problema <span className="text-gradient">não é o ChatGPT.</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            É não saber o que pedir para ele.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <div 
              key={point.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-up opacity-0"
              style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-destructive/10 text-destructive group-hover:bg-destructive/20 transition-colors">
                  <point.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
