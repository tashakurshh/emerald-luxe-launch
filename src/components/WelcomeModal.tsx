import { useState, useEffect, KeyboardEvent } from "react";

interface WelcomeModalProps {
  onComplete: (name: string) => void;
}

const WelcomeModal = ({ onComplete }: WelcomeModalProps) => {
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
      {/* Ambient glows */}
      <div className="apple-glow w-[400px] h-[400px] -top-20 left-1/4 bg-[hsl(210,100%,50%)] opacity-20" />
      <div className="apple-glow w-[300px] h-[300px] bottom-10 right-1/4 bg-[hsl(280,100%,65%)] opacity-15" />

      <div
        className={`glass-card w-full max-w-md p-8 transition-all duration-500 ${
          isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        {/* Top gradient line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-gradient-to-r from-[hsl(210,100%,50%)] via-[hsl(280,100%,65%)] to-[hsl(340,82%,60%)]" />

        <div className="text-center mb-8 mt-4">
          <h1 className="text-3xl font-semibold text-foreground mb-3 tracking-tight">
            Welcome
          </h1>
          <p className="text-muted-foreground text-base">
            Let's get to know you
          </p>
        </div>

        <div className="space-y-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Your name"
            className="glass-input text-center text-lg"
            autoFocus
          />

          <button
            onClick={handleSubmit}
            disabled={!name.trim()}
            className={`apple-button-primary w-full py-4 text-lg transition-all duration-300 ${
              name.trim() ? "opacity-100" : "opacity-40 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>

        <p className="text-center text-muted-foreground/50 text-sm mt-6">
          Press Enter to continue
        </p>
      </div>
    </div>
  );
};

export default WelcomeModal;
