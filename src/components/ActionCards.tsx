import { FileUp, PenLine, ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";
import { useState } from "react";

// Apple spring physics - immediate response, smooth release
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

const ActionCards = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleUploadClick = () => {
    openWhatsApp(whatsappMessages.uploadPrescription);
  };

  const handleMedicineClick = () => {
    openWhatsApp(whatsappMessages.enterMedicine);
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* Upload Prescription Card */}
      <div className="relative">
        {/* Glow effect behind card */}
        <motion.div
          className="absolute -inset-3 rounded-3xl pointer-events-none"
          animate={{
            opacity: hoveredCard === 'upload' ? 0.6 : 0,
            scale: hoveredCard === 'upload' ? 1.01 : 0.95,
          }}
          transition={springHover}
          style={{
            background: `radial-gradient(ellipse 80% 70% at 50% 50%, 
              hsl(215 70% 45% / 0.3) 0%, 
              hsl(260 50% 40% / 0.12) 40%,
              transparent 70%
            )`,
            filter: 'blur(18px)',
          }}
        />
        
        <motion.div 
          className="glass-card p-6 group cursor-pointer relative overflow-hidden"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.975 }}
          transition={springTap}
          onClick={handleUploadClick}
          onHoverStart={() => setHoveredCard('upload')}
          onHoverEnd={() => setHoveredCard(null)}
        >
          {/* Inner gradient on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[hsl(215,80%,55%,0.1)] via-[hsl(260,60%,50%,0.06)] to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredCard === 'upload' ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-5">
              <motion.div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[hsl(215,80%,55%)] to-[hsl(260,70%,55%)]"
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                <FileUp className="w-7 h-7 text-white" />
              </motion.div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[hsl(142,70%,49%)]" />
                <motion.div
                  animate={{ 
                    x: hoveredCard === 'upload' ? 2 : 0,
                    y: hoveredCard === 'upload' ? -2 : 0,
                  }}
                  transition={springHover}
                >
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-150" />
                </motion.div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">Upload Prescription</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Send your prescription via WhatsApp and we'll prepare your order</p>
          </div>
        </motion.div>
      </div>

      {/* Enter Medicine Card */}
      <div className="relative">
        {/* Glow effect behind card */}
        <motion.div
          className="absolute -inset-3 rounded-3xl pointer-events-none"
          animate={{
            opacity: hoveredCard === 'medicine' ? 0.6 : 0,
            scale: hoveredCard === 'medicine' ? 1.01 : 0.95,
          }}
          transition={springHover}
          style={{
            background: `radial-gradient(ellipse 80% 70% at 50% 50%, 
              hsl(165 60% 40% / 0.3) 0%, 
              hsl(145 50% 35% / 0.12) 40%,
              transparent 70%
            )`,
            filter: 'blur(18px)',
          }}
        />
        
        <motion.div 
          className="glass-card p-6 group cursor-pointer relative overflow-hidden"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.975 }}
          transition={springTap}
          onClick={handleMedicineClick}
          onHoverStart={() => setHoveredCard('medicine')}
          onHoverEnd={() => setHoveredCard(null)}
        >
          {/* Inner gradient on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[hsl(165,60%,45%,0.1)] via-[hsl(145,50%,40%,0.06)] to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredCard === 'medicine' ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-5">
              <motion.div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[hsl(165,60%,45%)] to-[hsl(145,55%,40%)]"
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                <PenLine className="w-7 h-7 text-white" />
              </motion.div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[hsl(142,70%,49%)]" />
                <motion.div
                  animate={{ 
                    x: hoveredCard === 'medicine' ? 2 : 0,
                    y: hoveredCard === 'medicine' ? -2 : 0,
                  }}
                  transition={springHover}
                >
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-150" />
                </motion.div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">Enter Medicine Names</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Tell us what you need on WhatsApp – we'll handle the rest</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ActionCards;