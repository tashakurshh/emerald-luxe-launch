import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxBackground() {
  const { scrollY } = useScroll();
  
  // Subtle parallax
  const farLayerY = useTransform(scrollY, [0, 1000], [0, 30]);
  const midLayerY = useTransform(scrollY, [0, 1000], [0, 50]);
  const nearLayerY = useTransform(scrollY, [0, 1000], [0, 80]);
  
  // Opacity shifts on scroll
  const farOpacity = useTransform(scrollY, [0, 600], [1, 0.7]);
  const nearOpacity = useTransform(scrollY, [0, 800], [0.6, 0.35]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════
          APPLE-STYLE VIBRANT SPATIAL BACKGROUND
          ═══════════════════════════════════════════════════════════════ */}
      
      {/* BASE - Warm dark with color */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              145deg,
              hsl(225 20% 8%) 0%,
              hsl(230 18% 10%) 50%,
              hsl(220 22% 9%) 100%
            )
          `
        }}
      />
      
      {/* FAR LAYER - Rich colorful atmospheric depth */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          y: farLayerY,
          opacity: farOpacity,
          background: `
            radial-gradient(ellipse 100% 60% at 30% -10%, 
              hsl(280 50% 25% / 0.35) 0%, 
              transparent 55%
            ),
            radial-gradient(ellipse 90% 50% at 80% 10%, 
              hsl(210 60% 28% / 0.3) 0%, 
              transparent 50%
            ),
            radial-gradient(ellipse 80% 50% at 10% 60%, 
              hsl(175 50% 22% / 0.25) 0%, 
              transparent 50%
            )
          `
        }}
      />
      
      {/* MID LAYER - Apple-style color orbs */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          y: midLayerY,
          background: `
            radial-gradient(ellipse 70% 60% at 20% 20%, 
              hsl(320 55% 30% / 0.2) 0%, 
              transparent 50%
            ),
            radial-gradient(ellipse 60% 50% at 75% 25%, 
              hsl(210 65% 35% / 0.22) 0%, 
              transparent 45%
            ),
            radial-gradient(ellipse 65% 55% at 85% 70%, 
              hsl(260 50% 28% / 0.18) 0%, 
              transparent 50%
            ),
            radial-gradient(ellipse 55% 45% at 15% 80%, 
              hsl(180 55% 25% / 0.2) 0%, 
              transparent 45%
            )
          `
        }}
      />
      
      {/* NEAR LAYER - Vibrant accent glows */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          y: nearLayerY,
          opacity: nearOpacity,
          background: `
            radial-gradient(ellipse 50% 40% at 50% 15%, 
              hsl(215 70% 40% / 0.2) 0%, 
              transparent 50%
            ),
            radial-gradient(ellipse 45% 35% at 60% 55%, 
              hsl(175 60% 30% / 0.12) 0%, 
              transparent 45%
            )
          `
        }}
      />
      
      {/* PRIMARY GLOW - Blue/Teal hero area */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[160vw] h-[70vh]"
        style={{
          y: useTransform(scrollY, [0, 500], [0, 40]),
          background: `
            radial-gradient(ellipse 70% 90% at 50% 0%, 
              hsl(210 60% 35% / 0.28) 0%,
              hsl(195 55% 28% / 0.15) 35%,
              transparent 65%
            )
          `,
          filter: 'blur(40px)',
        }}
      />
      
      {/* MAGENTA ACCENT - Top left */}
      <motion.div
        className="absolute top-[5%] left-[5%] w-[40vw] h-[40vh]"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `
            radial-gradient(ellipse 100% 100% at 30% 30%, 
              hsl(320 60% 35% / 0.2) 0%,
              transparent 60%
            )
          `,
          filter: 'blur(50px)',
        }}
      />
      
      {/* TEAL ACCENT - Left side */}
      <motion.div
        className="absolute top-[25%] left-0 w-[50vw] h-[55vh]"
        animate={{
          x: [0, 15, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `
            radial-gradient(ellipse 100% 100% at 0% 50%, 
              hsl(175 55% 28% / 0.22) 0%,
              transparent 55%
            )
          `,
          filter: 'blur(55px)',
        }}
      />
      
      {/* PURPLE ACCENT - Right side */}
      <motion.div
        className="absolute top-[40%] right-0 w-[45vw] h-[50vh]"
        animate={{
          x: [0, -12, 0],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          background: `
            radial-gradient(ellipse 100% 100% at 100% 50%, 
              hsl(270 55% 32% / 0.2) 0%,
              transparent 55%
            )
          `,
          filter: 'blur(50px)',
        }}
      />
      
      {/* ORANGE/WARM ACCENT - Bottom right */}
      <motion.div
        className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vh]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          background: `
            radial-gradient(ellipse 100% 100% at 70% 70%, 
              hsl(25 60% 30% / 0.15) 0%,
              transparent 55%
            )
          `,
          filter: 'blur(45px)',
        }}
      />
      
      {/* BLUE ACCENT - Bottom left */}
      <motion.div
        className="absolute bottom-0 left-[5%] w-[45vw] h-[40vh]"
        animate={{
          y: [0, -10, 0],
          opacity: [0.6, 0.85, 0.6],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        style={{
          background: `
            radial-gradient(ellipse 100% 100% at 20% 100%, 
              hsl(215 60% 32% / 0.18) 0%,
              transparent 55%
            )
          `,
          filter: 'blur(50px)',
        }}
      />
      
      {/* AMBIENT DRIFT - Primary */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(ellipse 55% 45% at 40% 35%, hsl(195 45% 28% / 0.12) 0%, transparent 50%)`,
            `radial-gradient(ellipse 55% 45% at 55% 42%, hsl(210 45% 30% / 0.12) 0%, transparent 50%)`,
            `radial-gradient(ellipse 55% 45% at 48% 32%, hsl(185 45% 26% / 0.12) 0%, transparent 50%)`,
            `radial-gradient(ellipse 55% 45% at 40% 35%, hsl(195 45% 28% / 0.12) 0%, transparent 50%)`,
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ filter: 'blur(70px)' }}
      />
      
      {/* AMBIENT DRIFT - Secondary */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(ellipse 45% 40% at 65% 60%, hsl(280 40% 25% / 0.08) 0%, transparent 45%)`,
            `radial-gradient(ellipse 45% 40% at 58% 55%, hsl(260 40% 25% / 0.08) 0%, transparent 45%)`,
            `radial-gradient(ellipse 45% 40% at 70% 62%, hsl(290 40% 25% / 0.08) 0%, transparent 45%)`,
            `radial-gradient(ellipse 45% 40% at 65% 60%, hsl(280 40% 25% / 0.08) 0%, transparent 45%)`,
          ],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ filter: 'blur(60px)' }}
      />
      
      {/* SHIMMER OVERLAY - Very subtle */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        animate={{
          background: [
            `linear-gradient(45deg, transparent 40%, hsl(210 50% 50% / 0.3) 50%, transparent 60%)`,
            `linear-gradient(45deg, transparent 45%, hsl(210 50% 50% / 0.3) 55%, transparent 65%)`,
            `linear-gradient(45deg, transparent 40%, hsl(210 50% 50% / 0.3) 50%, transparent 60%)`,
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}