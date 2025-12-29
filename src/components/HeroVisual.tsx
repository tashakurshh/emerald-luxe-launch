import heroVisual from "@/assets/hero-visual.png";
import { motion } from "framer-motion";
import { Shield, MapPin, Gift } from "lucide-react";

const HeroVisual = () => {
  return (
    <div className="glass-card overflow-hidden relative group">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,100%,50%,0.1)] via-transparent to-[hsl(280,100%,65%,0.1)] z-10" />

      <div className="relative">
        <img
          src={heroVisual}
          alt="Premium Healthcare"
          className="w-full h-56 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <motion.h2 
            className="text-2xl md:text-4xl font-semibold text-foreground mb-2 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Your Health, <span className="gradient-text">Delivered</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-sm md:text-base mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Premium healthcare at your fingertips. Trusted by Srinagar.
          </motion.p>
          
          {/* Trust badges */}
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-1.5 text-xs text-foreground/80 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Shield className="w-3.5 h-3.5 text-[hsl(215,90%,58%)]" />
              <span>100% Genuine</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-foreground/80 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-[hsl(145,65%,48%)]" />
              <span>Serving Srinagar</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-foreground/80 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Gift className="w-3.5 h-3.5 text-[hsl(340,75%,62%)]" />
              <span>Free First Delivery</span>
            </div>
          </motion.div>
        </div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 shimmer opacity-50" />
      </div>
    </div>
  );
};

export default HeroVisual;
