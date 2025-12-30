import { motion } from "framer-motion";
import { ShieldCheck, MapPin } from "lucide-react";

const locations = [
  { name: "Lal Chowk", delay: 0 },
  { name: "Rajbagh", delay: 0.1 },
  { name: "Hyderpora", delay: 0.2 },
  { name: "Nowgam", delay: 0.3 },
];

const TrustedPharmacies = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative overflow-hidden rounded-3xl"
    >
      {/* Gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, hsl(210 80% 55% / 0.12) 0%, hsl(280 70% 55% / 0.08) 50%, hsl(330 80% 55% / 0.1) 100%)',
        }}
      />
      
      {/* Glassmorphism overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
          backdropFilter: 'blur(20px)',
        }}
      />
      
      {/* Shimmer effect */}
      <div 
        className="absolute inset-0 pointer-events-none shimmer-effect"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
        }}
      />
      
      {/* Subtle border */}
      <div 
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          border: '1px solid rgba(255,255,255,0.12)',
        }}
      />
      
      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <motion.div 
            className="relative flex items-center justify-center w-10 h-10 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, hsl(142 70% 45%) 0%, hsl(160 60% 40%) 100%)',
              boxShadow: '0 4px 12px hsl(142 70% 45% / 0.3)',
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ShieldCheck className="w-5 h-5 text-white" />
          </motion.div>
          <div>
            <h3 className="text-base font-semibold text-foreground">Trusted Pharmacies</h3>
            <p className="text-xs text-muted-foreground">Licensed & Verified Partners</p>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          We partner exclusively with <span className="text-foreground font-medium">government-licensed pharmacies</span> across Srinagar to ensure you receive authentic medicines.
        </p>
        
        {/* Location pills */}
        <div className="flex flex-wrap gap-2">
          {locations.map((location) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: location.delay,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <MapPin className="w-3 h-3 text-primary" />
              <span className="text-xs font-medium text-foreground">{location.name}</span>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom accent line */}
        <div 
          className="absolute bottom-0 left-5 right-5 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, hsl(210 80% 55% / 0.3) 50%, transparent 100%)',
          }}
        />
      </div>
    </motion.div>
  );
};

export default TrustedPharmacies;
