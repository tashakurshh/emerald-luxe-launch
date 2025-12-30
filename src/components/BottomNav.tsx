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
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 md:hidden"
      style={{
        marginBottom: 'max(12px, env(safe-area-inset-bottom, 12px))',
      }}
    >
      {/* Floating pill container */}
      <div 
        className="relative flex items-center justify-center gap-2 px-4 py-2.5 rounded-[28px]"
        style={{
          background: 'rgba(45, 45, 48, 0.75)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        }}
      >
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const active = isActive(item.href);
          
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={handleNavClick}
              className="flex items-center justify-center w-14 h-10"
            >
              <motion.div
                whileTap={{ scale: 0.82 }}
                transition={{ type: "tween", duration: 0.08 }}
                className="flex items-center justify-center"
              >
                <IconComponent
                  style={{ 
                    color: active 
                      ? 'hsl(211, 100%, 55%)' 
                      : 'rgba(255, 255, 255, 0.55)',
                    width: 26,
                    height: 26,
                    transition: 'color 0.12s ease',
                  }}
                  strokeWidth={active ? 1.8 : 1.5}
                />
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
});

export default BottomNav;
