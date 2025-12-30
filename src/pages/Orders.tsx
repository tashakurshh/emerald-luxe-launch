import { motion } from "framer-motion";
import { Package, MessageCircle, ShoppingBag, ArrowRight, Clock } from "lucide-react";
import DynamicIslandNav from "@/components/DynamicIslandNav";
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

// Apple-style sheet animation
const sheetVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
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

          {/* Action Cards - Apple-style sheets */}
          <div className="space-y-3">
            {/* New Order Card */}
            <motion.div 
              className="relative"
              custom={0}
              variants={sheetVariants}
              initial="hidden"
              animate="visible"
            >
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
                whileHover={{ y: -2, boxShadow: '0 8px 30px -8px hsl(145 60% 45% / 0.15)' }}
                whileTap={{ scale: 0.975, y: 0 }}
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
            </motion.div>

            {/* Check Status Card */}
            <motion.div 
              className="relative"
              custom={1}
              variants={sheetVariants}
              initial="hidden"
              animate="visible"
            >
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
                whileHover={{ y: -2, boxShadow: '0 8px 30px -8px hsl(215 70% 50% / 0.15)' }}
                whileTap={{ scale: 0.975, y: 0 }}
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
            </motion.div>
          </div>

          {/* Empty State - Reassuring design */}
          <motion.div 
            className="mt-6 glass-card p-6 text-center relative overflow-hidden"
            custom={2}
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Soft ambient glow */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                background: `radial-gradient(ellipse 80% 60% at 50% 30%, 
                  hsl(var(--primary) / 0.08) 0%, 
                  transparent 60%
                )`,
              }}
            />
            
            <motion.div 
              className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/50 flex items-center justify-center relative z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Clock className="w-8 h-8 text-muted-foreground" />
            </motion.div>
            <motion.h3 
              className="text-foreground font-semibold mb-1 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              No active orders
            </motion.h3>
            <motion.p 
              className="text-muted-foreground text-sm relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.55 }}
            >
              Your order history will appear here once you place an order.
            </motion.p>
          </motion.div>

          {/* Info */}
          <motion.div 
            className="mt-4 p-4 rounded-2xl bg-secondary/30 text-center"
            custom={3}
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            whileTap={{ scale: 0.98 }}
            transition={springTap}
          >
            <p className="text-sm text-muted-foreground">
              All orders are managed via WhatsApp for quick and personalized service.
            </p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Orders;