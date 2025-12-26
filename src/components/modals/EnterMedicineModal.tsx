import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenLine, X, Plus, Minus, Loader2, Check, Trash2 } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { OrderItem } from '@/types';

interface EnterMedicineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnterMedicineModal({ isOpen, onClose }: EnterMedicineModalProps) {
  const [medicines, setMedicines] = useState<OrderItem[]>([
    { id: '1', name: '', quantity: 1 }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { createOrder } = useApp();
  const navigate = useNavigate();

  const addMedicine = () => {
    setMedicines(prev => [
      ...prev,
      { id: String(Date.now()), name: '', quantity: 1 }
    ]);
  };

  const removeMedicine = (id: string) => {
    if (medicines.length > 1) {
      setMedicines(prev => prev.filter(m => m.id !== id));
    }
  };

  const updateMedicine = (id: string, field: 'name' | 'quantity', value: string | number) => {
    setMedicines(prev => prev.map(m => 
      m.id === id ? { ...m, [field]: value } : m
    ));
  };

  const handleSubmit = async () => {
    const validMedicines = medicines.filter(m => m.name.trim());
    if (validMedicines.length === 0) return;

    setIsSubmitting(true);

    try {
      await createOrder(validMedicines);
      setIsSuccess(true);
      
      setTimeout(() => {
        onClose();
        navigate('/orders');
      }, 1500);
    } catch (error) {
      console.error('Order creation failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetModal = () => {
    setMedicines([{ id: '1', name: '', quantity: 1 }]);
    setIsSuccess(false);
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  const hasValidMedicine = medicines.some(m => m.name.trim());

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="glass-card-elevated w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: 'hsl(145, 65%, 48%, 0.2)' }}
                >
                  <PenLine className="w-6 h-6" style={{ color: 'hsl(145, 65%, 48%)' }} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Enter Medicines</h2>
                  <p className="text-sm text-muted-foreground">Tell us what you need</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Success State */}
            {isSuccess ? (
              <motion.div
                className="py-12 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'var(--gradient-success)' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                >
                  <Check className="w-10 h-10 text-foreground" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Order Placed!</h3>
                <p className="text-muted-foreground">Redirecting to orders...</p>
              </motion.div>
            ) : (
              <>
                {/* Medicine List */}
                <div className="space-y-3 mb-4">
                  <AnimatePresence mode="popLayout">
                    {medicines.map((medicine, index) => (
                      <motion.div
                        key={medicine.id}
                        layout
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex gap-3 items-start"
                      >
                        <div className="flex-1">
                          <input
                            type="text"
                            value={medicine.name}
                            onChange={(e) => updateMedicine(medicine.id, 'name', e.target.value)}
                            placeholder={`Medicine ${index + 1}`}
                            className="glass-input py-3 text-sm"
                          />
                        </div>
                        
                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => updateMedicine(medicine.id, 'quantity', Math.max(1, medicine.quantity - 1))}
                            className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-foreground font-medium">
                            {medicine.quantity}
                          </span>
                          <button
                            onClick={() => updateMedicine(medicine.id, 'quantity', medicine.quantity + 1)}
                            className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Remove button */}
                        {medicines.length > 1 && (
                          <button
                            onClick={() => removeMedicine(medicine.id)}
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-destructive/60 hover:text-destructive hover:bg-destructive/10 transition-all"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Add More Button */}
                <button
                  onClick={addMedicine}
                  className="w-full py-3 rounded-xl border border-dashed border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add another medicine
                </button>

                {/* Note */}
                <p className="text-xs text-muted-foreground/70 mt-4 text-center">
                  Our pharmacist will verify and confirm pricing
                </p>

                {/* Actions */}
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handleClose}
                    className="apple-button flex-1 py-3"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!hasValidMedicine || isSubmitting}
                    className={`apple-button-primary flex-1 py-3 flex items-center justify-center gap-2 ${
                      !hasValidMedicine ? 'opacity-40 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      'Place Order'
                    )}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
