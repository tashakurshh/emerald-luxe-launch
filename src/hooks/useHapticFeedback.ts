import { useCallback, useRef } from 'react';

// Apple-style spring physics for tactile animations
export const appleSpring = {
  tap: {
    type: "spring" as const,
    stiffness: 500,
    damping: 30,
    mass: 0.5,
  },
  release: {
    type: "spring" as const,
    stiffness: 400,
    damping: 28,
    mass: 0.8,
  },
  hover: {
    type: "spring" as const,
    stiffness: 350,
    damping: 25,
  },
};

// Scale values for tactile feedback
export const appleScale = {
  button: 0.965,
  card: 0.98,
  cardActive: 0.975,
  icon: 0.88,
  nav: 0.94,
  link: 0.97,
  subtle: 0.992,
};

export const appleBrightness = {
  press: 1.03,
  active: 1.05,
};

interface HapticFeedbackOptions {
  intensity?: "light" | "medium" | "heavy";
}

export function useHapticFeedback(options: HapticFeedbackOptions = {}) {
  const { intensity = "light" } = options;
  const lastTriggerRef = useRef<number>(0);

  const triggerHaptic = useCallback(() => {
    // Debounce to prevent rapid-fire triggers
    const now = Date.now();
    if (now - lastTriggerRef.current < 50) return;
    lastTriggerRef.current = now;

    // Vibration API for mobile
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      const duration = intensity === 'light' ? 8 : intensity === 'medium' ? 18 : 35;
      try {
        navigator.vibrate(duration);
      } catch {
        // Silently fail
      }
    }
  }, [intensity]);

  return { triggerHaptic };
}

export default useHapticFeedback;
