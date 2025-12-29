import { motion } from "framer-motion";
import { Package, MessageCircle, ShoppingBag, ArrowRight } from "lucide-react";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import BottomNav from "@/components/BottomNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
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

const Orders = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleCheckStatus = () => {
    openWhatsApp("Hi Pharmih, I want to check the status of my order. Can you help me?");
  };

  const handleNewOrder = () => {
    openWhatsApp("Hi Pharmih, I want to place a new medicine order.");
  };

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
          <h1 className="text-2xl font-semibold text-foreground mb-6">Orders</h1>

          {/* Action Cards */}
          <div className="space-y-3">
            {/* New Order Card */}
            <div className="relative">
              <motion.div
                className="absolute -inset-2 rounded-2xl pointer-events-none"
                animate={{
                  opacity: hoveredCard === 'new' ? 0.6 : 0,
                  scale: hoveredCard === 'new' ? 1.02 : 0.95,
                }}
                transition={springHover}
                style={{
                  background: `radial-gradient(ellipse 80% 70% at 50% 50%, 
                    hsl(145 60% 45% / 0.3) 0%, 
                    hsl(145 50% 40% / 0.12) 40%,
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
                onClick={handleNewOrder}
                onHoverStart={() => setHoveredCard('new')}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ opacity: hoveredCard === 'new' ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: `linear-gradient(135deg, hsl(145 60% 45% / 0.08) 0%, transparent 50%)`,
                  }}
                />
                
                <div className="flex items-center gap-4 relative z-10">
                  <motion.div 
                    className="w-12 h-12 rounded-2xl bg-[hsl(145,65%,48%,0.15)] flex items-center justify-center shrink-0"
                    whileTap={{ scale: 0.9 }}
                    animate={{ scale: hoveredCard === 'new' ? 1.05 : 1 }}
                    transition={springTap}
                  >
                    <ShoppingBag className="w-6 h-6 text-[hsl(145,65%,48%)]" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-foreground font-semibold mb-0.5">Place New Order</h3>
                    <p className="text-muted-foreground text-sm">Start a new order on WhatsApp</p>
                  </div>
                  <motion.div
                    animate={{ x: hoveredCard === 'new' ? 3 : 0 }}
                    transition={springHover}
                  >
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Check Status Card */}
            <div className="relative">
              <motion.div
                className="absolute -inset-2 rounded-2xl pointer-events-none"
                animate={{
                  opacity: hoveredCard === 'status' ? 0.6 : 0,
                  scale: hoveredCard === 'status' ? 1.02 : 0.95,
                }}
                transition={springHover}
                style={{
                  background: `radial-gradient(ellipse 80% 70% at 50% 50%, 
                    hsl(215 70% 50% / 0.3) 0%, 
                    hsl(215 60% 45% / 0.12) 40%,
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
                onClick={handleCheckStatus}
                onHoverStart={() => setHoveredCard('status')}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ opacity: hoveredCard === 'status' ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: `linear-gradient(135deg, hsl(215 70% 50% / 0.08) 0%, transparent 50%)`,
                  }}
                />
                
                <div className="flex items-center gap-4 relative z-10">
                  <motion.div 
                    className="w-12 h-12 rounded-2xl bg-[hsl(215,90%,58%,0.15)] flex items-center justify-center shrink-0"
                    whileTap={{ scale: 0.9 }}
                    animate={{ scale: hoveredCard === 'status' ? 1.05 : 1 }}
                    transition={springTap}
                  >
                    <Package className="w-6 h-6 text-[hsl(215,90%,58%)]" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-foreground font-semibold mb-0.5">Check Order Status</h3>
                    <p className="text-muted-foreground text-sm">Message us for order updates</p>
                  </div>
                  <motion.div
                    animate={{ x: hoveredCard === 'status' ? 3 : 0 }}
                    transition={springHover}
                  >
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Info */}
          <motion.div 
            className="mt-6 p-4 rounded-2xl bg-secondary/30 text-center"
            whileTap={{ scale: 0.98 }}
            transition={springTap}
          >
            <p className="text-sm text-muted-foreground">
              All orders are managed via WhatsApp for quick and personalized service.
            </p>
          </motion.div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Orders;