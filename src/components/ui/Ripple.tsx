import { useState, useCallback, type MouseEvent, type TouchEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RippleItem {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface RippleProps {
  color?: string;
  opacity?: number;
  duration?: number;
  disabled?: boolean;
}

/**
 * Ripple - Apple-style subtle ripple effect
 * 
 * Add this component inside any interactive element to get
 * a soft, expanding ripple on tap/click.
 */
export function useRipple(options: RippleProps = {}) {
  const { disabled = false } = options;
  const [ripples, setRipples] = useState<RippleItem[]>([]);

  const createRipple = useCallback(
    (e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => {
      if (disabled) return;

      const element = e.currentTarget;
      const rect = element.getBoundingClientRect();
      
      // Get position from touch or mouse event
      let x: number, y: number;
      if ('touches' in e && e.touches.length > 0) {
        x = e.touches[0].clientX - rect.left;
        y = e.touches[0].clientY - rect.top;
      } else if ('clientX' in e) {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      } else {
        x = rect.width / 2;
        y = rect.height / 2;
      }

      // Calculate ripple size to cover the element
      const size = Math.max(rect.width, rect.height) * 2.5;

      const newRipple: RippleItem = {
        id: Date.now(),
        x,
        y,
        size,
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 700);
    },
    [disabled]
  );

  return { ripples, createRipple };
}

export function Ripple({
  color = "currentColor",
  opacity = 0.25,
  duration = 0.55,
  disabled = false,
}: RippleProps) {
  const { ripples, createRipple } = useRipple({ disabled });

  return (
    <>
      {/* Invisible layer to capture clicks */}
      <div
        className="absolute inset-0 z-0"
        onMouseDown={createRipple}
        onTouchStart={createRipple}
        style={{ WebkitTapHighlightColor: "transparent" }}
      />
      
      {/* Ripple container */}
      <div className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none z-0">
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              initial={{
                opacity: opacity,
                scale: 0,
              }}
              animate={{
                opacity: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration,
                ease: [0.4, 0, 0.2, 1],
              }}
              style={{
                position: "absolute",
                left: ripple.x - ripple.size / 2,
                top: ripple.y - ripple.size / 2,
                width: ripple.size,
                height: ripple.size,
                borderRadius: "50%",
                backgroundColor: color,
                pointerEvents: "none",
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Ripple;
