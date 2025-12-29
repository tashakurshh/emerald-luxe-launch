import { motion } from "framer-motion";
import { Shield, Clock, Award, HeartHandshake } from "lucide-react";

// Apple spring physics
const springTap = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
  mass: 0.8,
};

const trustPoints = [
  {
    icon: Shield,
    title: "100% Genuine",
    description: "All medicines sourced from licensed distributors",
    color: "hsl(215, 90%, 58%)"
  },
  {
    icon: Clock,
    title: "24hr Delivery",
    description: "Fast citywide delivery across Srinagar",
    color: "hsl(30, 100%, 58%)"
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Licensed pharmacists verify every order",
    color: "hsl(270, 80%, 65%)"
  },
  {
    icon: HeartHandshake,
    title: "Care First",
    description: "Your health is our top priority",
    color: "hsl(340, 75%, 62%)"
  }
];

const TrustSection = () => {
  return (
    <motion.div 
      className="glass-card p-5"
      whileTap={{ scale: 0.985 }}
      transition={springTap}
    >
      <h3 className="text-base font-semibold text-foreground mb-1 tracking-tight">Why Customers Trust Pharmih</h3>
      <p className="text-muted-foreground text-sm mb-5">Trusted healthcare partner in Srinagar</p>
      
      <div className="grid grid-cols-2 gap-3">
        {trustPoints.map((point, index) => {
          const IconComponent = point.icon;
          return (
            <motion.div
              key={point.title}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${point.color}15` }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                <IconComponent className="w-4 h-4" style={{ color: point.color }} />
              </motion.div>
              <div>
                <h4 className="text-xs font-semibold text-foreground mb-0.5">{point.title}</h4>
                <p className="text-2xs text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TrustSection;