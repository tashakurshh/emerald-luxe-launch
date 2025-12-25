import { FileUp, PenLine, ArrowRight } from "lucide-react";

const ActionCards = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* Upload Prescription */}
      <div className="glass-card-glow p-6 group cursor-pointer hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <FileUp className="w-7 h-7 text-primary-foreground" />
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
        </div>
        
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          Upload Prescription
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Upload your doctor's prescription and we'll deliver your medicines
        </p>
        
        {/* Decorative glow */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Enter Medicine Names */}
      <div className="glass-card p-6 group cursor-pointer hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
            <PenLine className="w-7 h-7 text-primary" />
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
        </div>
        
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          Enter Medicine Names
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Don't have a prescription? Just tell us what you need
        </p>
        
        {/* Decorative glow */}
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default ActionCards;
