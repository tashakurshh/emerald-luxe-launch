import { motion } from "framer-motion";
import { MessageCircle, ClipboardCheck, Truck, CheckCircle } from "lucide-react";

// Apple spring physics
const springTap = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
  mass: 0.8,
};

const steps = [
  {
    icon: MessageCircle,
    title: "Message Us",
    description: "Send your prescription or medicine list on WhatsApp",
    color: "hsl(142, 70%, 49%)"
  },
  {
    icon: ClipboardCheck,
    title: "We Prepare",
    description: "Our pharmacists verify and prepare your order",
    color: "hsl(215, 90%, 58%)"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Your medicines are delivered to your doorstep",
    color: "hsl(270, 80%, 65%)"
  },
  {
    icon: CheckCircle,
    title: "Stay Healthy",
    description: "Get reminders for refills and stay on track",
    color: "hsl(145, 65%, 48%)"
  }
];

const HowItWorks = () => {
  return (
    <motion.div 
      className="glass-card p-5"
      whileTap={{ scale: 0.985 }}
      transition={springTap}
    >
      <h3 className="text-base font-semibold text-foreground mb-1 tracking-tight">How Ordering Works</h3>
      <p className="text-muted-foreground text-sm mb-5">Simple WhatsApp-first ordering</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <motion.div
              key={step.title}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative mb-3">
                <motion.div
                  className="w-12 h-12 mx-auto rounded-2xl flex items-center justify-center"
                  style={{ background: `${step.color}15` }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.1 }}
                >
                  <IconComponent className="w-6 h-6" style={{ color: step.color }} />
                </motion.div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px bg-border/50" />
                )}
              </div>
              <span className="text-2xs font-medium text-muted-foreground mb-0.5 block">Step {index + 1}</span>
              <h4 className="text-xs font-semibold text-foreground mb-0.5">{step.title}</h4>
              <p className="text-2xs text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default HowItWorks;