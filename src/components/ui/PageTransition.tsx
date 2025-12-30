import { motion } from 'framer-motion';
import { ReactNode, memo } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

// Optimized transition - shorter duration for snappier feel
const fadeTransition = {
  duration: 0.25,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

const PageTransition = memo(function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={fadeTransition}
    >
      {children}
    </motion.div>
  );
});

export default PageTransition;