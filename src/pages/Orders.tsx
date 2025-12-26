import { useState } from "react";
import { motion } from "framer-motion";
import { Package, Clock, CheckCircle2, Truck, AlertCircle, ChevronRight } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import BottomNav from "@/components/BottomNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import { Order, OrderStatus } from "@/types";

const statusConfig: Record<OrderStatus, { label: string; color: string; icon: typeof Package }> = {
  PENDING_PRESCRIPTION: { label: "Pending", color: "hsl(48, 95%, 55%)", icon: Clock },
  PENDING_PRICE_CONFIRMATION: { label: "Awaiting Confirmation", color: "hsl(30, 100%, 58%)", icon: AlertCircle },
  CONFIRMED: { label: "Confirmed", color: "hsl(215, 90%, 58%)", icon: CheckCircle2 },
  PROCESSING: { label: "Processing", color: "hsl(270, 80%, 65%)", icon: Package },
  OUT_FOR_DELIVERY: { label: "Out for Delivery", color: "hsl(175, 70%, 45%)", icon: Truck },
  DELIVERED: { label: "Delivered", color: "hsl(145, 65%, 48%)", icon: CheckCircle2 },
  CANCELLED: { label: "Cancelled", color: "hsl(0, 72%, 55%)", icon: AlertCircle },
};

type TabType = "pending" | "confirmed" | "delivered";

const Orders = () => {
  const { orders, confirmOrderPrice } = useApp();
  const [activeTab, setActiveTab] = useState<TabType>("pending");

  const filteredOrders = orders.filter(order => {
    if (activeTab === "pending") return ["PENDING_PRESCRIPTION", "PENDING_PRICE_CONFIRMATION"].includes(order.status);
    if (activeTab === "confirmed") return ["CONFIRMED", "PROCESSING", "OUT_FOR_DELIVERY"].includes(order.status);
    return order.status === "DELIVERED" || order.status === "CANCELLED";
  });

  const tabs: { key: TabType; label: string }[] = [
    { key: "pending", label: "Pending" },
    { key: "confirmed", label: "Active" },
    { key: "delivered", label: "Completed" },
  ];

  return (
    <div className="page-container">
      <ParallaxBackground />
      <DynamicIslandNav />

      <main className="container mx-auto px-4 pt-28 pb-32 md:pb-16 max-w-2xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-semibold text-foreground mb-6">Orders</h1>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 p-1 glass-card">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                  activeTab === tab.key ? "tab-active" : "tab-inactive"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Orders List */}
          <div className="space-y-4">
            {filteredOrders.length === 0 ? (
              <div className="empty-state glass-card">
                <div className="empty-state-icon">
                  <Package className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">No orders found</p>
              </div>
            ) : (
              filteredOrders.map((order, index) => (
                <OrderCard 
                  key={order.id} 
                  order={order} 
                  index={index}
                  onConfirm={() => confirmOrderPrice(order.id)}
                />
              ))
            )}
          </div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

function OrderCard({ order, index, onConfirm }: { order: Order; index: number; onConfirm: () => void }) {
  const config = statusConfig[order.status];
  const StatusIcon = config.icon;

  return (
    <motion.div
      className="glass-card p-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-muted-foreground">{order.id}</p>
          <p className="text-foreground font-medium">{order.items.length} item(s)</p>
        </div>
        <div className="status-badge" style={{ background: `${config.color}15`, color: config.color }}>
          <StatusIcon className="w-3.5 h-3.5" />
          {config.label}
        </div>
      </div>

      <div className="text-sm text-muted-foreground mb-4">
        {order.items.slice(0, 2).map(item => item.name).join(", ")}
        {order.items.length > 2 && ` +${order.items.length - 2} more`}
      </div>

      {order.status === "PENDING_PRICE_CONFIRMATION" && order.estimatedPrice && (
        <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 mb-4">
          <div>
            <p className="text-xs text-muted-foreground">Estimated Total</p>
            <p className="text-lg font-semibold text-foreground">₹{order.estimatedPrice}</p>
          </div>
          <button onClick={onConfirm} className="apple-button-primary px-5 py-2.5 text-sm">
            Confirm & Pay
          </button>
        </div>
      )}

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{new Date(order.createdAt).toLocaleDateString()}</span>
        <ChevronRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
}

export default Orders;
