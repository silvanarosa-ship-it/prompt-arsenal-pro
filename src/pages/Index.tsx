import { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import PainSection from "@/components/sections/PainSection";
import SolutionSection from "@/components/sections/SolutionSection";
import AuthoritySection from "@/components/sections/AuthoritySection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  useEffect(() => {
    // Force dark mode for premium feel
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <AuthoritySection />
      <CategoriesSection />
      <PricingSection />
      <TestimonialSection />
      <GuaranteeSection />
      <FinalCTASection />
      <FooterSection />
    </main>
  );
};

export default Index;
