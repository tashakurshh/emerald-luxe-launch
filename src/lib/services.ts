import { Pill, ShoppingBag, HeartPulse, Leaf, TestTube2, Sparkles, Users, Zap } from "lucide-react";
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
}

export const services: ServiceData[] = [
  {
    id: "prescription-medicines",
    name: "Prescription Medicines",
    slug: "prescription-medicines",
    tagline: "Your prescriptions, delivered safely",
    description: "Upload your prescription and get genuine medicines delivered",
    longDescription: "We understand the importance of timely medication. Upload your doctor's prescription via WhatsApp, and our licensed pharmacists will verify and prepare your order with care. All medicines are sourced from authorized distributors to ensure authenticity and quality.",
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
    deliveryInfo: "Same-day delivery for orders before 2 PM. Next-day delivery guaranteed for all other orders.",
    features: [
      "Licensed pharmacist verification",
      "Genuine medicines from authorized sources",
      "Temperature-controlled delivery",
      "Automatic refill reminders"
    ]
  },
  {
    id: "otc-medicines",
    name: "OTC Medicines",
    slug: "otc-medicines",
    tagline: "Everyday health essentials",
    description: "No prescription? No problem. Get common medicines instantly",
    longDescription: "From headache relief to cold medicines, we stock a comprehensive range of over-the-counter medications. Simply tell us what you need on WhatsApp, and we'll have it delivered to your doorstep quickly and safely.",
    icon: ShoppingBag,
    color: "hsl(175, 70%, 45%)",
    whoFor: [
      "Anyone needing quick relief from common ailments",
      "Parents stocking up on children's medicines",
      "Travelers preparing health kits",
      "Office managers maintaining first-aid supplies"
    ],
    whatCanOrder: [
      "Pain relievers and fever reducers",
      "Cold, cough, and flu medicines",
      "Antacids and digestive aids",
      "First-aid and wound care products",
      "Allergy and sinus relief"
    ],
    deliveryInfo: "Express delivery within 2 hours in most areas. Standard delivery available citywide.",
    features: [
      "No prescription required",
      "Wide range of trusted brands",
      "Expert recommendations available",
      "Bulk ordering for families"
    ]
  },
  {
    id: "healthcare-products",
    name: "Healthcare Products",
    slug: "healthcare-products",
    tagline: "Complete care at home",
    description: "Medical devices, monitors, and home healthcare essentials",
    longDescription: "Equip your home with professional-grade healthcare products. From blood pressure monitors to nebulizers, we provide reliable medical devices along with guidance on how to use them effectively for better health management.",
    icon: HeartPulse,
    color: "hsl(340, 75%, 62%)",
    whoFor: [
      "Patients managing chronic conditions at home",
      "Caregivers looking after elderly family members",
      "New parents needing baby health products",
      "Anyone focused on preventive health"
    ],
    whatCanOrder: [
      "BP monitors and glucometers",
      "Nebulizers and oxygen concentrators",
      "Thermometers and pulse oximeters",
      "Mobility aids and orthopedic supports",
      "Baby care and maternal health products"
    ],
    deliveryInfo: "Standard delivery within 24-48 hours. Installation support available for complex devices.",
    features: [
      "Certified medical devices",
      "Demo and setup assistance",
      "Warranty support",
      "Replacement parts available"
    ]
  },
  {
    id: "supplements-vitamins",
    name: "Supplements & Vitamins",
    slug: "supplements-vitamins",
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
    deliveryInfo: "Regular delivery within 24-48 hours. Subscribe for monthly auto-delivery with 10% discount.",
    features: [
      "Authentic products only",
      "Personalized recommendations",
      "Subscription savings available",
      "Expert nutritionist support"
    ]
  },
  {
    id: "diagnostics-booking",
    name: "Diagnostics Booking",
    slug: "diagnostics-booking",
    tagline: "Lab tests at your convenience",
    description: "Book lab tests with home sample collection",
    longDescription: "Skip the queues and get tested from home. We partner with NABL-accredited laboratories to provide accurate diagnostic tests with convenient home sample collection. Results are delivered digitally, and our team can help you understand them.",
    icon: TestTube2,
    color: "hsl(270, 80%, 65%)",
    whoFor: [
      "Anyone needing regular health checkups",
      "Patients requiring pre-surgery tests",
      "Corporate employees for health screenings",
      "Elderly or mobility-impaired individuals"
    ],
    whatCanOrder: [
      "Complete blood count and panels",
      "Diabetes and thyroid tests",
      "Liver and kidney function tests",
      "Vitamin and mineral deficiency tests",
      "Full body health checkups"
    ],
    deliveryInfo: "Home collection available 7 AM - 7 PM. Reports delivered within 24-48 hours digitally.",
    features: [
      "NABL-accredited lab partners",
      "Trained phlebotomists",
      "Digital reports with insights",
      "Doctor consultation on results"
    ]
  },
  {
    id: "wellness-personal-care",
    name: "Wellness & Personal Care",
    slug: "wellness-personal-care",
    tagline: "Self-care made simple",
    description: "Skincare, personal care, and wellness products",
    longDescription: "Take care of yourself with our range of wellness and personal care products. From dermatologist-recommended skincare to hygiene essentials, we bring you quality products that help you look and feel your best every day.",
    icon: Sparkles,
    color: "hsl(48, 95%, 55%)",
    whoFor: [
      "Anyone prioritizing self-care",
      "People with specific skin concerns",
      "Those seeking natural and organic products",
      "Families needing hygiene essentials"
    ],
    whatCanOrder: [
      "Skincare and derma products",
      "Hair care and treatments",
      "Oral care and hygiene products",
      "Personal hygiene essentials",
      "Natural and organic wellness products"
    ],
    deliveryInfo: "Standard delivery within 24-48 hours. Express options available for select products.",
    features: [
      "Dermatologist-recommended options",
      "Genuine branded products",
      "Sensitive skin alternatives",
      "Bundle deals and combos"
    ]
  },
  {
    id: "elder-care-support",
    name: "Elder Care Support",
    slug: "elder-care-support",
    tagline: "Caring for your loved ones",
    description: "Specialized products and services for senior citizens",
    longDescription: "We understand the unique healthcare needs of elderly family members. Our elder care service provides specialized products, medication management support, and priority delivery to ensure your loved ones receive the care they deserve.",
    icon: Users,
    color: "hsl(200, 85%, 55%)",
    whoFor: [
      "Adult children caring for aging parents",
      "Elderly individuals living independently",
      "Caregivers and nursing staff",
      "Retirement homes and care facilities"
    ],
    whatCanOrder: [
      "Chronic disease medications",
      "Adult diapers and incontinence care",
      "Mobility and daily living aids",
      "Nutrition supplements for seniors",
      "Health monitoring devices"
    ],
    deliveryInfo: "Priority delivery for elder care orders. Scheduled recurring delivery available.",
    features: [
      "Priority customer support",
      "Medication reminder service",
      "Large-print labels available",
      "Caregiver coordination support"
    ]
  },
  {
    id: "instant-delivery",
    name: "Fast Medicine Delivery",
    slug: "instant-delivery",
    tagline: "Medicines within 24 hours",
    description: "Quick and reliable medicine delivery",
    longDescription: "When you need medicines, we're here for you. Our fast delivery service operates daily, bringing essential medicines to your doorstep within 24 hours. Reliable service for all your medication needs.",
    icon: Zap,
    color: "hsl(30, 100%, 58%)",
    whoFor: [
      "Anyone needing regular medication refills",
      "Parents with sick children",
      "Patients who ran out of essential medicines",
      "Those preferring doorstep delivery"
    ],
    whatCanOrder: [
      "Essential medicines",
      "Fever and pain relief",
      "Anti-allergy medications",
      "First-aid supplies",
      "Common OTC products"
    ],
    deliveryInfo: "24-hour delivery across the city. Order before 2 PM for same-day delivery in select areas.",
    features: [
      "24-hour delivery promise",
      "24/7 service availability",
      "Real-time order tracking",
      "Priority phone support"
    ]
  }
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return services.find(s => s.slug === slug);
};
