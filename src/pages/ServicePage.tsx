import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, MessageCircle, Users, Package, Truck, ShieldCheck } from "lucide-react";
import { getServiceBySlug } from "@/lib/services";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";
import DynamicIslandNav from "@/components/DynamicIslandNav";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import { useState } from "react";

// Apple spring physics
const springTap = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
  mass: 0.8,
};

const springHover = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
};

const MotionLink = motion(Link);

// Brand product data with images for each service category
const brandProductImages: Record<string, { name: string; image: string }[]> = {
  "prescription-medicines": [
    { name: "Pfizer", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop&auto=format&q=80" },
    { name: "Cipla", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop&auto=format&q=80" },
    { name: "Sun Pharma", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=400&fit=crop&auto=format&q=80" },
    { name: "Abbott", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop&auto=format&q=80" },
  ],
  "baby-care": [
    { name: "Nestlé", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop&auto=format&q=80" },
    { name: "Johnson & Johnson", image: "https://images.unsplash.com/photo-1584839404075-a71c217cf63a?w=400&h=400&fit=crop&auto=format&q=80" },
    { name: "Himalaya Baby", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=400&fit=crop&auto=format&q=80" },
    { name: "Pampers", image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=400&fit=crop&auto=format&q=80" },
  ],
  "healthcare-products": [
    { name: "Omron", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&auto=format&q=80" },
    { name: "Accu-Chek", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=400&fit=crop&auto=format&q=80" },
    { name: "Dr. Morepen", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=400&fit=crop&auto=format&q=80" },
    { name: "Philips", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop&auto=format&q=80" },
  ],
  "vitamin-supplements": [
    { name: "Centrum", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&auto=format&q=80" },
    { name: "HealthKart", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop&auto=format&q=80" },
    { name: "Himalaya", image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?w=400&h=400&fit=crop&auto=format&q=80" },
    { name: "Swisse", image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=400&h=400&fit=crop&auto=format&q=80" },
  ],
  "personal-care": [
    { name: "Nivea", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&auto=format&q=80" },
    { name: "Dove", image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop&auto=format&q=80" },
    { name: "Cetaphil", image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop&auto=format&q=80" },
    { name: "Himalaya", image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop&auto=format&q=80" },
  ],
  "sexual-wellness": [
    { name: "Durex", image: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=400&h=400&fit=crop&auto=format&q=80" },
    { name: "Manforce", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=400&fit=crop&auto=format&q=80" },
    { name: "Bold Care", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&auto=format&q=80" },
    { name: "K-Y", image: "https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=400&h=400&fit=crop&auto=format&q=80" },
  ],
};

// Apple-style Brand Product Card
const BrandProductCard = ({ 
  brand, 
  index 
}: { 
  brand: { name: string; image: string }; 
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ 
      delay: 0.1 + index * 0.08, 
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
    whileHover={{ 
      y: -6,
      scale: 1.02,
      transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }
    }}
    whileTap={{ scale: 0.98 }}
    className="group flex-shrink-0 w-[130px] sm:w-auto cursor-pointer"
  >
    <div 
      className="relative overflow-hidden rounded-[24px] p-4
        bg-white/70 dark:bg-white/[0.06]
        backdrop-blur-2xl backdrop-saturate-[1.8]
        border border-white/50 dark:border-white/[0.08]
        shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06),0_0_0_1px_rgba(255,255,255,0.1)_inset]
        group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.15)_inset]
        group-hover:bg-white/85 dark:group-hover:bg-white/[0.09]
        transition-all duration-500 ease-out"
    >
      {/* Subtle top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      
      {/* Product Image Container */}
      <div className="relative aspect-square w-full mb-3 rounded-[18px] overflow-hidden
        bg-gradient-to-br from-gray-50/80 to-gray-100/60 dark:from-gray-800/40 dark:to-gray-900/30
        shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]">
        <motion.img
          src={brand.image}
          alt={brand.name}
          className="w-full h-full object-cover opacity-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 + index * 0.08 }}
          loading="lazy"
          onLoad={(e) => {
            (e.target as HTMLImageElement).style.opacity = '1';
          }}
        />
        
        {/* Soft inner shadow for editorial depth */}
        <div className="absolute inset-0 rounded-[18px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02),inset_0_-1px_2px_rgba(255,255,255,0.5)]" />
        
        {/* Hover overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>
      
      {/* Brand Name - SF Pro style */}
      <p 
        className="text-center font-medium text-[13px] tracking-[-0.01em] leading-tight
          text-gray-700 dark:text-gray-200
          group-hover:text-gray-900 dark:group-hover:text-white
          transition-colors duration-300"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif' }}
      >
        {brand.name}
      </p>
    </div>
  </motion.div>
);

const ServicePage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug || "");
  const [isCtaHovered, setIsCtaHovered] = useState(false);

  const handleWhatsAppOrder = () => {
    if (service) {
      openWhatsApp(whatsappMessages.orderService(service.name));
    }
  };

  if (!service) {
    return (
      <div className="page-container">
        <ParallaxBackground />
        <DynamicIslandNav />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Service not found</p>
            <motion.div whileTap={{ scale: 0.95 }} transition={{ duration: 0.1 }}>
              <Link to="/services" className="text-primary hover:underline">View all services</Link>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;
  const brandProducts = brandProductImages[service.slug] || [];

  return (
    <div className="page-container">
      <ParallaxBackground />
      <DynamicIslandNav />

      <main className="container mx-auto px-4 pt-24 pb-28 md:pb-12 max-w-xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 8 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Back */}
          <MotionLink
            to="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </MotionLink>

          {/* Header Card */}
          <motion.div 
            className="glass-card p-6 mb-5 relative overflow-hidden"
            whileTap={{ scale: 0.985 }}
            transition={springTap}
          >
            <div 
              className="absolute inset-0 opacity-10"
              style={{ background: `linear-gradient(135deg, ${service.color} 0%, transparent 60%)` }}
            />
            <div className="relative z-10">
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: `${service.color}20` }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                <IconComponent className="w-8 h-8" style={{ color: service.color }} />
              </motion.div>
              <p className="text-sm font-medium text-muted-foreground mb-1">{service.tagline}</p>
              <h1 className="text-2xl font-semibold text-foreground mb-3">{service.name}</h1>
              {service.privacyBadge && (
                <motion.div 
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3"
                  style={{ 
                    background: 'linear-gradient(135deg, hsl(350, 80%, 55%, 0.15) 0%, hsl(280, 80%, 55%, 0.1) 100%)',
                    border: '1px solid hsl(350, 80%, 55%, 0.3)'
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <ShieldCheck className="w-4 h-4" style={{ color: 'hsl(350, 80%, 55%)' }} />
                  <span className="text-xs font-medium" style={{ color: 'hsl(350, 80%, 65%)' }}>100% Discreet & Private</span>
                </motion.div>
              )}
              <p className="text-muted-foreground text-sm leading-relaxed">{service.longDescription}</p>
            </div>
          </motion.div>

          {/* Who It's For */}
          <motion.div 
            className="glass-card p-5 mb-4"
            whileTap={{ scale: 0.985 }}
            transition={springTap}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-[hsl(215,90%,58%,0.15)]"
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                <Users className="w-5 h-5 text-[hsl(215,90%,58%)]" />
              </motion.div>
              <h3 className="text-base font-semibold text-foreground">Who It's For</h3>
            </div>
            <div className="space-y-2.5">
              {service.whoFor.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-foreground/90 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What Can Be Ordered */}
          <motion.div 
            className="glass-card p-5 mb-4"
            whileTap={{ scale: 0.985 }}
            transition={springTap}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-[hsl(145,65%,48%,0.15)]"
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                <Package className="w-5 h-5 text-[hsl(145,65%,48%)]" />
              </motion.div>
              <h3 className="text-base font-semibold text-foreground">What You Can Order</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.whatCanOrder.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2 bg-card/50 rounded-xl px-3 py-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Check className="w-4 h-4 text-[hsl(145,65%,48%)] shrink-0" />
                  <span className="text-foreground/90 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div 
            className="glass-card p-5 mb-4"
            whileTap={{ scale: 0.985 }}
            transition={springTap}
          >
            <h3 className="text-base font-semibold text-foreground mb-4">What's Included</h3>
            <div className="space-y-2.5">
              {service.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <motion.div 
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" 
                    style={{ background: `${service.color}20` }}
                    whileTap={{ scale: 0.85 }}
                    transition={{ duration: 0.1 }}
                  >
                    <Check className="w-3.5 h-3.5" style={{ color: service.color }} />
                  </motion.div>
                  <span className="text-foreground text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Brand Products Section - Apple Store Style */}
          {brandProducts.length > 0 && (
            <motion.div 
              className="mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {/* Section Header */}
              <div className="mb-5">
                <motion.h3 
                  className="text-base font-semibold text-foreground mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  Featured Brands
                </motion.h3>
                <motion.p 
                  className="text-sm text-muted-foreground/80"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Premium products from trusted manufacturers
                </motion.p>
              </div>

              {/* Mobile: Horizontal Scroll */}
              <div className="sm:hidden -mx-4 px-4">
                <div 
                  className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
                  style={{ 
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch'
                  }}
                >
                  {brandProducts.map((brand, index) => (
                    <div key={brand.name} style={{ scrollSnapAlign: 'start' }}>
                      <BrandProductCard brand={brand} index={index} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid Layout */}
              <div className="hidden sm:grid grid-cols-4 gap-4">
                {brandProducts.map((brand, index) => (
                  <BrandProductCard key={brand.name} brand={brand} index={index} />
                ))}
              </div>

              {/* All Brands Notice */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-[13px] text-muted-foreground/70 mt-5 leading-relaxed"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif' }}
              >
                <span className="font-semibold text-foreground/80">All other brands are also available.</span>
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> </span>
                Brand availability may vary by prescription and location.
              </motion.p>
            </motion.div>
          )}

          {/* Delivery Info */}
          <motion.div 
            className="glass-card p-5 mb-5"
            whileTap={{ scale: 0.985 }}
            transition={springTap}
          >
            <div className="flex items-center gap-3 mb-3">
              <motion.div 
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-[hsl(30,100%,58%,0.15)]"
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                <Truck className="w-5 h-5 text-[hsl(30,100%,58%)]" />
              </motion.div>
              <h3 className="text-base font-semibold text-foreground">Delivery Information</h3>
            </div>
            <p className="text-muted-foreground text-sm">{service.deliveryInfo}</p>
          </motion.div>

          {/* WhatsApp CTA */}
          <div className="relative">
            <motion.div
              className="absolute -inset-2 rounded-3xl pointer-events-none"
              animate={{
                opacity: isCtaHovered ? 0.7 : 0,
                scale: isCtaHovered ? 1.02 : 0.95,
              }}
              transition={springHover}
              style={{
                background: `radial-gradient(ellipse 80% 70% at 50% 50%, 
                  hsl(142 60% 45% / 0.35) 0%, 
                  hsl(142 50% 40% / 0.15) 40%,
                  transparent 70%
                )`,
                filter: 'blur(16px)',
              }}
            />
            
            <motion.button
              className="w-full py-4 rounded-2xl flex items-center justify-center gap-3 text-lg font-semibold text-white relative overflow-hidden"
              style={{ background: "hsl(142, 70%, 49%)" }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.975 }}
              transition={springTap}
              onClick={handleWhatsAppOrder}
              onHoverStart={() => setIsCtaHovered(true)}
              onHoverEnd={() => setIsCtaHovered(false)}
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
              Order via WhatsApp
            </motion.button>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-4">
            Chat with Pharmih for pricing and availability
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default ServicePage;