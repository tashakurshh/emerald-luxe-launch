import { FileUp, PenLine, ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";

const ActionCards = () => {
  const handleUploadClick = () => {
    openWhatsApp(whatsappMessages.uploadPrescription);
  };

  const handleMedicineClick = () => {
    openWhatsApp(whatsappMessages.enterMedicine);
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <motion.div 
        className="glass-card p-6 group cursor-pointer relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleUploadClick}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215,90%,58%,0.15)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
              <FileUp className="w-7 h-7 text-foreground" />
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[hsl(142,70%,49%)]" />
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">Upload Prescription</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">Send your prescription via WhatsApp and we'll prepare your order</p>
        </div>
      </motion.div>

      <motion.div 
        className="glass-card p-6 group cursor-pointer relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleMedicineClick}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(145,65%,48%,0.15)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "hsl(145, 65%, 48%, 0.2)" }}>
              <PenLine className="w-7 h-7" style={{ color: "hsl(145, 65%, 48%)" }} />
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[hsl(142,70%,49%)]" />
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">Enter Medicine Names</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">Tell us what you need on WhatsApp – we'll handle the rest</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ActionCards;
