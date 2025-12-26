import { motion } from 'framer-motion';
import { useBackgroundParallax } from '@/hooks/useParallax';

export default function ParallaxBackground() {
  const { y1, y2, y3 } = useBackgroundParallax();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Primary blue glow */}
      <motion.div
        className="apple-glow w-[700px] h-[700px] -top-40 left-1/4"
        style={{ 
          y: y1,
          background: 'hsl(215, 90%, 50%)',
          opacity: 0.12,
        }}
      />
      
      {/* Purple accent glow */}
      <motion.div
        className="apple-glow w-[500px] h-[500px] top-1/2 -right-32"
        style={{ 
          y: y2,
          background: 'hsl(270, 80%, 60%)',
          opacity: 0.08,
        }}
      />
      
      {/* Green accent glow */}
      <motion.div
        className="apple-glow w-[400px] h-[400px] -bottom-20 left-0"
        style={{ 
          y: y3,
          background: 'hsl(145, 65%, 45%)',
          opacity: 0.06,
        }}
      />

      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.012]" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' 
        }} 
      />
    </div>
  );
}
