import { FileUp, PenLine, ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";
import { useState } from "react";

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
            opacity: hoveredCard === 'upload' ? 0.7 : 0,
            scale: hoveredCard === 'upload' ? 1.02 : 0.95,
          }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            background: `radial-gradient(ellipse 80% 70% at 50% 50%, 
              hsl(215 70% 45% / 0.35) 0%, 
              hsl(260 50% 40% / 0.15) 40%,
              transparent 70%
            )`,
            filter: 'blur(20px)',
          }}
        />
        
        <motion.div 
          className="glass-card p-6 group cursor-pointer relative overflow-hidden"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleUploadClick}
          onHoverStart={() => setHoveredCard('upload')}
          onHoverEnd={() => setHoveredCard(null)}
        >
          {/* Inner gradient on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[hsl(215,80%,55%,0.12)] via-[hsl(260,60%,50%,0.08)] to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredCard === 'upload' ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ 
              x: hoveredCard === 'upload' ? '100%' : '-100%',
              opacity: hoveredCard === 'upload' ? 0.15 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              background: 'linear-gradient(90deg, transparent, hsl(210 80% 70% / 0.3), transparent)',
            }}
          />
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-5">
              <motion.div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[hsl(215,80%,55%)] to-[hsl(260,70%,55%)]"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
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
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
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
            opacity: hoveredCard === 'medicine' ? 0.7 : 0,
            scale: hoveredCard === 'medicine' ? 1.02 : 0.95,
          }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            background: `radial-gradient(ellipse 80% 70% at 50% 50%, 
              hsl(165 60% 40% / 0.35) 0%, 
              hsl(145 50% 35% / 0.15) 40%,
              transparent 70%
            )`,
            filter: 'blur(20px)',
          }}
        />
        
        <motion.div 
          className="glass-card p-6 group cursor-pointer relative overflow-hidden"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleMedicineClick}
          onHoverStart={() => setHoveredCard('medicine')}
          onHoverEnd={() => setHoveredCard(null)}
        >
          {/* Inner gradient on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[hsl(165,60%,45%,0.12)] via-[hsl(145,50%,40%,0.08)] to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredCard === 'medicine' ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ 
              x: hoveredCard === 'medicine' ? '100%' : '-100%',
              opacity: hoveredCard === 'medicine' ? 0.15 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              background: 'linear-gradient(90deg, transparent, hsl(165 70% 60% / 0.3), transparent)',
            }}
          />
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-5">
              <motion.div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[hsl(165,60%,45%)] to-[hsl(145,55%,40%)]"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
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
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
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