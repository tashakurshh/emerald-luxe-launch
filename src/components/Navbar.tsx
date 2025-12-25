import { Home, Briefcase, FileText } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { name: "Home", icon: Home, href: "#" },
    { name: "Services", icon: Briefcase, href: "#services" },
    { name: "Terms", icon: FileText, href: "#terms" },
  ];

  return (
    <nav className="glass-navbar">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-sm">
                M
              </span>
            </div>
            <span className="font-display font-semibold text-lg text-foreground">
              MediCare
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="glass-button flex items-center gap-2 px-4 py-2 text-sm text-foreground/80 hover:text-foreground"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
