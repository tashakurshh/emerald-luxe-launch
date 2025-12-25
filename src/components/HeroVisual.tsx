import heroVisual from "@/assets/hero-visual.png";

const HeroVisual = () => {
  return (
    <div className="glass-card overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="relative">
        <img
          src={heroVisual}
          alt="Premium Healthcare"
          className="w-full h-48 md:h-64 object-cover animate-float"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* Text overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-1">
            Your Health, <span className="gradient-text">Delivered</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Premium healthcare at your fingertips
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
