import { useState, KeyboardEvent } from "react";
import { motion } from "framer-motion";

interface WelcomeModalProps {
  onComplete: (name: string) => void;
}

const WelcomeModal = ({ onComplete }: WelcomeModalProps) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim()) {
      onComplete(name.trim());
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="glass-card w-full max-w-md p-8 relative"
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
            className="glass-input text-center text-lg w-full"
            autoFocus
          />

          <button
            onClick={handleSubmit}
            disabled={!name.trim()}
            className={`apple-button-primary w-full py-4 text-lg active:scale-[0.98] transition-all duration-100 ${
              name.trim() ? "opacity-100" : "opacity-40 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>

        <p className="text-center text-muted-foreground/50 text-sm mt-6">
          Press Enter to continue
        </p>
      </motion.div>
    </div>
  );
};

export default WelcomeModal;
