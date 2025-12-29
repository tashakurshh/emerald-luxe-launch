export default function ParallaxBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* BASE - Static gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              145deg,
              hsl(225 18% 10%) 0%,
              hsl(230 16% 12%) 50%,
              hsl(220 20% 11%) 100%
            )
          `
        }}
      />
      
      {/* WHITE/LIGHT LAYER - Static */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 70% at 50% -5%, 
              hsl(220 30% 85% / 0.08) 0%, 
              transparent 50%
            ),
            radial-gradient(ellipse 80% 50% at 70% 20%, 
              hsl(210 40% 90% / 0.06) 0%, 
              transparent 45%
            )
          `
        }}
      />
      
      {/* FAR LAYER - Static colors */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 60% at 30% -10%, 
              hsl(280 50% 28% / 0.28) 0%, 
              transparent 55%
            ),
            radial-gradient(ellipse 90% 50% at 80% 10%, 
              hsl(210 60% 32% / 0.24) 0%, 
              transparent 50%
            )
          `
        }}
      />
      
      {/* MID LAYER - Static colors */}
      <div
        className="absolute inset-0"
        style={{
          background: `
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
          `
        }}
      />
      
      {/* HERO GLOW - Static with blur */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[160vw] h-[70vh]"
        style={{
          background: `
            radial-gradient(ellipse 70% 90% at 50% 0%, 
              hsl(210 60% 38% / 0.2) 0%,
              hsl(195 55% 30% / 0.1) 35%,
              transparent 65%
            )
          `,
          filter: 'blur(40px)',
        }}
      />
      
      {/* ACCENT GLOWS - Static, no animations */}
      <div
        className="absolute inset-0"
        style={{
          background: `
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
          `,
          filter: 'blur(50px)',
        }}
      />
    </div>
  );
}
