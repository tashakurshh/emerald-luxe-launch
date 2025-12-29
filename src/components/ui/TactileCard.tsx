import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef, useCallback, useState, ReactNode } from "react";
import { appleSpring, appleScale, useHapticFeedback } from "@/hooks/useHapticFeedback";
import { cn } from "@/lib/utils";

interface TactileCardProps extends Omit<HTMLMotionProps<"div">, "onTap" | "children"> {
  enableSound?: boolean;
  enableGlow?: boolean;
  glowColor?: string;
  interactive?: boolean;
  children?: ReactNode;
}

const TactileCard = forwardRef<HTMLDivElement, TactileCardProps>(
  ({ 
    className, 
    enableSound = false, 
    enableGlow = false,
    glowColor = "hsl(var(--primary) / 0.3)",
    interactive = true,
    children, 
    onClick,
    ...props 
  }, ref) => {
    const { triggerHaptic } = useHapticFeedback({ enableSound, intensity: "light" });
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (interactive) {
          triggerHaptic();
        }
        onClick?.(e as any);
      },
      [triggerHaptic, onClick, interactive]
    );

    return (
      <div className="relative">
        {/* Glow effect */}
        {enableGlow && (
          <motion.div
            className="absolute -inset-2 rounded-2xl pointer-events-none"
            animate={{
              opacity: isHovered ? 0.6 : 0,
              scale: isHovered ? 1.02 : 0.95,
            }}
            transition={appleSpring.hover}
            style={{
              background: `radial-gradient(ellipse 80% 70% at 50% 50%, 
                ${glowColor} 0%, 
                transparent 70%
              )`,
              filter: 'blur(14px)',
            }}
          />
        )}
        
        <motion.div
          ref={ref}
          className={cn(
            "glass-card relative overflow-hidden",
            interactive && "cursor-pointer",
            className
          )}
          whileTap={interactive ? { 
            scale: appleScale.card,
            transition: appleSpring.tap,
          } : undefined}
          whileHover={interactive ? { 
            y: -2,
            transition: appleSpring.hover,
          } : undefined}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={handleClick}
          {...props}
        >
          {/* Inner gradient on hover */}
          {enableGlow && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              style={{
                background: `linear-gradient(135deg, ${glowColor.replace('0.3', '0.08')} 0%, transparent 50%)`,
              }}
            />
          )}
          
          <div className="relative z-10">
            {children}
          </div>
        </motion.div>
      </div>
    );
  }
);

TactileCard.displayName = "TactileCard";

export default TactileCard;