import { forwardRef, useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Package, FileText, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useHapticFeedback } from "@/hooks/useHapticFeedback";
import Ripple from "@/components/ui/Ripple";

interface NavItem {
  name: string;
  icon: LucideIcon;
  href: string;
}

const BottomNav = forwardRef<HTMLElement, object>(function BottomNav(_, ref) {
  const location = useLocation();
  const { triggerHaptic } = useHapticFeedback({ intensity: "light" });
  const [isPressed, setIsPressed] = useState(false);

  const navItems: NavItem[] = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Orders", icon: Package, href: "/orders" },
    { name: "Docs", icon: FileText, href: "/documents" },
    { name: "Profile", icon: User, href: "/profile" },
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleNavClick = useCallback(() => {
    triggerHaptic();
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 300);
  }, [triggerHaptic]);

  return (
    <nav 
      ref={ref} 
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 md:hidden"
      style={{
        marginBottom: 'max(12px, env(safe-area-inset-bottom, 12px))',
      }}
    >
      {/* Siri-style ambient glow - primary layer with slow rotation */}
      <motion.div 
        className="absolute -inset-[1px] rounded-[29px]"
        animate={{
          background: [
            'linear-gradient(0deg, rgba(88, 175, 255, 0.35) 0%, rgba(120, 87, 255, 0.25) 25%, rgba(255, 100, 180, 0.2) 50%, rgba(64, 224, 208, 0.25) 75%, rgba(88, 175, 255, 0.35) 100%)',
            'linear-gradient(90deg, rgba(120, 87, 255, 0.3) 0%, rgba(255, 100, 180, 0.22) 25%, rgba(64, 224, 208, 0.25) 50%, rgba(88, 175, 255, 0.28) 75%, rgba(120, 87, 255, 0.3) 100%)',
            'linear-gradient(180deg, rgba(255, 100, 180, 0.25) 0%, rgba(64, 224, 208, 0.28) 25%, rgba(88, 175, 255, 0.3) 50%, rgba(120, 87, 255, 0.22) 75%, rgba(255, 100, 180, 0.25) 100%)',
            'linear-gradient(270deg, rgba(64, 224, 208, 0.28) 0%, rgba(88, 175, 255, 0.32) 25%, rgba(120, 87, 255, 0.25) 50%, rgba(255, 100, 180, 0.2) 75%, rgba(64, 224, 208, 0.28) 100%)',
            'linear-gradient(360deg, rgba(88, 175, 255, 0.35) 0%, rgba(120, 87, 255, 0.25) 25%, rgba(255, 100, 180, 0.2) 50%, rgba(64, 224, 208, 0.25) 75%, rgba(88, 175, 255, 0.35) 100%)',
          ],
          opacity: isPressed ? 0.65 : 0.45,
        }}
        transition={{
          background: {
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          },
          opacity: {
            duration: 0.3,
          },
        }}
        style={{
          filter: 'blur(8px)',
        }}
      />
      
      {/* Secondary diffused glow with counter-rotation */}
      <motion.div 
        className="absolute -inset-[3px] rounded-[31px]"
        animate={{
          background: [
            'linear-gradient(180deg, rgba(100, 180, 255, 0.18) 0%, rgba(180, 120, 255, 0.14) 33%, rgba(255, 130, 200, 0.12) 66%, rgba(80, 200, 200, 0.15) 100%)',
            'linear-gradient(270deg, rgba(180, 120, 255, 0.16) 0%, rgba(255, 130, 200, 0.14) 33%, rgba(80, 200, 200, 0.16) 66%, rgba(100, 180, 255, 0.14) 100%)',
            'linear-gradient(0deg, rgba(255, 130, 200, 0.14) 0%, rgba(80, 200, 200, 0.16) 33%, rgba(100, 180, 255, 0.18) 66%, rgba(180, 120, 255, 0.12) 100%)',
            'linear-gradient(90deg, rgba(80, 200, 200, 0.16) 0%, rgba(100, 180, 255, 0.15) 33%, rgba(180, 120, 255, 0.14) 66%, rgba(255, 130, 200, 0.14) 100%)',
            'linear-gradient(180deg, rgba(100, 180, 255, 0.18) 0%, rgba(180, 120, 255, 0.14) 33%, rgba(255, 130, 200, 0.12) 66%, rgba(80, 200, 200, 0.15) 100%)',
          ],
          opacity: isPressed ? 0.55 : 0.35,
        }}
        transition={{
          background: {
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          },
          opacity: {
            duration: 0.3,
          },
        }}
        style={{
          filter: 'blur(16px)',
        }}
      />

      {/* Floating pill container */}
      <div 
        className="relative flex items-center justify-center gap-2 px-4 py-2.5 rounded-[28px]"
        style={{
          background: 'rgba(38, 38, 42, 0.82)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          boxShadow: '0 0 0 0.5px rgba(255, 255, 255, 0.08) inset',
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
              onTouchStart={handleNavClick}
              className="relative flex items-center justify-center w-14 h-10 overflow-hidden rounded-xl"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <Ripple 
                color={active ? 'hsl(211, 100%, 55%)' : 'rgba(255, 255, 255, 0.4)'} 
                opacity={0.2} 
              />
              <motion.div
                whileTap={{ scale: 0.82 }}
                transition={{ 
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 0.5,
                }}
                className="flex items-center justify-center relative z-10"
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
