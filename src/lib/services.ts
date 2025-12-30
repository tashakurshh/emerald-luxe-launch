import { Pill, Baby, HeartPulse, Leaf, Sparkles, TestTube2, Users, Stethoscope } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceData {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  color: string;
  whoFor: string[];
  whatCanOrder: string[];
  deliveryInfo: string;
  features: string[];
  isActive: boolean;
}

// Active Services
export const activeServices: ServiceData[] = [
  {
    id: "prescription-medicines",
    name: "Prescription Medicines",
    slug: "prescription-medicines",
    tagline: "Your prescriptions, delivered safely",
    description: "Upload your prescription and get genuine medicines delivered",
    longDescription: "We understand the importance of timely medication. Share your doctor's prescription via WhatsApp, and our licensed pharmacists will verify and prepare your order with care. All medicines are sourced from authorized distributors to ensure authenticity and quality.",
    icon: Pill,
    color: "hsl(215, 90%, 58%)",
    whoFor: [
      "Patients with chronic conditions needing regular refills",
      "Those recovering from surgery or illness",
      "Elderly patients who need doorstep delivery",
      "Busy professionals who can't visit pharmacies"
    ],
    whatCanOrder: [
      "All prescription medications",
      "Chronic disease medications (diabetes, BP, thyroid)",
      "Antibiotics and antiviral medicines",
      "Specialty and rare medications"
    ],
    deliveryInfo: "Delivery within 24 hours across Srinagar.",
    features: [
      "Licensed pharmacist verification",
      "Genuine medicines from authorized sources",
      "Temperature-controlled delivery",
      "Automatic refill reminders"
    ],
    isActive: true
  },
  {
    id: "baby-care",
    name: "Baby Care",
    slug: "baby-care",
    tagline: "Everything for your little one",
    description: "Diapers, baby food, skincare and more",
    longDescription: "From newborns to toddlers, we stock everything your baby needs. Premium diapers, nutritious baby food, gentle skincare, and essential baby healthcare products — all from trusted brands, delivered to your home.",
    icon: Baby,
    color: "hsl(340, 75%, 62%)",
    whoFor: [
      "New parents stocking up on essentials",
      "Parents needing urgent baby supplies",
      "Caregivers and grandparents",
      "Those looking for premium baby products"
    ],
    whatCanOrder: [
      "Diapers and wipes",
      "Baby food and formula",
      "Baby skincare and bath products",
      "Baby healthcare essentials",
      "Feeding bottles and accessories"
    ],
    deliveryInfo: "Delivery within 24 hours across Srinagar.",
    features: [
      "Only trusted baby brands",
      "Hygiene-sealed packaging",
      "Gentle and safe products",
      "Expert guidance available"
    ],
    isActive: true
  },
  {
    id: "healthcare-products",
    name: "Health Care Products",
    slug: "healthcare-products",
    tagline: "Complete care at home",
    description: "Medical devices, monitors, and home healthcare essentials",
    longDescription: "Equip your home with professional-grade healthcare products. From blood pressure monitors to nebulizers, we provide reliable medical devices along with guidance on how to use them effectively for better health management.",
    icon: HeartPulse,
    color: "hsl(175, 70%, 45%)",
    whoFor: [
      "Patients managing chronic conditions at home",
      "Caregivers looking after elderly family members",
      "Anyone focused on preventive health",
      "Home healthcare setup"
    ],
    whatCanOrder: [
      "BP monitors and glucometers",
      "Nebulizers and oxygen supplies",
      "Thermometers and pulse oximeters",
      "Mobility aids and orthopedic supports",
      "First-aid kits and supplies"
    ],
    deliveryInfo: "Delivery within 24 hours across Srinagar.",
    features: [
      "Certified medical devices",
      "Demo and setup guidance",
      "Warranty support",
      "Replacement parts available"
    ],
    isActive: true
  },
  {
    id: "vitamin-supplements",
    name: "Vitamin Supplements",
    slug: "vitamin-supplements",
    tagline: "Boost your wellness journey",
    description: "Premium vitamins, minerals, and health supplements",
    longDescription: "Discover our carefully curated selection of vitamins, minerals, and nutritional supplements from trusted global brands. Whether you're looking to boost immunity, improve energy, or support specific health goals, we have the right supplements for you.",
    icon: Leaf,
    color: "hsl(145, 65%, 48%)",
    whoFor: [
      "Health-conscious individuals",
      "Fitness enthusiasts and athletes",
      "People with dietary deficiencies",
      "Seniors needing bone and joint support"
    ],
    whatCanOrder: [
      "Multivitamins and mineral supplements",
      "Omega-3 and fish oil",
      "Protein and fitness supplements",
      "Probiotics and gut health products",
      "Herbal and Ayurvedic supplements"
    ],
    deliveryInfo: "Delivery within 24 hours across Srinagar.",
    features: [
      "Authentic products only",
      "Personalized recommendations",
      "Expert nutritionist support",
      "Quality assured"
    ],
    isActive: true
  },
  {
    id: "personal-care",
    name: "Personal Care",
    slug: "personal-care",
    tagline: "Self-care made simple",
    description: "Skincare, personal care, and wellness products",
    longDescription: "Take care of yourself with our range of wellness and personal care products. From dermatologist-recommended skincare to hygiene essentials, we bring you quality products that help you look and feel your best every day.",
    icon: Sparkles,
    color: "hsl(48, 95%, 55%)",
    whoFor: [
      "Anyone prioritizing self-care",
      "People with specific skin concerns",
      "Those seeking quality personal care",
      "Families needing hygiene essentials"
    ],
    whatCanOrder: [
      "Skincare and derma products",
      "Hair care and treatments",
      "Oral care and hygiene products",
      "Personal hygiene essentials",
      "Grooming products"
    ],
    deliveryInfo: "Delivery within 24 hours across Srinagar.",
    features: [
      "Dermatologist-recommended options",
      "Genuine branded products",
      "Sensitive skin alternatives",
      "Quality assured"
    ],
    isActive: true
  }
];

