import { Home, Grid3X3, FileUp, User } from "lucide-react";

const BottomNav = () => {
  const navItems = [
    { name: "Home", icon: Home, active: true },
    { name: "Services", icon: Grid3X3, active: false },
    { name: "Upload", icon: FileUp, active: false },
    { name: "Profile", icon: User, active: false },
  ];

  return (
    <nav className="glass-bottom-nav md:hidden">
      <div className="flex items-center justify-around py-3">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 ${
              item.active
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <item.icon className={`w-5 h-5 ${item.active ? "drop-shadow-[0_0_8px_hsl(var(--primary))]" : ""}`} />
            <span className="text-xs font-medium">{item.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
