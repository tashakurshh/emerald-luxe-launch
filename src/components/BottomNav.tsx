import { Home, Grid3X3, FileUp, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  name: string;
  icon: LucideIcon;
  active: boolean;
  color: string;
}

const BottomNav = () => {
  const navItems: NavItem[] = [
    { name: "Home", icon: Home, active: true, color: "hsl(210, 100%, 50%)" },
    { name: "Services", icon: Grid3X3, active: false, color: "hsl(280, 100%, 65%)" },
    { name: "Upload", icon: FileUp, active: false, color: "hsl(142, 71%, 45%)" },
    { name: "Profile", icon: User, active: false, color: "hsl(340, 82%, 60%)" },
  ];

  return (
    <nav className="glass-bottom-nav md:hidden">
      <div className="flex items-center justify-around py-3 px-2">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.name}
              className="relative flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-300"
            >
              {item.active && (
                <div
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{ background: item.color }}
                />
              )}
              <IconComponent
                className="w-5 h-5 transition-all duration-300"
                style={{ color: item.active ? item.color : "hsl(0, 0%, 55%)" }}
              />
              <span
                className="text-xs font-medium transition-all duration-300"
                style={{ color: item.active ? item.color : "hsl(0, 0%, 55%)" }}
              >
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
