import {
  Pill,
  HeartPulse,
  Leaf,
  TestTube2,
  Sparkles,
  Zap,
} from "lucide-react";

const ServicesCard = () => {
  const services = [
    { name: "Pharmacy", icon: Pill },
    { name: "Healthcare", icon: HeartPulse },
    { name: "Supplements", icon: Leaf },
    { name: "Diagnostics", icon: TestTube2 },
    { name: "Wellness", icon: Sparkles },
    { name: "Instant Delivery", icon: Zap },
  ];

  return (
    <div id="services" className="glass-card p-6">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">
        Our Services
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {services.map((service, index) => (
          <div
            key={service.name}
            className="service-item flex items-center gap-3 opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <service.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground/90">
              {service.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
