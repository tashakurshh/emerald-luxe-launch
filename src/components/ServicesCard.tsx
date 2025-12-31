import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { activeServices } from "@/lib/services";
import { useState, useCallback } from "react";
import { appleSpring, appleScale, useHapticFeedback } from "@/hooks/useHapticFeedback";
import Ripple from "@/components/ui/Ripple";

const ServicesCard = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const { triggerHaptic } = useHapticFeedback({ intensity: "light" });
  
  // Show only first 4 services on home page
  const displayServices = activeServices.slice(0, 4);

  const handleServiceClick = useCallback(() => {
    triggerHaptic();
  }, [triggerHaptic]);

  return (
    <div id="services" className="relative p-6 rounded-2xl overflow-hidden" style={{
      background: 'hsl(var(--card))',
    }}>
      {/* Animated gradient border */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          padding: '1.5px',
          background: 'linear-gradient(135deg, hsl(280, 80%, 55%) 0%, hsl(211, 100%, 55%) 25%, hsl(170, 75%, 45%) 50%, hsl(340, 85%, 60%) 75%, hsl(280, 80%, 55%) 100%)',
          backgroundSize: '300% 300%',
          animation: 'gradient-shift 6s ease infinite',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      {/* Inner glow overlay */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, hsl(280, 80%, 55%, 0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 100% 100%, hsl(170, 75%, 45%, 0.1) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 0% 100%, hsl(211, 100%, 55%, 0.1) 0%, transparent 50%)',
        }}
      />
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-foreground tracking-tight">Our Services</h3>
        <motion.div
          whileTap={{ scale: appleScale.button }}
          transition={appleSpring.tap}
        >
          <Link 
            to="/services" 
            className="text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
            onClick={handleServiceClick}
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {displayServices.map((service, index) => {
          const IconComponent = service.icon;
          const isHovered = hoveredService === service.id;
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="relative"
            >
              {/* Glow effect behind service card */}
              <motion.div
                className="absolute -inset-2 rounded-2xl pointer-events-none"
                animate={{
                  opacity: isHovered ? 0.8 : 0,
                  scale: isHovered ? 1.05 : 0.9,
                }}
                transition={appleSpring.hover}
                style={{
                  background: `radial-gradient(ellipse 80% 80% at 50% 50%, 
                    ${service.color}40 0%, 
                    ${service.color}15 40%,
                    transparent 70%
                  )`,
                  filter: 'blur(12px)',
                }}
              />
              
              <Link
                to={`/services/${service.slug}`}
                className="relative block"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={handleServiceClick}
                onTouchStart={handleServiceClick}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <motion.div
                  className="service-item flex flex-col items-center gap-2 group text-center p-3 relative overflow-hidden"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: appleScale.card }}
                  transition={appleSpring.tap}
                >
                  <Ripple color={service.color} opacity={0.15} />
                  {/* Inner gradient on hover */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      background: `radial-gradient(ellipse 100% 100% at 50% 100%, 
                        ${service.color}18 0%, 
                        transparent 70%
                      )`,
                    }}
                  />
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ 
                      x: isHovered ? '100%' : '-100%',
                      opacity: isHovered ? 0.2 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{
                      background: `linear-gradient(90deg, transparent, ${service.color}30, transparent)`,
                    }}
                  />
                  
                  <motion.div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 relative z-10"
                    style={{ background: `${service.color}20` }}
                    whileTap={{ scale: appleScale.icon }}
                    animate={{
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={appleSpring.tap}
                  >
                    <IconComponent className="w-6 h-6" style={{ color: service.color }} />
                  </motion.div>
                  <span className="text-xs font-medium text-foreground/90 leading-tight relative z-10">{service.name}</span>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesCard;