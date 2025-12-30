import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef, useCallback, type ReactNode } from "react";
import { useHapticFeedback } from "@/hooks/useHapticFeedback";

// Apple-style tactile press physics using spring
const tactileSpring = {
  type: "spring" as const,
  stiffness: 500,
  damping: 30,
  mass: 0.5,
};

// Scale presets for different element types
export const tactileScale = {
  button: 0.965,      // Buttons get noticeable compression
  card: 0.98,         // Cards get subtle compression
  cardActive: 0.975,  // Cards when actively pressed
  icon: 0.88,         // Icons get deeper compression
  nav: 0.94,          // Nav items get medium compression
  link: 0.97,         // Links get light compression
  subtle: 0.992,      // Very subtle for large elements
};

interface TactilePressProps extends Omit<HTMLMotionProps<"div">, "whileTap" | "transition"> {
  children: ReactNode;
  scale?: number;
  haptic?: boolean;
  hapticIntensity?: "light" | "medium" | "heavy";
  disabled?: boolean;
  className?: string;
}

/**
 * TactilePress - Apple-style tactile press feedback wrapper
 * 
 * Provides instant press response with:
 * - Micro-compression (scale)
 * - Optional haptic feedback
 * - Smooth release animation
 * 
 * Use this to wrap any interactive element that should feel tappable.
 */
const TactilePress = forwardRef<HTMLDivElement, TactilePressProps>(
  function TactilePress(
    {
      children,
      scale = tactileScale.button,
      haptic = true,
      hapticIntensity = "light",
      disabled = false,
      className = "",
      onClick,
      onTouchStart,
      ...props
    },
    ref
  ) {
    const { triggerHaptic } = useHapticFeedback({ intensity: hapticIntensity });

    // Handle touch with haptic - fires on touchstart for instant feedback
    const handleTouchStart = useCallback(
      (e: React.TouchEvent<HTMLDivElement>) => {
        if (haptic && !disabled) {
          triggerHaptic();
        }
        onTouchStart?.(e);
      },
      [haptic, disabled, triggerHaptic, onTouchStart]
    );

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        // Only trigger haptic on click if it wasn't a touch event
        if (haptic && !disabled && !("ontouchstart" in window)) {
          triggerHaptic();
        }
        onClick?.(e);
      },
      [haptic, disabled, triggerHaptic, onClick]
    );

    if (disabled) {
      return (
        <div ref={ref} className={className} {...(props as any)}>
          {children}
        </div>
      );
    }

    return (
      <motion.div
        ref={ref}
        className={className}
        whileTap={{ scale }}
        transition={tactileSpring}
        onTouchStart={handleTouchStart}
        onClick={handleClick}
        style={{
          WebkitTapHighlightColor: "transparent",
          touchAction: "manipulation",
          ...props.style,
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

export { TactilePress };
export default TactilePress;
