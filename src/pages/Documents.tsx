import { motion } from "framer-motion";
import { FileText, Upload, ArrowRight, Shield, Lock } from "lucide-react";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import BottomNav from "@/components/BottomNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";
import { useState } from "react";

// Apple spring physics
const springTap = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
  mass: 0.8,
};

const springHover = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
};

// Apple-style sheet animation
const sheetVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const Documents = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  const handleUpload = () => {
    openWhatsApp(whatsappMessages.uploadPrescription);
  };

  return (
    <div className="page-container">
      <ParallaxBackground />
      <DynamicIslandNav />

      <main className="container mx-auto px-4 pt-24 pb-28 md:pb-12 max-w-xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-2xl font-semibold text-foreground mb-6">Documents</h1>

          {/* Empty State - Secure file feel */}
          <motion.div 
            className="glass-card p-8 text-center mb-5 relative overflow-hidden"
            custom={0}
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.985 }}
            transition={springTap}
          >
            {/* Secure ambient glow */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                background: `radial-gradient(ellipse 70% 50% at 50% 40%, 
                  hsl(145 60% 45% / 0.1) 0%, 
                  transparent 60%
                )`,
              }}
            />
            
            <motion.div 
              className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-[hsl(145,65%,48%,0.15)] flex items-center justify-center relative z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <FileText className="w-10 h-10 text-[hsl(145,65%,48%)]" />
              
              {/* Security badge */}
              <motion.div
                className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-background flex items-center justify-center shadow-sm"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Lock className="w-3.5 h-3.5 text-muted-foreground" />
              </motion.div>
            </motion.div>
            
            <motion.h2 
              className="text-xl font-semibold text-foreground mb-2 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              No documents yet
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-sm relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Share your prescriptions and reports directly via WhatsApp for a seamless ordering experience.
            </motion.p>
          </motion.div>

          {/* Upload CTA - Deliberate action feel */}
          <motion.div 
            className="relative"
            custom={1}
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="absolute -inset-2 rounded-2xl pointer-events-none"
              animate={{
                opacity: isHovered ? 0.6 : 0,
                scale: isHovered ? 1.02 : 0.95,
              }}
              transition={springHover}
              style={{
                background: `radial-gradient(ellipse 80% 70% at 50% 50%, 
                  hsl(215 70% 50% / 0.3) 0%, 
                  hsl(215 60% 45% / 0.12) 40%,
                  transparent 70%
                )`,
                filter: 'blur(14px)',
              }}
            />
            
            <motion.div
              className="glass-card p-5 cursor-pointer group relative overflow-hidden"
              whileHover={{ y: -2, boxShadow: '0 8px 30px -8px hsl(215 70% 50% / 0.15)' }}
              whileTap={{ scale: 0.975, y: 0 }}
              transition={springTap}
              onClick={handleUpload}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: `linear-gradient(135deg, hsl(215 70% 50% / 0.08) 0%, transparent 50%)`,
                }}
              />
              
              <div className="flex items-center gap-4 relative z-10">
                <motion.div 
                  className="w-12 h-12 rounded-2xl bg-[hsl(215,90%,58%,0.15)] flex items-center justify-center shrink-0"
                  whileTap={{ scale: 0.9 }}
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={springTap}
                >
                  <Upload className="w-6 h-6 text-[hsl(215,90%,58%)]" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-foreground font-semibold mb-0.5">Upload Prescription</h3>
                  <p className="text-muted-foreground text-sm">Share on WhatsApp to start your order</p>
                </div>
                <motion.div
                  animate={{ x: isHovered ? 3 : 0 }}
                  transition={springHover}
                >
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Security Info */}
          <motion.div 
            className="mt-5 glass-card p-4 relative overflow-hidden"
            custom={2}
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.985 }}
            transition={springTap}
          >
            {/* Soft glow on active */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              style={{
                background: `radial-gradient(ellipse 60% 40% at 20% 50%, 
                  hsl(145 60% 45% / 0.1) 0%, 
                  transparent 60%
                )`,
              }}
            />
            
            <div className="flex items-start gap-3 relative z-10">
              <motion.div 
                className="w-10 h-10 rounded-xl bg-[hsl(145,65%,48%,0.15)] flex items-center justify-center shrink-0"
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                <Shield className="w-5 h-5 text-[hsl(145,65%,48%)]" />
              </motion.div>
              <div>
                <h4 className="text-foreground font-medium mb-0.5 text-sm">Your documents are safe</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  All prescriptions shared via WhatsApp are handled with strict confidentiality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div 
            className="mt-4 p-4 rounded-2xl bg-secondary/30 text-center"
            custom={3}
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            whileTap={{ scale: 0.98 }}
            transition={springTap}
          >
            <p className="text-sm text-muted-foreground">
              Simply send your prescription image on WhatsApp and we'll handle the rest.
            </p>
          </motion.div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Documents;