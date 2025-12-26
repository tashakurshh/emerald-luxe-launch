import { Order, UserProfile, Document, Service, Notification } from '@/types';

// Mock Orders
export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    userId: 'user-1',
    items: [
      { id: '1', name: 'Paracetamol 500mg', quantity: 2, price: 45 },
      { id: '2', name: 'Vitamin D3', quantity: 1, price: 320 },
    ],
    status: 'PENDING_PRICE_CONFIRMATION',
    totalPrice: undefined,
    estimatedPrice: 450,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 30 * 60 * 1000),
    deliveryAddress: '123 Main Street, Apartment 4B',
    notes: 'Please call before delivery',
  },
  {
    id: 'ORD-002',
    userId: 'user-1',
    items: [
      { id: '3', name: 'Amoxicillin 250mg', quantity: 1, price: 180 },
    ],
    status: 'OUT_FOR_DELIVERY',
    totalPrice: 180,
    prescriptionUrl: '/prescription-1.jpg',
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    deliveryAddress: '123 Main Street, Apartment 4B',
  },
  {
    id: 'ORD-003',
    userId: 'user-1',
    items: [
      { id: '4', name: 'Multivitamin Complex', quantity: 1, price: 550 },
      { id: '5', name: 'Omega-3 Fish Oil', quantity: 2, price: 400 },
    ],
    status: 'DELIVERED',
    totalPrice: 950,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    deliveryAddress: '456 Oak Avenue, Suite 12',
  },
];

// Mock User Profile
export const mockUserProfile: UserProfile = {
  id: 'user-1',
  name: localStorage.getItem('medicare_user_name') || 'User',
  email: 'user@example.com',
  phone: '+91 98765 43210',
  addresses: [
    {
      id: 'addr-1',
      label: 'Home',
      address: '123 Main Street, Apartment 4B, Mumbai 400001',
      isDefault: true,
    },
    {
      id: 'addr-2',
      label: 'Office',
      address: '456 Oak Avenue, Suite 12, Mumbai 400002',
      isDefault: false,
    },
  ],
  createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
};

// Mock Documents
export const mockDocuments: Document[] = [
  {
    id: 'doc-1',
    name: 'Prescription - Dr. Smith',
    type: 'prescription',
    url: '/prescription-1.jpg',
    uploadedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    orderId: 'ORD-002',
  },
  {
    id: 'doc-2',
    name: 'Blood Test Report',
    type: 'report',
    url: '/report-1.pdf',
    uploadedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
];

// Mock Services
export const mockServices: Service[] = [
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    slug: 'pharmacy',
    description: 'Get your medicines delivered',
    longDescription: 'Access a wide range of prescription and over-the-counter medicines delivered right to your doorstep. Our licensed pharmacists ensure quality and authenticity of every product.',
    icon: 'Pill',
    color: 'hsl(210, 100%, 50%)',
    features: [
      'Genuine medicines from licensed suppliers',
      'Prescription verification by experts',
      'Temperature-controlled delivery',
      'Easy refill reminders',
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    slug: 'healthcare',
    description: 'Consult with doctors online',
    longDescription: 'Connect with certified healthcare professionals from the comfort of your home. Get consultations, second opinions, and health advice through video calls.',
    icon: 'HeartPulse',
    color: 'hsl(340, 82%, 60%)',
    features: [
      'Video consultations with specialists',
      'Digital prescriptions',
      'Health record management',
      'Follow-up reminders',
    ],
  },
  {
    id: 'supplements',
    name: 'Supplements',
    slug: 'supplements',
    description: 'Premium health supplements',
    longDescription: 'Discover our curated selection of vitamins, minerals, and health supplements from trusted global brands. Boost your wellness journey with quality products.',
    icon: 'Leaf',
    color: 'hsl(142, 71%, 45%)',
    features: [
      'Certified and tested products',
      'Personalized recommendations',
      'Subscription plans available',
      'Expert nutritionist support',
    ],
  },
  {
    id: 'diagnostics',
    name: 'Diagnostics',
    slug: 'diagnostics',
    description: 'Lab tests at home',
    longDescription: 'Book diagnostic tests and get samples collected from your home. Access accurate results from NABL-accredited laboratories delivered digitally.',
    icon: 'TestTube2',
    color: 'hsl(280, 100%, 65%)',
    features: [
      'Home sample collection',
      'NABL-accredited labs',
      'Digital reports in 24-48 hours',
      'Doctor consultation on results',
    ],
  },
  {
    id: 'wellness',
    name: 'Wellness',
    slug: 'wellness',
    description: 'Holistic health programs',
    longDescription: 'Transform your lifestyle with our comprehensive wellness programs. From fitness to mental health, we offer personalized plans for complete well-being.',
    icon: 'Sparkles',
    color: 'hsl(45, 100%, 50%)',
    features: [
      'Personalized fitness plans',
      'Mental wellness support',
      'Nutrition counseling',
      'Progress tracking',
    ],
  },
  {
    id: 'instant-delivery',
    name: 'Instant Delivery',
    slug: 'instant-delivery',
    description: 'Get medicines in 30 minutes',
    longDescription: 'Need medicines urgently? Our instant delivery service brings essential medicines to your doorstep within 30 minutes in select areas.',
    icon: 'Zap',
    color: 'hsl(28, 100%, 55%)',
    features: [
      '30-minute delivery promise',
      'Real-time tracking',
      'Available 24/7',
      'Priority support',
    ],
  },
];

// Mock Notifications
export const mockNotifications: Notification[] = [
  {
    id: 'notif-1',
    title: 'Price Updated',
    message: 'The price for your order ORD-001 has been updated. Please confirm to proceed.',
    type: 'info',
    read: false,
    createdAt: new Date(Date.now() - 30 * 60 * 1000),
    orderId: 'ORD-001',
  },
  {
    id: 'notif-2',
    title: 'Out for Delivery',
    message: 'Your order ORD-002 is out for delivery. Expected arrival in 45 minutes.',
    type: 'success',
    read: false,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    orderId: 'ORD-002',
  },
];
