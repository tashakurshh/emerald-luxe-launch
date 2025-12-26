import { motion } from "framer-motion";
import { FileText, Image, Download, Trash2, Upload } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import BottomNav from "@/components/BottomNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";

const Documents = () => {
  const { documents, deleteDocument } = useApp();

  return (
    <div className="page-container">
      <ParallaxBackground />
      <DynamicIslandNav />

      <main className="container mx-auto px-4 pt-28 pb-32 md:pb-16 max-w-2xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-semibold text-foreground mb-6">Documents</h1>

          {documents.length === 0 ? (
            <div className="empty-state glass-card">
              <div className="empty-state-icon">
                <FileText className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-foreground font-medium mb-1">No documents yet</p>
              <p className="text-muted-foreground text-sm">Your prescriptions and reports will appear here</p>
            </div>
          ) : (
            <div className="space-y-3">
              {documents.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  className="glass-card p-4 flex items-center gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    {doc.type === "prescription" ? (
                      <Image className="w-6 h-6 text-primary" />
                    ) : (
                      <FileText className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground font-medium truncate">{doc.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(doc.uploadedAt).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => deleteDocument(doc.id)}
                      className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive/60 hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Documents;
