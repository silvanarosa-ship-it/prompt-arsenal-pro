import { CheckCircle, Layers, Target, Zap, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Layers,
    title: "Prompts organizados",
    description: "30 categorias estratégicas. Tudo no lugar certo."
  },
  {
    icon: Target,
    title: "Objetivo claro",
    description: "Cada prompt foi criado com um resultado específico em mente."
  },
  {
    icon: CheckCircle,
    title: "Aplicação prática",
    description: "Nada de teoria. Só o que funciona na vida real."
  },
  {
    icon: Zap,
    title: "Uso imediato",
    description: "Copie, cole, adapte. Resultados em minutos."
  }
];

const SolutionSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <ArrowRight className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">A Solução</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Um <span className="text-gradient">sistema estratégico</span> pronto para usar
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Mais de 1.500 prompts testados, organizados e prontos para gerar resultados reais no seu negócio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={solution.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center animate-fade-up opacity-0"
              style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-primary mb-4 group-hover:shadow-glow transition-shadow">
                <solution.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{solution.title}</h3>
              <p className="text-muted-foreground text-sm">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
