import { motion } from "framer-motion";
import { MapPin, Gift, Truck } from "lucide-react";

// Apple spring physics
const springTap = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
  mass: 0.8,
};

const LocationBanner = () => {
  return (
    <motion.div 
      className="glass-card p-5"
      whileTap={{ scale: 0.985 }}
      transition={springTap}
    >
      <div className="space-y-3">
        {/* Location */}
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div 
            className="w-10 h-10 rounded-xl bg-[hsl(215,90%,58%,0.15)] flex items-center justify-center shrink-0"
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
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
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div 
            className="w-10 h-10 rounded-xl bg-[hsl(145,65%,48%,0.15)] flex items-center justify-center shrink-0"
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
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
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div 
            className="w-10 h-10 rounded-xl bg-[hsl(30,100%,58%,0.15)] flex items-center justify-center shrink-0"
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
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