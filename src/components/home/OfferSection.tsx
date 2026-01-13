import { motion } from "framer-motion";
import { Percent, Truck, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { openWhatsApp } from "@/lib/whatsapp";

const OfferSection = () => {
  const navigate = useNavigate();

  const handleOfferClick = (type: 'discount' | 'delivery') => {
    openWhatsApp(`Hi! I'd like to know more about the ${type === 'discount' ? '15% medicine discount' : 'free delivery on first order'} offer.`);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="space-y-3"
    >
      {/* Discount Offer Card */}
      <motion.button
        onClick={() => handleOfferClick('discount')}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.985 }}
        className="relative w-full overflow-hidden rounded-2xl p-5 text-left group cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, hsl(142 45% 18% / 0.85), hsl(160 40% 14% / 0.9))',
          border: '0.5px solid hsl(142 50% 35% / 0.2)',
          boxShadow: '0 8px 32px hsl(142 50% 10% / 0.3), inset 0 0.5px 0 hsl(142 50% 60% / 0.08)',
        }}
      >
        {/* Subtle gradient overlay */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top right, hsl(142 60% 45% / 0.2), transparent 60%)',
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div 
              className="flex items-center justify-center w-12 h-12 rounded-xl"
              style={{
                background: 'hsl(142 50% 35% / 0.25)',
                boxShadow: 'inset 0 0.5px 0 hsl(142 60% 60% / 0.15)',
              }}
            >
              <Percent className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white tracking-tight">
                Up to <span className="text-emerald-400 font-bold">15%</span> discount
              </h3>
              <p className="text-sm text-emerald-200/70 mt-0.5">on medicines</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-emerald-400/60 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
        </div>
      </motion.button>

      {/* Free Delivery Card */}
      <motion.button
        onClick={() => handleOfferClick('delivery')}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.985 }}
        className="relative w-full overflow-hidden rounded-2xl p-5 text-left group cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, hsl(211 45% 18% / 0.85), hsl(220 40% 14% / 0.9))',
          border: '0.5px solid hsl(211 50% 40% / 0.2)',
          boxShadow: '0 8px 32px hsl(211 50% 10% / 0.3), inset 0 0.5px 0 hsl(211 50% 60% / 0.08)',
        }}
      >
        {/* Subtle gradient overlay */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top right, hsl(211 60% 50% / 0.2), transparent 60%)',
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div 
              className="flex items-center justify-center w-12 h-12 rounded-xl"
              style={{
                background: 'hsl(211 50% 40% / 0.25)',
                boxShadow: 'inset 0 0.5px 0 hsl(211 60% 60% / 0.15)',
              }}
            >
              <Truck className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white tracking-tight">
                First order: <span className="text-blue-400">free delivery</span>
              </h3>
              <p className="text-sm text-blue-200/70 mt-0.5">delivery charges not applicable</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-blue-400/60 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
        </div>
      </motion.button>
    </motion.section>
  );
};

export default OfferSection;
