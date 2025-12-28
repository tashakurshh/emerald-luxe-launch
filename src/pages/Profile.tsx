import { motion } from "framer-motion";
import { User, Package, Phone, MessageCircle, MapPin, Heart, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import BottomNav from "@/components/BottomNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import { useApp } from "@/contexts/AppContext";
import { openWhatsApp } from "@/lib/whatsapp";

const Profile = () => {
  const { userName } = useApp();

  const handleSupport = () => {
    openWhatsApp("Hi, I need help with my account. Can you assist me?");
  };

  const menuItems = [
    { icon: Package, label: "My Orders", href: "/orders", color: "hsl(270, 80%, 65%)" },
    { icon: Heart, label: "Saved Services", href: "/", color: "hsl(340, 75%, 62%)" },
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
            <h1 className="text-2xl font-semibold text-foreground mb-1">{userName || "Guest"}</h1>
            <p className="text-muted-foreground text-sm">Welcome to MediCare</p>
          </div>

          {/* Quick Actions */}
          <div className="glass-card divide-y divide-border mb-6">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center gap-4 p-4 hover:bg-secondary/30 transition-colors active:scale-[0.98]"
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${item.color}15` }}
                  >
                    <IconComponent className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <span className="flex-1 text-foreground font-medium">{item.label}</span>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </Link>
              );
            })}
          </div>

          {/* Contact Support */}
          <motion.div
            className="glass-card p-5 cursor-pointer group"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={handleSupport}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[hsl(142,70%,49%)] flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-foreground font-semibold mb-0.5">Contact Support</h3>
                <p className="text-muted-foreground text-sm">Chat with us on WhatsApp</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Delivery Area Info */}
          <div className="glass-card p-5 mt-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[hsl(215,90%,58%,0.15)] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[hsl(215,90%,58%)]" />
              </div>
              <h3 className="text-foreground font-semibold">Delivery Area</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              We currently deliver across the city. Message us on WhatsApp to check if your area is covered.
            </p>
          </div>

          {/* App Info */}
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">MediCare v1.0</p>
            <Link to="/terms" className="text-xs text-primary hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;
