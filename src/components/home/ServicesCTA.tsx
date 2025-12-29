import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Grid3X3, ArrowRight } from "lucide-react";

const ServicesCTA = () => {
  return (
    <Link to="/services">
      <motion.div
        className="glass-card p-5 cursor-pointer group relative overflow-hidden"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(270,80%,65%,0.1)] to-[hsl(215,90%,58%,0.1)]" />
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[hsl(270,80%,65%)] to-[hsl(215,90%,58%)] shrink-0">
            <Grid3X3 className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-foreground font-semibold mb-0.5">Explore All Services</h3>
            <p className="text-muted-foreground text-sm">See everything Pharmih has to offer</p>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
        </div>
      </motion.div>
    </Link>
  );
};

export default ServicesCTA;
