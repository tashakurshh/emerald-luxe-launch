import { useScroll, useTransform } from 'framer-motion';
import { useMemo } from 'react';

export default function ParallaxBackground() {
  const { scrollY } = useScroll();
  
  // Simple GPU-friendly transforms only - no continuous animations
  const farLayerY = useTransform(scrollY, [0, 1000], [0, 30]);
  const midLayerY = useTransform(scrollY, [0, 1000], [0, 50]);
  
  // Static gradients - no animation
  const gradientLayers = useMemo(() => ({
    base: `
      linear-gradient(
        145deg,
        hsl(225 18% 10%) 0%,
        hsl(230 16% 12%) 50%,
        hsl(220 20% 11%) 100%
      )
    `,
    whiteLayer: `
      radial-gradient(ellipse 100% 70% at 50% -5%, 
        hsl(220 30% 85% / 0.08) 0%, 
        transparent 50%
      ),
      radial-gradient(ellipse 80% 50% at 70% 20%, 
        hsl(210 40% 90% / 0.06) 0%, 
        transparent 45%
      )
    `,
    farLayer: `
      radial-gradient(ellipse 100% 60% at 30% -10%, 
        hsl(280 50% 28% / 0.28) 0%, 
        transparent 55%
      ),
      radial-gradient(ellipse 90% 50% at 80% 10%, 
        hsl(210 60% 32% / 0.24) 0%, 
        transparent 50%
      )
    `,
    midLayer: `
      radial-gradient(ellipse 70% 60% at 20% 20%, 
        hsl(320 55% 32% / 0.15) 0%, 
        transparent 50%
      ),
      radial-gradient(ellipse 60% 50% at 75% 25%, 
        hsl(210 65% 38% / 0.18) 0%, 
        transparent 45%
      ),
      radial-gradient(ellipse 65% 55% at 85% 70%, 
        hsl(260 50% 30% / 0.14) 0%, 
        transparent 50%
      )
    `,
    heroGlow: `
      radial-gradient(ellipse 70% 90% at 50% 0%, 
        hsl(210 60% 38% / 0.2) 0%,
        hsl(195 55% 30% / 0.1) 35%,
        transparent 65%
      )
    `,
    accents: `
      radial-gradient(ellipse 40% 40% at 20% 15%, 
        hsl(320 60% 38% / 0.12) 0%,
        transparent 60%
      ),
      radial-gradient(ellipse 35% 35% at 80% 65%, 
        hsl(175 55% 32% / 0.12) 0%,
        transparent 55%
      ),
      radial-gradient(ellipse 30% 30% at 85% 25%, 
        hsl(270 55% 35% / 0.1) 0%,
        transparent 55%
      )
    `
  }), []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden will-change-transform">
      {/* BASE - Static */}
      <div 
        className="absolute inset-0"
        style={{ background: gradientLayers.base }}
      />
      
      {/* WHITE/LIGHT LAYER - Static */}
      <div
        className="absolute inset-0"
        style={{ background: gradientLayers.whiteLayer }}
      />
      
      {/* FAR LAYER - Subtle scroll parallax only */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ 
          background: gradientLayers.farLayer,
          transform: `translate3d(0, ${farLayerY.get()}px, 0)`,
        }}
      />
      
      {/* MID LAYER - Subtle scroll parallax only */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ 
          background: gradientLayers.midLayer,
          transform: `translate3d(0, ${midLayerY.get()}px, 0)`,
        }}
      />
      
      {/* HERO GLOW - Static with blur */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[160vw] h-[70vh]"
        style={{
          background: gradientLayers.heroGlow,
          filter: 'blur(40px)',
        }}
      />
      
      {/* ACCENT GLOWS - Static, no animations */}
      <div
        className="absolute inset-0"
        style={{
          background: gradientLayers.accents,
          filter: 'blur(50px)',
        }}
      />
    </div>
  );
}
