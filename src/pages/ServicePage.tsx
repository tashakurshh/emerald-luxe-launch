import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, MessageCircle, Users, Package, Truck } from "lucide-react";
import { getServiceBySlug } from "@/lib/services";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import BottomNav from "@/components/BottomNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";

const ServicePage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug || "");

  const handleWhatsAppOrder = () => {
    if (service) {
      openWhatsApp(whatsappMessages.orderService(service.name));
    }
  };

  if (!service) {
    return (
      <div className="page-container">
        <ParallaxBackground />
        <DynamicIslandNav />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Service not found</p>
            <Link to="/" className="text-primary hover:underline">Go back home</Link>
          </div>
        </div>
        <BottomNav />
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="page-container">
      <ParallaxBackground />
      <DynamicIslandNav />

      <main className="container mx-auto px-4 pt-28 pb-32 md:pb-16 max-w-2xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Back */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header Card */}
          <div className="glass-card p-6 mb-6 relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-10"
              style={{ background: `linear-gradient(135deg, ${service.color} 0%, transparent 60%)` }}
            />
            <div className="relative z-10">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: `${service.color}20` }}
              >
                <IconComponent className="w-8 h-8" style={{ color: service.color }} />
              </div>
              <p className="text-sm font-medium text-muted-foreground mb-1">{service.tagline}</p>
              <h1 className="text-3xl font-semibold text-foreground mb-3">{service.name}</h1>
              <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
            </div>
          </div>

          {/* Who It's For */}
          <div className="glass-card p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[hsl(215,90%,58%,0.15)]">
                <Users className="w-5 h-5 text-[hsl(215,90%,58%)]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Who It's For</h3>
            </div>
            <div className="space-y-3">
              {service.whoFor.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-foreground/90 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What Can Be Ordered */}
          <div className="glass-card p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[hsl(145,65%,48%,0.15)]">
                <Package className="w-5 h-5 text-[hsl(145,65%,48%)]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">What You Can Order</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.whatCanOrder.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2 bg-card/50 rounded-xl px-3 py-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Check className="w-4 h-4 text-[hsl(145,65%,48%)] shrink-0" />
                  <span className="text-foreground/90 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="glass-card p-6 mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">What's Included</h3>
            <div className="space-y-3">
              {service.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" 
                    style={{ background: `${service.color}20` }}
                  >
                    <Check className="w-3.5 h-3.5" style={{ color: service.color }} />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Delivery Info */}
          <div className="glass-card p-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[hsl(30,100%,58%,0.15)]">
                <Truck className="w-5 h-5 text-[hsl(30,100%,58%)]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Delivery Information</h3>
            </div>
            <p className="text-muted-foreground">{service.deliveryInfo}</p>
          </div>

          {/* WhatsApp CTA */}
          <motion.button
            className="w-full py-4 rounded-2xl flex items-center justify-center gap-3 text-lg font-semibold text-white transition-all"
            style={{ background: "hsl(142, 70%, 49%)" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsAppOrder}
          >
            <MessageCircle className="w-6 h-6" />
            Order via WhatsApp
          </motion.button>

          <p className="text-center text-muted-foreground text-sm mt-4">
            Chat with us for pricing and availability
          </p>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default ServicePage;
