import { useState, KeyboardEvent, useCallback } from "react";
import { motion } from "framer-motion";
import { appleSpring, appleScale, useHapticFeedback } from "@/hooks/useHapticFeedback";
import Ripple from "@/components/ui/Ripple";

interface WelcomeModalProps {
  onComplete: (name: string) => void;
}

const WelcomeModal = ({ onComplete }: WelcomeModalProps) => {
  const [name, setName] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { triggerHaptic } = useHapticFeedback({ intensity: "medium" });

  const handleSubmit = useCallback(() => {
    if (name.trim()) {
      triggerHaptic();
      onComplete(name.trim());
    }
  }, [name, triggerHaptic, onComplete]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const isValid = name.trim().length > 0;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col"
      style={{
        paddingTop: 'max(24px, env(safe-area-inset-top, 24px))',
        paddingBottom: 'max(24px, env(safe-area-inset-bottom, 24px))',
        paddingLeft: 'max(16px, env(safe-area-inset-left, 16px))',
        paddingRight: 'max(16px, env(safe-area-inset-right, 16px))',
      }}
    >
      {/* Background with subtle noise texture */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 50% 0%, hsl(220 20% 12%) 0%, hsl(225 15% 7%) 70%),
            hsl(225 15% 7%)
          `,
        }}
      />
      
      {/* Subtle grain overlay */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Centered content container */}
      <div className="flex-1 flex items-center justify-center min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="w-full max-w-[380px] sm:max-w-md"
        >
          {/* Glass card */}
          <div 
            className="relative overflow-hidden rounded-[24px] sm:rounded-[28px]"
            style={{
              background: 'hsl(220 18% 12% / 0.72)',
              backdropFilter: 'saturate(160%) blur(40px)',
              WebkitBackdropFilter: 'saturate(160%) blur(40px)',
              border: '0.5px solid hsl(220 25% 100% / 0.1)',
              boxShadow: `
                0 24px 80px hsl(225 40% 4% / 0.5),
                0 8px 32px hsl(225 40% 4% / 0.3),
                inset 0 0.5px 0 hsl(220 30% 100% / 0.08)
              `,
            }}
          >
            {/* Top gradient accent */}
            <motion.div 
              className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 80, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              style={{
                background: 'linear-gradient(90deg, hsl(211 100% 50%) 0%, hsl(280 85% 65%) 50%, hsl(340 85% 60%) 100%)',
              }}
            />

            {/* Content with proper padding */}
            <div className="px-6 sm:px-8 py-8 sm:py-10">
              {/* Header */}
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <h1 
                  className="text-[28px] sm:text-3xl font-semibold mb-2"
                  style={{ 
                    color: 'hsl(0 0% 96%)',
                    letterSpacing: '-0.025em',
                  }}
                >
                  Welcome
                </h1>
                <p 
                  className="text-[15px] sm:text-base"
                  style={{ color: 'hsl(0 0% 55%)' }}
                >
                  Let's get to know you
                </p>
              </motion.div>

              {/* Form */}
              <motion.div 
                className="space-y-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Input wrapper with glow effect */}
                <div className="relative">
                  {/* Focus glow */}
                  <motion.div
                    className="absolute -inset-[2px] rounded-[14px] pointer-events-none"
                    animate={{
                      opacity: isFocused ? 1 : 0,
                      scale: isFocused ? 1 : 0.98,
                    }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    style={{
                      background: 'hsl(211 100% 50% / 0.12)',
                      filter: 'blur(8px)',
                    }}
                  />
                  
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Your name"
                    autoFocus
                    className="relative w-full px-4 py-3.5 text-center text-[17px] outline-none transition-all duration-200"
                    style={{
                      background: 'hsl(225 12% 11%)',
                      border: isFocused 
                        ? '1px solid hsl(211 100% 50% / 0.5)' 
                        : '0.5px solid hsl(225 10% 22%)',
                      borderRadius: '12px',
                      color: 'hsl(0 0% 94%)',
                      boxShadow: isFocused
                        ? '0 0 0 4px hsl(211 100% 50% / 0.1), inset 0 1px 2px hsl(225 20% 5% / 0.3)'
                        : 'inset 0 1px 2px hsl(225 20% 5% / 0.3)',
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  />
                </div>

                {/* Button with ripple */}
                <motion.button
                  onClick={handleSubmit}
                  disabled={!isValid}
                  whileTap={isValid ? { scale: appleScale.button } : {}}
                  transition={appleSpring.tap}
                  className="relative w-full py-3.5 text-[17px] font-semibold rounded-[12px] overflow-hidden outline-none"
                  style={{
                    background: isValid 
                      ? 'hsl(211 100% 50%)' 
                      : 'hsl(211 40% 35%)',
                    color: isValid 
                      ? 'hsl(0 0% 100%)' 
                      : 'hsl(0 0% 70%)',
                    boxShadow: isValid
                      ? '0 4px 20px hsl(211 100% 50% / 0.35), 0 2px 8px hsl(211 100% 40% / 0.25)'
                      : 'none',
                    cursor: isValid ? 'pointer' : 'not-allowed',
                    WebkitTapHighlightColor: 'transparent',
                    transition: 'background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',
                  }}
                >
                  {isValid && <Ripple color="hsl(0 0% 100%)" opacity={0.25} />}
                  <span className="relative z-10">Continue</span>
                </motion.button>
              </motion.div>

              {/* Helper text */}
              <motion.p 
                className="text-center text-[13px] mt-6"
                style={{ color: 'hsl(0 0% 40%)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                Press Enter to continue
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeModal;