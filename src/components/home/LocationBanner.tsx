import { motion } from "framer-motion";
import { MapPin, Gift, Truck } from "lucide-react";
import { appleSpring, appleScale, useHapticFeedback } from "@/hooks/useHapticFeedback";
import { useCallback } from "react";

const LocationBanner = () => {
  const { triggerHaptic } = useHapticFeedback({ intensity: "light" });

  const handleItemTap = useCallback(() => {
    triggerHaptic();
  }, [triggerHaptic]);

  return (
    <motion.div 
      className="glass-card p-5"
      whileTap={{ scale: appleScale.card }}
      transition={appleSpring.tap}
    >
      <div className="space-y-3">
        {/* Location */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          whileTap={{ scale: appleScale.subtle }}
          onClick={handleItemTap}
        >
          <motion.div 
            className="w-10 h-10 rounded-xl bg-[hsl(215,90%,58%,0.15)] flex items-center justify-center shrink-0"
            whileTap={{ scale: appleScale.icon }}
            transition={appleSpring.tap}
          >
            <MapPin className="w-5 h-5 text-[hsl(215,90%,58%)]" />
          </motion.div>
          <div>
            <p className="font-medium text-sm text-foreground">Citywide Delivery</p>
            <p className="text-xs text-muted-foreground">Currently serving Srinagar</p>
          </div>
        </motion.div>

        {/* First Order Offer */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          whileTap={{ scale: appleScale.subtle }}
          onClick={handleItemTap}
        >
          <motion.div 
            className="w-10 h-10 rounded-xl bg-[hsl(145,65%,48%,0.15)] flex items-center justify-center shrink-0"
            whileTap={{ scale: appleScale.icon }}
            transition={appleSpring.tap}
          >
            <Gift className="w-5 h-5 text-[hsl(145,65%,48%)]" />
          </motion.div>
          <div>
            <p className="font-medium text-sm text-foreground">First Order Offer</p>
            <p className="text-xs text-muted-foreground">Delivery charges not applicable</p>
          </div>
        </motion.div>

        {/* Delivery Promise */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          whileTap={{ scale: appleScale.subtle }}
          onClick={handleItemTap}
        >
          <motion.div 
            className="w-10 h-10 rounded-xl bg-[hsl(30,100%,58%,0.15)] flex items-center justify-center shrink-0"
            whileTap={{ scale: appleScale.icon }}
            transition={appleSpring.tap}
          >
            <Truck className="w-5 h-5 text-[hsl(30,100%,58%)]" />
          </motion.div>
          <div>
            <p className="font-medium text-sm text-foreground">24-Hour Delivery</p>
            <p className="text-xs text-muted-foreground">Fast & reliable service across the city</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LocationBanner;