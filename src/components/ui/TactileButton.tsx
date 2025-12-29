import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef, useCallback } from "react";
import { appleSpring, appleScale, useHapticFeedback } from "@/hooks/useHapticFeedback";
import { cn } from "@/lib/utils";

interface TactileButtonProps extends Omit<HTMLMotionProps<"button">, "onTap"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  enableSound?: boolean;
}

const TactileButton = forwardRef<HTMLButtonElement, TactileButtonProps>(
  ({ className, variant = "primary", size = "md", enableSound = false, children, onClick, ...props }, ref) => {
    const { triggerHaptic } = useHapticFeedback({ enableSound, intensity: "light" });

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        triggerHaptic();
        onClick?.(e as any);
      },
      [triggerHaptic, onClick]
    );

    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
    };

    const variantClasses = {
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      ghost: "bg-transparent hover:bg-secondary/50",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "rounded-xl font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        whileTap={{ 
          scale: appleScale.button,
          transition: appleSpring.tap,
        }}
        whileHover={{ 
          y: -1,
          transition: appleSpring.hover,
        }}
        onClick={handleClick}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

TactileButton.displayName = "TactileButton";

export default TactileButton;