import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import AgitationSection from "@/components/AgitationSection";
import AuthorStorySection from "@/components/AuthorStorySection";
import MethodSection from "@/components/MethodSection";
import BenefitsSection from "@/components/BenefitsSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <PainSection />
      <AgitationSection />
      <AuthorStorySection />
      <MethodSection />
      <BenefitsSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
