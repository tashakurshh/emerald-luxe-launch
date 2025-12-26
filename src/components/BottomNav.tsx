import { Link, useLocation } from "react-router-dom";
import { Home, Package, FileText, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  name: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

const BottomNav = () => {
  const location = useLocation();

  const navItems: NavItem[] = [
    { name: "Home", icon: Home, href: "/", color: "hsl(215, 90%, 58%)" },
    { name: "Orders", icon: Package, href: "/orders", color: "hsl(270, 80%, 65%)" },
    { name: "Docs", icon: FileText, href: "/documents", color: "hsl(145, 65%, 48%)" },
    { name: "Profile", icon: User, href: "/profile", color: "hsl(340, 75%, 62%)" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="glass-bottom-nav md:hidden">
      <div className="flex items-center justify-around py-3 px-2">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              to={item.href}
              className="relative flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-300 active:scale-95"
            >
              {active && (
                <div
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{ background: item.color }}
                />
              )}
              <IconComponent
                className="w-5 h-5 transition-all duration-300"
                style={{ color: active ? item.color : "hsl(220, 10%, 55%)" }}
              />
              <span
                className="text-xs font-medium transition-all duration-300"
                style={{ color: active ? item.color : "hsl(220, 10%, 55%)" }}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
