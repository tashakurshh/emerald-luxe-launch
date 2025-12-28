import { motion } from "framer-motion";
import { FileText, Upload, MessageCircle } from "lucide-react";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import BottomNav from "@/components/BottomNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";

const Documents = () => {
  const handleUpload = () => {
    openWhatsApp(whatsappMessages.uploadPrescription);
  };

  return (
    <div className="page-container">
      <ParallaxBackground />
      <DynamicIslandNav />

      <main className="container mx-auto px-4 pt-28 pb-32 md:pb-16 max-w-2xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-semibold text-foreground mb-6">Documents</h1>

          {/* Empty State */}
          <div className="glass-card p-8 text-center mb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-[hsl(145,65%,48%,0.15)] flex items-center justify-center">
              <FileText className="w-10 h-10 text-[hsl(145,65%,48%)]" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">No documents yet</h2>
            <p className="text-muted-foreground mb-6">
              Share your prescriptions and reports directly via WhatsApp for a seamless ordering experience.
            </p>
          </div>

          {/* Upload CTA */}
          <motion.div
            className="glass-card p-5 cursor-pointer group"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={handleUpload}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[hsl(215,90%,58%,0.15)] flex items-center justify-center shrink-0">
                <Upload className="w-6 h-6 text-[hsl(215,90%,58%)]" />
              </div>
              <div className="flex-1">
                <h3 className="text-foreground font-semibold mb-0.5">Upload Prescription</h3>
                <p className="text-muted-foreground text-sm">Share on WhatsApp to start your order</p>
              </div>
              <MessageCircle className="w-5 h-5 text-[hsl(142,70%,49%)]" />
            </div>
          </motion.div>

          {/* Info */}
          <div className="mt-6 p-4 rounded-2xl bg-secondary/30 text-center">
            <p className="text-sm text-muted-foreground">
              📱 Simply send your prescription image on WhatsApp and we'll handle the rest.
            </p>
          </div>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Documents;
