import { FileUp, PenLine, ArrowUpRight } from "lucide-react";

const ActionCards = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* Upload Prescription - Primary */}
      <div className="glass-card p-6 group cursor-pointer relative overflow-hidden transition-all duration-500 hover:scale-[1.02]">
        {/* Gradient background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,100%,50%,0.15)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, hsl(210, 100%, 50%), hsl(280, 100%, 65%))",
              }}
            >
              <FileUp className="w-7 h-7 text-foreground" />
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">
            Upload Prescription
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Upload your doctor's prescription and we'll deliver your medicines
          </p>
        </div>
      </div>

      {/* Enter Medicine Names - Secondary */}
      <div className="glass-card p-6 group cursor-pointer relative overflow-hidden transition-all duration-500 hover:scale-[1.02]">
        {/* Gradient background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(142,71%,45%,0.15)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: "hsl(142, 71%, 45%, 0.2)" }}
            >
              <PenLine className="w-7 h-7" style={{ color: "hsl(142, 71%, 45%)" }} />
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">
            Enter Medicine Names
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Don't have a prescription? Just tell us what you need
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActionCards;
