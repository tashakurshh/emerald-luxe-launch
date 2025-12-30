import { forwardRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Grid3X3, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { appleSpring, appleScale, useHapticFeedback } from "@/hooks/useHapticFeedback";
import Ripple from "@/components/ui/Ripple";

const DynamicIslandNav = forwardRef<HTMLElement, object>(function DynamicIslandNav(_, ref) {
  const location = useLocation();
  const { triggerHaptic } = useHapticFeedback({ intensity: "light" });

  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Services", icon: Grid3X3, href: "/services" },
    { name: "Terms", icon: FileText, href: "/terms" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const handleNavClick = useCallback(() => {
    triggerHaptic();
  }, [triggerHaptic]);

  return (
    <nav ref={ref} className="dynamic-island">
      <div className="flex items-center gap-1.5 px-1.5 py-1.5">
        <motion.div
          whileTap={{ scale: appleScale.nav }}
          transition={appleSpring.tap}
        >
          <Link 
            to="/" 
            onClick={handleNavClick}
            onTouchStart={handleNavClick}
            className="group relative flex items-center gap-2 px-3.5 py-2 rounded-full transition-all duration-100 overflow-hidden"
            style={{ 
              WebkitTapHighlightColor: 'transparent',
              background: 'linear-gradient(135deg, hsl(280 70% 55%) 0%, hsl(330 85% 55%) 50%, hsl(20 90% 55%) 100%)',
            }}
          >
            <Ripple color="rgba(255, 255, 255, 0.3)" opacity={0.25} />
            {/* Shimmer effect */}
            <div 
              className="absolute inset-0 rounded-full pointer-events-none shimmer-effect"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
              }}
            />
            {/* Ambient glow */}
            <div 
              className="absolute -inset-1 rounded-full pointer-events-none opacity-60"
              style={{
                background: 'linear-gradient(135deg, hsl(280 70% 55% / 0.5) 0%, hsl(330 85% 55% / 0.5) 50%, hsl(20 90% 55% / 0.5) 100%)',
                filter: 'blur(8px)',
              }}
            />
            <span 
              className="relative text-sm font-bold tracking-tight z-10"
              style={{
                color: 'white',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
              }}
            >
              Pharmih
            </span>
          </Link>
        </motion.div>

        <div className="w-px h-5 bg-border/50 mx-0.5" />

        <div className="flex items-center gap-0.5">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const active = isActive(item.href);
            return (
              <motion.div
                key={item.name}
                whileTap={{ scale: appleScale.nav }}
                transition={appleSpring.tap}
              >
                <Link
                  to={item.href}
                  onClick={handleNavClick}
                  onTouchStart={handleNavClick}
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-full transition-colors duration-100 overflow-hidden ${
                    active ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <Ripple 
                    color={active ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))"} 
                    opacity={0.12} 
                  />
                  <IconComponent className="w-4 h-4 relative z-10" />
                  {active && (
                    <span className="text-sm font-medium relative z-10">{item.name}</span>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </nav>
  );
});

export default DynamicIslandNav;
