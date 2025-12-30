import { forwardRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Package, FileText, User } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useHapticFeedback } from "@/hooks/useHapticFeedback";

interface NavItem {
  name: string;
  icon: LucideIcon;
  href: string;
}

const BottomNav = forwardRef<HTMLElement, object>(function BottomNav(_, ref) {
  const location = useLocation();
  const { triggerHaptic } = useHapticFeedback({ intensity: "light" });

  const navItems: NavItem[] = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Orders", icon: Package, href: "/orders" },
    { name: "Docs", icon: FileText, href: "/documents" },
    { name: "Profile", icon: User, href: "/profile" },
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleNavClick = useCallback(() => {
    triggerHaptic();
  }, [triggerHaptic]);

  return (
    <nav 
      ref={ref} 
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      {/* iOS-style translucent backdrop */}
      <div 
        className="absolute inset-0 backdrop-blur-xl"
        style={{
          background: 'rgba(249, 249, 249, 0.94)',
          borderTop: '0.5px solid rgba(0, 0, 0, 0.1)',
        }}
      />
      
      {/* Dark mode backdrop */}
      <div 
        className="absolute inset-0 backdrop-blur-xl hidden dark:block"
        style={{
          background: 'rgba(30, 30, 30, 0.88)',
          borderTop: '0.5px solid rgba(255, 255, 255, 0.08)',
        }}
      />
      
      {/* Tab items container */}
      <div className="relative flex items-end justify-around px-6 pt-2 pb-1.5">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const active = isActive(item.href);
          
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={handleNavClick}
              className="flex flex-col items-center justify-center min-w-[64px] py-1"
            >
              <motion.div
                whileTap={{ scale: 0.85 }}
                transition={{ type: "tween", duration: 0.1 }}
                className="flex flex-col items-center gap-0.5"
              >
                <IconComponent
                  className="transition-colors duration-150"
                  style={{ 
                    color: active 
                      ? 'hsl(211, 100%, 50%)' 
                      : 'hsl(0, 0%, 55%)',
                    width: 24,
                    height: 24,
                  }}
                  strokeWidth={1.5}
                />
                <span
                  className="transition-colors duration-150"
                  style={{ 
                    color: active 
                      ? 'hsl(211, 100%, 50%)' 
                      : 'hsl(0, 0%, 55%)',
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.name}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
});

export default BottomNav;
