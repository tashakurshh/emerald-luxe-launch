import heroVisual from "@/assets/hero-visual.png";
import { motion } from "framer-motion";
import { Shield, MapPin, Gift } from "lucide-react";
import { appleScale, appleSpring, useHapticFeedback } from "@/hooks/useHapticFeedback";

const HeroVisual = () => {
  const { triggerHaptic } = useHapticFeedback({ intensity: "light" });

  return (
    <motion.div 
      className="relative"
      whileTap={{ scale: appleScale.card }}
      transition={appleSpring.tap}
      onClick={triggerHaptic}
    >
      <div className="glass-card-hero overflow-hidden relative group cursor-pointer">
        <div className="relative">
          <img
            src={heroVisual}
            alt="Premium Healthcare"
            className="w-full h-52 md:h-72 object-cover"
            loading="eager"
          />

          {/* Gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,15%,7%)] via-[hsl(220,15%,7%,0.4)] to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-[hsl(220,10%,94%)] mb-1.5">
            Your Health, <span className="gradient-text">Delivered</span>
          </h2>
          <p className="text-[hsl(220,10%,62%)] text-sm mb-4">
            Premium healthcare at your fingertips. Trusted by Srinagar.
          </p>
          
          {/* Trust badges */}
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-1.5 text-xs text-[hsl(220,10%,84%)] bg-[hsl(220,15%,14%,0.7)] backdrop-blur-md px-2.5 py-1.5 rounded-full border border-[hsl(220,20%,100%,0.08)]">
              <Shield className="w-3 h-3 text-[hsl(211,100%,50%)]" />
              <span>100% Genuine</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[hsl(220,10%,84%)] bg-[hsl(220,15%,14%,0.7)] backdrop-blur-md px-2.5 py-1.5 rounded-full border border-[hsl(220,20%,100%,0.08)]">
              <MapPin className="w-3 h-3 text-[hsl(142,72%,46%)]" />
              <span>Srinagar</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[hsl(220,10%,84%)] bg-[hsl(220,15%,14%,0.7)] backdrop-blur-md px-2.5 py-1.5 rounded-full border border-[hsl(220,20%,100%,0.08)]">
              <Gift className="w-3 h-3 text-[hsl(349,100%,65%)]" />
              <span>Free First Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroVisual;
