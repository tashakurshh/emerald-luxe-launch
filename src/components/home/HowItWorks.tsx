import { motion } from "framer-motion";
import { MessageCircle, ClipboardCheck, Truck, CheckCircle } from "lucide-react";

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
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">How Ordering Works</h3>
      <p className="text-muted-foreground text-sm mb-6">Simple WhatsApp-first ordering</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <motion.div
              key={step.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative mb-3">
                <div
                  className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center"
                  style={{ background: `${step.color}15` }}
                >
                  <IconComponent className="w-7 h-7" style={{ color: step.color }} />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-border" />
                )}
              </div>
              <span className="text-xs font-semibold text-foreground/60 mb-1 block">Step {index + 1}</span>
              <h4 className="text-sm font-semibold text-foreground mb-1">{step.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
