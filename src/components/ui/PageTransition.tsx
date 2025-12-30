import { motion } from 'framer-motion';
import { ReactNode, memo } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

// Apple-style transition: fast fade with subtle vertical drift
const pageVariants = {
  initial: { 
    opacity: 0, 
    y: 6,
  },
  animate: { 
    opacity: 1, 
    y: 0,
  },
  exit: { 
    opacity: 0,
    y: -4,
  },
};

const pageTransition = {
  duration: 0.18,
  ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
};

const PageTransition = memo(function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
});

export default PageTransition;