import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

// iOS-26 Spring Physics
const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1,
};

const fadeTransition = {
  duration: 0.35,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={fadeTransition}
    >
      {children}
    </motion.div>
  );
}

// Staggered container for scroll materialization
export function StaggerContainer({ 
  children, 
  staggerDelay = 0.08,
  className = "" 
}: { 
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger item - subtle materialize effect
export function StaggerItem({ 
  children, 
  className = "" 
}: { 
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { 
          opacity: 0, 
          y: 6,
        },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.35,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Haptic-like button wrapper
export function HapticButton({ 
  children, 
  className = "",
  onClick,
}: { 
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.965 }}
      transition={{ duration: 0.08, ease: "easeOut" }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

// Card with subtle depth shift on interaction
export function InteractiveCard({ 
  children, 
  className = "",
  onClick,
}: { 
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -1, transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] } }}
      whileTap={{ scale: 0.985, transition: { duration: 0.08 } }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

// Scroll-triggered fade in
export function ScrollReveal({ 
  children, 
  className = "",
  delay = 0,
}: { 
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ 
        duration: 0.4, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}