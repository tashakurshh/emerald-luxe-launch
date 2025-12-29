import heroVisual from "@/assets/hero-visual.png";
import { motion } from "framer-motion";
import { Shield, MapPin, Gift } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const springConfig = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

const HeroVisual = () => {
  const { ref, y, scale, opacity } = useParallax({ speed: 0.12, direction: "up" });

  return (
    <div className="relative" ref={ref}>
      {/* Pulse glow effect behind hero - appears on load */}
      <motion.div
        className="absolute -inset-4 rounded-3xl pointer-events-none"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: [0, 0.6, 0.3, 0.15],
          scale: [0.95, 1.02, 1.01, 1],
        }}
        transition={{
          duration: 2,
          ease: [0.25, 0.46, 0.45, 0.94],
          times: [0, 0.3, 0.6, 1],
        }}
        style={{
          background: `radial-gradient(ellipse 80% 70% at 50% 50%, 
            hsl(195 50% 35% / 0.25) 0%, 
            hsl(210 45% 30% / 0.15) 30%,
            transparent 70%
          )`,
          filter: 'blur(24px)',
        }}
      />
      
      {/* Secondary glow - offset timing */}
      <motion.div
        className="absolute -inset-6 rounded-3xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.4, 0.2, 0.08],
        }}
        transition={{
          duration: 2.5,
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
          times: [0, 0.25, 0.5, 1],
        }}
        style={{
          background: `radial-gradient(ellipse 90% 80% at 50% 50%, 
            hsl(175 40% 30% / 0.2) 0%, 
            transparent 60%
          )`,
          filter: 'blur(32px)',
        }}
      />

      <div className="glass-card-hero overflow-hidden relative group">
        <motion.div 
          className="relative"
          style={{ y, scale, opacity }}
        >
          <img
            src={heroVisual}
            alt="Premium Healthcare"
            className="w-full h-52 md:h-72 object-cover transition-transform duration-700 ease-ios-spring group-hover:scale-[1.02]"
          />

          {/* Subtle gradient for text readability - visionOS style */}
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,15%,7%)] via-[hsl(220,15%,7%,0.4)] to-transparent" />
        </motion.div>

        {/* Content - fixed position, not affected by parallax */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-[hsl(220,10%,94%)] mb-1.5"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.15 }}
          >
            Your Health, <span className="gradient-text">Delivered</span>
          </motion.h2>
          <motion.p 
            className="text-[hsl(220,10%,62%)] text-sm mb-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.2 }}
          >
            Premium healthcare at your fingertips. Trusted by Srinagar.
          </motion.p>
          
          {/* Trust badges - visionOS glass pills */}
          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: 0.25 }}
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;