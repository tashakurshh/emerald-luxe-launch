import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { activeServices } from "@/lib/services";
import { useState } from "react";

const ServicesCard = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  
  // Show only first 4 services on home page
  const displayServices = activeServices.slice(0, 4);

  return (
    <div id="services" className="glass-card p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-foreground tracking-tight">Our Services</h3>
        <Link 
          to="/services" 
          className="text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
        >
          View All
          <ArrowRight className="w-4 h-4" />
        </Link>
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
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                to="/services"
                className="relative block"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <motion.div
                  className="service-item flex flex-col items-center gap-2 group text-center p-3 relative overflow-hidden"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
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
                    animate={{
                      scale: isHovered ? 1.1 : 1,
                      rotate: isHovered ? [0, -3, 3, 0] : 0,
                    }}
                    transition={{ duration: 0.4 }}
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