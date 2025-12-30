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
  enableSound?: boolean;
  intensity?: "light" | "medium" | "heavy";
}

// Singleton AudioContext for performance
let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  
  if (!audioContext) {
    try {
      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch {
      return null;
    }
  }
  return audioContext;
}

// Play a very subtle, soft tap sound
function playTapSound(intensity: "light" | "medium" | "heavy" = "light") {
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    // Resume context if suspended (required for mobile)
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;
    
    // Create a very short, soft click using oscillator
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    // Soft sine wave for smooth sound
    oscillator.type = 'sine';
    
    // Frequency based on intensity (higher = lighter feel)
    const freq = intensity === 'light' ? 1800 : intensity === 'medium' ? 1400 : 1000;
    oscillator.frequency.setValueAtTime(freq, now);
    oscillator.frequency.exponentialRampToValueAtTime(freq * 0.5, now + 0.03);
    
    // Very low volume for subtle effect
    const volume = intensity === 'light' ? 0.015 : intensity === 'medium' ? 0.025 : 0.035;
    gainNode.gain.setValueAtTime(volume, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.start(now);
    oscillator.stop(now + 0.05);
  } catch {
    // Silently fail if audio not supported
  }
}

export function useHapticFeedback(options: HapticFeedbackOptions = {}) {
  const { intensity = "light", enableSound = true } = options;
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

    // Subtle tap sound
    if (enableSound) {
      playTapSound(intensity);
    }
  }, [intensity, enableSound]);

  return { triggerHaptic };
}

export default useHapticFeedback;
