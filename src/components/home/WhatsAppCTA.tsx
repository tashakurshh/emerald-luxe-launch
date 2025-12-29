import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";

const WhatsAppCTA = () => {
  const handleClick = () => {
    openWhatsApp(whatsappMessages.generalInquiry);
  };

  return (
    <motion.div 
      className="glass-card p-6 cursor-pointer group relative overflow-hidden"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={handleClick}
    >
      {/* WhatsApp green gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(142,70%,49%,0.15)] to-[hsl(142,70%,49%,0.05)] opacity-100 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[hsl(142,70%,49%)] shrink-0">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-1 tracking-tight">Need Help?</h3>
          <p className="text-muted-foreground text-sm">Chat with Pharmih on WhatsApp for instant support</p>
        </div>
        
        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
      </div>
    </motion.div>
  );
};

export default WhatsAppCTA;
