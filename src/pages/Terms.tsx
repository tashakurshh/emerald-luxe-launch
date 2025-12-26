import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import BottomNav from "@/components/BottomNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";

const Terms = () => {
  return (
    <div className="page-container">
      <ParallaxBackground />
      <DynamicIslandNav />

      <main className="container mx-auto px-4 pt-28 pb-32 md:pb-16 max-w-2xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <h1 className="text-3xl font-semibold text-foreground mb-6">Terms & Conditions</h1>

          <div className="glass-card p-6 space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using this service, you accept and agree to be bound by the terms and provisions of this agreement.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Use License</h2>
              <p>Permission is granted to temporarily use the materials on this website for personal, non-commercial transitory viewing only.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Medicine Delivery</h2>
              <p>All medicines require valid prescriptions where applicable. We reserve the right to verify prescriptions before processing orders.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Privacy Policy</h2>
              <p>Your privacy is important to us. All personal and medical information is handled with strict confidentiality.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Contact</h2>
              <p>For any questions regarding these terms, please contact our support team.</p>
            </section>
          </div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Terms;
