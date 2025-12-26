import { Link } from "react-router-dom";
import { Pill, HeartPulse, Leaf, TestTube2, Sparkles, Zap, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Service {
  name: string;
  slug: string;
  icon: LucideIcon;
  color: string;
}

const ServicesCard = () => {
  const services: Service[] = [
    { name: "Pharmacy", slug: "pharmacy", icon: Pill, color: "hsl(215, 90%, 58%)" },
    { name: "Healthcare", slug: "healthcare", icon: HeartPulse, color: "hsl(340, 75%, 62%)" },
    { name: "Supplements", slug: "supplements", icon: Leaf, color: "hsl(145, 65%, 48%)" },
    { name: "Diagnostics", slug: "diagnostics", icon: TestTube2, color: "hsl(270, 80%, 65%)" },
    { name: "Wellness", slug: "wellness", icon: Sparkles, color: "hsl(48, 95%, 55%)" },
    { name: "Instant Delivery", slug: "instant-delivery", icon: Zap, color: "hsl(30, 100%, 58%)" },
  ];

  return (
    <div id="services" className="glass-card p-6">
      <h3 className="text-lg font-semibold text-foreground mb-5 tracking-tight">Our Services</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="service-item flex items-center gap-3 group"
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: `${service.color}20` }}
                >
                  <IconComponent className="w-5 h-5" style={{ color: service.color }} />
                </div>
                <span className="text-sm font-medium text-foreground/90 flex-1">{service.name}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesCard;
