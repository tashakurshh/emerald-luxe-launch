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
import LocationBanner from "@/components/home/LocationBanner";
import ServicesCTA from "@/components/home/ServicesCTA";
import WhatsAppCTA from "@/components/home/WhatsAppCTA";

// iOS spring physics
const springConfig = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

const staggerDelay = 0.06;

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
        {/* Greeting - minimal, confident */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: staggerDelay }}
        >
          <p className="text-muted-foreground text-sm font-medium mb-0.5">Welcome to Pharmih</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
            Hi, {userName}
          </h1>
        </motion.div>

        <div className="space-y-5">
          {/* Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ ...springConfig, delay: staggerDelay * 2 }}
          >
            <HeroVisual />
          </motion.div>

          {/* Action Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ ...springConfig, delay: staggerDelay * 3 }}
          >
            <ActionCards />
          </motion.div>

          {/* Location Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ ...springConfig, delay: staggerDelay * 4 }}
          >
            <LocationBanner />
          </motion.div>

          {/* How It Works */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ ...springConfig, delay: staggerDelay * 5 }}
          >
            <HowItWorks />
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ ...springConfig, delay: staggerDelay * 6 }}
          >
            <ServicesCard />
          </motion.div>

          {/* Services CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ ...springConfig, delay: staggerDelay * 7 }}
          >
            <ServicesCTA />
          </motion.div>

          {/* Trust Section */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ ...springConfig, delay: staggerDelay * 8 }}
          >
            <TrustSection />
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ ...springConfig, delay: staggerDelay * 9 }}
          >
            <WhatsAppCTA />
          </motion.div>

          {/* Footer Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ ...springConfig, delay: staggerDelay * 10 }}
          >
            <FooterVisual />
          </motion.div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;