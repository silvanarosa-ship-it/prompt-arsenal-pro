import { 
  BarChart3, Brain, Briefcase, FileText, Globe, Heart, 
  Layers, LineChart, Mail, Megaphone, MessageSquare, 
  Monitor, PenTool, Rocket, Search, Settings, Share2, 
  ShoppingCart, Sparkles, Star, Target, TrendingUp, 
  Users, Video, Zap, Award, Building, Lightbulb, Repeat, Scale
} from "lucide-react";

const categories = [
  { icon: Target, name: "Estratégia de Marketing" },
  { icon: Building, name: "Estratégia de Marca" },
  { icon: PenTool, name: "Copywriting" },
  { icon: Zap, name: "Produtividade" },
  { icon: Users, name: "Geração de Leads" },
  { icon: FileText, name: "Marketing de Conteúdo" },
  { icon: Megaphone, name: "Campanhas de Marketing" },
  { icon: BarChart3, name: "Análise de Dados e Métricas" },
  { icon: Mail, name: "Email Marketing" },
  { icon: Share2, name: "Redes Sociais" },
  { icon: Search, name: "SEO e Marketing de Busca" },
  { icon: Sparkles, name: "Branding e Identidade Visual" },
  { icon: Star, name: "Marketing de Influência" },
  { icon: Rocket, name: "Campanhas Sazonais" },
  { icon: Settings, name: "Automação de Marketing" },
  { icon: Brain, name: "Copywriting Avançado" },
  { icon: Heart, name: "Engajamento e Fidelização" },
  { icon: ShoppingCart, name: "E-commerce e Vendas Online" },
  { icon: LineChart, name: "SEO Avançado" },
  { icon: Repeat, name: "Campanhas de Retargeting" },
  { icon: Monitor, name: "Landing Pages" },
  { icon: Layers, name: "Conteúdo Visual" },
  { icon: Video, name: "Marketing por Vídeo" },
  { icon: Briefcase, name: "Parcerias e Co-Marketing" },
  { icon: TrendingUp, name: "Lançamento de Produtos" },
  { icon: Award, name: "Táticas de Vendas Avançadas" },
  { icon: MessageSquare, name: "Branding Pessoal" },
  { icon: Globe, name: "Conteúdo Avançado" },
  { icon: Lightbulb, name: "Autoridade no Mercado" },
  { icon: Scale, name: "Crescimento e Escala" }
];

const CategoriesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            O que você <span className="text-gradient">vai receber</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            30 categorias estratégicas para dominar o ChatGPT
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className="group p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:bg-accent/50 transition-all duration-300 hover:-translate-y-1 cursor-default animate-fade-up opacity-0"
              style={{ animationDelay: `${0.1 + (index * 0.02)}s`, animationFillMode: "forwards" }}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium leading-tight">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
