import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import BottomNav from "@/components/BottomNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";

// Apple spring physics
const springTap = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
  mass: 0.8,
};

const Terms = () => {
  return (
    <div className="page-container">
      <ParallaxBackground />
      <DynamicIslandNav />

      <main className="container mx-auto px-4 pt-24 pb-28 md:pb-12 max-w-xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div whileTap={{ scale: 0.95 }} transition={{ duration: 0.1 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </motion.div>

          <h1 className="text-2xl font-semibold text-foreground mb-5">Terms & Conditions</h1>

          <motion.div 
            className="glass-card p-5 space-y-5 text-muted-foreground"
            whileTap={{ scale: 0.985 }}
            transition={springTap}
          >
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">1. Acceptance of Terms</h2>
              <p className="text-sm leading-relaxed">By accessing and using this service, you accept and agree to be bound by the terms and provisions of this agreement.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">2. Use License</h2>
              <p className="text-sm leading-relaxed">Permission is granted to temporarily use the materials on this website for personal, non-commercial transitory viewing only.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">3. Medicine Delivery</h2>
              <p className="text-sm leading-relaxed">All medicines require valid prescriptions where applicable. We reserve the right to verify prescriptions before processing orders.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">4. Privacy Policy</h2>
              <p className="text-sm leading-relaxed">Your privacy is important to us. All personal and medical information is handled with strict confidentiality.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">5. Contact</h2>
              <p className="text-sm leading-relaxed">For any questions regarding these terms, please contact our support team.</p>
            </section>
          </motion.div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">Pharmih v1.0</p>
          </div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Terms;