import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { activeServices } from "@/lib/services";

const ServicesCard = () => {
  // Show only first 4 services on home page
  const displayServices = activeServices.slice(0, 4);

  return (
    <div id="services" className="glass-card p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-foreground tracking-tight">Our Services</h3>
        <Link 
          to="/services" 
          className="text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
        >
          View All
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {displayServices.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to="/services"
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