// Coming Soon Services
export const comingSoonServices: ServiceData[] = [
  {
    id: "diagnostics-booking",
    name: "Diagnostic Booking",
    slug: "diagnostics-booking",
    tagline: "Lab tests at your convenience",
    description: "Book lab tests with home sample collection",
    longDescription: "Skip the queues and get tested from home. We partner with accredited laboratories to provide accurate diagnostic tests with convenient home sample collection. Results are delivered digitally.",
    icon: TestTube2,
    color: "hsl(270, 80%, 65%)",
    whoFor: [
      "Anyone needing regular health checkups",
      "Patients requiring pre-surgery tests",
      "Elderly or mobility-impaired individuals"
    ],
    whatCanOrder: [
      "Complete blood count and panels",
      "Diabetes and thyroid tests",
      "Liver and kidney function tests",
      "Full body health checkups"
    ],
    deliveryInfo: "Home collection and digital reports — coming soon.",
    features: [
      "Accredited lab partners",
      "Trained phlebotomists",
      "Digital reports",
      "Doctor consultation"
    ],
    isActive: false
  },
  {
    id: "elder-care-support",
    name: "Elder Care Support",
    slug: "elder-care-support",
    tagline: "Caring for your loved ones",
    description: "Specialized products and services for senior citizens",
    longDescription: "We understand the unique healthcare needs of elderly family members. Our elder care service will provide specialized products, medication management support, and priority delivery to ensure your loved ones receive the care they deserve.",
    icon: Users,
    color: "hsl(200, 85%, 55%)",
    whoFor: [
      "Adult children caring for aging parents",
      "Elderly individuals living independently",
      "Caregivers and nursing staff"
    ],
    whatCanOrder: [
      "Chronic disease medications",
      "Adult diapers and incontinence care",
      "Mobility and daily living aids",
      "Health monitoring devices"
    ],
    deliveryInfo: "Priority delivery for elder care — coming soon.",
    features: [
      "Priority support",
      "Medication reminders",
      "Large-print labels",
      "Caregiver coordination"
    ],
    isActive: false
  },
  {
    id: "other-health-services",
    name: "Other Health Services",
    slug: "other-health-services",
    tagline: "Expanding to serve you better",
    description: "More healthcare services coming soon",
    longDescription: "We're constantly expanding our services to bring you comprehensive healthcare solutions. Stay tuned for wellness consultations, physiotherapy support, and more specialized health services.",
    icon: Stethoscope,
    color: "hsl(30, 100%, 58%)",
    whoFor: [
      "Health-conscious individuals",
      "Those seeking holistic care",
      "Anyone interested in wellness"
    ],
    whatCanOrder: [
      "Wellness consultations",
      "Physiotherapy support",
      "Mental health resources",
      "Specialized health services"
    ],
    deliveryInfo: "Various health services — coming soon.",
    features: [
      "Expert consultations",
      "Personalized care plans",
      "Holistic approach",
      "Quality assured"
    ],
    isActive: false
  }
];

// Combined services for compatibility
export const services: ServiceData[] = [...activeServices, ...comingSoonServices];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return services.find(s => s.slug === slug);
};
