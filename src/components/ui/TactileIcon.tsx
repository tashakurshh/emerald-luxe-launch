import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef, useCallback } from "react";
import { appleSpring, appleScale, useHapticFeedback } from "@/hooks/useHapticFeedback";
import { cn } from "@/lib/utils";

interface TactileIconProps extends Omit<HTMLMotionProps<"div">, "onTap"> {
  enableSound?: boolean;
  size?: "sm" | "md" | "lg";
}

const TactileIcon = forwardRef<HTMLDivElement, TactileIconProps>(
  ({ className, enableSound = false, size = "md", children, onClick, ...props }, ref) => {
    const { triggerHaptic } = useHapticFeedback({ enableSound, intensity: "light" });

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        triggerHaptic();
        onClick?.(e as any);
      },
      [triggerHaptic, onClick]
    );

    const sizeClasses = {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12",
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-xl flex items-center justify-center cursor-pointer",
          sizeClasses[size],
          className
        )}
        whileTap={{ 
          scale: appleScale.icon,
          transition: appleSpring.tap,
        }}
        whileHover={{ 
          scale: 1.05,
          transition: appleSpring.hover,
        }}
        onClick={handleClick}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

TactileIcon.displayName = "TactileIcon";

export default TactileIcon;