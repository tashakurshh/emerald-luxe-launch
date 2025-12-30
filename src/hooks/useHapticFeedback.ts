import { useCallback } from 'react';

// Apple-style spring physics for tactile animations
// Press: instant, Release: smooth
export const appleSpring = {
  // Immediate press response
  tap: {
    type: "spring" as const,
    stiffness: 500,
    damping: 30,
    mass: 0.5,
  },
  // Smooth release with spring physics
  release: {
    type: "spring" as const,
    stiffness: 400,
    damping: 28,
    mass: 0.8,
  },
  // Hover transitions (desktop)
  hover: {
    type: "spring" as const,
    stiffness: 350,
    damping: 25,
  },
};

// Scale values for tactile feedback - Apple-style micro-compression
export const appleScale = {
  button: 0.965,      // Buttons get noticeable compression
  card: 0.98,         // Cards get subtle compression
  cardActive: 0.975,  // Cards when actively pressed  
  icon: 0.88,         // Icons get deeper compression
  nav: 0.94,          // Nav items get medium compression
  link: 0.97,         // Links get light compression
  subtle: 0.992,      // Very subtle for large elements
};

// Brightness values for press feedback
export const appleBrightness = {
  press: 1.03,        // Slight brightness increase on press
  active: 1.05,       // Active state brightness
};

interface HapticFeedbackOptions {
  enableSound?: boolean;
  intensity?: "light" | "medium" | "heavy";
}

export function useHapticFeedback(options: HapticFeedbackOptions = {}) {
  const { intensity = "light" } = options;

  const triggerHaptic = useCallback(() => {
    // Use Vibration API for mobile devices
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      const duration = intensity === 'light' ? 8 : intensity === 'medium' ? 18 : 35;
      try {
        navigator.vibrate(duration);
      } catch {
        // Silently fail if vibration not supported
      }
    }
  }, [intensity]);

  return { triggerHaptic };
}

export default useHapticFeedback;
