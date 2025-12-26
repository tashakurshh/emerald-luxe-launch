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
import UploadPrescriptionModal from "@/components/modals/UploadPrescriptionModal";
import EnterMedicineModal from "@/components/modals/EnterMedicineModal";

const Index = () => {
  const { userName, setUserName } = useApp();
  const [showWelcome, setShowWelcome] = useState(!userName);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showMedicineModal, setShowMedicineModal] = useState(false);

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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <HeroVisual />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <ServicesCard />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <ActionCards 
              onUploadClick={() => setShowUploadModal(true)}
              onMedicineClick={() => setShowMedicineModal(true)}
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <FooterVisual />
          </motion.div>
        </div>
      </main>

      <BottomNav />
      <UploadPrescriptionModal isOpen={showUploadModal} onClose={() => setShowUploadModal(false)} />
      <EnterMedicineModal isOpen={showMedicineModal} onClose={() => setShowMedicineModal(false)} />
    </div>
  );
};

export default Index;
