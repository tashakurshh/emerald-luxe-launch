import { FileUp, PenLine, ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";
import { useCallback } from "react";
import { appleSpring, appleScale, useHapticFeedback } from "@/hooks/useHapticFeedback";
import Ripple from "@/components/ui/Ripple";

const ActionCards = () => {
  const { triggerHaptic } = useHapticFeedback({ intensity: "medium" });

  const handleUploadClick = useCallback(() => {
    triggerHaptic();
    openWhatsApp(whatsappMessages.uploadPrescription);
  }, [triggerHaptic]);

  const handleMedicineClick = useCallback(() => {
    triggerHaptic();
    openWhatsApp(whatsappMessages.enterMedicine);
  }, [triggerHaptic]);

  // Touch start triggers haptic immediately
  const handleTouchStart = useCallback(() => {
    triggerHaptic();
  }, [triggerHaptic]);

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* Upload Prescription Card */}
      <div className="relative">
        {/* Animated glow behind card */}
        <motion.div
          className="absolute -inset-[2px] rounded-[22px] pointer-events-none"
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.01, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: 'linear-gradient(135deg, hsl(280 85% 55%) 0%, hsl(211 100% 55%) 50%, hsl(260 70% 55%) 100%)',
            filter: 'blur(12px)',
          }}
        />
        
        <motion.div 
          className="shimmer-effect relative p-6 group cursor-pointer overflow-hidden rounded-[20px]"
          style={{ 
            WebkitTapHighlightColor: 'transparent',
            background: 'linear-gradient(135deg, hsl(280 75% 55%) 0%, hsl(211 100% 55%) 50%, hsl(260 70% 50%) 100%)',
            boxShadow: '0 4px 24px hsl(211 100% 50% / 0.3), 0 2px 8px hsl(280 80% 50% / 0.2), inset 0 1px 0 hsl(0 0% 100% / 0.15)',
          }}
          whileTap={{ scale: appleScale.card }}
          transition={appleSpring.tap}
          onClick={handleUploadClick}
          onTouchStart={handleTouchStart}
        >
          <Ripple color="hsl(0 0% 100%)" opacity={0.3} />
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-5">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/20 backdrop-blur-sm">
                <FileUp className="w-7 h-7 text-white" />
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-white/80" />
                <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-100" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Upload Prescription</h3>
            <p className="text-white/80 text-sm leading-relaxed">Send your prescription via WhatsApp and we'll prepare your order</p>
          </div>
        </motion.div>
      </div>

      {/* Enter Medicine Card */}
      <div className="relative">
        {/* Animated glow behind card */}
        <motion.div
          className="absolute -inset-[2px] rounded-[22px] pointer-events-none"
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.01, 1],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, hsl(170 80% 45%) 0%, hsl(145 75% 45%) 50%, hsl(195 85% 50%) 100%)',
            filter: 'blur(12px)',
          }}
        />
        
        <motion.div 
          className="shimmer-effect relative p-6 group cursor-pointer overflow-hidden rounded-[20px]"
          style={{ 
            WebkitTapHighlightColor: 'transparent',
            background: 'linear-gradient(135deg, hsl(170 75% 45%) 0%, hsl(145 70% 45%) 50%, hsl(195 80% 50%) 100%)',
            boxShadow: '0 4px 24px hsl(170 80% 45% / 0.3), 0 2px 8px hsl(145 75% 45% / 0.2), inset 0 1px 0 hsl(0 0% 100% / 0.15)',
          }}
          whileTap={{ scale: appleScale.card }}
          transition={appleSpring.tap}
          onClick={handleMedicineClick}
          onTouchStart={handleTouchStart}
        >
          <Ripple color="hsl(0 0% 100%)" opacity={0.3} />
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-5">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/20 backdrop-blur-sm">
                <PenLine className="w-7 h-7 text-white" />
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-white/80" />
                <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-100" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Enter Medicine Names</h3>
            <p className="text-white/80 text-sm leading-relaxed">Tell us what you need on WhatsApp – we'll handle the rest</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ActionCards;
