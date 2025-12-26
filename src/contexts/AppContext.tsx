import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Order, UserProfile, Document, Notification, OrderItem } from '@/types';
import { mockOrders, mockUserProfile, mockDocuments, mockNotifications } from '@/lib/mockData';
import { toast } from 'sonner';

interface AppContextType {
  // User
  userName: string | null;
  setUserName: (name: string) => void;
  userProfile: UserProfile;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  
  // Orders
  orders: Order[];
  createOrder: (items: OrderItem[], prescriptionUrl?: string) => Promise<Order>;
  confirmOrderPrice: (orderId: string) => Promise<void>;
  cancelOrder: (orderId: string) => Promise<void>;
  
  // Documents
  documents: Document[];
  uploadDocument: (file: File, type: Document['type']) => Promise<Document>;
  deleteDocument: (id: string) => Promise<void>;
  
  // Notifications
  notifications: Notification[];
  markNotificationRead: (id: string) => void;
  
  // WhatsApp hooks (ready for future integration)
  sendWhatsAppNotification: (orderId: string, message: string) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const USER_NAME_KEY = 'medicare_user_name';

export function AppProvider({ children }: { children: ReactNode }) {
  const [userName, setUserNameState] = useState<string | null>(null);
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [userProfile, setUserProfile] = useState<UserProfile>(mockUserProfile);
  const [documents, setDocuments] = useState<Document[]>(mockDocuments);
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  useEffect(() => {
    const storedName = localStorage.getItem(USER_NAME_KEY);
    if (storedName) {
      setUserNameState(storedName);
      setUserProfile(prev => ({ ...prev, name: storedName }));
    }
  }, []);

  const setUserName = (name: string) => {
    localStorage.setItem(USER_NAME_KEY, name);
    setUserNameState(name);
    setUserProfile(prev => ({ ...prev, name }));
  };

  const updateUserProfile = (profile: Partial<UserProfile>) => {
    setUserProfile(prev => ({ ...prev, ...profile }));
    toast.success('Profile updated successfully');
  };

  const createOrder = async (items: OrderItem[], prescriptionUrl?: string): Promise<Order> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const newOrder: Order = {
      id: `ORD-${String(orders.length + 1).padStart(3, '0')}`,
      userId: userProfile.id,
      items,
      status: prescriptionUrl ? 'PENDING_PRICE_CONFIRMATION' : 'PENDING_PRESCRIPTION',
      prescriptionUrl,
      createdAt: new Date(),
      updatedAt: new Date(),
      deliveryAddress: userProfile.addresses.find(a => a.isDefault)?.address || '',
    };
    
    setOrders(prev => [newOrder, ...prev]);
    toast.success('Order created successfully');
    
    // Trigger WhatsApp notification hook (placeholder)
    sendWhatsAppNotification(newOrder.id, 'Your order has been placed. We will update you on pricing soon.');
    
    return newOrder;
  };

  const confirmOrderPrice = async (orderId: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setOrders(prev => prev.map(order => 
      order.id === orderId 
        ? { ...order, status: 'CONFIRMED' as const, totalPrice: order.estimatedPrice, updatedAt: new Date() }
        : order
    ));
    
    toast.success('Order confirmed! We will start processing.');
    sendWhatsAppNotification(orderId, 'Thank you for confirming! Your order is now being processed.');
  };

  const cancelOrder = async (orderId: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setOrders(prev => prev.map(order => 
      order.id === orderId 
        ? { ...order, status: 'CANCELLED' as const, updatedAt: new Date() }
        : order
    ));
    
    toast.info('Order cancelled');
  };

  const uploadDocument = async (file: File, type: Document['type']): Promise<Document> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newDoc: Document = {
      id: `doc-${documents.length + 1}`,
      name: file.name,
      type,
      url: URL.createObjectURL(file),
      uploadedAt: new Date(),
    };
    
    setDocuments(prev => [newDoc, ...prev]);
    toast.success('Document uploaded successfully');
    
    return newDoc;
  };

  const deleteDocument = async (id: string) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    setDocuments(prev => prev.filter(doc => doc.id !== id));
    toast.success('Document deleted');
  };

  const markNotificationRead = (id: string) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  // WhatsApp notification hook - ready for API integration
  const sendWhatsAppNotification = async (orderId: string, message: string) => {
    // This is a placeholder for WhatsApp API integration
    // In production, this would call an edge function with the WhatsApp Business API
    console.log(`[WhatsApp Hook] Order: ${orderId}, Message: ${message}`);
    
    // Example API call structure (for future implementation):
    // await fetch('/api/send-whatsapp', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     phone: userProfile.phone,
    //     orderId,
    //     message,
    //     templateId: 'order_update'
    //   })
    // });
  };

  return (
    <AppContext.Provider value={{
      userName,
      setUserName,
      userProfile,
      updateUserProfile,
      orders,
      createOrder,
      confirmOrderPrice,
      cancelOrder,
      documents,
      uploadDocument,
      deleteDocument,
      notifications,
      markNotificationRead,
      sendWhatsAppNotification,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
