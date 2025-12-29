import heroVisual from "@/assets/hero-visual.png";
import { motion } from "framer-motion";
import { Shield, MapPin, Gift } from "lucide-react";

const springConfig = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

const HeroVisual = () => {
  return (
    <div className="glass-card-hero overflow-hidden relative group">
      <div className="relative">
        <img
          src={heroVisual}
          alt="Premium Healthcare"
          className="w-full h-52 md:h-72 object-cover transition-transform duration-700 ease-ios-spring group-hover:scale-[1.02]"
        />

        {/* Vignette + gradient overlay for focus */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(225,12%,5%)] via-[hsl(225,12%,5%,0.5)] to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(225,12%,5%,0.4)_100%)]" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-[hsl(0,0%,94%)] mb-1.5"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.15 }}
          >
            Your Health, <span className="gradient-text">Delivered</span>
          </motion.h2>
          <motion.p 
            className="text-[hsl(0,0%,64%)] text-sm mb-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.2 }}
          >
            Premium healthcare at your fingertips. Trusted by Srinagar.
          </motion.p>
          
          {/* Trust badges - iOS style */}
          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.25 }}
          >
            <div className="flex items-center gap-1.5 text-xs text-[hsl(0,0%,86%)] bg-[hsl(225,10%,12%,0.8)] backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-[hsl(0,0%,100%,0.06)]">
              <Shield className="w-3 h-3 text-[hsl(211,100%,50%)]" />
              <span>100% Genuine</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[hsl(0,0%,86%)] bg-[hsl(225,10%,12%,0.8)] backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-[hsl(0,0%,100%,0.06)]">
              <MapPin className="w-3 h-3 text-[hsl(142,72%,46%)]" />
              <span>Srinagar</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[hsl(0,0%,86%)] bg-[hsl(225,10%,12%,0.8)] backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-[hsl(0,0%,100%,0.06)]">
              <Gift className="w-3 h-3 text-[hsl(349,100%,65%)]" />
              <span>Free First Delivery</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;