import heroVisual from "@/assets/hero-visual.png";

const HeroVisual = () => {
  return (
    <div className="glass-card overflow-hidden relative group">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,100%,50%,0.1)] via-transparent to-[hsl(280,100%,65%,0.1)] z-10" />

      <div className="relative">
        <img
          src={heroVisual}
          alt="Premium Healthcare"
          className="w-full h-52 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-6 left-6 right-6 z-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2 tracking-tight">
            Your Health, <span className="gradient-text">Delivered</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Premium healthcare at your fingertips
          </p>
        </div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 shimmer opacity-50" />
      </div>
    </div>
  );
};

export default HeroVisual;
