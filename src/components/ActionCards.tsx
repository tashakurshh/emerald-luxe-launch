import { FileUp, PenLine, ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";
import { useCallback } from "react";
import { appleSpring, appleScale, useHapticFeedback } from "@/hooks/useHapticFeedback";
import Ripple from "@/components/ui/Ripple";

const ActionCards = () => {
  const { triggerHaptic } = useHapticFeedback({ intensity: "light" });

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
      <motion.div 
        className="glass-card p-6 group cursor-pointer relative overflow-hidden"
        style={{ WebkitTapHighlightColor: 'transparent' }}
        whileTap={{ scale: appleScale.card }}
        transition={appleSpring.tap}
        onClick={handleUploadClick}
        onTouchStart={handleTouchStart}
      >
        <Ripple color="hsl(215, 80%, 55%)" opacity={0.15} />
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[hsl(215,80%,55%)] to-[hsl(260,70%,55%)]">
              <FileUp className="w-7 h-7 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[hsl(142,70%,49%)]" />
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-100" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">Upload Prescription</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">Send your prescription via WhatsApp and we'll prepare your order</p>
        </div>
      </motion.div>

      {/* Enter Medicine Card */}
      <motion.div 
        className="glass-card p-6 group cursor-pointer relative overflow-hidden"
        style={{ WebkitTapHighlightColor: 'transparent' }}
        whileTap={{ scale: appleScale.card }}
        transition={appleSpring.tap}
        onClick={handleMedicineClick}
        onTouchStart={handleTouchStart}
      >
        <Ripple color="hsl(165, 60%, 45%)" opacity={0.15} />
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[hsl(165,60%,45%)] to-[hsl(145,55%,40%)]">
              <PenLine className="w-7 h-7 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[hsl(142,70%,49%)]" />
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-100" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">Enter Medicine Names</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">Tell us what you need on WhatsApp – we'll handle the rest</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ActionCards;
