import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import { mockServices } from "@/lib/mockData";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import BottomNav from "@/components/BottomNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";

const ServicePage = () => {
  const { slug } = useParams();
  const service = mockServices.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="page-container flex items-center justify-center">
        <p className="text-muted-foreground">Service not found</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <ParallaxBackground />
      <DynamicIslandNav />

      <main className="container mx-auto px-4 pt-28 pb-32 md:pb-16 max-w-2xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Back */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="glass-card p-6 mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: `${service.color}20` }}
            >
              <div className="w-8 h-8 rounded-full" style={{ background: service.color }} />
            </div>
            <h1 className="text-3xl font-semibold text-foreground mb-2">{service.name}</h1>
            <p className="text-muted-foreground">{service.longDescription}</p>
          </div>

          {/* Features */}
          <div className="glass-card p-6 mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">What's Included</h3>
            <div className="space-y-3">
              {service.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${service.color}20` }}>
                    <Check className="w-3.5 h-3.5" style={{ color: service.color }} />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link to="/" className="apple-button-primary w-full py-4 flex items-center justify-center gap-2 text-lg">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default ServicePage;
