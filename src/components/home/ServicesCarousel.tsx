import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight, Shield, Lock } from "lucide-react";
import { activeServices, comingSoonServices, ServiceData } from "@/lib/services";
import { appleSpring, appleScale, useHapticFeedback } from "@/hooks/useHapticFeedback";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";

const allServices = [...activeServices, ...comingSoonServices];

interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const { triggerHaptic } = useHapticFeedback({ intensity: "light" });
  const isComingSoon = !service.isActive;
  const isSexualWellness = service.id === "sexual-wellness";

  const handleClick = () => {
    if (isComingSoon) return;
    triggerHaptic();
    if (service.isActive) {
      openWhatsApp(whatsappMessages.orderService(service.name));
    }
  };

  const Icon = service.icon;

  // Discreet styling for Sexual Wellness
  const getCardStyle = () => {
    if (isSexualWellness) {
      return {
        iconBg: "bg-gradient-to-br from-zinc-400 to-zinc-500",
        cardBg: "bg-zinc-50/80 dark:bg-zinc-800/60",
      };
    }
    return {
      iconBg: "",
      cardBg: "bg-white/80 dark:bg-zinc-900/60",
    };
  };

  const style = getCardStyle();

  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={!isComingSoon ? { y: -4, scale: 1.02 } : {}}
      whileTap={!isComingSoon ? { scale: appleScale.card } : {}}
      className={`
        relative w-[140px] h-[160px] flex-shrink-0 rounded-2xl p-4
        backdrop-blur-xl border transition-all duration-300
        ${style.cardBg}
        ${isComingSoon 
          ? "border-zinc-200/40 dark:border-zinc-700/40 opacity-60 cursor-not-allowed" 
          : "border-zinc-200/60 dark:border-zinc-700/50 cursor-pointer hover:border-zinc-300/80 dark:hover:border-zinc-600/60 hover:shadow-lg"
        }
      `}
      style={{ WebkitTapHighlightColor: 'transparent' }}
      onClick={!isComingSoon ? handleClick : undefined}
    >
      {/* Icon */}
      <div 
        className={`
          w-11 h-11 rounded-xl flex items-center justify-center mb-3
          ${style.iconBg || ""}
          ${isComingSoon ? "opacity-50" : ""}
        `}
        style={!isSexualWellness ? { 
          background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)` 
        } : undefined}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>

      {/* Service Name */}
      <h3 className={`
        text-[13px] font-medium leading-tight mb-1
        ${isComingSoon ? "text-muted-foreground/70" : "text-foreground"}
      `}>
        {service.name}
      </h3>

      {/* Tagline or Coming Soon badge */}
      {isComingSoon ? (
        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-muted-foreground/60 bg-zinc-200/50 dark:bg-zinc-700/40 px-2 py-0.5 rounded-full mt-1">
          Coming Soon
        </span>
      ) : (
        <p className="text-[11px] text-muted-foreground/80 line-clamp-2 leading-snug">
          {service.tagline}
        </p>
      )}

      {/* Privacy Badge for Sexual Wellness */}
      {isSexualWellness && service.isActive && (
        <div className="absolute top-2 right-2">
          <div className="w-5 h-5 rounded-full bg-zinc-200/80 dark:bg-zinc-700/60 flex items-center justify-center">
            <Lock className="w-2.5 h-2.5 text-zinc-500 dark:text-zinc-400" />
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { triggerHaptic } = useHapticFeedback({ intensity: "light" });

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      triggerHaptic();
      const scrollAmount = 160;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Our Services</h2>
          <p className="text-xs text-muted-foreground mt-0.5">Healthcare at your fingertips</p>
        </div>
        
        {/* Navigation Arrows - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`
              w-8 h-8 rounded-full flex items-center justify-center transition-all
              ${canScrollLeft 
                ? "bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-foreground" 
                : "bg-zinc-100/50 dark:bg-zinc-800/50 text-muted-foreground/40 cursor-not-allowed"
              }
            `}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`
              w-8 h-8 rounded-full flex items-center justify-center transition-all
              ${canScrollRight 
                ? "bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-foreground" 
                : "bg-zinc-100/50 dark:bg-zinc-800/50 text-muted-foreground/40 cursor-not-allowed"
              }
            `}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scrollable Container */}
      <div className="relative -mx-4">
        {/* Left Fade */}
        <div 
          className={`
            absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none
            bg-gradient-to-r from-background to-transparent
            transition-opacity duration-300
            ${canScrollLeft ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-4 py-2 snap-x snap-mandatory"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {allServices.map((service, index) => (
            <div key={service.id} className="snap-start">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>

        {/* Right Fade */}
        <div 
          className={`
            absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none
            bg-gradient-to-l from-background to-transparent
            transition-opacity duration-300
            ${canScrollRight ? "opacity-100" : "opacity-0"}
          `}
        />
      </div>

      {/* Scroll Indicator Dots - Mobile */}
      <div className="flex justify-center gap-1.5 mt-4 md:hidden">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`
              h-1 rounded-full transition-all duration-300
              ${i === 0 ? "w-4 bg-primary" : "w-1 bg-zinc-300 dark:bg-zinc-600"}
            `}
          />
        ))}
      </div>

      {/* Privacy Note */}
      <div className="flex items-center justify-center gap-1.5 mt-4 text-[10px] text-muted-foreground/60">
        <Shield className="w-3 h-3" />
        <span>All orders are handled with complete privacy</span>
      </div>
    </motion.section>
  );
};

export default ServicesCarousel;
