import { Link, useLocation } from "react-router-dom";
import { Home, Package, FileText, User } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  name: string;
  icon: LucideIcon;
  href: string;
}

const BottomNav = () => {
  const location = useLocation();

  const navItems: NavItem[] = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Orders", icon: Package, href: "/orders" },
    { name: "Docs", icon: FileText, href: "/documents" },
    { name: "Profile", icon: User, href: "/profile" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="glass-bottom-nav md:hidden">
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              to={item.href}
              className="relative flex flex-col items-center gap-0.5 px-5 py-2 rounded-2xl"
            >
              <motion.div
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.08 }}
                className="flex flex-col items-center gap-0.5"
              >
                <IconComponent
                  className="w-[22px] h-[22px] transition-colors duration-180"
                  style={{ 
                    color: active ? "hsl(211, 100%, 50%)" : "hsl(0, 0%, 52%)" 
                  }}
                  strokeWidth={active ? 2 : 1.5}
                />
                <span
                  className="text-[10px] font-medium transition-colors duration-180"
                  style={{ 
                    color: active ? "hsl(211, 100%, 50%)" : "hsl(0, 0%, 52%)" 
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
};

export default BottomNav;