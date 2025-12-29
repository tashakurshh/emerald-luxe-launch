import { motion } from "framer-motion";
import { User, Package, MessageCircle, MapPin, Heart, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import BottomNav from "@/components/BottomNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import { useApp } from "@/contexts/AppContext";
import { openWhatsApp } from "@/lib/whatsapp";
import { useState } from "react";

// Apple spring physics
const springTap = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
  mass: 0.8,
};

const springHover = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
};

const Profile = () => {
  const { userName } = useApp();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isSupportHovered, setIsSupportHovered] = useState(false);

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

      <main className="container mx-auto px-4 pt-24 pb-28 md:pb-12 max-w-xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Profile Header */}
          <motion.div 
            className="glass-card p-6 mb-5 text-center"
            whileTap={{ scale: 0.985 }}
            transition={springTap}
          >
            <motion.div 
              className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-primary to-apple-purple"
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.1 }}
            >
              <User className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-2xl font-semibold text-foreground mb-1">{userName || "Guest"}</h1>
            <p className="text-muted-foreground text-sm">Welcome to Pharmih</p>
          </motion.div>

          {/* Quick Actions */}
          <div className="glass-card divide-y divide-border/50 mb-5 overflow-hidden">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              const isHovered = hoveredItem === item.label;
              
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <motion.div
                    className="flex items-center gap-4 p-4 relative"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    transition={springTap}
                  >
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        background: `linear-gradient(90deg, ${item.color}10 0%, transparent 50%)`,
                      }}
                    />
                    
                    <motion.div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center relative z-10"
                      style={{ background: `${item.color}15` }}
                      whileTap={{ scale: 0.9 }}
                      animate={{ scale: isHovered ? 1.05 : 1 }}
                      transition={springTap}
                    >
                      <IconComponent className="w-5 h-5" style={{ color: item.color }} />
                    </motion.div>
                    <span className="flex-1 text-foreground font-medium relative z-10">{item.label}</span>
                    <motion.div
                      animate={{ x: isHovered ? 3 : 0 }}
                      transition={springHover}
                    >
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Contact Support */}
          <div className="relative">
            <motion.div
              className="absolute -inset-2 rounded-2xl pointer-events-none"
              animate={{
                opacity: isSupportHovered ? 0.6 : 0,
                scale: isSupportHovered ? 1.02 : 0.95,
              }}
              transition={springHover}
              style={{
                background: `radial-gradient(ellipse 80% 70% at 50% 50%, 
                  hsl(142 60% 45% / 0.3) 0%, 
                  hsl(142 50% 40% / 0.12) 40%,
                  transparent 70%
                )`,
                filter: 'blur(14px)',
              }}
            />
            
            <motion.div
              className="glass-card p-5 cursor-pointer group relative overflow-hidden"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.975 }}
              transition={springTap}
              onClick={handleSupport}
              onHoverStart={() => setIsSupportHovered(true)}
              onHoverEnd={() => setIsSupportHovered(false)}
            >
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: isSupportHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: `linear-gradient(135deg, hsl(142 60% 45% / 0.08) 0%, transparent 50%)`,
                }}
              />
              
              <div className="flex items-center gap-4 relative z-10">
                <motion.div 
                  className="w-12 h-12 rounded-2xl bg-[hsl(142,70%,49%)] flex items-center justify-center shrink-0"
                  whileTap={{ scale: 0.9 }}
                  animate={{ scale: isSupportHovered ? 1.05 : 1 }}
                  transition={springTap}
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-foreground font-semibold mb-0.5">Contact Support</h3>
                  <p className="text-muted-foreground text-sm">Chat with us on WhatsApp</p>
                </div>
                <motion.div
                  animate={{ x: isSupportHovered ? 3 : 0 }}
                  transition={springHover}
                >
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Delivery Area Info */}
          <motion.div 
            className="glass-card p-5 mt-5"
            whileTap={{ scale: 0.985 }}
            transition={springTap}
          >
            <div className="flex items-center gap-3 mb-3">
              <motion.div 
                className="w-10 h-10 rounded-xl bg-[hsl(215,90%,58%,0.15)] flex items-center justify-center"
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                <MapPin className="w-5 h-5 text-[hsl(215,90%,58%)]" />
              </motion.div>
              <h3 className="text-foreground font-semibold">Delivery Area</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              We currently deliver across the city. Message us on WhatsApp to check if your area is covered.
            </p>
          </motion.div>

          {/* App Info */}
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">Pharmih v1.0</p>
            <motion.div whileTap={{ scale: 0.95 }} transition={{ duration: 0.1 }}>
              <Link to="/terms" className="text-xs text-primary hover:underline">
                Terms & Conditions
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;