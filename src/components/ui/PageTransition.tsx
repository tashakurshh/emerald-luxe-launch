import { motion } from 'framer-motion';
import { ReactNode, memo, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

// Track navigation direction
let navigationHistory: string[] = [];

function getNavigationDirection(currentPath: string): 'forward' | 'back' {
  const lastIndex = navigationHistory.lastIndexOf(currentPath);
  
  if (lastIndex !== -1 && lastIndex < navigationHistory.length - 1) {
    // Going back to a previous page
    navigationHistory = navigationHistory.slice(0, lastIndex + 1);
    return 'back';
  }
  
  // Going forward
  navigationHistory.push(currentPath);
  if (navigationHistory.length > 20) {
    navigationHistory = navigationHistory.slice(-20);
  }
  return 'forward';
}

// Apple iOS system easing - fast start, gentle settle
const appleEasing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const PageTransition = memo(function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const directionRef = useRef<'forward' | 'back'>('forward');
  
  useEffect(() => {
    directionRef.current = getNavigationDirection(location.pathname);
  }, [location.pathname]);

  const direction = directionRef.current;
  
  // Spatial movement: forward = settle up, back = settle down
  // Opacity is subtle, not primary
  const variants = {
    initial: { 
      y: direction === 'forward' ? 6 : -4,
      opacity: 0.92,
    },
    animate: { 
      y: 0,
      opacity: 1,
    },
    exit: { 
      y: direction === 'forward' ? -3 : 4,
      opacity: 0.96,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        y: { duration: 0.22, ease: appleEasing },
        opacity: { duration: 0.12, ease: 'easeOut' },
      }}
      style={{ 
        willChange: 'transform',
      }}
    >
      {children}
    </motion.div>
  );
});

export default PageTransition;