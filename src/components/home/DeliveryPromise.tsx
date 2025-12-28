import { motion } from "framer-motion";
import { MapPin, Timer, Package } from "lucide-react";

const DeliveryPromise = () => {
  return (
    <div className="glass-card p-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(145,65%,48%,0.08)] via-transparent to-[hsl(215,90%,58%,0.08)]" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[hsl(145,65%,48%,0.15)]">
            <Package className="w-6 h-6 text-[hsl(145,65%,48%)]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground tracking-tight">Fast & Local Delivery</h3>
            <p className="text-muted-foreground text-sm">We're in your neighborhood</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-5">
          <motion.div
            className="text-center p-4 rounded-2xl bg-card/50"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Timer className="w-6 h-6 mx-auto mb-2 text-[hsl(30,100%,58%)]" />
            <p className="text-2xl font-bold text-foreground">24 hrs</p>
            <p className="text-xs text-muted-foreground">Fast Delivery</p>
          </motion.div>
          
          <motion.div
            className="text-center p-4 rounded-2xl bg-card/50"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <MapPin className="w-6 h-6 mx-auto mb-2 text-[hsl(215,90%,58%)]" />
            <p className="text-2xl font-bold text-foreground">Citywide</p>
            <p className="text-xs text-muted-foreground">Coverage Area</p>
          </motion.div>
        </div>
        
        <p className="text-center text-muted-foreground text-sm mt-5">
          Free delivery on orders above ₹500
        </p>
      </div>
    </div>
  );
};

export default DeliveryPromise;
