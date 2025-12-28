import { useState } from "react";
import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import BottomNav from "@/components/BottomNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import WelcomeModal from "@/components/WelcomeModal";
import HeroVisual from "@/components/HeroVisual";
import ServicesCard from "@/components/ServicesCard";
import ActionCards from "@/components/ActionCards";
import FooterVisual from "@/components/FooterVisual";
import HowItWorks from "@/components/home/HowItWorks";
import TrustSection from "@/components/home/TrustSection";
import DeliveryPromise from "@/components/home/DeliveryPromise";
import WhatsAppCTA from "@/components/home/WhatsAppCTA";

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

      <main className="container mx-auto px-4 pt-28 pb-32 md:pb-16 max-w-2xl relative z-10">
        {/* Greeting */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-muted-foreground text-sm font-medium mb-1">Good to see you</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            Hi, <span className="gradient-text-vibrant">{userName}</span>
          </h1>
        </motion.div>

        <div className="space-y-6">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <HeroVisual />
          </motion.div>

          {/* Action Cards - Upload Prescription / Enter Medicine */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <ActionCards />
          </motion.div>

          {/* How It Works */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            <HowItWorks />
          </motion.div>

          {/* Services Grid */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <ServicesCard />
          </motion.div>

          {/* Trust Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
            <TrustSection />
          </motion.div>

          {/* Delivery Promise */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <DeliveryPromise />
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
            <WhatsAppCTA />
          </motion.div>

          {/* Footer Visual */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <FooterVisual />
          </motion.div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
