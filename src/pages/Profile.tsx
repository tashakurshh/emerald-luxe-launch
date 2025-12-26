import { motion } from "framer-motion";
import { User, MapPin, Package, Phone, Mail, ChevronRight, LogOut } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import { Link } from "react-router-dom";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import BottomNav from "@/components/BottomNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";

const Profile = () => {
  const { userProfile, orders } = useApp();

  const menuItems = [
    { icon: Package, label: "Order History", href: "/orders", count: orders.length },
    { icon: MapPin, label: "Saved Addresses", href: "#", count: userProfile.addresses.length },
    { icon: Phone, label: "Contact Support", href: "#" },
  ];

  return (
    <div className="page-container">
      <ParallaxBackground />
      <DynamicIslandNav />

      <main className="container mx-auto px-4 pt-28 pb-32 md:pb-16 max-w-2xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Profile Header */}
          <div className="glass-card p-6 mb-6 text-center">
            <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
              <User className="w-10 h-10 text-foreground" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground mb-1">{userProfile.name}</h1>
            <p className="text-muted-foreground text-sm">{userProfile.email}</p>
            {userProfile.phone && (
              <p className="text-muted-foreground text-sm">{userProfile.phone}</p>
            )}
          </div>

          {/* Menu Items */}
          <div className="glass-card divide-y divide-border">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center gap-4 p-4 hover:bg-secondary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <span className="flex-1 text-foreground font-medium">{item.label}</span>
                  {item.count !== undefined && (
                    <span className="text-muted-foreground text-sm">{item.count}</span>
                  )}
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </Link>
              );
            })}
          </div>

          {/* Addresses */}
          <div className="glass-card p-5 mt-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Saved Addresses</h3>
            <div className="space-y-3">
              {userProfile.addresses.map(addr => (
                <div key={addr.id} className="p-3 rounded-xl bg-secondary/30">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-foreground font-medium">{addr.label}</span>
                    {addr.isDefault && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Default</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{addr.address}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;
