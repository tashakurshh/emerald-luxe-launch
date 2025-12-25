import { useState } from "react";
import { Home, Grid3X3, FileText } from "lucide-react";

const DynamicIslandNav = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { name: "Home", icon: Home, href: "#", active: true },
    { name: "Services", icon: Grid3X3, href: "#services", active: false },
    { name: "Terms", icon: FileText, href: "#terms", active: false },
  ];

  return (
    <nav className="dynamic-island">
      <div className="flex items-center gap-1 px-2 py-2">
        {/* Logo Pill */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[hsl(210,100%,50%)] to-[hsl(280,100%,65%)]">
          <span className="text-sm font-bold tracking-tight">M</span>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-[hsl(0,0%,25%)] mx-1" />

        {/* Nav Items */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  item.active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {/* Active/Hover Background */}
                {(item.active || hoveredItem === item.name) && (
                  <div
                    className="absolute inset-0 rounded-full bg-[hsl(0,0%,18%)] -z-10 transition-all duration-300"
                    style={{
                      opacity: item.active ? 1 : 0.5,
                    }}
                  />
                )}
                <IconComponent className="w-4 h-4" />
                <span
                  className={`text-sm font-medium transition-all duration-300 overflow-hidden ${
                    hoveredItem === item.name || item.active
                      ? "max-w-24 opacity-100"
                      : "max-w-0 opacity-0"
                  }`}
                >
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default DynamicIslandNav;
