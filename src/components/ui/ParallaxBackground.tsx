import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxBackground() {
  const { scrollY } = useScroll();
  
  // Very subtle parallax - almost imperceptible
  const farLayerY = useTransform(scrollY, [0, 1000], [0, 30]);
  const midLayerY = useTransform(scrollY, [0, 1000], [0, 50]);
  const nearLayerY = useTransform(scrollY, [0, 1000], [0, 80]);
  
  // Subtle opacity shifts on scroll for light transition
  const farOpacity = useTransform(scrollY, [0, 600], [1, 0.7]);
  const nearOpacity = useTransform(scrollY, [0, 800], [0.5, 0.3]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════
          visionOS SPATIAL BACKGROUND - Three-Layer Depth System
          ═══════════════════════════════════════════════════════════════ */}
      
      {/* FAR LAYER - Atmospheric depth, almost invisible */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          y: farLayerY,
          opacity: farOpacity,
          background: `
            radial-gradient(ellipse 120% 80% at 50% -20%, 
              hsl(220 25% 18% / 0.4) 0%, 
              transparent 60%
            ),
            radial-gradient(ellipse 100% 60% at 100% 50%, 
              hsl(230 20% 14% / 0.25) 0%, 
              transparent 50%
            ),
            radial-gradient(ellipse 80% 50% at 0% 80%, 
              hsl(215 22% 12% / 0.2) 0%, 
              transparent 45%
            )
          `
        }}
      />
      
      {/* MID LAYER - Color diffusion (blue/teal/violet) */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          y: midLayerY,
          background: `
            radial-gradient(ellipse 90% 70% at 30% 10%, 
              hsl(210 35% 22% / 0.18) 0%, 
              transparent 55%
            ),
            radial-gradient(ellipse 70% 50% at 85% 30%, 
              hsl(250 25% 18% / 0.12) 0%, 
              transparent 50%
            ),
            radial-gradient(ellipse 60% 45% at 15% 70%, 
              hsl(190 30% 16% / 0.1) 0%, 
              transparent 45%
            )
          `
        }}
      />
      
      {/* NEAR LAYER - Gentle light bloom behind primary content */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          y: nearLayerY,
          opacity: nearOpacity,
          background: `
            radial-gradient(ellipse 70% 40% at 50% 25%, 
              hsl(215 30% 28% / 0.15) 0%, 
              transparent 50%
            ),
            radial-gradient(ellipse 50% 35% at 50% 60%, 
              hsl(220 25% 20% / 0.08) 0%, 
              transparent 45%
            )
          `
        }}
      />
      
      {/* AMBIENT GLOW - Ultra-soft diffused light behind hero */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[140vw] h-[60vh]"
        style={{
          y: useTransform(scrollY, [0, 500], [0, 40]),
          background: `
            radial-gradient(ellipse 80% 100% at 50% 0%, 
              hsl(215 35% 24% / 0.2) 0%,
              hsl(220 30% 18% / 0.08) 40%,
              transparent 70%
            )
          `,
          filter: 'blur(40px)',
        }}
      />
      
      {/* SECONDARY GLOW - Subtle warmth hint */}
      <motion.div
        className="absolute top-[40%] right-0 w-[50vw] h-[50vh]"
        style={{
          y: useTransform(scrollY, [0, 800], [0, 60]),
          background: `
            radial-gradient(ellipse 100% 100% at 100% 50%, 
              hsl(260 20% 18% / 0.08) 0%,
              transparent 60%
            )
          `,
          filter: 'blur(60px)',
        }}
      />
      
      {/* TERTIARY GLOW - Bottom teal hint */}
      <motion.div
        className="absolute bottom-0 left-0 w-[60vw] h-[40vh]"
        style={{
          y: useTransform(scrollY, [0, 800], [0, -30]),
          background: `
            radial-gradient(ellipse 100% 100% at 0% 100%, 
              hsl(195 25% 16% / 0.06) 0%,
              transparent 55%
            )
          `,
          filter: 'blur(50px)',
        }}
      />
      
      {/* GLASS REFRACTION LAYER - Very subtle light interaction */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          background: `
            linear-gradient(
              180deg,
              hsl(220 20% 30% / 0.1) 0%,
              transparent 30%,
              transparent 70%,
              hsl(220 20% 25% / 0.05) 100%
            )
          `
        }}
      />
    </div>
  );
}