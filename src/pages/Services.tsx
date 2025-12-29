import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight, Clock, MapPin, Gift } from "lucide-react";
import { activeServices, comingSoonServices } from "@/lib/services";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import BottomNav from "@/components/BottomNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";

const springConfig = {
  duration: 0.35,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

const Services = () => {
  const [showComingSoon, setShowComingSoon] = useState<string | null>(null);

  const handleServiceClick = (serviceId: string, isActive: boolean) => {
    if (!isActive) {
      setShowComingSoon(serviceId);
      setTimeout(() => setShowComingSoon(null), 1800);
    }
  };

  return (
    <div className="page-container">
      <ParallaxBackground />
      <DynamicIslandNav />

      <main className="container mx-auto px-4 pt-24 pb-28 md:pb-12 max-w-xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={springConfig}
        >
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-foreground mb-1">Our Services</h1>
            <p className="text-muted-foreground text-sm">Quality healthcare delivered to your doorstep</p>
          </div>

          {/* Location & Offer Banner */}
          <div className="glass-card p-4 mb-5 space-y-2.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/12 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Citywide Delivery</p>
                <p className="text-xs text-muted-foreground">Currently serving Srinagar</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-apple-green/12 flex items-center justify-center shrink-0">
                <Gift className="w-4 h-4 text-apple-green" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">First Order Offer</p>
                <p className="text-xs text-muted-foreground">Delivery charges not applicable</p>
              </div>
            </div>
          </div>

          {/* Active Services */}
          <div className="mb-6">
            <h2 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-apple-green" />
              Available Services
            </h2>
            <div className="space-y-2.5">
              {activeServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...springConfig, delay: index * 0.04 }}
                  >
                    <Link
                      to={`/services/${service.slug}`}
                      className="glass-card p-3.5 flex items-center gap-3.5 group cursor-pointer block"
                    >
                      <motion.div
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.08 }}
                        className="flex items-center gap-3.5 w-full"
                      >
                        <div
                          className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                          style={{ background: `${service.color}12` }}
                        >
                          <IconComponent className="w-5 h-5" style={{ color: service.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-foreground font-medium text-sm mb-0.5">{service.name}</h3>
                          <p className="text-muted-foreground text-xs truncate">{service.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Coming Soon Services */}
          <div className="mb-6">
            <h2 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-muted-foreground" />
              Coming Soon
            </h2>
            <div className="space-y-2.5">
              {comingSoonServices.map((service, index) => {
                const IconComponent = service.icon;
                const isShowingComingSoon = showComingSoon === service.id;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...springConfig, delay: (activeServices.length + index) * 0.04 }}
                    className="relative"
                  >
                    <motion.div
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.08 }}
                      className="glass-card p-3.5 flex items-center gap-3.5 opacity-50 cursor-pointer"
                      onClick={() => handleServiceClick(service.id, service.isActive)}
                    >
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ background: `${service.color}08` }}
                      >
                        <IconComponent className="w-5 h-5" style={{ color: service.color, opacity: 0.5 }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-foreground/60 font-medium text-sm mb-0.5">{service.name}</h3>
                        <p className="text-muted-foreground/60 text-xs truncate">{service.description}</p>
                      </div>
                      <span className="text-2xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full shrink-0">
                        Soon
                      </span>
                    </motion.div>

                    {/* Coming Soon Animation */}
                    <AnimatePresence>
                      {isShowingComingSoon && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          transition={springConfig}
                          className="absolute inset-0 flex items-center justify-center bg-background/92 backdrop-blur-sm rounded-lg"
                        >
                          <div className="text-center">
                            <motion.div
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ ...springConfig, delay: 0.05 }}
                              className="w-10 h-10 mx-auto mb-2 rounded-full bg-apple-purple/15 flex items-center justify-center"
                            >
                              <Clock className="w-5 h-5 text-apple-purple" />
                            </motion.div>
                            <p className="font-medium text-sm text-foreground">Coming Soon</p>
                            <p className="text-xs text-muted-foreground">We're working on this</p>
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
            className="glass-card p-4 cursor-pointer group relative overflow-hidden"
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.08 }}
            onClick={() => openWhatsApp(whatsappMessages.generalInquiry)}
          >
            <div className="absolute inset-0 bg-apple-green/8" />
            <div className="relative z-10 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-apple-green shrink-0">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-foreground font-medium text-sm mb-0.5">Need Something Else?</h3>
                <p className="text-muted-foreground text-xs">Chat with us on WhatsApp</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
          </motion.div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Services;