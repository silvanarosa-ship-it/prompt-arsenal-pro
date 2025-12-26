import { Shield, Zap, Mail, HeadphonesIcon } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            <span>Compra segura</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span>Entrega digital imediata</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <span>7 dias de garantia</span>
          </div>
          <div className="flex items-center gap-2">
            <HeadphonesIcon className="w-4 h-4 text-primary" />
            <span>Suporte por email</span>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">
            1.500 Prompts Estratégicos de Marketing, Vendas e Produtividade
          </p>
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
