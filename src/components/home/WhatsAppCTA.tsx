import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";
import { useState, useCallback, forwardRef } from "react";
import { appleSpring, appleScale, useHapticFeedback } from "@/hooks/useHapticFeedback";
import Ripple from "@/components/ui/Ripple";

const WhatsAppCTA = forwardRef<HTMLDivElement>(function WhatsAppCTA(_, ref) {
  const [isHovered, setIsHovered] = useState(false);
  const { triggerHaptic } = useHapticFeedback({ intensity: "light" });

  const handleClick = useCallback(() => {
    triggerHaptic();
    openWhatsApp(whatsappMessages.generalInquiry);
  }, [triggerHaptic]);

  return (
    <div ref={ref} className="relative">
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-2 rounded-3xl pointer-events-none"
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.01 : 0.95,
        }}
        transition={appleSpring.hover}
        style={{
          background: `radial-gradient(ellipse 80% 70% at 50% 50%, 
            hsl(142 60% 45% / 0.3) 0%, 
            hsl(142 50% 40% / 0.12) 40%,
            transparent 70%
          )`,
          filter: 'blur(16px)',
        }}
      />
      
      <motion.div 
        className="glass-card p-5 cursor-pointer group relative overflow-hidden"
        whileHover={{ y: -2 }}
        whileTap={{ scale: appleScale.card }}
        transition={appleSpring.tap}
        onClick={handleClick}
        onTouchStart={() => triggerHaptic()}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <Ripple color="hsl(142, 70%, 49%)" opacity={0.28} />
        
        {/* WhatsApp green gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(142,70%,49%,0.12)] to-transparent" />
        
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            background: `linear-gradient(135deg, hsl(142 60% 45% / 0.08) 0%, transparent 50%)`,
          }}
        />
        
        <div className="relative z-10 flex items-center gap-4">
          <motion.div 
            className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[hsl(142,70%,49%)] shrink-0"
            whileTap={{ scale: appleScale.icon }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={appleSpring.tap}
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </motion.div>
          
          <div className="flex-1">
            <h3 className="text-base font-semibold text-foreground mb-0.5 tracking-tight">Need Help?</h3>
            <p className="text-muted-foreground text-sm">Chat with Pharmih on WhatsApp for instant support</p>
          </div>
          
          <motion.div
            animate={{ x: isHovered ? 3 : 0 }}
            transition={appleSpring.hover}
          >
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
});

export default WhatsAppCTA;