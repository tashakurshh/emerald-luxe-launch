import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, MessageCircle, Users, Package, Truck } from "lucide-react";
import { getServiceBySlug } from "@/lib/services";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
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

const MotionLink = motion(Link);

const ServicePage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug || "");
  const [isCtaHovered, setIsCtaHovered] = useState(false);

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
            <motion.div whileTap={{ scale: 0.95 }} transition={{ duration: 0.1 }}>
              <Link to="/services" className="text-primary hover:underline">View all services</Link>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

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
          {/* Back */}
          <MotionLink
            to="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </MotionLink>

          {/* Header Card */}
          <motion.div 
            className="glass-card p-6 mb-5 relative overflow-hidden"
            whileTap={{ scale: 0.985 }}
            transition={springTap}
          >
            <div 
              className="absolute inset-0 opacity-10"
              style={{ background: `linear-gradient(135deg, ${service.color} 0%, transparent 60%)` }}
            />
            <div className="relative z-10">
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: `${service.color}20` }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                <IconComponent className="w-8 h-8" style={{ color: service.color }} />
              </motion.div>
              <p className="text-sm font-medium text-muted-foreground mb-1">{service.tagline}</p>
              <h1 className="text-2xl font-semibold text-foreground mb-3">{service.name}</h1>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.longDescription}</p>
            </div>
          </motion.div>

          {/* Who It's For */}
          <motion.div 
            className="glass-card p-5 mb-4"
            whileTap={{ scale: 0.985 }}
            transition={springTap}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-[hsl(215,90%,58%,0.15)]"
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                <Users className="w-5 h-5 text-[hsl(215,90%,58%)]" />
              </motion.div>
              <h3 className="text-base font-semibold text-foreground">Who It's For</h3>
            </div>
            <div className="space-y-2.5">
              {service.whoFor.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-foreground/90 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What Can Be Ordered */}
          <motion.div 
            className="glass-card p-5 mb-4"
            whileTap={{ scale: 0.985 }}
            transition={springTap}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-[hsl(145,65%,48%,0.15)]"
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                <Package className="w-5 h-5 text-[hsl(145,65%,48%)]" />
              </motion.div>
              <h3 className="text-base font-semibold text-foreground">What You Can Order</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.whatCanOrder.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2 bg-card/50 rounded-xl px-3 py-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Check className="w-4 h-4 text-[hsl(145,65%,48%)] shrink-0" />
                  <span className="text-foreground/90 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div 
            className="glass-card p-5 mb-4"
            whileTap={{ scale: 0.985 }}
            transition={springTap}
          >
            <h3 className="text-base font-semibold text-foreground mb-4">What's Included</h3>
            <div className="space-y-2.5">
              {service.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <motion.div 
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" 
                    style={{ background: `${service.color}20` }}
                    whileTap={{ scale: 0.85 }}
                    transition={{ duration: 0.1 }}
                  >
                    <Check className="w-3.5 h-3.5" style={{ color: service.color }} />
                  </motion.div>
                  <span className="text-foreground text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Delivery Info */}
          <motion.div 
            className="glass-card p-5 mb-5"
            whileTap={{ scale: 0.985 }}
            transition={springTap}
          >
            <div className="flex items-center gap-3 mb-3">
              <motion.div 
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-[hsl(30,100%,58%,0.15)]"
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                <Truck className="w-5 h-5 text-[hsl(30,100%,58%)]" />
              </motion.div>
              <h3 className="text-base font-semibold text-foreground">Delivery Information</h3>
            </div>
            <p className="text-muted-foreground text-sm">{service.deliveryInfo}</p>
          </motion.div>

          {/* WhatsApp CTA */}
          <div className="relative">
            <motion.div
              className="absolute -inset-2 rounded-3xl pointer-events-none"
              animate={{
                opacity: isCtaHovered ? 0.7 : 0,
                scale: isCtaHovered ? 1.02 : 0.95,
              }}
              transition={springHover}
              style={{
                background: `radial-gradient(ellipse 80% 70% at 50% 50%, 
                  hsl(142 60% 45% / 0.35) 0%, 
                  hsl(142 50% 40% / 0.15) 40%,
                  transparent 70%
                )`,
                filter: 'blur(16px)',
              }}
            />
            
            <motion.button
              className="w-full py-4 rounded-2xl flex items-center justify-center gap-3 text-lg font-semibold text-white relative overflow-hidden"
              style={{ background: "hsl(142, 70%, 49%)" }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.975 }}
              transition={springTap}
              onClick={handleWhatsAppOrder}
              onHoverStart={() => setIsCtaHovered(true)}
              onHoverEnd={() => setIsCtaHovered(false)}
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
              Order via WhatsApp
            </motion.button>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-4">
            Chat with Pharmih for pricing and availability
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default ServicePage;