import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Grid3X3, ArrowRight } from "lucide-react";
import { useState, useCallback } from "react";
import { appleSpring, appleScale, useHapticFeedback } from "@/hooks/useHapticFeedback";
import Ripple from "@/components/ui/Ripple";

const ServicesCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { triggerHaptic } = useHapticFeedback({ intensity: "light" });

  const handleClick = useCallback(() => {
    triggerHaptic();
  }, [triggerHaptic]);

  return (
    <Link to="/services" onClick={handleClick} onTouchStart={handleClick}>
      <div className="relative">
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
              hsl(260 60% 50% / 0.25) 0%, 
              hsl(215 60% 50% / 0.1) 40%,
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
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <Ripple color="hsl(260, 60%, 50%)" opacity={0.22} />
          
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(270,80%,65%,0.08)] to-[hsl(215,90%,58%,0.08)]" />
          
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            style={{
              background: `linear-gradient(135deg, hsl(260 60% 50% / 0.06) 0%, transparent 50%)`,
            }}
          />
          
          <div className="relative z-10 flex items-center gap-4">
            <motion.div 
              className="w-11 h-11 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[hsl(270,80%,65%)] to-[hsl(215,90%,58%)] shrink-0"
              whileTap={{ scale: appleScale.icon }}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={appleSpring.tap}
            >
              <Grid3X3 className="w-5 h-5 text-white" />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-foreground font-medium text-sm mb-0.5">Explore All Services</h3>
              <p className="text-muted-foreground text-xs">See everything Pharmih has to offer</p>
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
    </Link>
  );
};

export default ServicesCTA;