// Order Types
export type OrderStatus = 
  | 'PENDING_PRESCRIPTION'
  | 'PENDING_PRICE_CONFIRMATION'
  | 'CONFIRMED'
  | 'PROCESSING'
  | 'OUT_FOR_DELIVERY'
  | 'DELIVERED'
  | 'CANCELLED';

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price?: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  status: OrderStatus;
  prescriptionUrl?: string;
  totalPrice?: number;
  estimatedPrice?: number;
  createdAt: Date;
  updatedAt: Date;
  deliveryAddress: string;
  notes?: string;
}

// User Types
export interface Address {
  id: string;
  label: string;
  address: string;
  isDefault: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  addresses: Address[];
  createdAt: Date;
}

// Document Types
export interface Document {
  id: string;
  name: string;
  type: 'prescription' | 'report' | 'invoice';
  url: string;
  uploadedAt: Date;
  orderId?: string;
}

// Service Types
export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  features: string[];
}

// Notification Types
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: Date;
  orderId?: string;
}
