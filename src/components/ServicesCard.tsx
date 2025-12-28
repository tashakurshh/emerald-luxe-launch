import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/lib/services";

const ServicesCard = () => {
  return (
    <div id="services" className="glass-card p-6">
      <h3 className="text-lg font-semibold text-foreground mb-5 tracking-tight">Our Services</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {services.map((service, index) => {
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
                className="service-item flex flex-col items-center gap-2 group text-center p-3"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: `${service.color}20` }}
                >
                  <IconComponent className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <span className="text-xs font-medium text-foreground/90 leading-tight">{service.name}</span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesCard;
