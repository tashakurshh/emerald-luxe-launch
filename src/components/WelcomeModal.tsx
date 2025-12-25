import { useState, useEffect, KeyboardEvent } from "react";

interface WelcomeModalProps {
  onComplete: (name: string) => void;
}

const WelcomeModal = ({ onComplete }: WelcomeModalProps) => {
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate in
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleSubmit = () => {
    if (name.trim()) {
      setIsVisible(false);
      setTimeout(() => onComplete(name.trim()), 300);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="modal-overlay">
      {/* Ambient glow effects */}
      <div className="ambient-glow w-96 h-96 -top-20 -left-20 opacity-30" />
      <div className="ambient-glow w-80 h-80 -bottom-10 -right-10 opacity-20" />

      <div
        className={`glass-card-glow w-full max-w-md p-8 transition-all duration-500 ${
          isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        {/* Decorative gradient line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />

        <div className="text-center mb-8 mt-2">
          <h1 className="font-display text-3xl font-semibold text-foreground mb-2">
            Welcome
          </h1>
          <p className="text-muted-foreground text-sm">
            Let's personalize your experience
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter your name"
              className="glass-input text-center text-lg"
              autoFocus
            />
            {/* Input glow effect */}
            <div className="absolute inset-0 -z-10 rounded-xl bg-primary/10 blur-xl opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" />
          </div>

          <button
            onClick={handleSubmit}
            disabled={!name.trim()}
            className={`glass-button-primary w-full py-4 text-lg transition-all duration-300 ${
              name.trim()
                ? "opacity-100"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>

        <p className="text-center text-muted-foreground/60 text-xs mt-6">
          Press Enter to continue
        </p>
      </div>
    </div>
  );
};

export default WelcomeModal;
