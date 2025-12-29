import { motion } from 'framer-motion';
import { useBackgroundParallax } from '@/hooks/useParallax';

export default function ParallaxBackground() {
  const { y1, y2, y3 } = useBackgroundParallax();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Soft ambient gradients - Apple light style */}
      <motion.div
        className="apple-glow w-[600px] h-[600px] -top-48 -right-32"
        style={{ 
          y: y1,
          background: 'radial-gradient(circle, hsl(215 80% 92%) 0%, transparent 70%)',
        }}
      />
      
      <motion.div
        className="apple-glow w-[500px] h-[500px] top-1/3 -left-32"
        style={{ 
          y: y2,
          background: 'radial-gradient(circle, hsl(270 70% 93%) 0%, transparent 70%)',
        }}
      />
      
      <motion.div
        className="apple-glow w-[400px] h-[400px] bottom-32 right-1/4"
        style={{ 
          y: y3,
          background: 'radial-gradient(circle, hsl(145 60% 93%) 0%, transparent 70%)',
        }}
      />

      {/* Subtle mesh overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{ 
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(215 90% 52%) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, hsl(270 80% 60%) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} 
      />
    </div>
  );
}
