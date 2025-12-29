import { forwardRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Grid3X3, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { appleSpring, appleScale, useHapticFeedback } from "@/hooks/useHapticFeedback";

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
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-primary active:scale-95 transition-transform duration-100"
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
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-full transition-colors duration-100 active:scale-95 ${
                    active ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {active && (
                    <span className="text-sm font-medium">{item.name}</span>
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
