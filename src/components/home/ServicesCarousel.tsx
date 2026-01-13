import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Shield, Lock } from "lucide-react";
import { activeServices, comingSoonServices, ServiceData } from "@/lib/services";
import { appleSpring, appleScale, useHapticFeedback } from "@/hooks/useHapticFeedback";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";

const allServices = [...activeServices, ...comingSoonServices];

// Apple-style vibrant gradients for each service
const appleGradients: Record<string, { from: string; to: string; glow: string }> = {
  "prescription-medicines": { 
    from: "hsl(211, 100%, 50%)", 
    to: "hsl(199, 100%, 45%)", 
    glow: "hsl(211, 100%, 50%)" 
  },
  "baby-care": { 
    from: "hsl(349, 100%, 65%)", 
    to: "hsl(322, 100%, 60%)", 
    glow: "hsl(349, 100%, 65%)" 
  },
  "health-care-products": { 
    from: "hsl(142, 72%, 46%)", 
    to: "hsl(160, 84%, 40%)", 
    glow: "hsl(142, 72%, 46%)" 
  },
  "vitamin-supplements": { 
    from: "hsl(28, 100%, 55%)", 
    to: "hsl(42, 100%, 50%)", 
    glow: "hsl(28, 100%, 55%)" 
  },
  "personal-care": { 
    from: "hsl(280, 87%, 65%)", 
    to: "hsl(260, 100%, 60%)", 
    glow: "hsl(280, 87%, 65%)" 
  },
  "sexual-wellness": { 
    from: "hsl(220, 15%, 45%)", 
    to: "hsl(220, 12%, 38%)", 
    glow: "hsl(220, 15%, 45%)" 
  },
  "diagnostic-booking": { 
    from: "hsl(175, 84%, 40%)", 
    to: "hsl(190, 90%, 35%)", 
    glow: "hsl(175, 84%, 40%)" 
  },
  "elder-care": { 
    from: "hsl(239, 84%, 67%)", 
    to: "hsl(260, 70%, 55%)", 
    glow: "hsl(239, 84%, 67%)" 
  },
  "other-health-services": { 
    from: "hsl(0, 0%, 50%)", 
    to: "hsl(0, 0%, 40%)", 
    glow: "hsl(0, 0%, 50%)" 
  },
};

interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const { triggerHaptic } = useHapticFeedback({ intensity: "light" });
  const isComingSoon = !service.isActive;
  const isSexualWellness = service.id === "sexual-wellness";
  const gradient = appleGradients[service.id] || appleGradients["other-health-services"];

  const handleClick = () => {
    if (isComingSoon) return;
    triggerHaptic();
    if (service.isActive) {
      openWhatsApp(whatsappMessages.orderService(service.name));
    }
  };

  const Icon = service.icon;

  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.04, 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={!isComingSoon ? { y: -6, scale: 1.03 } : {}}
      whileTap={!isComingSoon ? { scale: 0.97 } : {}}
      className={`
        relative w-[140px] h-[168px] flex-shrink-0 rounded-[20px] p-4
        backdrop-blur-2xl border transition-all duration-300
        ${isComingSoon 
          ? "bg-zinc-900/40 border-zinc-700/30 opacity-55 cursor-not-allowed" 
          : "bg-zinc-900/60 border-zinc-700/40 cursor-pointer hover:border-zinc-600/60"
        }
      `}
      style={{ 
        WebkitTapHighlightColor: 'transparent',
        boxShadow: !isComingSoon 
          ? `0 4px 24px -4px ${gradient.glow}20, 0 8px 32px -8px rgba(0,0,0,0.4)` 
          : undefined,
      }}
      onClick={!isComingSoon ? handleClick : undefined}
    >
      {/* Gradient glow effect for active cards */}
      {!isComingSoon && (
        <div 
          className="absolute inset-0 rounded-[20px] opacity-[0.08] pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
          }}
        />
      )}
      
      {/* Icon with Apple gradient */}
      <div 
        className={`
          relative w-12 h-12 rounded-2xl flex items-center justify-center mb-3
          shadow-lg transition-transform duration-300
          ${isComingSoon ? "opacity-50" : ""}
        `}
        style={{ 
          background: `linear-gradient(145deg, ${gradient.from}, ${gradient.to})`,
          boxShadow: !isComingSoon 
            ? `0 4px 16px -2px ${gradient.glow}40, inset 0 1px 0 rgba(255,255,255,0.2)` 
            : undefined,
        }}
      >
        <Icon className="w-5.5 h-5.5 text-white drop-shadow-sm" style={{ width: 22, height: 22 }} />
      </div>

      {/* Service Name */}
      <h3 className={`
        text-[13px] font-semibold leading-tight mb-1 tracking-tight
        ${isComingSoon ? "text-zinc-500" : "text-zinc-100"}
      `}>
        {service.name}
      </h3>

      {/* Tagline or Coming Soon badge */}
      {isComingSoon ? (
        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-zinc-500 bg-zinc-800/60 px-2 py-0.5 rounded-full mt-1.5">
          Coming Soon
        </span>
      ) : (
        <p className="text-[11px] text-zinc-400 line-clamp-2 leading-snug">
          {service.tagline}
        </p>
      )}

      {/* Privacy Badge for Sexual Wellness */}
      {isSexualWellness && service.isActive && (
        <div className="absolute top-3 right-3">
          <div className="w-5 h-5 rounded-full bg-zinc-800/80 flex items-center justify-center border border-zinc-700/50">
            <Lock className="w-2.5 h-2.5 text-zinc-400" />
          </div>
        </div>
      )}
    </motion.div>
  );

  // Active services link to services page, coming soon are not clickable
  if (service.isActive && !isSexualWellness) {
    return (
      <Link to="/services" onClick={handleClick}>
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};

const ServicesCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const { triggerHaptic } = useHapticFeedback({ intensity: "light" });
  
  // Motion values for smooth drag physics
  const x = useMotionValue(0);
  const springX = useSpring(x, { 
    stiffness: 300, 
    damping: 35, 
    mass: 0.8 
  });

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
      
      // Update active index based on scroll position
      const cardWidth = 156; // 140px card + 16px gap
      const newIndex = Math.min(
        Math.floor(scrollLeft / cardWidth),
        allServices.length - 1
      );
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      triggerHaptic();
      const cardWidth = 156;
      const scrollAmount = cardWidth * 2;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Handle drag for momentum scrolling
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (scrollRef.current) {
      const velocity = info.velocity.x;
      const momentum = velocity * 0.3;
      
      scrollRef.current.scrollBy({
        left: -momentum,
        behavior: "smooth",
      });
      
      if (Math.abs(velocity) > 100) {
        triggerHaptic();
      }
    }
  };

  useEffect(() => {
    checkScroll();
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener('scroll', checkScroll, { passive: true });
      return () => scrollEl.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-semibold text-zinc-100 tracking-tight">Our Services</h2>
          <p className="text-xs text-zinc-500 mt-0.5">Healthcare at your fingertips</p>
        </div>
        
        {/* Navigation Arrows - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`
              w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200
              ${canScrollLeft 
                ? "bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-100 border border-zinc-700/50" 
                : "bg-zinc-900/40 text-zinc-600 cursor-not-allowed border border-zinc-800/30"
              }
            `}
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`
              w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200
              ${canScrollRight 
                ? "bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-100 border border-zinc-700/50" 
                : "bg-zinc-900/40 text-zinc-600 cursor-not-allowed border border-zinc-800/30"
              }
            `}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Scrollable Container */}
      <div className="relative -mx-4">
        {/* Left Fade Gradient */}
        <motion.div 
          animate={{ opacity: canScrollLeft ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none bg-gradient-to-r from-background via-background/80 to-transparent"
        />

        {/* Scroll Container with improved physics */}
        <motion.div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 py-3 cursor-grab active:cursor-grabbing"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x proximity',
          }}
        >
          {allServices.map((service, index) => (
            <div 
              key={service.id} 
              className="scroll-snap-align-start"
              style={{ scrollSnapAlign: 'start' }}
            >
              <ServiceCard service={service} index={index} />
            </div>
          ))}
          
          {/* End spacer for better scroll feel */}
          <div className="w-4 flex-shrink-0" />
        </motion.div>

        {/* Right Fade Gradient */}
        <motion.div 
          animate={{ opacity: canScrollRight ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none bg-gradient-to-l from-background via-background/80 to-transparent"
        />
      </div>

      {/* Scroll Indicator Dots - Mobile */}
      <div className="flex justify-center gap-1.5 mt-5 md:hidden">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ 
              width: Math.floor(activeIndex / 3) === i ? 16 : 4,
              backgroundColor: Math.floor(activeIndex / 3) === i 
                ? "hsl(211, 100%, 50%)" 
                : "hsl(240, 5%, 35%)"
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="h-1 rounded-full"
          />
        ))}
      </div>

      {/* Privacy Note */}
      <div className="flex items-center justify-center gap-1.5 mt-5 text-[10px] text-zinc-500">
        <Shield className="w-3 h-3" />
        <span>All orders are handled with complete privacy</span>
      </div>
    </motion.section>
  );
};

export default ServicesCarousel;
