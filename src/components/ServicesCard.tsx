import {
  Pill,
  HeartPulse,
  Leaf,
  TestTube2,
  Sparkles,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  name: string;
  icon: LucideIcon;
  color: string;
}

const ServicesCard = () => {
  const services: Service[] = [
    { name: "Pharmacy", icon: Pill, color: "hsl(210, 100%, 50%)" },
    { name: "Healthcare", icon: HeartPulse, color: "hsl(340, 82%, 60%)" },
    { name: "Supplements", icon: Leaf, color: "hsl(142, 71%, 45%)" },
    { name: "Diagnostics", icon: TestTube2, color: "hsl(280, 100%, 65%)" },
    { name: "Wellness", icon: Sparkles, color: "hsl(45, 100%, 50%)" },
    { name: "Instant Delivery", icon: Zap, color: "hsl(28, 100%, 55%)" },
  ];

  return (
    <div id="services" className="glass-card p-6">
      <h3 className="text-lg font-semibold text-foreground mb-5 tracking-tight">
        Our Services
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.name}
              className="service-item flex items-center gap-3 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: `${service.color}20` }}
              >
                <IconComponent
                  className="w-5 h-5"
                  style={{ color: service.color }}
                />
              </div>
              <span className="text-sm font-medium text-foreground/90">
                {service.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesCard;
