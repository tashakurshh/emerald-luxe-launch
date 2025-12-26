import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Grid3X3, FileText } from "lucide-react";

const DynamicIslandNav = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Services", icon: Grid3X3, href: "/#services" },
    { name: "Terms", icon: FileText, href: "/terms" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href.replace("/#", "/"));
  };

  return (
    <nav className="dynamic-island">
      <div className="flex items-center gap-1 px-2 py-2">
        <Link to="/" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[hsl(215,90%,58%)] to-[hsl(270,80%,65%)]">
          <span className="text-sm font-bold tracking-tight">M</span>
        </Link>

        <div className="w-px h-6 bg-border mx-1" />

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {(active || hoveredItem === item.name) && (
                  <div
                    className="absolute inset-0 rounded-full bg-secondary -z-10 transition-all duration-300"
                    style={{ opacity: active ? 1 : 0.5 }}
                  />
                )}
                <IconComponent className="w-4 h-4" />
                <span
                  className={`text-sm font-medium transition-all duration-300 overflow-hidden ${
                    hoveredItem === item.name || active ? "max-w-24 opacity-100" : "max-w-0 opacity-0"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default DynamicIslandNav;
