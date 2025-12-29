import { useCallback } from 'react';

// Spring configurations for tactile animations
export const appleSpring = {
  tap: {
    type: "spring" as const,
    stiffness: 500,
    damping: 30,
    mass: 0.5,
  },
  hover: {
    type: "spring" as const,
    stiffness: 400,
    damping: 25,
  },
};

// Scale values for tactile feedback
export const appleScale = {
  button: 0.97,
  card: 0.985,
  icon: 0.92,
  nav: 0.95,
  subtle: 0.99,
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
      const duration = intensity === 'light' ? 10 : intensity === 'medium' ? 25 : 50;
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
