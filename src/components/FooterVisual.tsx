import footerVisual from "@/assets/footer-visual.png";

const FooterVisual = () => {
  return (
    <div className="glass-card overflow-hidden relative group">
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(142,71%,45%,0.1)] via-transparent to-[hsl(175,80%,40%,0.1)] z-10" />

      <div className="relative">
        <img
          src={footerVisual}
          alt="Wellness Journey"
          className="w-full h-44 md:h-60 object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        {/* Content */}
        <div className="absolute bottom-5 left-0 right-0 text-center z-20">
          <p className="text-muted-foreground text-sm mb-3">
            Your wellness journey starts here
          </p>
          <div className="flex items-center justify-center gap-3">
            <span
              className="w-2 h-2 rounded-full animate-pulse-glow"
              style={{ background: "hsl(210, 100%, 50%)" }}
            />
            <span className="text-foreground/50 text-xs font-medium">
              Always here for you
            </span>
            <span
              className="w-2 h-2 rounded-full animate-pulse-glow"
              style={{ background: "hsl(280, 100%, 65%)", animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterVisual;
