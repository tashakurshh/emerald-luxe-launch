import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight, Clock, MapPin, Gift } from "lucide-react";
import { activeServices, comingSoonServices } from "@/lib/services";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import BottomNav from "@/components/BottomNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";

const Services = () => {
  const [showComingSoon, setShowComingSoon] = useState<string | null>(null);

  const handleServiceClick = (serviceId: string, isActive: boolean, serviceName: string) => {
    if (!isActive) {
      setShowComingSoon(serviceId);
      setTimeout(() => setShowComingSoon(null), 2000);
    }
  };

  const handleWhatsAppOrder = (serviceName: string) => {
    openWhatsApp(whatsappMessages.orderService(serviceName));
  };

  return (
    <div className="page-container">
      <ParallaxBackground />
      <DynamicIslandNav />

      <main className="container mx-auto px-4 pt-28 pb-32 md:pb-16 max-w-2xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-foreground mb-2">Our Services</h1>
            <p className="text-muted-foreground">Quality healthcare delivered to your doorstep</p>
          </div>

          {/* Location & Offer Banner */}
          <div className="glass-card p-4 mb-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[hsl(215,90%,58%,0.15)] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[hsl(215,90%,58%)]" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Citywide Delivery</p>
                <p className="text-xs text-muted-foreground">Currently serving Srinagar</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[hsl(145,65%,48%,0.15)] flex items-center justify-center shrink-0">
                <Gift className="w-5 h-5 text-[hsl(145,65%,48%)]" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">First Order Offer</p>
                <p className="text-xs text-muted-foreground">Delivery charges not applicable</p>
              </div>
            </div>
          </div>

          {/* Active Services */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[hsl(145,65%,48%)]" />
              Available Services
            </h2>
            <div className="space-y-3">
              {activeServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={`/services/${service.slug}`}
                      className="glass-card p-4 flex items-center gap-4 group cursor-pointer block transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                        style={{ background: `${service.color}15` }}
                      >
                        <IconComponent className="w-7 h-7" style={{ color: service.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-foreground font-semibold mb-0.5">{service.name}</h3>
                        <p className="text-muted-foreground text-sm truncate">{service.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Coming Soon Services */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              Coming Soon
            </h2>
            <div className="space-y-3">
              {comingSoonServices.map((service, index) => {
                const IconComponent = service.icon;
                const isShowingComingSoon = showComingSoon === service.id;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (activeServices.length + index) * 0.05 }}
                    className="relative"
                  >
                    <div
                      className="glass-card p-4 flex items-center gap-4 opacity-60 cursor-pointer transition-all duration-300 active:scale-[0.99]"
                      onClick={() => handleServiceClick(service.id, service.isActive, service.name)}
                    >
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ background: `${service.color}10` }}
                      >
                        <IconComponent className="w-7 h-7" style={{ color: service.color, opacity: 0.6 }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-foreground/70 font-semibold mb-0.5">{service.name}</h3>
                        <p className="text-muted-foreground/70 text-sm truncate">{service.description}</p>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground bg-secondary/50 px-2 py-1 rounded-full shrink-0">
                        Soon
                      </span>
                    </div>

                    {/* Coming Soon Animation */}
                    <AnimatePresence>
                      {isShowingComingSoon && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="absolute inset-0 flex items-center justify-center bg-background/90 backdrop-blur-sm rounded-2xl"
                        >
                          <div className="text-center">
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: [0, 1.2, 1] }}
                              transition={{ duration: 0.4 }}
                              className="w-12 h-12 mx-auto mb-2 rounded-full bg-[hsl(270,80%,65%,0.2)] flex items-center justify-center"
                            >
                              <Clock className="w-6 h-6 text-[hsl(270,80%,65%)]" />
                            </motion.div>
                            <p className="font-semibold text-foreground">Coming Soon</p>
                            <p className="text-xs text-muted-foreground">We're working on this!</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            className="glass-card p-5 cursor-pointer group relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => openWhatsApp(whatsappMessages.generalInquiry)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(142,70%,49%,0.15)] to-[hsl(142,70%,49%,0.05)]" />
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[hsl(142,70%,49%)] shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-foreground font-semibold mb-0.5">Need Something Else?</h3>
                <p className="text-muted-foreground text-sm">Chat with us on WhatsApp</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
            </div>
          </motion.div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Services;
