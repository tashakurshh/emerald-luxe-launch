import { motion } from "framer-motion";
import { Package, MessageCircle, ShoppingBag } from "lucide-react";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import BottomNav from "@/components/BottomNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import { openWhatsApp } from "@/lib/whatsapp";

const Orders = () => {
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

      <main className="container mx-auto px-4 pt-28 pb-32 md:pb-16 max-w-2xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-semibold text-foreground mb-6">Orders</h1>

          {/* Action Cards */}
          <div className="space-y-4">
            <motion.div
              className="glass-card p-5 cursor-pointer group"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={handleNewOrder}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[hsl(145,65%,48%,0.15)] flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-6 h-6 text-[hsl(145,65%,48%)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground font-semibold mb-0.5">Place New Order</h3>
                  <p className="text-muted-foreground text-sm">Start a new order on WhatsApp</p>
                </div>
                <MessageCircle className="w-5 h-5 text-[hsl(142,70%,49%)]" />
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-5 cursor-pointer group"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={handleCheckStatus}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[hsl(215,90%,58%,0.15)] flex items-center justify-center shrink-0">
                  <Package className="w-6 h-6 text-[hsl(215,90%,58%)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground font-semibold mb-0.5">Check Order Status</h3>
                  <p className="text-muted-foreground text-sm">Message us for order updates</p>
                </div>
                <MessageCircle className="w-5 h-5 text-[hsl(142,70%,49%)]" />
              </div>
            </motion.div>
          </div>

          {/* Info */}
          <div className="mt-6 p-4 rounded-2xl bg-secondary/30 text-center">
            <p className="text-sm text-muted-foreground">
              💬 All orders are managed via WhatsApp for quick and personalized service.
            </p>
          </div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Orders;
