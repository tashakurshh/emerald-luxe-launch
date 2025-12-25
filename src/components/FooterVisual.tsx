import footerVisual from "@/assets/footer-visual.png";

const FooterVisual = () => {
  return (
    <div className="glass-card overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary/10" />
      
      <div className="relative">
        <img
          src={footerVisual}
          alt="Wellness Journey"
          className="w-full h-40 md:h-56 object-cover"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
        
        {/* Text overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-center">
          <p className="text-muted-foreground text-sm mb-2">
            Your wellness journey starts here
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-foreground/60 text-xs">Always here for you</span>
            <span className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterVisual;
