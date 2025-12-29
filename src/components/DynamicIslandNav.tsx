import { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Grid3X3, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { appleSpring, appleScale, useHapticFeedback } from "@/hooks/useHapticFeedback";

const DynamicIslandNav = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
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
    <nav className="dynamic-island">
      <div className="flex items-center gap-1.5 px-1.5 py-1.5">
        <motion.div
          whileTap={{ scale: appleScale.nav }}
          transition={appleSpring.tap}
        >
          <Link 
            to="/" 
            onClick={handleNavClick}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-primary"
          >
            <span className="text-sm font-semibold tracking-tight text-primary-foreground">
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
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-full transition-colors duration-150 ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {(active || hoveredItem === item.name) && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-secondary"
                      initial={false}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 30 
                      }}
                      style={{ opacity: active ? 1 : 0.5 }}
                    />
                  )}
                  <IconComponent className="w-4 h-4 relative z-10" />
                  <span
                    className={`text-sm font-medium transition-all duration-150 overflow-hidden relative z-10 ${
                      hoveredItem === item.name || active ? "max-w-20 opacity-100" : "max-w-0 opacity-0"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default DynamicIslandNav;