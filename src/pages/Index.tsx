import { useState } from "react";
import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import WelcomeModal from "@/components/WelcomeModal";
import HeroVisual from "@/components/HeroVisual";
import ServicesCard from "@/components/ServicesCard";
import ActionCards from "@/components/ActionCards";
import FooterVisual from "@/components/FooterVisual";
import HowItWorks from "@/components/home/HowItWorks";
import TrustSection from "@/components/home/TrustSection";
import TrustedPharmacies from "@/components/home/TrustedPharmacies";
import LocationBanner from "@/components/home/LocationBanner";
import ServicesCTA from "@/components/home/ServicesCTA";
import WhatsAppCTA from "@/components/home/WhatsAppCTA";
import OfferSection from "@/components/home/OfferSection";
// Simplified animation config
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }
};

const Index = () => {
  const { userName, setUserName } = useApp();
  const [showWelcome, setShowWelcome] = useState(!userName);

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setShowWelcome(false);
  };

  if (!userName && showWelcome) {
    return <WelcomeModal onComplete={handleNameSubmit} />;
  }

  return (
    <div className="page-container">
      <ParallaxBackground />
      <DynamicIslandNav />

      <main className="container mx-auto px-4 pt-24 pb-28 md:pb-12 max-w-xl relative z-10">
        {/* Greeting */}
        <motion.div className="mb-8" {...fadeIn}>
          <p className="text-muted-foreground text-sm font-medium mb-0.5">Welcome to Pharmih</p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            <span className="text-foreground">Hi, </span>
            <span className="apple-spectrum-gradient">{userName}</span>
          </h1>
        </motion.div>

        <div className="space-y-5">
          <HeroVisual />
          <OfferSection />
          <ActionCards />
          <LocationBanner />
          <HowItWorks />
          <ServicesCard />
          <ServicesCTA />
          <TrustSection />
          <TrustedPharmacies />
          <WhatsAppCTA />
          <FooterVisual />
        </div>
      </main>
    </div>
  );
};

export default Index;
