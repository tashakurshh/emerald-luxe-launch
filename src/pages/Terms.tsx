import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
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

// Staggered section animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const Terms = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Gentle vertical drift values for sections
  const drift1 = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const drift2 = useTransform(scrollYProgress, [0, 1], [0, -12]);
  const drift3 = useTransform(scrollYProgress, [0, 1], [0, -16]);
  const drift4 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const drift5 = useTransform(scrollYProgress, [0, 1], [0, -24]);

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using this service, you accept and agree to be bound by the terms and provisions of this agreement.",
      drift: drift1,
    },
    {
      title: "2. Use License",
      content: "Permission is granted to temporarily use the materials on this website for personal, non-commercial transitory viewing only.",
      drift: drift2,
    },
    {
      title: "3. Medicine Delivery",
      content: "All medicines require valid prescriptions where applicable. We reserve the right to verify prescriptions before processing orders.",
      drift: drift3,
    },
    {
      title: "4. Privacy Policy",
      content: "Your privacy is important to us. All personal and medical information is handled with strict confidentiality.",
      drift: drift4,
    },
    {
      title: "5. Contact",
      content: "For any questions regarding these terms, please contact our support team.",
      drift: drift5,
    },
  ];

  return (
    <div className="page-container" ref={containerRef}>
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

          {/* Header with soft glow */}
          <div className="relative mb-5">
            <motion.div
              className="absolute -inset-4 rounded-2xl pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                background: `radial-gradient(ellipse 60% 40% at 50% 50%, 
                  hsl(var(--primary) / 0.15) 0%, 
                  transparent 70%
                )`,
                filter: 'blur(20px)',
              }}
            />
            <h1 className="text-2xl font-semibold text-foreground relative z-10">Terms & Conditions</h1>
          </div>

          <motion.div 
            className="glass-card p-5 space-y-5 text-muted-foreground"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sections.map((section, index) => (
              <motion.section
                key={index}
                variants={sectionVariants}
                style={{ y: section.drift }}
                className="relative"
              >
                {/* Soft glow behind heading */}
                <motion.div
                  className="absolute -left-3 -top-1 w-2 h-8 rounded-full pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  style={{
                    background: `linear-gradient(180deg, hsl(var(--primary) / 0.4) 0%, transparent 100%)`,
                    filter: 'blur(6px)',
                  }}
                />
                <h2 className="text-lg font-semibold text-foreground mb-2">{section.title}</h2>
                <p className="text-sm leading-relaxed">{section.content}</p>
              </motion.section>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div 
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <p className="text-xs text-muted-foreground">Pharmih v1.0</p>
          </motion.div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Terms;