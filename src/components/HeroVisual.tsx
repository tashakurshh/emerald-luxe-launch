import heroVisual from "@/assets/hero-visual.png";
import { motion } from "framer-motion";
import { Shield, MapPin, Gift } from "lucide-react";

const springTransition = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

const HeroVisual = () => {
  return (
    <div className="glass-card-elevated overflow-hidden relative group">
      <div className="relative">
        <img
          src={heroVisual}
          alt="Premium Healthcare"
          className="w-full h-52 md:h-72 object-cover transition-transform duration-700 ease-ios-spring group-hover:scale-[1.02]"
        />

        {/* Bottom gradient - subtle */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-foreground mb-1.5"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.15 }}
          >
            Your Health, <span className="gradient-text">Delivered</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-sm mb-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.2 }}
          >
            Premium healthcare at your fingertips. Trusted by Srinagar.
          </motion.p>
          
          {/* Trust badges - iOS style */}
          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.25 }}
          >
            <div className="flex items-center gap-1.5 text-xs text-foreground/90 bg-secondary/80 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
              <Shield className="w-3 h-3 text-apple-blue" />
              <span>100% Genuine</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-foreground/90 bg-secondary/80 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
              <MapPin className="w-3 h-3 text-apple-green" />
              <span>Srinagar</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-foreground/90 bg-secondary/80 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
              <Gift className="w-3 h-3 text-apple-pink" />
              <span>Free First Delivery</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;