import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxOptions {
  offset?: [string, string];
  speed?: number;
  direction?: 'up' | 'down';
}

export function useParallax(options: ParallaxOptions = {}) {
  const { offset = ['start end', 'end start'], speed = 0.15, direction = 'up' } = options;
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });

  const multiplier = direction === 'up' ? 1 : -1;
  const y = useTransform(scrollYProgress, [0, 1], [multiplier * speed * 100, multiplier * -speed * 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.85]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.02, 1, 1.02]);

  return { ref, y, opacity, scale, scrollYProgress };
}

export function useBackgroundParallax() {
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -50]);
  
  return { y1, y2, y3 };
}
