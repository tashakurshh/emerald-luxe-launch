import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import pharmihLogo from "@/assets/pharmih-logo.png";

interface SplashScreenProps {
  onComplete: () => void;
  duration?: number;
}

const SplashScreen = ({ onComplete, duration = 1500 }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const onCompleteRef = useRef(onComplete);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const handleComplete = useCallback(() => {
    if (hasCompletedRef.current) return;
    hasCompletedRef.current = true;
    setIsVisible(false);
    // Small delay for exit animation
    window.setTimeout(() => onCompleteRef.current(), 200);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(handleComplete, duration);
    return () => window.clearTimeout(timer);
  }, [duration, handleComplete]);

  // Allow click/tap to skip
  const handleSkip = useCallback(() => {
    handleComplete();
  }, [handleComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={handleSkip}
          onTouchEnd={handleSkip}
          style={{
            background: 'linear-gradient(180deg, hsl(158 52% 20%) 0%, hsl(158 52% 12%) 100%)',
          }}
        >
          <div className="flex flex-col items-center gap-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <img 
                src={pharmihLogo} 
                alt="Pharmih" 
                className="w-64 h-auto max-w-[80vw]"
              />
            </motion.div>

            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[hsl(45,70%,80%,0.6)]"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            <p className="text-[hsl(45,70%,80%,0.5)] text-xs mt-2">Tap to skip</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;