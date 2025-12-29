import { motion } from "framer-motion";
import { MapPin, Gift, Truck } from "lucide-react";

const LocationBanner = () => {
  return (
    <div className="glass-card p-5">
      <div className="space-y-4">
        {/* Location */}
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="w-12 h-12 rounded-2xl bg-[hsl(215,90%,58%,0.15)] flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6 text-[hsl(215,90%,58%)]" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Citywide Delivery</p>
            <p className="text-sm text-muted-foreground">Currently serving Srinagar</p>
          </div>
        </motion.div>

        {/* First Order Offer */}
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-12 h-12 rounded-2xl bg-[hsl(145,65%,48%,0.15)] flex items-center justify-center shrink-0">
            <Gift className="w-6 h-6 text-[hsl(145,65%,48%)]" />
          </div>
          <div>
            <p className="font-semibold text-foreground">First Order Offer</p>
            <p className="text-sm text-muted-foreground">Delivery charges not applicable</p>
          </div>
        </motion.div>

        {/* Delivery Promise */}
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="w-12 h-12 rounded-2xl bg-[hsl(30,100%,58%,0.15)] flex items-center justify-center shrink-0">
            <Truck className="w-6 h-6 text-[hsl(30,100%,58%)]" />
          </div>
          <div>
            <p className="font-semibold text-foreground">24-Hour Delivery</p>
            <p className="text-sm text-muted-foreground">Fast & reliable service across the city</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LocationBanner;
